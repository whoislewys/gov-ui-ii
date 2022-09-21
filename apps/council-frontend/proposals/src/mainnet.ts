/* eslint-disable @typescript-eslint/no-var-requires */
// import { mainnetAddressList } from "@elementfi/council-tokenlist";
import { CoreVoting__factory } from "@elementfi/council-typechain";
import fs from "fs";

import { ProposalsJson } from "./types";

import { providers } from "ethers";
import { getProposals } from "./getProposals";
import {
  SNAPSHOT_SPACE_ID_MAINNET,
  SNAPSHOT_GSC_SPACE_ID_MAINNET,
} from "./snapshot";
import {MAINNET_CHAIN_ID} from "./chainIds";


const ALCHEMY_MAINNET_RPC_HOST = `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_MAINNET_API_KEY}`;

const provider = new providers.JsonRpcProvider(ALCHEMY_MAINNET_RPC_HOST);

const fiatMainnetAddressList = {
  chainId: 5,
  addresses: {
    timeLock: "0xc63C514B6c51ea9447250dE62BD5F95856Fb269c", // TODO: is this used?
    comitiumVault: "0x715fe964468dEF62dFf79c8578B46Cc24873F8C0",
    blocklist: "0x4D8aABfa3F34e817B5a733f61d2F0F8C5b74AAF4",
    votingEscrow: "0xFB3376fe642aE62686403cE88A67F947EdDC237e",
    votingEscrowVault: "0x02FF2037Ac67a9A4Ef7ABD962bbB57E932bA711B",
    vestingVault: "0xb5Db4140b69F7BFce71F055549a9269ebb9d55e7",
    // leaving out simpleProxy, should confirm that's desirable
    coreVoting: "0x4a96E0DC213F29EfC50E90849a94FAa5f93831b6",
    GSCVault: "0x2608f2039e58EF06C379F04C86c3DF420074fFDF",
    coreVotingGSC: "0xa9A12Ef5b04908A03a032F1A61C2eABf20BA93fB",
    fdtEthLpToken: "0x0acb43977539038584f09f7BD17BF3d73F109141", // TODO: MockERC20 for goerli, in PROD FIAT token (might need Bal LP token too)
    fdt: "0x83B773c13188dfD4841d2807ddde3FDE274641eE",
  },
};

const currentProposalsJson: ProposalsJson = require(`./proposals/mainnet.proposals.json`);
const currentGscProposalsJson: ProposalsJson = require(`./proposals/mainnet-gsc.proposals.json`);

const coreVotingContract = CoreVoting__factory.connect(
  fiatMainnetAddressList.addresses.coreVoting,
  provider,
);

const gscCoreVotingContract = CoreVoting__factory.connect(
  fiatMainnetAddressList.addresses.coreVotingGSC,
  provider,
);

/**
 * The mapping of on-chain proposal ids to their corresponding snapshot proposal
 * id (off-chain).
 */
const snapshotIdsByProposalId: Record<string, string> = {
  "1": "0x46785a4b78a9d03aeb5cdeb1c3ca4ae02cf9e5aca508e59bef405d16a7c8b4a6",
};

const targetsByProposalId: Record<string, string[]> = {
  "1": ["0x81758f3361A769016eae4844072FA6d7f828a651"],
};

const callDatasByProposalId: Record<string, string[]> = {
  "1": [
    "0x88b49b8332b3be434fca12a37af693421116ab7c7682da00e7283c2530502de382b0464b",
  ],
};

const forumLinksByProposalId: Record<string, string> = {
  "1": "https://forum.element.fi/discussion/4631-egp2-increase-gsc-quorum-threshold",
};

const gscSnapshotIdsByProposalId: Record<string, string> = {};

const gscTargetsByProposalId: Record<string, string[]> = {};

const gscCallDatasByProposalId: Record<string, string[]> = {};
const gscForumLinksByProposalId: Record<string, string> = {};

// Proposals might be deleted from snapshot, so we need to store them
// indefinitely once they are scraped. We can skip them once they exist in the
// final json, hence these lists.
const proposalsToSkip = currentProposalsJson.proposals.map(
  (proposal) => proposal.proposalId,
);
const gscProposalsToSkip = currentGscProposalsJson.proposals.map(
  (proposal) => proposal.proposalId,
);

(async function () {
  try {
    const newProposals = await getProposals(provider, coreVotingContract, snapshotIdsByProposalId, targetsByProposalId, callDatasByProposalId, forumLinksByProposalId, MAINNET_CHAIN_ID, proposalsToSkip);

    const newGscProposals = await getProposals(provider, gscCoreVotingContract, gscSnapshotIdsByProposalId, gscTargetsByProposalId, gscCallDatasByProposalId, gscForumLinksByProposalId, MAINNET_CHAIN_ID, gscProposalsToSkip);

    const proposalsJson: ProposalsJson = {
      version: "0.0.0",
      snapshotSpace: SNAPSHOT_SPACE_ID_MAINNET,
      proposals: [...currentProposalsJson.proposals, ...newProposals],
    };
    const proposalsJsonString = JSON.stringify(proposalsJson, null, 2);

    fs.writeFileSync(
      "proposals/src/proposals/mainnet.proposals.json",
      proposalsJsonString,
    );

    const gscProposalsJson: ProposalsJson = {
      version: "0.0.0",
      snapshotSpace: SNAPSHOT_GSC_SPACE_ID_MAINNET,
      proposals: [...currentGscProposalsJson.proposals, ...newGscProposals],
    };
    const gscProposalsJsonString = JSON.stringify(gscProposalsJson, null, 2);

    fs.writeFileSync(
      "proposals/src/proposals/mainnet-gsc.proposals.json",
      gscProposalsJsonString,
    );
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
