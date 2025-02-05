import { formatEther } from "ethers/lib/utils";
import { Proposal } from "./types";
import { fetchSnapshotProposalTitleAndBody } from "./snapshot";
import { providers } from "ethers";
// TODO: change this to fiat core voting
import { CoreVoting } from "@elementfi/council-typechain";

export async function getProposals(
  provider: providers.JsonRpcProvider,
  coreVotingContract: CoreVoting,
  snapshotIdsByProposalId: Record<string, string>,
  targetsByProposalId: Record<string, string[]>,
  callDatasByProposalId: Record<string, string[]>,
  forumLinksByProposalId: Record<string, string>,
  chainId: number,
  proposalIdsToSkip: string[] = [],
): Promise<Proposal[]> {
  // Source all on-chain proposals from events
  const onChainProposalCreatedEvents = await coreVotingContract.queryFilter(
    coreVotingContract.filters.ProposalCreated(),
  );
  // console.log("onChainProposalCreatedEvents: ", onChainProposalCreatedEvents);

  /* NOTE: 🚨 Forever Hack!
   * Because of how the smart contracts work, proposals have their memory slots
   * cleared once they've been executed. This means we can't guarantee a
   * proposal's state will exist forever. To handle this, once you've scraped a
   * proposal, you can add it to the list of proposals to skip for future runs.
   */
  const newOnChainProposalsEvents = onChainProposalCreatedEvents.filter(
    (event: any) => {
      const proposalId = event.args.proposalId.toString();
      const isNewProposal = !proposalIdsToSkip.find((p) => p === proposalId);
      return isNewProposal;
    },
  );

  // Contains proposals with AND without a complimentary snapshot
  const newProposalPromises = newOnChainProposalsEvents.map(
    async ({ args: { proposalId: proposalIdBN } }: any): Promise<Proposal> => {
      const { proposalHash, lastCall, quorum, unlock, created, expiration } =
        await coreVotingContract.functions.proposals(proposalIdBN);

      const createdBlock = await provider.getBlock(created.toNumber());
      const proposalId = proposalIdBN.toString();
      console.log(
        "proposalId",
        proposalId,
        snapshotIdsByProposalId[proposalId],
      );

      const snapshotId =
        snapshotIdsByProposalId[proposalId] ||
        // Set snapshotId to empty string for unverified proposals
        "";

      let description: string;
      let title: string;
      let targets: string[];
      let calldatas: string[];

      if (snapshotId) {
        // Proposals with a snapshot
        const { body: snapshotDescription, title: snapshotTitle } =
          await fetchSnapshotProposalTitleAndBody(snapshotId, chainId);

        description = snapshotDescription;
        title = snapshotTitle;
        targets = targetsByProposalId[proposalId];
        calldatas = callDatasByProposalId[proposalId];
      } else {
        // Proposals with no snapshot
        description =
          "WARNING: This proposal has not been verified on Snapshot!  It may contain malicious code, please check the forums or Discord for guidance on how to vote on this proposal.";
        title = "Unknown Proposal";
        targets = [""];
        calldatas = [""];
      }

      const forumLink = forumLinksByProposalId[proposalId] || "";

      return {
        proposalId,
        description,
        title,
        proposalHash: proposalHash,
        unlock: unlock.toNumber(),
        lastCall: lastCall.toNumber(),
        created: created.toNumber(),
        createdTimestamp: createdBlock.timestamp,
        expiration: expiration.toNumber(),
        quorum: formatEther(quorum),
        targets,
        calldatas,
        snapshotId,
        forumLink,
      };
    },
  );

  return Promise.all(newProposalPromises);
}
