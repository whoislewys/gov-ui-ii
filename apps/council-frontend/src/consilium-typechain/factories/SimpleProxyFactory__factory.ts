/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  SimpleProxyFactory,
  SimpleProxyFactoryInterface,
} from "../SimpleProxyFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "contract VestingVault",
        name: "implementation",
        type: "address",
      },
    ],
    name: "newSimpleProxy",
    outputs: [
      {
        internalType: "contract SimpleProxy",
        name: "simpleProxy",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061057d806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80636aa1e27914610030575b600080fd5b61004361003e3660046100d1565b61006c565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b6000828260405161007c906100c4565b73ffffffffffffffffffffffffffffffffffffffff928316815291166020820152604001604051809103906000f0801580156100bc573d6000803e3d6000fd5b509392505050565b6104198061012f83390190565b600080604083850312156100e3578182fd5b82356100ee81610109565b915060208301356100fe81610109565b809150509250929050565b73ffffffffffffffffffffffffffffffffffffffff8116811461012b57600080fd5b5056fe608060405234801561001057600080fd5b5060405161041938038061041983398101604081905261002f9161007c565b600180546001600160a01b039384166001600160a01b031991821617909155600080549290931691161790556100ae565b80516001600160a01b038116811461007757600080fd5b919050565b6000806040838503121561008e578182fd5b61009783610060565b91506100a560208401610060565b90509250929050565b61035c806100bd6000396000f3fe60806040526004361061003f5760003560e01c80630c870f911461009157806374474d28146100e75780638c1e1df014610109578063c01cc4d114610136575b368061004757005b60405181600082378082016040526000805473ffffffffffffffffffffffffffffffffffffffff1690808484845af492505060405190503d806000833e8261008d578082fd5b8082f35b34801561009d57600080fd5b506000546100be9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b3480156100f357600080fd5b506101076101023660046102eb565b610156565b005b34801561011557600080fd5b506001546100be9073ffffffffffffffffffffffffffffffffffffffff1681565b34801561014257600080fd5b506101076101513660046102eb565b610223565b60015473ffffffffffffffffffffffffffffffffffffffff1633146101dc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f756e617574686f72697a6564000000000000000000000000000000000000000060448201526064015b60405180910390fd5b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60015473ffffffffffffffffffffffffffffffffffffffff1633146102a4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f756e617574686f72697a6564000000000000000000000000000000000000000060448201526064016101d3565b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6000602082840312156102fc578081fd5b813573ffffffffffffffffffffffffffffffffffffffff8116811461031f578182fd5b939250505056fea2646970667358221220ce9636496ab15a2e7324bac987d47fcfd904b31e4168919008c876609791266564736f6c63430008040033a264697066735822122092977b5a6381e156459a59d4472ec89dedad9ac4f69aeeeb02d335bdd7296e0f64736f6c63430008040033";

export class SimpleProxyFactory__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<SimpleProxyFactory> {
    return super.deploy(overrides || {}) as Promise<SimpleProxyFactory>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SimpleProxyFactory {
    return super.attach(address) as SimpleProxyFactory;
  }
  connect(signer: Signer): SimpleProxyFactory__factory {
    return super.connect(signer) as SimpleProxyFactory__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SimpleProxyFactoryInterface {
    return new utils.Interface(_abi) as SimpleProxyFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): SimpleProxyFactory {
    return new Contract(address, _abi, signerOrProvider) as SimpleProxyFactory;
  }
}