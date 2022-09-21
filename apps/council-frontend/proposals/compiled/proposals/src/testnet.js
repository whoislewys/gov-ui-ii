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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var council_typechain_1 = require("@elementfi/council-typechain");
var fs_1 = __importDefault(require("fs"));
var hardhat_1 = __importDefault(require("hardhat"));
var snapshot_1 = require("./snapshot");
var getProposals_1 = require("./getProposals");
var chainIds_1 = require("./chainIds");
var provider = hardhat_1.default.ethers.provider;
// eslint-disable-next-line @typescript-eslint/no-var-requires
var addressesJson = require("src/addresses/testnet.addresses.json");
var coreVotingContract = council_typechain_1.CoreVoting__factory.connect(addressesJson.addresses.coreVoting, provider);
var gscCoreVotingContract = council_typechain_1.CoreVoting__factory.connect(addressesJson.addresses.gscCoreVoting, provider);
/**
 * A mapping of localhost GSC CoreVoting Proposal IDs -> random Snapshot proposal
 * ids from Element Finance.  This is how we show titles/descriptions for
 * testnet proposals in dev.
 *
 * Note: Sometimes the snapshot proposal ids are IPFS strings or hex strings 🤷
 */
var snapshotIdsByProposalId = {
    // EIP-000
    "0": "0x91a739c399ba1b95d9b38013bf5c42b4cb83b56272b322d86587193859371f12",
    // EFP-001
    "1": "0xbe329d38a1465fa6c6a4bc8aa6c39346818b2a5600414fb44f85230145120611",
    // Example Proposal
    "2": "0x5d556f0edb608697a426bdf0951e63139db7f8c7d5a7761b1fb5b5a969a69343",
    // EIP-001
    "3": "0x71df6710e26894685f985ae303b4bd64eeaa080f3e91703dac6ae539f66b5dd0",
    // EIP-002
    "4": "0xa924bf8887e96f64eabf30a5026eb432bd03b6f055df017061a1e480cf477c9a",
};
var targetsByProposalId = {
    "0": ["0x4ed7c70F96B99c776995fB64377f0d4aB3B0e1C1"],
    "1": ["0x4ed7c70F96B99c776995fB64377f0d4aB3B0e1C1"],
    "2": ["0x4ed7c70F96B99c776995fB64377f0d4aB3B0e1C1"],
    "3": ["0x4ed7c70F96B99c776995fB64377f0d4aB3B0e1C1"],
    "4": ["0x4ed7c70F96B99c776995fB64377f0d4aB3B0e1C1"],
};
var callDatasByProposalId = {
    "0": [
        "0x88b49b834dbdd3e053743c5483a6f5f453200c2c9201e1330e5e5f99997aafcbe4389a2a",
    ],
    "1": [
        "0x88b49b834dbdd3e053743c5483a6f5f453200c2c9201e1330e5e5f99997aafcbe4389a2a",
    ],
    "2": [
        "0x88b49b834dbdd3e053743c5483a6f5f453200c2c9201e1330e5e5f99997aafcbe4389a2a",
    ],
    "3": [
        "0x88b49b834dbdd3e053743c5483a6f5f453200c2c9201e1330e5e5f99997aafcbe4389a2a",
    ],
    "4": [
        "0x88b49b834dbdd3e053743c5483a6f5f453200c2c9201e1330e5e5f99997aafcbe4389a2a",
    ],
};
var forumLinksByProposalId = {};
/**
 * A mapping of localhost CoreVoting Proposal IDs -> random Snapshot proposal
 * ids from Element Finance.  This is how we show titles/descriptions for
 * testnet proposals in dev.
 *
 * Note: Sometimes the snapshot proposal ids are IPFS strings or hex strings 🤷
 */
var gscSnapshotIdsByProposalId = {
    "0": "0x91a739c399ba1b95d9b38013bf5c42b4cb83b56272b322d86587193859371f12",
    "1": "0x71df6710e26894685f985ae303b4bd64eeaa080f3e91703dac6ae539f66b5dd0",
    "2": "0xa924bf8887e96f64eabf30a5026eb432bd03b6f055df017061a1e480cf477c9a",
};
var gscTargetsByProposalId = {
    "0": ["0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6"],
    "1": ["0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6"],
    "2": ["0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6"],
};
var gscCallDatasByProposalId = {
    "0": [
        "0x3eba045b000000000000000000000000000000000000000000000005f68e8131ecf80000",
    ],
    "1": [
        "0x3eba045b000000000000000000000000000000000000000000000005f68e8131ecf80000",
    ],
    "2": [
        "0x3eba045b000000000000000000000000000000000000000000000005f68e8131ecf80000",
    ],
};
var gscForumLinksByProposalId = {};
(function () {
    return __awaiter(this, void 0, void 0, function () {
        var newProposals, newGscProposals, proposalsJson, proposalsJsonString, gscProposalsJson, gscProposalsJsonString, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, (0, getProposals_1.getProposals)(provider, coreVotingContract, snapshotIdsByProposalId, targetsByProposalId, callDatasByProposalId, forumLinksByProposalId, chainIds_1.TESTNET_CHAIN_ID, [])];
                case 1:
                    newProposals = _a.sent();
                    return [4 /*yield*/, (0, getProposals_1.getProposals)(provider, gscCoreVotingContract, gscSnapshotIdsByProposalId, gscTargetsByProposalId, gscCallDatasByProposalId, gscForumLinksByProposalId, chainIds_1.TESTNET_CHAIN_ID, [])];
                case 2:
                    newGscProposals = _a.sent();
                    proposalsJson = {
                        version: "0.0.0",
                        // hardhat should use the goerli snapshot
                        snapshotSpace: snapshot_1.SNAPSHOT_SPACE_ID_GOERLI,
                        proposals: newProposals,
                    };
                    proposalsJsonString = JSON.stringify(proposalsJson, null, 2);
                    console.log(proposalsJsonString);
                    console.log("");
                    fs_1.default.writeFileSync("proposals/src/proposals/testnet.proposals.json", proposalsJsonString);
                    gscProposalsJson = {
                        version: "0.0.0",
                        // hardhat should use the goerli snapshot
                        snapshotSpace: snapshot_1.SNAPSHOT_SPACE_ID_GOERLI,
                        proposals: newGscProposals,
                    };
                    gscProposalsJsonString = JSON.stringify(gscProposalsJson, null, 2);
                    console.log(gscProposalsJsonString);
                    fs_1.default.writeFileSync("proposals/src/proposals/testnet-gsc.proposals.json", gscProposalsJsonString);
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
