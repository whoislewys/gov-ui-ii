/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockComitium, MockComitiumInterface } from "../MockComitium";

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
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "votingPowerAtTs",
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
  "0x608060405234801561001057600080fd5b50610191806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063274b91a914610046578063c07473f61461007f578063cbf8eda9146100b1575b600080fd5b61007d610054366004610132565b73ffffffffffffffffffffffffffffffffffffffff909116600090815260208190526040902055565b005b61009f61008d366004610111565b60006020819052908152604090205481565b60405190815260200160405180910390f35b61009f6100bf366004610132565b5073ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b803573ffffffffffffffffffffffffffffffffffffffff8116811461010c57600080fd5b919050565b600060208284031215610122578081fd5b61012b826100e8565b9392505050565b60008060408385031215610144578081fd5b61014d836100e8565b94602093909301359350505056fea264697066735822122039a7ae8528ccbcda6cf9d705bfc999884d25393e1edbe23036df0b27ed186a7d64736f6c63430008040033";

export class MockComitium__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockComitium> {
    return super.deploy(overrides || {}) as Promise<MockComitium>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockComitium {
    return super.attach(address) as MockComitium;
  }
  connect(signer: Signer): MockComitium__factory {
    return super.connect(signer) as MockComitium__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockComitiumInterface {
    return new utils.Interface(_abi) as MockComitiumInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockComitium {
    return new Contract(address, _abi, signerOrProvider) as MockComitium;
  }
}
