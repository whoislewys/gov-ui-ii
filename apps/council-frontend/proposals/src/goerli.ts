/* eslint-disable @typescript-eslint/no-var-requires */
// import { goerliAddressList } from "@elementfi/council-tokenlist";
import { CoreVoting__factory } from "@elementfi/council-typechain";
import fs from "fs";

import { ProposalsJson } from "./types";

import { providers } from "ethers";
import { getProposals } from "./getProposals";
import {
  SNAPSHOT_GSC_SPACE_ID_GOERLI,
  SNAPSHOT_SPACE_ID_GOERLI,
} from "./snapshot";
import { GOERLI_CHAIN_ID } from "./chainIds";

const ALCHEMY_GOERLI_RPC_HOST = `https://eth-goerli.alchemyapi.io/v2/${process.env.ALCHEMY_GOERLI_API_KEY}`;

const provider = new providers.JsonRpcProvider(ALCHEMY_GOERLI_RPC_HOST);

const fiatGoerliAddressList = {
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

const currentProposalsJson: ProposalsJson = require(`./proposals/goerli.proposals.json`);
const currentGscProposalsJson: ProposalsJson = require(`./proposals/goerli-gsc.proposals.json`);

const coreVotingContract = CoreVoting__factory.connect(
  fiatGoerliAddressList.addresses.coreVoting,
  provider,
);

const gscCoreVotingContract = CoreVoting__factory.connect(
  fiatGoerliAddressList.addresses.coreVotingGSC,
  provider,
);

/**
 * The mapping of on-chain proposal ids to their corresponding snapshot proposal
 * id (off-chain).
 */
const snapshotIdsByProposalId: Record<string, string> = {
  "0": "0x55d7eb14721f27d105f1581b3e35bc482d1a95616d9c437e0db899d1ad04e436",
  "3": "0xaed4f838fc47ef7bd9929e5056a005ce48b0c912b5e7b544aeb459d03185c053",
  // "6": "0x91a739c399ba1b95d9b38013bf5c42b4cb83b56272b322d86587193859371f12",
  // "9": "0x71df6710e26894685f985ae303b4bd64eeaa080f3e91703dac6ae539f66b5dd0",
};

/**
 * For these values, make sure to save the output of the proposal creation script
 * otherwise, these are a bitch to figure out (need to query the proposals mapping on-chain)
 * TODO: these should be easily fetchable from the CoreVoting contract shouldn't they? try that
 */
// in the proposal creation scripts, this is the timelock address
const targetsByProposalId: Record<string, string[]> = {
  "0": ["0xc63C514B6c51ea9447250dE62BD5F95856Fb269c"],
  // "1": ["0xc63C514B6c51ea9447250dE62BD5F95856Fb269c"],
  // "2": ["0xc63C514B6c51ea9447250dE62BD5F95856Fb269c"],
  "3": ["0xc63C514B6c51ea9447250dE62BD5F95856Fb269c"],
};

const callDatasByProposalId: Record<string, string[]> = {
  "0": [
    "0x88b49b8364ec53acdd6f74efcba0de586952c40e23aa87d547d57fabb1ee21203b7b09ea",
  ],
  "3": [
    "0x88b49b834dce03aeba1d63cf7b6fa0431120dcff456d8264ca09e989e856abbf98eaf755",
  ],
};

const forumLinksByProposalId: Record<string, string> = {
  "1": "https://google.com",
  "3": "https://google.com",
};

const gscSnapshotIdsByProposalId: Record<string, string> = {
  "0": "0xa924bf8887e96f64eabf30a5026eb432bd03b6f055df017061a1e480cf477c9a",
};

const gscTargetsByProposalId: Record<string, string[]> = {
  "0": ["0x0A575bFA79454112c37B9Af2a6362c9c68f7d2e3"],
};

const gscCallDatasByProposalId: Record<string, string[]> = {
  "0": [
    "0x3eba045b000000000000000000000000000000000000000000000005f68e8131ecf80000",
  ],
};

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
    // CORE PROPOSALS
    const newProposals = await getProposals(
      provider,
      coreVotingContract,
      snapshotIdsByProposalId,
      targetsByProposalId,
      callDatasByProposalId,
      forumLinksByProposalId,
      GOERLI_CHAIN_ID,
      proposalsToSkip,
    );

    const proposalsJson: ProposalsJson = {
      version: "0.0.0",
      snapshotSpace: SNAPSHOT_SPACE_ID_GOERLI,
      proposals: [...currentProposalsJson.proposals, ...newProposals],
    };

    const proposalsJsonString = JSON.stringify(proposalsJson, null, 2);

    fs.writeFileSync(
      "./proposals/src/proposals/goerli.proposals.json",
      proposalsJsonString,
    );

    // GSC PROPOSALS
    const newGscProposals = await getProposals(
      provider,
      gscCoreVotingContract,
      gscSnapshotIdsByProposalId,
      gscTargetsByProposalId,
      gscCallDatasByProposalId,
      gscForumLinksByProposalId,
      GOERLI_CHAIN_ID,
      gscProposalsToSkip,
    );

    const gscProposalsJson: ProposalsJson = {
      version: "0.0.0",
      snapshotSpace: SNAPSHOT_GSC_SPACE_ID_GOERLI,
      proposals: [...currentGscProposalsJson.proposals, ...newGscProposals],
    };

    const gscProposalsJsonString = JSON.stringify(gscProposalsJson, null, 2);

    fs.writeFileSync(
      "./proposals/src/proposals/goerli-gsc.proposals.json",
      gscProposalsJsonString,
    );
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
