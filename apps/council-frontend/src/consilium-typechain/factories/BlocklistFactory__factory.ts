/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  BlocklistFactory,
  BlocklistFactoryInterface,
} from "../BlocklistFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_manager",
        type: "address",
      },
      {
        internalType: "address",
        name: "_ve",
        type: "address",
      },
    ],
    name: "newBlocklist",
    outputs: [
      {
        internalType: "contract Blocklist",
        name: "blocklist",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506105d1806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063fb6e6d4c14610030575b600080fd5b61004361003e3660046100fa565b61006c565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b6000828260405161007c906100c4565b73ffffffffffffffffffffffffffffffffffffffff928316815291166020820152604001604051809103906000f0801580156100bc573d6000803e3d6000fd5b509392505050565b61046f8061012d83390190565b803573ffffffffffffffffffffffffffffffffffffffff811681146100f557600080fd5b919050565b6000806040838503121561010c578182fd5b610115836100d1565b9150610123602084016100d1565b9050925092905056fe60c060405234801561001057600080fd5b5060405161046f38038061046f83398101604081905261002f91610069565b6001600160601b0319606092831b8116608052911b1660a05261009b565b80516001600160a01b038116811461006457600080fd5b919050565b6000806040838503121561007b578182fd5b6100848361004d565b91506100926020840161004d565b90509250929050565b60805160601c60a05160601c61039d6100d260003960008181605601526102cb01526000818160a7015261013f015261039d6000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80631f85071614610051578063481c6a75146100a2578063aba129b6146100c9578063fbac3951146100de575b600080fd5b6100787f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b6100787f000000000000000000000000000000000000000000000000000000000000000081565b6100dc6100d736600461032c565b610127565b005b6101176100ec36600461032c565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205460ff1690565b6040519015158152602001610099565b3373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016146101cb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f4f6e6c79206d616e61676572000000000000000000000000000000000000000060448201526064015b60405180910390fd5b60008173ffffffffffffffffffffffffffffffffffffffff163b1161024c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4f6e6c7920636f6e74726163747300000000000000000000000000000000000060448201526064016101c2565b73ffffffffffffffffffffffffffffffffffffffff8181166000818152602081905260409081902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055517f391cc9f600000000000000000000000000000000000000000000000000000000815260048101919091527f00000000000000000000000000000000000000000000000000000000000000009091169063391cc9f690602401600060405180830381600087803b15801561031157600080fd5b505af1158015610325573d6000803e3d6000fd5b5050505050565b60006020828403121561033d578081fd5b813573ffffffffffffffffffffffffffffffffffffffff81168114610360578182fd5b939250505056fea2646970667358221220c44648a696178f330fff06a0a63231745dd85e2c32f5bb8716fcf8b442f3f2e964736f6c63430008040033a2646970667358221220f5252e47f3856d0a4885e2ccd8426d84a5c4fec77b941a3817b1d26cc7eb042664736f6c63430008040033";

export class BlocklistFactory__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<BlocklistFactory> {
    return super.deploy(overrides || {}) as Promise<BlocklistFactory>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BlocklistFactory {
    return super.attach(address) as BlocklistFactory;
  }
  connect(signer: Signer): BlocklistFactory__factory {
    return super.connect(signer) as BlocklistFactory__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BlocklistFactoryInterface {
    return new utils.Interface(_abi) as BlocklistFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): BlocklistFactory {
    return new Contract(address, _abi, signerOrProvider) as BlocklistFactory;
  }
}
