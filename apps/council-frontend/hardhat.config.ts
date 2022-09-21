import { HardhatUserConfig } from "hardhat/config";
import "dotenv/config";

import "@nomiclabs/hardhat-ethers";

// This adds support for typescript paths mappings
import "tsconfig-paths/register";

const ALCHEMY_GOERLI_API_KEY = process.env.ALCHEMY_GOERLI_API_KEY as string;
const ALCHEMY_MAINNET_API_KEY = process.env.ALCHEMY_MAINNET_API_KEY as string;

const config: HardhatUserConfig = {
  paths: {
    sources: "src",
  },
  solidity: {
    compilers: [
      {
        version: "0.5.12",
      },
      {
        version: "0.7.1",
      },
      {
        version: "0.8.0",
      },
    ],
  },

  networks: {
    hardhat: {
      gas: 1000000000000000000,
      blockGasLimit: 0x1fffffffffffff,
      allowUnlimitedContractSize: true,
    },
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_GOERLI_API_KEY}`,
    },
    mainnet: {
      url: `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_MAINNET_API_KEY}`,
    },
  },
};

export default config;
