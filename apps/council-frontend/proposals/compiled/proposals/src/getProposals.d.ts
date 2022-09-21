import { Proposal } from "./types";
import { providers } from "ethers";
import { CoreVoting } from "@elementfi/council-typechain";
export declare function getProposals(provider: providers.JsonRpcProvider, coreVotingContract: CoreVoting, snapshotIdsByProposalId: Record<string, string>, targetsByProposalId: Record<string, string[]>, callDatasByProposalId: Record<string, string[]>, forumLinksByProposalId: Record<string, string>, chainId: number, proposalIdsToSkip?: string[]): Promise<Proposal[]>;
