/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MockVotingVault,
  MockVotingVaultInterface,
} from "../MockVotingVault";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "queryVotePower",
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
        name: "_user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "setVotingPower",
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
    name: "votingPower",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610223806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063274b91a914610046578063c07473f61461007f578063d994844a146100b1575b600080fd5b61007d610054366004610135565b73ffffffffffffffffffffffffffffffffffffffff909116600090815260208190526040902055565b005b61009f61008d366004610114565b60006020819052908152604090205481565b60405190815260200160405180910390f35b61009f6100bf36600461015e565b5050505073ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b803573ffffffffffffffffffffffffffffffffffffffff8116811461010f57600080fd5b919050565b600060208284031215610125578081fd5b61012e826100eb565b9392505050565b60008060408385031215610147578081fd5b610150836100eb565b946020939093013593505050565b600080600080600060808688031215610175578081fd5b61017e866100eb565b94506020860135935060408601359250606086013567ffffffffffffffff808211156101a8578283fd5b818801915088601f8301126101bb578283fd5b8135818111156101c9578384fd5b8960208285010111156101da578384fd5b969995985093965060200194939250505056fea2646970667358221220c0ff49bbc390d37e905344c41567cfe360ba4f8d3784a2127e502f6fca64c7a464736f6c63430008040033";

export class MockVotingVault__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockVotingVault> {
    return super.deploy(overrides || {}) as Promise<MockVotingVault>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockVotingVault {
    return super.attach(address) as MockVotingVault;
  }
  connect(signer: Signer): MockVotingVault__factory {
    return super.connect(signer) as MockVotingVault__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockVotingVaultInterface {
    return new utils.Interface(_abi) as MockVotingVaultInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockVotingVault {
    return new Contract(address, _abi, signerOrProvider) as MockVotingVault;
  }
}
