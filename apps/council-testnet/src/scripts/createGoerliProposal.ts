import { Provider } from "@ethersproject/providers";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { CoreVoting__factory } from "@elementfi/council-typechain";
import { BytesLike, ethers } from "ethers";

import timelockInterface from "src/interfaces/Timelock.json";

const DAY_IN_BLOCKS = 6496;
const YEAR_IN_DAYS = 365;
const ONE_WEEK_IN_DAYS = 7;

// TODO: get from tokenlist
// const goerliAddressList = {
//   addresses: {
//     airdrop: "0xb7920477F7A39c3DffA925076857eB1585503e1B",
//     coreVoting: "0x0CB8aa45068EE31e97B717b0B35e26A43884c84c",
//     elementToken: "0x2b1a91De5B9C3Ad6439eeAeD0E481F8cf6E22601",
//     gscCoreVoting: "0x600c4926c9F88beCE3533ceaAA36804d6E23F1c1",
//     gscVault: "0x0A575bFA79454112c37B9Af2a6362c9c68f7d2e3",
//     lockingVault: "0xb5E8AF575Ee302A24c6C7746a99D895BeF67cb5D",
//     optimisticGrants: "0x092B49777CB45dc4939FBc4029ce7a116D63D29D",
//     optimisticRewardsVault: "0x0000000000000000000000000000000000000000",
//     spender: "0x722289C399e6f4AbCE80FaFbABC9a9876432834C",
//     timeLock: "0x36687bdD319a78AB4b4347f3A7459Da235AFc4f4",
//     treasury: "0xd46dDb33A33FD3D352d08cc7022Ce1f5c6ccFF1a",
//     vestingVault: "0xe69D2F8DeD2924e0845118E7E467Fc97F7994ef6",
//   },
//   chainId: 5,
// };

const fiatGoerliAddressList = {
  chainId: 5,
  addresses: {
    timeLock: "0xc63C514B6c51ea9447250dE62BD5F95856Fb269c",
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

    // spender: string; // don't exist in the genned file, needed?
    // airdrop: string;
    // treasury: string;
  },
};

interface ProposalOptions {
  // 0,1,2 YES,NO,ABSTAIN
  ballot?: number;
}

export async function createGoerliProposal(
  owner: SignerWithAddress,
  provider: Provider,
  options: ProposalOptions,
): Promise<void> {
  // 2 is abstain
  const { ballot = 2 } = options;

  const {
    addresses: { timeLock, coreVoting, vestingVault, votingEscrowVault },
  } = fiatGoerliAddressList;

  /********************************************************************************
   * Set up a new proposal.  This proposal will update the wait time for the Timelock contract.  The
   * wait time is the number of blocks that must pass before a proposal can be  executed*
   ********************************************************************************/
  const coreVotingContract = CoreVoting__factory.connect(coreVoting, owner);

  // TODO: make this a function argument
  const newWaitTime = 1;
  const tInterface = new ethers.utils.Interface(timelockInterface.abi);

  // setup calldata for timelock's setTime function.
  const calldatasTimelock = [
    tInterface.encodeFunctionData("setWaitTime", [newWaitTime]),
  ];

  // get the callhash, this is how Timelock determines if the call is valid before it executes it
  const targetsTimelock = [timeLock];
  const callHash = await createCallHash(calldatasTimelock, targetsTimelock);

  // calldata for the coreVoting contract
  const calldataCoreVoting = tInterface.encodeFunctionData("registerCall", [
    callHash,
  ]);

  // you must also vote when creating a proposal, this specifies which vaults to
  // vote from
  // const votingVaults = [vestingVault]; // OG element. our conchs as of now (sep 7) only init CoreVoting w/ ve and comitium vault for some reason
  const votingVaults = [votingEscrowVault];

  // note that lockingVault/vestingVault doesn't require extra data when querying vote power, so we stub with "0x00"
  const extraVaultData = ["0x00"];
  const targets = [timeLock];
  const callDatas = [calldataCoreVoting];
  const currentBlock = await provider.getBlockNumber();
  console.log("get block num: ", currentBlock);

  // set a large last call so we can execute when we want
  // note that the extra vote time is one year right now, so setting last call to one year and one week
  const lastCall =
    currentBlock +
    DAY_IN_BLOCKS * YEAR_IN_DAYS +
    DAY_IN_BLOCKS * ONE_WEEK_IN_DAYS;

  /********************************************************************************
   * Create the proposal
   ********************************************************************************/
  // const overrides: ethers.Overrides = {
  //   gasLimit: 5000000,
  //   gasPrice: 500000000000,
  // };

  try {
    const tx = await coreVotingContract.proposal(
      votingVaults,
      extraVaultData,
      targets,
      callDatas,
      lastCall,
      ballot,
      // overrides,
    );
    await tx.wait(1);

    /********************************************************************************
     * Print data about the proposal
     ********************************************************************************/
    const proposalCreatedEvents = await coreVotingContract.queryFilter(
      coreVotingContract.filters.ProposalCreated(),
    );

    const proposalArgs = [
      ["proposalId", proposalCreatedEvents.length - 1],
      ["votingVaults", votingVaults],
      ["extraVaultData", extraVaultData],
      ["callDatasTimelock", calldatasTimelock],
      ["targetsTimelock", targetsTimelock],
      ["targets", targets],
      ["callDatas", callDatas],
      ["lastCall", lastCall],
      ["ballot", ballot],
    ];

    console.log("Proposal created with:");
    proposalArgs.forEach(([name, value]) => console.log(name, value));
  } catch (e) {
    console.error("error: ", e);
  }
}

export async function createCallHash(
  calldata: BytesLike[],
  targets: string[],
): Promise<string> {
  const toBeHashed = ethers.utils.defaultAbiCoder.encode(
    ["address[]", "bytes[]"],
    [targets, calldata],
  );
  return ethers.utils.keccak256(toBeHashed);
}
