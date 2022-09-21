"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
require("@nomiclabs/hardhat-ethers");
// This adds support for typescript paths mappings
require("tsconfig-paths/register");
var ALCHEMY_GOERLI_API_KEY = process.env.ALCHEMY_GOERLI_API_KEY;
var ALCHEMY_MAINNET_API_KEY = process.env.ALCHEMY_MAINNET_API_KEY;
var config = {
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
            url: "https://eth-goerli.alchemyapi.io/v2/".concat(ALCHEMY_GOERLI_API_KEY),
        },
        mainnet: {
            url: "https://eth-mainnet.alchemyapi.io/v2/".concat(ALCHEMY_MAINNET_API_KEY),
        },
    },
};
exports.default = config;
