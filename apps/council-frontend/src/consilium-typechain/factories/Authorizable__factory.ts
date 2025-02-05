/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Authorizable, AuthorizableInterface } from "../Authorizable";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600080546001600160a01b0319163317905561044d806100326000396000f3fe608060405234801561001057600080fd5b50600436106100725760003560e01c8063b6a5d7de11610050578063b6a5d7de146100e9578063b9181611146100fc578063fe9fbb801461012f57600080fd5b806313af40351461007757806327c97fa51461008c5780638da5cb5b1461009f575b600080fd5b61008a6100853660046103dc565b610168565b005b61008a61009a3660046103dc565b610235565b6000546100bf9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b61008a6100f73660046103dc565b610302565b61011f61010a3660046103dc565b60016020526000908152604090205460ff1681565b60405190151581526020016100e0565b61011f61013d3660046103dc565b73ffffffffffffffffffffffffffffffffffffffff1660009081526001602052604090205460ff1690565b60005473ffffffffffffffffffffffffffffffffffffffff1633146101ee576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f53656e646572206e6f74206f776e65720000000000000000000000000000000060448201526064015b60405180910390fd5b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60005473ffffffffffffffffffffffffffffffffffffffff1633146102b6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f53656e646572206e6f74206f776e65720000000000000000000000000000000060448201526064016101e5565b73ffffffffffffffffffffffffffffffffffffffff16600090815260016020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055565b60005473ffffffffffffffffffffffffffffffffffffffff163314610383576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f53656e646572206e6f74206f776e65720000000000000000000000000000000060448201526064016101e5565b6103d98173ffffffffffffffffffffffffffffffffffffffff16600090815260016020819052604090912080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169091179055565b50565b6000602082840312156103ed578081fd5b813573ffffffffffffffffffffffffffffffffffffffff81168114610410578182fd5b939250505056fea2646970667358221220ad25c2a030ca70ad01562efc46a58e7f0bb8a22d27c9f86d97aa3b67993d108b64736f6c63430008040033";

export class Authorizable__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Authorizable> {
    return super.deploy(overrides || {}) as Promise<Authorizable>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Authorizable {
    return super.attach(address) as Authorizable;
  }
  connect(signer: Signer): Authorizable__factory {
    return super.connect(signer) as Authorizable__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AuthorizableInterface {
    return new utils.Interface(_abi) as AuthorizableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Authorizable {
    return new Contract(address, _abi, signerOrProvider) as Authorizable;
  }
}
