/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TestCoreVoting,
  TestCoreVotingInterface,
} from "../TestCoreVoting";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_timelock",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_baseQuorum",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_minProposalPower",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_gsc",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "votingVaults",
        type: "address[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "created",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "execution",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "expiration",
        type: "uint256",
      },
    ],
    name: "ProposalCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
    ],
    name: "ProposalExecuted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "voter",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint128",
            name: "votingPower",
            type: "uint128",
          },
          {
            internalType: "enum CoreVoting.Ballot",
            name: "castBallot",
            type: "uint8",
          },
        ],
        indexed: false,
        internalType: "struct CoreVoting.Vote",
        name: "vote",
        type: "tuple",
      },
    ],
    name: "Voted",
    type: "event",
  },
  {
    inputs: [],
    name: "DAY_IN_BLOCKS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "approvedVaults",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "who",
        type: "address",
      },
    ],
    name: "authorize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "authorized",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "baseQuorum",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_extraVoteTime",
        type: "uint256",
      },
    ],
    name: "changeExtraVotingTime",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "vault",
        type: "address",
      },
      {
        internalType: "bool",
        name: "isValid",
        type: "bool",
      },
    ],
    name: "changeVaultStatus",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "who",
        type: "address",
      },
    ],
    name: "deauthorize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "dummyValue",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "bytes[]",
        name: "calldatas",
        type: "bytes[]",
      },
    ],
    name: "execute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "extraVoteTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_target",
        type: "address",
      },
      {
        internalType: "bytes4",
        name: "_selector",
        type: "bytes4",
      },
    ],
    name: "getCustomQuorum",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_proposalID",
        type: "uint256",
      },
    ],
    name: "getProposalData",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
      {
        internalType: "uint128[3]",
        name: "",
        type: "uint128[3]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
    ],
    name: "getProposalVotingPower",
    outputs: [
      {
        internalType: "uint128[3]",
        name: "",
        type: "uint128[3]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_vault",
        type: "address",
      },
    ],
    name: "getVaultStatus",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "who",
        type: "address",
      },
    ],
    name: "isAuthorized",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lockDuration",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "minProposalPower",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "votingVaults",
        type: "address[]",
      },
      {
        internalType: "bytes[]",
        name: "extraVaultData",
        type: "bytes[]",
      },
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "bytes[]",
        name: "calldatas",
        type: "bytes[]",
      },
      {
        internalType: "uint256",
        name: "lastCall",
        type: "uint256",
      },
      {
        internalType: "enum CoreVoting.Ballot",
        name: "ballot",
        type: "uint8",
      },
    ],
    name: "proposal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "proposalCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "proposals",
    outputs: [
      {
        internalType: "bytes32",
        name: "proposalHash",
        type: "bytes32",
      },
      {
        internalType: "uint64",
        name: "created",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "createdTimestamp",
        type: "uint64",
      },
      {
        internalType: "uint128",
        name: "unlock",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "expiration",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "quorum",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "lastCall",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "bytes4",
        name: "functionSelector",
        type: "bytes4",
      },
    ],
    name: "quorums",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "bytes4",
        name: "selector",
        type: "bytes4",
      },
      {
        internalType: "uint256",
        name: "quorum",
        type: "uint256",
      },
    ],
    name: "setCustomQuorum",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "quorum",
        type: "uint256",
      },
    ],
    name: "setDefaultQuorum",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_lockDuration",
        type: "uint256",
      },
    ],
    name: "setLockDuration",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_minProposalPower",
        type: "uint256",
      },
    ],
    name: "setMinProposalPower",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "who",
        type: "address",
      },
    ],
    name: "setOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_newValue",
        type: "uint256",
      },
    ],
    name: "updateDummy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "votingVaults",
        type: "address[]",
      },
      {
        internalType: "bytes[]",
        name: "extraVaultData",
        type: "bytes[]",
      },
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        internalType: "enum CoreVoting.Ballot",
        name: "ballot",
        type: "uint8",
      },
    ],
    name: "vote",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "votes",
    outputs: [
      {
        internalType: "uint128",
        name: "votingPower",
        type: "uint128",
      },
      {
        internalType: "enum CoreVoting.Ballot",
        name: "castBallot",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052620000136119606003620002e0565b600455620000256119606005620002e0565b6005553480156200003557600080fd5b5060405162002ef438038062002ef48339810160408190526200005891620001d0565b600080546001600160a01b0319163317815560038590556006849055859085908590859085905b8151811015620000f757600160096000848481518110620000b057634e487b7160e01b600052603260045260246000fd5b6020908102919091018101516001600160a01b03168252810191909152604001600020805460ff191691151591909117905580620000ee8162000302565b9150506200007f565b5062000103856200013f565b6200012f826001600160a01b03166000908152600160208190526040909120805460ff19169091179055565b505050505050505050506200034c565b6000546001600160a01b03163314620001915760405162461bcd60e51b815260206004820152601060248201526f29b2b73232b9103737ba1037bbb732b960811b604482015260640160405180910390fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b80516001600160a01b0381168114620001cb57600080fd5b919050565b600080600080600060a08688031215620001e8578081fd5b620001f386620001b3565b94506020808701519450604087015193506200021260608801620001b3565b60808801519093506001600160401b03808211156200022f578384fd5b818901915089601f83011262000243578384fd5b81518181111562000258576200025862000336565b8060051b604051601f19603f8301168101818110858211171562000280576200028062000336565b604052828152858101935084860182860187018e10156200029f578788fd5b8795505b83861015620002cc57620002b781620001b3565b855260019590950194938601938601620002a3565b508096505050505050509295509295909350565b6000816000190483118215151615620002fd57620002fd62000320565b500290565b600060001982141562000319576200031962000320565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b612b98806200035c6000396000f3fe608060405234801561001057600080fd5b50600436106101e45760003560e01c80637d5709eb1161010f578063bd9c75a5116100a2578063d4b8756711610071578063d4b8756714610599578063da35c664146105a2578063f131e5eb146105ab578063fe9fbb80146105b457600080fd5b8063bd9c75a514610540578063c52ea3db14610553578063ca5f9d0614610573578063d1b676271461058657600080fd5b8063aa35fb51116100de578063aa35fb51146104d4578063af7a060c146104e7578063b6a5d7de1461050a578063b91816111461051d57600080fd5b80637d5709eb1461040f5780638da5cb5b146104225780639f2524ee14610467578063a4c95077146104cb57600080fd5b806327c97fa5116101875780634eb665af116101565780634eb665af146103bc5780636e768530146103cf57806370469c26146103f3578063771a5323146103fc57600080fd5b806327c97fa51461037057806333968c6614610383578063341a7b42146103965780634392b99c146103a957600080fd5b806313af4035116101c357806313af4035146102f857806315126a3d1461030b578063180d97c11461031e5780631c39c96c1461036757600080fd5b806214d11d146101e9578063013cf08b146101fe57806304554443146102e1575b600080fd5b6101fc6101f7366004612556565b6105ed565b005b61028361020c366004612556565b600a602052600090815260409020805460018201546002830154600590930154919267ffffffffffffffff80831693680100000000000000008404909116926fffffffffffffffffffffffffffffffff70010000000000000000000000000000000091829004811693808216939290048116911687565b6040805197885267ffffffffffffffff968716602089015295909416948601949094526fffffffffffffffffffffffffffffffff91821660608601528116608085015291821660a08401521660c082015260e0015b60405180910390f35b6102ea60045481565b6040519081526020016102d8565b6101fc610306366004612319565b61065e565b6101fc610319366004612586565b61070c565b61035761032c366004612319565b73ffffffffffffffffffffffffffffffffffffffff1660009081526009602052604090205460ff1690565b60405190151581526020016102d8565b6102ea60035481565b6101fc61037e366004612319565b610cb6565b6102ea61039136600461236d565b610d4b565b6101fc6103a4366004612333565b610d60565b6101fc6103b736600461239f565b610dff565b6101fc6103ca366004612556565b610ebc565b6103e26103dd366004612556565b610f28565b6040516102d89594939291906128df565b6102ea600c5481565b6102ea61040a36600461236d565b611017565b6101fc61041d366004612556565b611087565b6000546104429073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016102d8565b6104bd6104753660046123da565b600b6020908152600092835260408084209091529082529020546fffffffffffffffffffffffffffffffff811690700100000000000000000000000000000000900460ff1682565b6040516102d892919061294b565b6102ea60055481565b6102ea6104e23660046124db565b6110f3565b6103576104f5366004612319565b60096020526000908152604090205460ff1681565b6101fc610518366004612319565b611800565b61035761052b366004612319565b60016020526000908152604090205460ff1681565b6101fc61054e366004612403565b6118a2565b610566610561366004612556565b611ef0565b6040516102d891906128d1565b6101fc610581366004612556565b600c55565b6101fc610594366004612556565b611f7c565b6102ea60065481565b6102ea60075481565b6102ea61196081565b6103576105c2366004612319565b73ffffffffffffffffffffffffffffffffffffffff1660009081526001602052604090205460ff1690565b60005473ffffffffffffffffffffffffffffffffffffffff1633146106595760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e65720000000000000000000000000000000060448201526064015b60405180910390fd5b600555565b60005473ffffffffffffffffffffffffffffffffffffffff1633146106c55760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e6572000000000000000000000000000000006044820152606401610650565b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60025460ff161561075f5760405162461bcd60e51b815260206004820152600a60248201527f5265656e7472616e6379000000000000000000000000000000000000000000006044820152606401610650565b6002805460ff191660019081179091556000848152600a6020526040902001546fffffffffffffffffffffffffffffffff700100000000000000000000000000000000909104164310156107f55760405162461bcd60e51b815260206004820152600c60248201527f6e6f7420756e6c6f636b656400000000000000000000000000000000000000006044820152606401610650565b6000838152600a602052604090206001015470010000000000000000000000000000000090046fffffffffffffffffffffffffffffffff166108795760405162461bcd60e51b815260206004820152601360248201527f50726576696f75736c79206578656375746564000000000000000000000000006044820152606401610650565b6000838152600a60205260409020600501546fffffffffffffffffffffffffffffffff1643106108eb5760405162461bcd60e51b815260206004820152601860248201527f70617374206c6173742063616c6c2074696d657374616d7000000000000000006044820152606401610650565b6000838152600a602090815260409182902054915161090e918591859101612822565b60405160208183030381529060405280519060200120146109715760405162461bcd60e51b815260206004820152600d60248201527f68617368206d69736d61746368000000000000000000000000000000000000006044820152606401610650565b6000838152600a60205260408082208151606081019283905291600391820191908285855b82829054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1681526020019060100190602082600f01049283019260010382029150808411610996575050506000888152600a60209081526040808320600201549087015191870151875197985092967001000000000000000000000000000000009091046fffffffffffffffffffffffffffffffff169550909350610a459250612a30565b610a4f9190612a30565b6fffffffffffffffffffffffffffffffff1610159050600082600160200201516fffffffffffffffffffffffffffffffff1683600060200201516fffffffffffffffffffffffffffffffff16119050818015610aa85750805b610af45760405162461bcd60e51b815260206004820152600e60248201527f43616e6e6f7420657865637574650000000000000000000000000000000000006044820152606401610650565b60005b8551811015610c1b576000868281518110610b2257634e487b7160e01b600052603260045260246000fd5b602002602001015173ffffffffffffffffffffffffffffffffffffffff16868381518110610b6057634e487b7160e01b600052603260045260246000fd5b6020026020010151604051610b7591906126a3565b6000604051808303816000865af19150503d8060008114610bb2576040519150601f19603f3d011682016040523d82523d6000602084013e610bb7565b606091505b5050905080610c085760405162461bcd60e51b815260206004820152600b60248201527f43616c6c206661696c65640000000000000000000000000000000000000000006044820152606401610650565b5080610c1381612afd565b915050610af7565b506040518681527f712ae1383f79ac853f8d882153778e0260ef8f03b504e2866e0593e04d2b291f9060200160405180910390a150505060009283525050600a6020526040812081815560018101829055600280820183905560038201839055600482019290925560050180547fffffffffffffffffffffffffffffffff00000000000000000000000000000000169055805460ff19169055565b60005473ffffffffffffffffffffffffffffffffffffffff163314610d1d5760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e6572000000000000000000000000000000006044820152606401610650565b73ffffffffffffffffffffffffffffffffffffffff166000908152600160205260409020805460ff19169055565b6000610d578383611017565b90505b92915050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610dc75760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e6572000000000000000000000000000000006044820152606401610650565b73ffffffffffffffffffffffffffffffffffffffff919091166000908152600960205260409020805460ff1916911515919091179055565b60005473ffffffffffffffffffffffffffffffffffffffff163314610e665760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e6572000000000000000000000000000000006044820152606401610650565b73ffffffffffffffffffffffffffffffffffffffff90921660009081526008602090815260408083207fffffffff0000000000000000000000000000000000000000000000000000000090941683529290522055565b60005473ffffffffffffffffffffffffffffffffffffffff163314610f235760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e6572000000000000000000000000000000006044820152606401610650565b600455565b600080600080610f36612011565b6000868152600a602052604080822080546001820154600283015484516060810195869052929567ffffffffffffffff8316956fffffffffffffffffffffffffffffffff700100000000000000000000000000000000948590048116969490930490921693600393840193909284928390855b82829054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1681526020019060100190602082600f01049283019260010382029150808411610fa9579050505050505090509450945094509450945091939590929450565b73ffffffffffffffffffffffffffffffffffffffff821660009081526008602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000008516845290915281205480611079575050600354610d5a565b9050610d5a565b5092915050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146110ee5760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e6572000000000000000000000000000000006044820152606401610650565b600355565b6000828152600a602052604081206001015467ffffffffffffffff1661115b5760405162461bcd60e51b815260206004820152601760248201527f70726f706f73616c20646f6573206e6f742065786973740000000000000000006044820152606401610650565b6000838152600a60205260409020600201546fffffffffffffffffffffffffffffffff164311156111ce5760405162461bcd60e51b815260206004820152600760248201527f45787069726564000000000000000000000000000000000000000000000000006044820152606401610650565b6000805b86518110156114a95760006111e8826001612a64565b90505b87518110156112d05787818151811061121457634e487b7160e01b600052603260045260246000fd5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1688838151811061125257634e487b7160e01b600052603260045260246000fd5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1614156112be5760405162461bcd60e51b815260206004820152600f60248201527f6475706c6963617465207661756c7400000000000000000000000000000000006044820152606401610650565b806112c881612afd565b9150506111eb565b50600960008883815181106112f557634e487b7160e01b600052603260045260246000fd5b60209081029190910181015173ffffffffffffffffffffffffffffffffffffffff1682528101919091526040016000205460ff166113755760405162461bcd60e51b815260206004820152601060248201527f756e7665726966696564207661756c74000000000000000000000000000000006044820152606401610650565b86818151811061139557634e487b7160e01b600052603260045260246000fd5b6020908102919091018101516000878152600a909252604090912060010154875173ffffffffffffffffffffffffffffffffffffffff9092169163d994844a91339167ffffffffffffffff8083169268010000000000000000900416908b908790811061141257634e487b7160e01b600052603260045260246000fd5b60200260200101516040518563ffffffff1660e01b815260040161143994939291906126bf565b602060405180830381600087803b15801561145357600080fd5b505af1158015611467573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061148b919061256e565b6114959083612a30565b9150806114a181612afd565b9150506111d2565b50336000908152600b602090815260408083208784529091529020546fffffffffffffffffffffffffffffffff16156115dc57336000908152600b6020908152604080832087845280835281842054600a845291909320929091526fffffffffffffffffffffffffffffffff81169160030190700100000000000000000000000000000000900460ff16600281111561155257634e487b7160e01b600052602160045260246000fd5b6003811061157057634e487b7160e01b600052603260045260246000fd5b600291828204019190066010028282829054906101000a90046fffffffffffffffffffffffffffffffff166115a59190612a7c565b92506101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff1602179055505b6040518060400160405280826fffffffffffffffffffffffffffffffff16815260200184600281111561161f57634e487b7160e01b600052602160045260246000fd5b9052336000908152600b602090815260408083208884528252909120825181546fffffffffffffffffffffffffffffffff9091167fffffffffffffffffffffffffffffffff0000000000000000000000000000000082168117835592840151919283917fffffffffffffffffffffffffffffff000000000000000000000000000000000016177001000000000000000000000000000000008360028111156116d757634e487b7160e01b600052602160045260246000fd5b021790555050506000848152600a60205260409020819060030184600281111561171157634e487b7160e01b600052602160045260246000fd5b6003811061172f57634e487b7160e01b600052603260045260246000fd5b600291828204019190066010028282829054906101000a90046fffffffffffffffffffffffffffffffff166117649190612a30565b82546fffffffffffffffffffffffffffffffff9182166101009390930a928302919092021990911617905550336000818152600b602090815260408083208884529091529081902090518692917f79597d31752b5a254be8f219c055ebfefe925e085d99c7b04b0883298b356951916117dd919061291b565b60405180910390a36fffffffffffffffffffffffffffffffff1695945050505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146118675760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e6572000000000000000000000000000000006044820152606401610650565b61189f8173ffffffffffffffffffffffffffffffffffffffff166000908152600160208190526040909120805460ff19169091179055565b50565b8483146118f15760405162461bcd60e51b815260206004820152601560248201527f6172726179206c656e677468206d69736d6174636800000000000000000000006044820152606401610650565b8461193e5760405162461bcd60e51b815260206004820152600e60248201527f656d7074792070726f706f73616c0000000000000000000000000000000000006044820152606401610650565b6000868686866040516020016119579493929190612712565b60408051601f19818403018152919052805160209091012090506000805b87811015611ab65760006119ee8888848181106119a257634e487b7160e01b600052603260045260246000fd5b90506020028101906119b49190612978565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611fe892505050565b90506000600860008c8c86818110611a1657634e487b7160e01b600052603260045260246000fd5b9050602002016020810190611a2b9190612319565b73ffffffffffffffffffffffffffffffffffffffff168152602080820192909252604090810160009081207fffffffff000000000000000000000000000000000000000000000000000000008616825290925290205490508015611a8f5780611a93565b6003545b905083811115611aa1578093505b50508080611aae90612afd565b915050611975565b50600554600454611ac79043612a64565b611ad19190612a64565b8411611b1f5760405162461bcd60e51b815260206004820152601a60248201527f65787069726573206265666f726520766f74696e6720656e64730000000000006044820152606401610650565b604051806101000160405280838152602001600143611b3e9190612aad565b67ffffffffffffffff168152602001611b58601442612aad565b67ffffffffffffffff16815260200160045443611b759190612a64565b6fffffffffffffffffffffffffffffffff16815260200160055460045443611b9d9190612a64565b611ba79190612a64565b6fffffffffffffffffffffffffffffffff168152602001826fffffffffffffffffffffffffffffffff168152602001600a60006007548152602001908152602001600020600301600380602002604051908101604052809291908260038015611c69576020028201916000905b82829054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1681526020019060100190602082600f01049283019260010382029150808411611c145790505b50505091835250506fffffffffffffffffffffffffffffffff8681166020928301526007546000908152600a8352604090819020845181559284015160018401805492860151606087015167ffffffffffffffff9384167fffffffffffffffffffffffffffffffff00000000000000000000000000000000909516949094176801000000000000000093909116929092029190911783167001000000000000000000000000000000009284168302179055608084015160a085015190831692160217600282015560c0820151611d45906003808401919061202f565b5060e08201518160050160006101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff1602179055509050506000611dd68d8d80806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250611dcd92508e91508f9050612ac4565b600754876110f3565b90506000600654831115611dec57600654611dee565b825b3360009081526001602052604090205490915060ff16611e585780821015611e585760405162461bcd60e51b815260206004820152601960248201527f696e73756666696369656e7420766f74696e6720706f776572000000000000006044820152606401610650565b7fafbd5d299242bf861d198949ad835672e2e35b2e1838cee606a0b5aec2b4fa426007544360045443611e8b9190612a64565b600554600454611e9b9043612a64565b611ea59190612a64565b60408051948552602085019390935291830152606082015260800160405180910390a1600160076000828254611edb9190612a64565b90915550505050505050505050505050505050565b611ef8612011565b6000828152600a60205260408082208151606081019283905292600391820192908390855b82829054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1681526020019060100190602082600f01049283019260010382029150808411611f1d575094979650505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314611fe35760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e6572000000000000000000000000000000006044820152606401610650565b600655565b602001517ffffffffff00000000000000000000000000000000000000000000000000000001690565b60405180606001604052806003906020820280368337509192915050565b6002830191839082156120df5791602002820160005b838211156120a157835183826101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff1602179055509260200192601001602081600f01049283019260010302612045565b80156120dd5782816101000a8154906fffffffffffffffffffffffffffffffff0219169055601001602081600f010492830192600103026120a1565b505b506120eb9291506120ef565b5090565b5b808211156120eb57600081556001016120f0565b600061211761211284612a0c565b6129db565b9050808382526020808301915083868660051b8601111561213757600080fd5b60005b868110156121cc57813567ffffffffffffffff8082111561215a57600080fd5b8188019150601f8a8184011261216f57600080fd5b82358281111561218157612181612b4c565b61219287601f1984840116016129db565b92508083528b878286010111156121a857600080fd5b8087850188850137600090830187015250855250928201929082019060010161213a565b505050509392505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146121fb57600080fd5b919050565b60008083601f840112612211578182fd5b50813567ffffffffffffffff811115612228578182fd5b6020830191508360208260051b850101111561224357600080fd5b9250929050565b600082601f83011261225a578081fd5b8135602061226a61211283612a0c565b80838252828201915082860187848660051b8901011115612289578586fd5b855b858110156122ae5761229c826121d7565b8452928401929084019060010161228b565b5090979650505050505050565b600082601f8301126122cb578081fd5b610d5783833560208501612104565b80357fffffffff00000000000000000000000000000000000000000000000000000000811681146121fb57600080fd5b8035600381106121fb57600080fd5b60006020828403121561232a578081fd5b610d57826121d7565b60008060408385031215612345578081fd5b61234e836121d7565b915060208301358015158114612362578182fd5b809150509250929050565b6000806040838503121561237f578182fd5b612388836121d7565b9150612396602084016122da565b90509250929050565b6000806000606084860312156123b3578081fd5b6123bc846121d7565b92506123ca602085016122da565b9150604084013590509250925092565b600080604083850312156123ec578182fd5b6123f5836121d7565b946020939093013593505050565b60008060008060008060008060008060c08b8d031215612421578586fd5b8a3567ffffffffffffffff80821115612438578788fd5b6124448e838f01612200565b909c509a5060208d013591508082111561245c578788fd5b6124688e838f01612200565b909a50985060408d0135915080821115612480578788fd5b61248c8e838f01612200565b909850965060608d01359150808211156124a4578586fd5b506124b18d828e01612200565b90955093505060808b013591506124ca60a08c0161230a565b90509295989b9194979a5092959850565b600080600080608085870312156124f0578384fd5b843567ffffffffffffffff80821115612507578586fd5b6125138883890161224a565b95506020870135915080821115612528578485fd5b50612535878288016122bb565b9350506040850135915061254b6060860161230a565b905092959194509250565b600060208284031215612567578081fd5b5035919050565b60006020828403121561257f578081fd5b5051919050565b60008060006060848603121561259a578081fd5b83359250602084013567ffffffffffffffff808211156125b8578283fd5b6125c48783880161224a565b935060408601359150808211156125d9578283fd5b506125e6868287016122bb565b9150509250925092565b8060005b60038110156126255781516fffffffffffffffffffffffffffffffff168452602093840193909101906001016125f4565b50505050565b8183528181602085013750600080602083850101526020601f19601f840116840101905092915050565b6000815180845261266d816020860160208601612ad1565b601f01601f19169290920160200192915050565b6003811061269f57634e487b7160e01b600052602160045260246000fd5b9052565b600082516126b5818460208701612ad1565b9190910192915050565b73ffffffffffffffffffffffffffffffffffffffff85168152600067ffffffffffffffff8086166020840152808516604084015250608060608301526127086080830184612655565b9695505050505050565b6040808252810184905260008560608301825b87811015612769576127588261273a856121d7565b73ffffffffffffffffffffffffffffffffffffffff16815260200190565b602093909301929150600101612725565b506020915083810382850152808582528282019050828660051b83010187855b8881101561281257601f1985840301845281357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18b36030181126127cb578788fd5b8a01803567ffffffffffffffff8111156127e3578889fd5b8036038c13156127f1578889fd5b6127fe85828a850161262b565b958801959450505090850190600101612789565b50909a9950505050505050505050565b604080825283519082018190526000906020906060840190828701845b8281101561287357815173ffffffffffffffffffffffffffffffffffffffff1684526020840193509084019060010161283f565b50505083810382850152845180825282820190600581901b83018401878501865b838110156128c257601f198684030185526128b0838351612655565b94870194925090860190600101612894565b50909998505050505050505050565b60608101610d5a82846125f0565b8581526fffffffffffffffffffffffffffffffff858116602083015284811660408301528316606082015260e0810161270860808301846125f0565b81546fffffffffffffffffffffffffffffffff81168252604082019061108060208401608083901c60ff16612681565b6fffffffffffffffffffffffffffffffff83168152604081016129716020830184612681565b9392505050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126129ac578283fd5b83018035915067ffffffffffffffff8211156129c6578283fd5b60200191503681900382131561224357600080fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715612a0457612a04612b4c565b604052919050565b600067ffffffffffffffff821115612a2657612a26612b4c565b5060051b60200190565b60006fffffffffffffffffffffffffffffffff808316818516808303821115612a5b57612a5b612b36565b01949350505050565b60008219821115612a7757612a77612b36565b500190565b60006fffffffffffffffffffffffffffffffff83811690831681811015612aa557612aa5612b36565b039392505050565b600082821015612abf57612abf612b36565b500390565b6000610d57368484612104565b60005b83811015612aec578181015183820152602001612ad4565b838111156126255750506000910152565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415612b2f57612b2f612b36565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfea26469706673582212201127797fe9c15d954e159040b9bf960974ac2ffdc9069f757b69c75ad0168c1d64736f6c63430008040033";

export class TestCoreVoting__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _timelock: string,
    _baseQuorum: BigNumberish,
    _minProposalPower: BigNumberish,
    _gsc: string,
    votingVaults: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestCoreVoting> {
    return super.deploy(
      _timelock,
      _baseQuorum,
      _minProposalPower,
      _gsc,
      votingVaults,
      overrides || {}
    ) as Promise<TestCoreVoting>;
  }
  getDeployTransaction(
    _timelock: string,
    _baseQuorum: BigNumberish,
    _minProposalPower: BigNumberish,
    _gsc: string,
    votingVaults: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _timelock,
      _baseQuorum,
      _minProposalPower,
      _gsc,
      votingVaults,
      overrides || {}
    );
  }
  attach(address: string): TestCoreVoting {
    return super.attach(address) as TestCoreVoting;
  }
  connect(signer: Signer): TestCoreVoting__factory {
    return super.connect(signer) as TestCoreVoting__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestCoreVotingInterface {
    return new utils.Interface(_abi) as TestCoreVotingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestCoreVoting {
    return new Contract(address, _abi, signerOrProvider) as TestCoreVoting;
  }
}
