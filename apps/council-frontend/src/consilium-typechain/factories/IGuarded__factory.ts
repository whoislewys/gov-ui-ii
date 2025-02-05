/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IGuarded, IGuardedInterface } from "../IGuarded";

const _abi = [
  {
    inputs: [],
    name: "ANY_CALLER",
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
    inputs: [],
    name: "ANY_SIG",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "sig",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "who",
        type: "address",
      },
    ],
    name: "allowCaller",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "sig",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "who",
        type: "address",
      },
    ],
    name: "blockCaller",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "sig",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "who",
        type: "address",
      },
    ],
    name: "canCall",
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
];

export class IGuarded__factory {
  static readonly abi = _abi;
  static createInterface(): IGuardedInterface {
    return new utils.Interface(_abi) as IGuardedInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IGuarded {
    return new Contract(address, _abi, signerOrProvider) as IGuarded;
  }
}
