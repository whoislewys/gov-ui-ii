"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-var-requires */
// import { goerliAddressList } from "@elementfi/council-tokenlist";
var council_typechain_1 = require("@elementfi/council-typechain");
var fs_1 = __importDefault(require("fs"));
var ethers_1 = require("ethers");
var getProposals_1 = require("./getProposals");
var snapshot_1 = require("./snapshot");
var chainIds_1 = require("./chainIds");
var ALCHEMY_GOERLI_RPC_HOST = "https://eth-goerli.alchemyapi.io/v2/".concat(process.env.ALCHEMY_GOERLI_API_KEY);
var provider = new ethers_1.providers.JsonRpcProvider(ALCHEMY_GOERLI_RPC_HOST);
var fiatGoerliAddressList = {
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
        fdtEthLpToken: "0x0acb43977539038584f09f7BD17BF3d73F109141",
        fdt: "0x83B773c13188dfD4841d2807ddde3FDE274641eE",
    },
};
var currentProposalsJson = require("./proposals/goerli.proposals.json");
var currentGscProposalsJson = require("./proposals/goerli-gsc.proposals.json");
var coreVotingContract = council_typechain_1.CoreVoting__factory.connect(fiatGoerliAddressList.addresses.coreVoting, provider);
var gscCoreVotingContract = council_typechain_1.CoreVoting__factory.connect(fiatGoerliAddressList.addresses.coreVotingGSC, provider);
/**
 * The mapping of on-chain proposal ids to their corresponding snapshot proposal
 * id (off-chain).
 */
var snapshotIdsByProposalId = {
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
var targetsByProposalId = {
    "0": ["0xc63C514B6c51ea9447250dE62BD5F95856Fb269c"],
    // "1": ["0xc63C514B6c51ea9447250dE62BD5F95856Fb269c"],
    // "2": ["0xc63C514B6c51ea9447250dE62BD5F95856Fb269c"],
    "3": ["0xc63C514B6c51ea9447250dE62BD5F95856Fb269c"],
};
var callDatasByProposalId = {
    "0": [
        "0x88b49b8364ec53acdd6f74efcba0de586952c40e23aa87d547d57fabb1ee21203b7b09ea",
    ],
    "3": [
        "0x88b49b834dce03aeba1d63cf7b6fa0431120dcff456d8264ca09e989e856abbf98eaf755",
    ],
};
var forumLinksByProposalId = {
    "1": "https://google.com",
    "3": "https://google.com",
};
var gscSnapshotIdsByProposalId = {
    "0": "0xa924bf8887e96f64eabf30a5026eb432bd03b6f055df017061a1e480cf477c9a",
};
var gscTargetsByProposalId = {
    "0": ["0x0A575bFA79454112c37B9Af2a6362c9c68f7d2e3"],
};
var gscCallDatasByProposalId = {
    "0": [
        "0x3eba045b000000000000000000000000000000000000000000000005f68e8131ecf80000",
    ],
};
var gscForumLinksByProposalId = {};
// Proposals might be deleted from snapshot, so we need to store them
// indefinitely once they are scraped. We can skip them once they exist in the
// final json, hence these lists.
var proposalsToSkip = currentProposalsJson.proposals.map(function (proposal) { return proposal.proposalId; });
var gscProposalsToSkip = currentGscProposalsJson.proposals.map(function (proposal) { return proposal.proposalId; });
(function () {
    return __awaiter(this, void 0, void 0, function () {
        var newProposals, proposalsJson, proposalsJsonString, newGscProposals, gscProposalsJson, gscProposalsJsonString, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, (0, getProposals_1.getProposals)(provider, coreVotingContract, snapshotIdsByProposalId, targetsByProposalId, callDatasByProposalId, forumLinksByProposalId, chainIds_1.GOERLI_CHAIN_ID, proposalsToSkip)];
                case 1:
                    newProposals = _a.sent();
                    proposalsJson = {
                        version: "0.0.0",
                        snapshotSpace: snapshot_1.SNAPSHOT_SPACE_ID_GOERLI,
                        proposals: __spreadArray(__spreadArray([], currentProposalsJson.proposals, true), newProposals, true),
                    };
                    proposalsJsonString = JSON.stringify(proposalsJson, null, 2);
                    fs_1.default.writeFileSync("./proposals/src/proposals/goerli.proposals.json", proposalsJsonString);
                    return [4 /*yield*/, (0, getProposals_1.getProposals)(provider, gscCoreVotingContract, gscSnapshotIdsByProposalId, gscTargetsByProposalId, gscCallDatasByProposalId, gscForumLinksByProposalId, chainIds_1.GOERLI_CHAIN_ID, gscProposalsToSkip)];
                case 2:
                    newGscProposals = _a.sent();
                    gscProposalsJson = {
                        version: "0.0.0",
                        snapshotSpace: snapshot_1.SNAPSHOT_GSC_SPACE_ID_GOERLI,
                        proposals: __spreadArray(__spreadArray([], currentGscProposalsJson.proposals, true), newGscProposals, true),
                    };
                    gscProposalsJsonString = JSON.stringify(gscProposalsJson, null, 2);
                    fs_1.default.writeFileSync("./proposals/src/proposals/goerli-gsc.proposals.json", gscProposalsJsonString);
                    process.exit(0);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error(error_1);
                    process.exit(1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
})();
