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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProposals = void 0;
var utils_1 = require("ethers/lib/utils");
var snapshot_1 = require("./snapshot");
function getProposals(provider, coreVotingContract, snapshotIdsByProposalId, targetsByProposalId, callDatasByProposalId, forumLinksByProposalId, chainId, proposalIdsToSkip) {
    if (proposalIdsToSkip === void 0) { proposalIdsToSkip = []; }
    return __awaiter(this, void 0, void 0, function () {
        var onChainProposalCreatedEvents, newOnChainProposalsEvents, newProposalPromises;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, coreVotingContract.queryFilter(coreVotingContract.filters.ProposalCreated())];
                case 1:
                    onChainProposalCreatedEvents = _a.sent();
                    newOnChainProposalsEvents = onChainProposalCreatedEvents.filter(function (event) {
                        var proposalId = event.args.proposalId.toString();
                        var isNewProposal = !proposalIdsToSkip.find(function (p) { return p === proposalId; });
                        return isNewProposal;
                    });
                    newProposalPromises = newOnChainProposalsEvents.map(function (_a) {
                        var proposalIdBN = _a.args.proposalId;
                        return __awaiter(_this, void 0, void 0, function () {
                            var _b, proposalHash, lastCall, quorum, unlock, created, expiration, createdBlock, proposalId, snapshotId, description, title, targets, calldatas, _c, snapshotDescription, snapshotTitle, forumLink;
                            return __generator(this, function (_d) {
                                switch (_d.label) {
                                    case 0: return [4 /*yield*/, coreVotingContract.functions.proposals(proposalIdBN)];
                                    case 1:
                                        _b = _d.sent(), proposalHash = _b.proposalHash, lastCall = _b.lastCall, quorum = _b.quorum, unlock = _b.unlock, created = _b.created, expiration = _b.expiration;
                                        return [4 /*yield*/, provider.getBlock(created.toNumber())];
                                    case 2:
                                        createdBlock = _d.sent();
                                        proposalId = proposalIdBN.toString();
                                        console.log("proposalId", proposalId, snapshotIdsByProposalId[proposalId]);
                                        snapshotId = snapshotIdsByProposalId[proposalId] ||
                                            // Set snapshotId to empty string for unverified proposals
                                            "";
                                        if (!snapshotId) return [3 /*break*/, 4];
                                        return [4 /*yield*/, (0, snapshot_1.fetchSnapshotProposalTitleAndBody)(snapshotId, chainId)];
                                    case 3:
                                        _c = _d.sent(), snapshotDescription = _c.body, snapshotTitle = _c.title;
                                        description = snapshotDescription;
                                        title = snapshotTitle;
                                        targets = targetsByProposalId[proposalId];
                                        calldatas = callDatasByProposalId[proposalId];
                                        return [3 /*break*/, 5];
                                    case 4:
                                        // Proposals with no snapshot
                                        description =
                                            "WARNING: This proposal has not been verified on Snapshot!  It may contain malicious code, please check the forums or Discord for guidance on how to vote on this proposal.";
                                        title = "Unknown Proposal";
                                        targets = [""];
                                        calldatas = [""];
                                        _d.label = 5;
                                    case 5:
                                        forumLink = forumLinksByProposalId[proposalId] || "";
                                        return [2 /*return*/, {
                                                proposalId: proposalId,
                                                description: description,
                                                title: title,
                                                proposalHash: proposalHash,
                                                unlock: unlock.toNumber(),
                                                lastCall: lastCall.toNumber(),
                                                created: created.toNumber(),
                                                createdTimestamp: createdBlock.timestamp,
                                                expiration: expiration.toNumber(),
                                                quorum: (0, utils_1.formatEther)(quorum),
                                                targets: targets,
                                                calldatas: calldatas,
                                                snapshotId: snapshotId,
                                                forumLink: forumLink,
                                            }];
                                }
                            });
                        });
                    });
                    return [2 /*return*/, Promise.all(newProposalPromises)];
            }
        });
    });
}
exports.getProposals = getProposals;
