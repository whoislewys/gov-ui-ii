/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  VotingEscrowVault,
  VotingEscrowVaultInterface,
} from "../VotingEscrowVault";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_ve",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
        name: "_block",
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
    stateMutability: "nonpayable",
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
        name: "_block",
        type: "uint256",
      },
    ],
    name: "queryVotePowerView",
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
    name: "ve",
    outputs: [
      {
        internalType: "contract IVotingEscrow",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b5060405161043e38038061043e83398101604081905261002f91610044565b60601b6001600160601b031916608052610072565b600060208284031215610055578081fd5b81516001600160a01b038116811461006b578182fd5b9392505050565b60805160601c6103a161009d60003960008181604b0152818161011a01526101ef01526103a16000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80631f85071614610046578063d994844a14610097578063e7d20283146100b8575b600080fd5b61006d7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b6100aa6100a53660046102c4565b6100cb565b60405190815260200161008e565b6100aa6100c636600461029b565b6101a0565b6040517f4ee2cd7e00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8681166004830152602482018690526000917f000000000000000000000000000000000000000000000000000000000000000090911690634ee2cd7e9060440160206040518083038186803b15801561015e57600080fd5b505afa158015610172573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101969190610353565b9695505050505050565b6040517f4ee2cd7e00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8381166004830152602482018390526000917f000000000000000000000000000000000000000000000000000000000000000090911690634ee2cd7e9060440160206040518083038186803b15801561023357600080fd5b505afa158015610247573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061026b9190610353565b9392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461029657600080fd5b919050565b600080604083850312156102ad578182fd5b6102b683610272565b946020939093013593505050565b6000806000806000608086880312156102db578081fd5b6102e486610272565b94506020860135935060408601359250606086013567ffffffffffffffff8082111561030e578283fd5b818801915088601f830112610321578283fd5b81358181111561032f578384fd5b896020828501011115610340578384fd5b9699959850939650602001949392505050565b600060208284031215610364578081fd5b505191905056fea2646970667358221220629fb93fe3936c7ad895812f98bcceb1a85ee7f3ee1c104db5d341b4ffa4466a64736f6c63430008040033";

export class VotingEscrowVault__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _ve: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<VotingEscrowVault> {
    return super.deploy(_ve, overrides || {}) as Promise<VotingEscrowVault>;
  }
  getDeployTransaction(
    _ve: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_ve, overrides || {});
  }
  attach(address: string): VotingEscrowVault {
    return super.attach(address) as VotingEscrowVault;
  }
  connect(signer: Signer): VotingEscrowVault__factory {
    return super.connect(signer) as VotingEscrowVault__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VotingEscrowVaultInterface {
    return new utils.Interface(_abi) as VotingEscrowVaultInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VotingEscrowVault {
    return new Contract(address, _abi, signerOrProvider) as VotingEscrowVault;
  }
}
