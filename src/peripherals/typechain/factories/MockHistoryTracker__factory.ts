/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MockHistoryTracker,
  MockHistoryTrackerInterface,
} from "../MockHistoryTracker";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newMin",
        type: "uint256",
      },
    ],
    name: "clear",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "which",
        type: "uint256",
      },
    ],
    name: "find",
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
        name: "which",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "stale",
        type: "uint256",
      },
    ],
    name: "findAndClear",
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
    inputs: [],
    name: "loadBounds",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
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
    name: "loadTop",
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
        internalType: "uint256[]",
        name: "toBePushed",
        type: "uint256[]",
      },
    ],
    name: "multiPush",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "start",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "end",
        type: "uint256",
      },
    ],
    name: "peekArrayData",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "data",
        type: "uint256",
      },
    ],
    name: "push",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610fe3806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063959ac4841161005b578063959ac4841461010457806395d3c7a114610119578063c0fe1af814610121578063c425f7da1461013457610088565b806335878cf71461008d5780633c795d29146100b35780633e530e5b146100d05780636dc925fa146100e3575b600080fd5b6100a061009b366004610e0f565b610147565b6040519081526020015b60405180910390f35b6100bb6101b4565b604080519283526020830191909152016100aa565b6100a06100de366004610df7565b61024d565b6100f66100f1366004610e0f565b6102b6565b6040516100aa929190610eaf565b610117610112366004610df7565b61050d565b005b6100a0610572565b61011761012f366004610df7565b6105d9565b610117610142366004610d87565b61070a565b6000806101886040518060400160405280600881526020017f62616c616e6365730000000000000000000000000000000000000000000000008152506107d7565b90506101aa8173829bd824b016326a401d083b33d092293333a8308686610810565b9150505b92915050565b60008060006101f76040518060400160405280600881526020017f62616c616e6365730000000000000000000000000000000000000000000000008152506107d7565b90506000610206826020015190565b73829bd824b016326a401d083b33d092293333a83060009081526020919091526040902054608081901c956fffffffffffffffffffffffffffffffff909116945092505050565b60008061028e6040518060400160405280600881526020017f62616c616e6365730000000000000000000000000000000000000000000000008152506107d7565b90506102af8173829bd824b016326a401d083b33d092293333a830856108a2565b9392505050565b60608060006102f96040518060400160405280600881526020017f62616c616e6365730000000000000000000000000000000000000000000000008152506107d7565b90506000610308826020015190565b73829bd824b016326a401d083b33d092293333a83060009081526020919091526040812091506103388787610f2e565b67ffffffffffffffff811115610377577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280602002602001820160405280156103a0578160200160208202803683370190505b50905060006103af8888610f2e565b67ffffffffffffffff8111156103ee577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051908082528060200260200182016040528015610417578160200160208202803683370190505b5090506000885b888110156104fe5760018582010154845160c082901c9177ffffffffffffffffffffffffffffffffffffffffffffffff1690829087908690811061048b577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001018181525050808585815181106104d1577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020908102919091010152836104e681610f45565b945050505080806104f690610f45565b91505061041e565b50919890975095505050505050565b600061054d6040518060400160405280600881526020017f62616c616e6365730000000000000000000000000000000000000000000000008152506107d7565b905061056e8173829bd824b016326a401d083b33d092293333a83084610903565b5050565b6000806105b36040518060400160405280600881526020017f62616c616e6365730000000000000000000000000000000000000000000000008152506107d7565b90506105d38173829bd824b016326a401d083b33d092293333a830610a6c565b91505090565b60006106196040518060400160405280600881526020017f62616c616e6365730000000000000000000000000000000000000000000000008152506107d7565b90506000610628826020015190565b73829bd824b016326a401d083b33d092293333a8306000908152602091909152604090208054909150608081901c906fffffffffffffffffffffffffffffffff168185111561069c5761067c828685610ae3565b6fffffffffffffffffffffffffffffffff8116608086901b178355610703565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f436c656172206f7574206f6620626f756e64730000000000000000000000000060448201526064015b60405180910390fd5b5050505050565b600061074a6040518060400160405280600881526020017f62616c616e6365730000000000000000000000000000000000000000000000008152506107d7565b905060005b828110156107d1576107bf73829bd824b016326a401d083b33d092293333a8308585848181106107a8577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90506020020135846109039092919063ffffffff16565b806107c981610f45565b91505061074f565b50505050565b60408051808201909152606081526000602082015260006107f783610b1c565b6040805180820190915293845260208401525090919050565b60008061081e866020015190565b73ffffffffffffffffffffffffffffffffffffffff86166000908152602082905260408120805492935091608081901c916fffffffffffffffffffffffffffffffff9091169080610872858a8a8787610b95565b915091508382111561089457610889848387610d6e565b610894858385610d7b565b9a9950505050505050505050565b6000806108b0856020015190565b73ffffffffffffffffffffffffffffffffffffffff85166000908152602082905260408120805492935091608081901c916fffffffffffffffffffffffffffffffff909116906108948488838686610b95565b77ffffffffffffffffffffffffffffffffffffffffffffffff811115610985576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600360248201527f4f6f42000000000000000000000000000000000000000000000000000000000060448201526064016106fa565b6000610992846020015190565b73ffffffffffffffffffffffffffffffffffffffff841660009081526020829052604081208054929350914360c01b9185831791608081901c916fffffffffffffffffffffffffffffffff909116908115610a2457610a20866109f6600185610f2e565b016001015460c081901c9177ffffffffffffffffffffffffffffffffffffffffffffffff90911690565b5090505b8143821415610a3b57610a38600184610f2e565b90505b8481600189010155438214610a5f57610a5f8785610a5a866001610edd565b610d7b565b5050505050505050505050565b600080610a7a846020015190565b73ffffffffffffffffffffffffffffffffffffffff841660009081526020919091526040902080549091506fffffffffffffffffffffffffffffffff1680610ac7576000925050506101ae565b6000610ad8836109f6600185610f2e565b979650505050505050565b60018101835b8381101561070357600082820155600101610ae9565b6fffffffffffffffffffffffffffffffff1660809190911b179055565b6000807f7b1a68ec3e3284b167e69db1c622dcfa612281976b71d7e2d239dbe16a75891a905060008184604051602001610b57929190610e6a565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190528051602090910120949350505050565b60008082610bff576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f756e696e697469616c697a65640000000000000000000000000000000000000060448201526064016106fa565b85851115610c0c57600080fd5b828410610c1857600080fd5b6000610c25600185610f2e565b90508460005b828214610cc95760006002610c408585610edd565b610c4b906001610edd565b610c559190610ef5565b6001818d01015490915060c081901c9077ffffffffffffffffffffffffffffffffffffffffffffffff168b821415610c9757929650919450610d649350505050565b8b821015610cb3578a821015610cab578293505b829450610cc1565b610cbe600184610f2e565b95505b505050610c2b565b60018a8301015460c081901c9077ffffffffffffffffffffffffffffffffffffffffffffffff168a821115610d5a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f536561726368204661696c75726500000000000000000000000000000000000060448201526064016106fa565b9195509093505050505b9550959350505050565b81831115610ae357600080fd5b808210610aff57600080fd5b60008060208385031215610d99578182fd5b823567ffffffffffffffff80821115610db0578384fd5b818501915085601f830112610dc3578384fd5b813581811115610dd1578485fd5b8660208260051b8501011115610de5578485fd5b60209290920196919550909350505050565b600060208284031215610e08578081fd5b5035919050565b60008060408385031215610e21578182fd5b50508035926020909101359150565b6000815180845260208085019450808401835b83811015610e5f57815187529582019590820190600101610e43565b509495945050505050565b60008382528251815b81811015610e8f57602081860181015185830182015201610e73565b81811115610ea05782602083860101525b50919091016020019392505050565b600060408252610ec26040830185610e30565b8281036020840152610ed48185610e30565b95945050505050565b60008219821115610ef057610ef0610f7e565b500190565b600082610f29577f4e487b710000000000000000000000000000000000000000000000000000000081526012600452602481fd5b500490565b600082821015610f4057610f40610f7e565b500390565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610f7757610f77610f7e565b5060010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fdfea264697066735822122014c30a4c4e94b0538270938a78db3c6dd375d49b783a0a19aa35d6dcb2f0d32964736f6c63430008030033";

type MockHistoryTrackerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockHistoryTrackerConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockHistoryTracker__factory extends ContractFactory {
  constructor(...args: MockHistoryTrackerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<MockHistoryTracker> {
    return super.deploy(overrides || {}) as Promise<MockHistoryTracker>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockHistoryTracker {
    return super.attach(address) as MockHistoryTracker;
  }
  connect(signer: Signer): MockHistoryTracker__factory {
    return super.connect(signer) as MockHistoryTracker__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockHistoryTrackerInterface {
    return new utils.Interface(_abi) as MockHistoryTrackerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): MockHistoryTracker {
    return new Contract(address, _abi, signerOrProvider) as MockHistoryTracker;
  }
}
