import {
  AddressesJsonFile,
  mainnetAddressList,
  goerliAddressList,
} from "@elementfi/council-tokenlist";

// Element contracts interface
// export interface AddressesJsonFile {
//   chainId: number;
//   addresses: {
//     elementToken: string;
//     coreVoting: string;
//     gscCoreVoting: string;
//     gscVault: string;
//     timeLock: string;
//     lockingVault: string;
//     vestingVault: string;
//     optimisticRewardsVault: string;
//     optimisticGrants: string;
//     spender: string;
//     airdrop: string;
//     treasury: string;
//   };
// }

export interface FiatAddressesJsonFile {
  chainId: number;
  // pulled from <chainid>.json generated from FIAT deploy script
  addresses: {
    timeLock: string;
    comitiumVault: string;
    blocklist: string;
    votingEscrow: string;
    votingEscrowVault: string;
    vestingVault: string;
    // leaving out simpleProxy, should confirm that's desirable
    coreVoting: string;
    GSCVault: string;
    coreVotingGSC: string;
    fdtEthLpToken: string;
    fdt: string; // needed for calculating comitium vault voting power

    // spender: string; // don't exist in the genned file, needed?
    // airdrop: string;
    // treasury: string;
  };
}

// For local hardhat only, this is inlined as an object to preserve type safety
const testnetAddressList: AddressesJsonFile = {
  chainId: 31337,
  addresses: {
    airdrop: "0x0DCd1Bf9A1b36cE34237eEaFef220932846BCD82",
    coreVoting: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
    discordTier1Airdrop: "0x0000000000000000000000000000000000000000",
    discordTier2Airdrop: "0x0000000000000000000000000000000000000000",
    discordTier3Airdrop: "0x0000000000000000000000000000000000000000",
    elementToken: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
    githubTier1Airdrop: "0x0000000000000000000000000000000000000000",
    githubTier2Airdrop: "0x0000000000000000000000000000000000000000",
    githubTier3Airdrop: "0x0000000000000000000000000000000000000000",
    gscCoreVoting: "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9",
    gscVault: "0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6",
    lockingVault: "0x610178dA211FEF7D417bC0e6FeD39F05609AD788",
    optimisticGrants: "0x0000000000000000000000000000000000000000",
    optimisticRewardsVault: "0x0000000000000000000000000000000000000000",
    spender: "0x0B306BF915C4d645ff596e518fAf3F9669b97016",
    timeLock: "0xa513E6E4b8f2a923D98304ec87F64353C4D5C853",
    treasury: "0x9A676e781A523b5d0C0e43731313A708CB607508",
    vestingVault: "0xB7f8BC63BbcaD18155201308C8f3540b07f84F5e",
  },
};

// For testing only, this is inlined as an object to preserve type safety
const waffleAddressList: AddressesJsonFile = {
  addresses: {
    airdrop: "0x0BDb999cFA9c47d6d62323a1905F8Eb7B3c9B119",
    coreVoting: "0xFDFEF9D10d929cB3905C71400ce6be1990EA0F34",
    discordTier1Airdrop: "0x0000000000000000000000000000000000000000",
    discordTier2Airdrop: "0x0000000000000000000000000000000000000000",
    discordTier3Airdrop: "0x0000000000000000000000000000000000000000",
    elementToken: "0xA193E42526F1FEA8C99AF609dcEabf30C1c29fAA",
    githubTier1Airdrop: "0x0000000000000000000000000000000000000000",
    githubTier2Airdrop: "0x0000000000000000000000000000000000000000",
    githubTier3Airdrop: "0x0000000000000000000000000000000000000000",
    gscCoreVoting: "0xFf807885934003A35b1284d7445fc83Fd23417e5",
    gscVault: "0x84e924C5E04438D2c1Df1A981f7E7104952e6de1",
    lockingVault: "0x4E0597863fA1AA7B6b95a887AD9fEee038815642",
    optimisticGrants: "0x0000000000000000000000000000000000000000",
    optimisticRewardsVault: "0x0000000000000000000000000000000000000000",
    spender: "0x0000000000000000000000000000000000000000",
    timeLock: "0xdCCc660F92826649754E357b11bd41C31C0609B9",
    treasury: "0x6f2fa37EBfaf089C4Fd7e6124C1028306943D11d",
    vestingVault: "0x2061701b22095418514C0D4a28366C54B1464C17",
  },
  chainId: 31337,
};

// TODO: fiat-contracts.ts looks at votingEscrowFactor, but i'm using votingEscrow address
// should confirm that's what element does
const fiatGoerliAddressList: FiatAddressesJsonFile = {
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

    // spender: string; // don't exist in the genned file, needed?
    // airdrop: string;
    // treasury: string;
  },
};

// TODO: add mainnet addresses
// const fiatMainnetAddressList: FiatAddressesJsonFile = {
//   chainId: 5,
//   // pulled from <chainid>.json generated from FIAT deploy script
//   addresses: {
//     timeLock: "",
//     comitiumVault:  "", // TODO: looks like "ComitiumFacet" will be the first constructor arg for mainnet here, but ComitiumVault should be this address: https://etherscan.io/address/0x6cc9fc46d8436ac5302d1145258344a3cfbae559#code
//     blocklist:  "",
//     votingEscrow:  "",
//     votingEscrowVault:  "",
//     vestingVault:  "",
//     // leaving out simpleProxy, should confirm that's desirable
//     coreVoting:  "",
//     GSCVault:  "",
//     coreVotingGSC:  "",
//     fdtEthLpToken: "", // TODO: MockERC20 for goerli, in PROD FIAT token (might need Bal LP token too)
//     fdt: '0xEd1480d12bE41d92F36f5f7bDd88212E381A3677', // needed for calculating comitium vault voting power

//     // spender: string; // don't exist in the genned file, needed?
//     // airdrop: string;
//     // treasury: string;
//   },
// };

// Default to the testnet in this repo so `npm start` Just Works without having
// to specify it on the command line. This requires a local hardhat node to be running.
const chainName = process.env.NEXT_PUBLIC_CHAIN_NAME || "testnet";

export const addressesJson = getAddressesList();

function getAddressesList(): AddressesJsonFile | FiatAddressesJsonFile {
  if (process.env.NODE_ENV === "test") {
    return waffleAddressList;
  }

  // local hardhat
  if (chainName === "testnet") {
    console.log("testnet");
    return testnetAddressList;
  }

  if (chainName === "goerli") {
    console.log("goerli");
    // ...goerliAddressList,
    return fiatGoerliAddressList as FiatAddressesJsonFile;
  }

  if (chainName === "mainnet") {
    return mainnetAddressList;
  }

  if (chainName === "mainnet-fork") {
    return { ...mainnetAddressList, chainId: 31337 };
  }

  // Should not happen because of chainName has a default value set, regardless
  // we can just default to local hardhat
  return testnetAddressList;
}
