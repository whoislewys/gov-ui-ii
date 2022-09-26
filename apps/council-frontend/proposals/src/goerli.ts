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
    timeLock: "0xfb7Aa841F7E77178412747569dC62996b3156313",
    comitiumVault: "0x8ad41eb51Ff3ce963982c0c2824278c7186f0A82",
    blocklist: "0x98D00e81fB511c74E4aFcC55dB476C26e9E03EfF",
    votingEscrow: "0x31E43538056913DdF4e702fB13D9fdA0796acfdc",
    votingEscrowVault: "0xF927f24da1B1c3A0845E94f21e103a7A4685E755",
    vestingVault: "0x462E7C4B9f7d6560C691790392b10ca9Fd5F0797",
    // leaving out simpleProxy, should confirm that's desirable
    coreVoting: "0xa0BE5232eD649c632dA661C755C173634f3Dc845",
    GSCVault: "0xD30c7351DBF60579E8a4481Ee4574a1363ad5039",
    coreVotingGSC: "0xf9b60540CC09E0DefaC13224A1c57d079Aca0D18",
    fdtEthLpToken: "0x5037d5Fe166a344dcE83279F328740403D755979", // TODO: MockERC20 for goerli, in PROD FIAT token (might need Bal LP token too)
    fdt: "0xc54E9C9dFFD1119684ceaB9d25a0c3F28e659D2d",

    // spender: string; // don't exist in the genned file, needed?
    // airdrop: string;
    // treasury: string;
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
  "4": "0xcd173a4141947a7fdd4bc93b70a5f5398052d9c753e87b70926a7a33866b5eff",
};

/**
 * For these values, make sure to save the output of the proposal creation script
 * otherwise, these are a bitch to figure out (need to query the proposals mapping on-chain)
 * TODO: these should be easily fetchable from the CoreVoting contract shouldn't they? try that
 */
// in the proposal creation scripts, this is the timelock address
const targetsByProposalId: Record<string, string[]> = {
  "0": ["0xfb7Aa841F7E77178412747569dC62996b3156313"],
  // "1": ["0xc63C514B6c51ea9447250dE62BD5F95856Fb269c"],
  // "2": ["0xc63C514B6c51ea9447250dE62BD5F95856Fb269c"],
  "3": ["0xfb7Aa841F7E77178412747569dC62996b3156313"],
  "4": ["0xfb7Aa841F7E77178412747569dC62996b3156313"],
};

const callDatasByProposalId: Record<string, string[]> = {
  "0": [
    "0x88b49b8364ec53acdd6f74efcba0de586952c40e23aa87d547d57fabb1ee21203b7b09ea",
  ],
  "3": [
    "0x88b49b834dce03aeba1d63cf7b6fa0431120dcff456d8264ca09e989e856abbf98eaf755",
  ],
  "4": [
    "0x88b49b834dce03aeba1d63cf7b6fa0431120dcff456d8264ca09e989e856abbf98eaf755",
  ],
};

const forumLinksByProposalId: Record<string, string> = {
  "1": "https://google.com",
  "3": "https://google.com",
  "4": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
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
