/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MockTokenLogic,
  MockTokenLogicInterface,
} from "../MockTokenLogic";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
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
        name: "who",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "increaseBalance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "slot",
        type: "uint256",
      },
    ],
    name: "readStorage",
    outputs: [
      {
        internalType: "bytes32",
        name: "data",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "slot",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "data",
        type: "bytes32",
      },
    ],
    name: "writeStorage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161089538038061089583398101604081905261002f916100f9565b60006100616040518060400160405280600581526020016437bbb732b960d91b81525061008160201b61039f1760201c565b905061007a82826100dc60201b6104181790919060201c565b505061016c565b6000807f421683f821a0574472445355be6d2b769119e8515f8376a1d7878523dfdecf7b9050600081846040516020016100bc929190610127565b60408051601f198184030181529190528051602090910120949350505050565b81546001600160a01b0319166001600160a01b0391909116179055565b60006020828403121561010a578081fd5b81516001600160a01b0381168114610120578182fd5b9392505050565b82815260008251815b8181101561014c57602081860181015185830182015201610130565b8181111561015d5782602083860101525b50919091016020019392505050565b61071a8061017b6000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80635b86f5991161005b5780635b86f599146100c357806370a08231146100d6578063a9059cbb146100e9578063e10af4ad146100fc57600080fd5b806318160ddd146100825780632cab83351461009c57806340c10f19146100ae575b600080fd5b61008a61010e565b60405190815260200160405180910390f35b61008a6100aa366004610608565b5490565b6100c16100bc3660046105df565b610129565b005b6100c16100d13660046105df565b610274565b61008a6100e43660046105be565b6102f5565b6100c16100f73660046105df565b61032d565b6100c161010a366004610620565b9055565b60008061011961045a565b9050610123815490565b91505090565b600061013361049f565b9050610153815473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146101eb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f756e617574686f72697a65640000000000000000000000000000000000000000604482015260640160405180910390fd5b60006101f561045a565b905060006102016104df565b9050838160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546102519190610686565b9091555050815461026c6102658683610686565b849061010a565b505050505050565b600061027e61045a565b9050600061028a6104df565b9050828160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546102da9190610686565b909155505081546102ee6102658583610686565b5050505050565b6000806103006104df565b73ffffffffffffffffffffffffffffffffffffffff90931660009081526020939093525050604090205490565b60006103376104df565b3360009081526020829052604081208054929350849290919061035b90849061069e565b909155505073ffffffffffffffffffffffffffffffffffffffff831660009081526020829052604081208054849290610395908490610686565b9091555050505050565b6000807f421683f821a0574472445355be6d2b769119e8515f8376a1d7878523dfdecf7b9050600081846040516020016103da929190610641565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190528051602090910120949350505050565b81547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff91909116179055565b600061049a6040518060400160405280600b81526020017f746f74616c537570706c7900000000000000000000000000000000000000000081525061051f565b905090565b600061049a6040518060400160405280600581526020017f6f776e657200000000000000000000000000000000000000000000000000000081525061039f565b600061049a6040518060400160405280600881526020017f62616c616e63657300000000000000000000000000000000000000000000000081525061055a565b6000807fec13d6d12b88433319b64e1065a96ea19cd330ef6603f5f6fb685dde3959a3209050600081846040516020016103da929190610641565b6000807f57f81c1497fd9382c9a7940a80bdc573c8799f1d06648c835389d4f759c45c3a9050600081846040516020016103da929190610641565b803573ffffffffffffffffffffffffffffffffffffffff811681146105b957600080fd5b919050565b6000602082840312156105cf578081fd5b6105d882610595565b9392505050565b600080604083850312156105f1578081fd5b6105fa83610595565b946020939093013593505050565b600060208284031215610619578081fd5b5035919050565b60008060408385031215610632578182fd5b50508035926020909101359150565b82815260008251815b818110156106665760208186018101518583018201520161064a565b818111156106775782602083860101525b50919091016020019392505050565b60008219821115610699576106996106b5565b500190565b6000828210156106b0576106b06106b5565b500390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fdfea26469706673582212203446cac6c1837697d4caea437744c50e5c2c1d3b2dee74dd2c692833d2e9f61564736f6c63430008040033";

export class MockTokenLogic__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockTokenLogic> {
    return super.deploy(_owner, overrides || {}) as Promise<MockTokenLogic>;
  }
  getDeployTransaction(
    _owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_owner, overrides || {});
  }
  attach(address: string): MockTokenLogic {
    return super.attach(address) as MockTokenLogic;
  }
  connect(signer: Signer): MockTokenLogic__factory {
    return super.connect(signer) as MockTokenLogic__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockTokenLogicInterface {
    return new utils.Interface(_abi) as MockTokenLogicInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockTokenLogic {
    return new Contract(address, _abi, signerOrProvider) as MockTokenLogic;
  }
}
