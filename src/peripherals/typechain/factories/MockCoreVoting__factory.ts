/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MockCoreVoting,
  MockCoreVotingInterface,
} from "../MockCoreVoting";

const _abi = [
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
        name: "vault",
        type: "address",
      },
      {
        internalType: "bool",
        name: "what",
        type: "bool",
      },
    ],
    name: "setVault",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610192806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063627f66c61461003b578063af7a060c146100a1575b600080fd5b61009f610049366004610122565b73ffffffffffffffffffffffffffffffffffffffff91909116600090815260208190526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016911515919091179055565b005b6100c46100af366004610101565b60006020819052908152604090205460ff1681565b604051901515815260200160405180910390f35b803573ffffffffffffffffffffffffffffffffffffffff811681146100fc57600080fd5b919050565b600060208284031215610112578081fd5b61011b826100d8565b9392505050565b60008060408385031215610134578081fd5b61013d836100d8565b915060208301358015158114610151578182fd5b80915050925092905056fea2646970667358221220765259683fc0c13b52727073d1629c8ed94277139f34771beb04295387aac55564736f6c63430008030033";

type MockCoreVotingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockCoreVotingConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockCoreVoting__factory extends ContractFactory {
  constructor(...args: MockCoreVotingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<MockCoreVoting> {
    return super.deploy(overrides || {}) as Promise<MockCoreVoting>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockCoreVoting {
    return super.attach(address) as MockCoreVoting;
  }
  connect(signer: Signer): MockCoreVoting__factory {
    return super.connect(signer) as MockCoreVoting__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockCoreVotingInterface {
    return new utils.Interface(_abi) as MockCoreVotingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): MockCoreVoting {
    return new Contract(address, _abi, signerOrProvider) as MockCoreVoting;
  }
}
