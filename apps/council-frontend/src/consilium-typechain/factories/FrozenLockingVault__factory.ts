/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  FrozenLockingVault,
  FrozenLockingVaultInterface,
} from "../FrozenLockingVault";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_staleBlockLag",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "amount",
        type: "int256",
      },
    ],
    name: "VoteChange",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newDelegate",
        type: "address",
      },
    ],
    name: "changeDelegation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "fundedAccount",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "firstDelegation",
        type: "address",
      },
    ],
    name: "deposit",
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
    name: "deposits",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint96",
        name: "",
        type: "uint96",
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
    stateMutability: "nonpayable",
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
        name: "blockNumber",
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
    name: "staleBlockLag",
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
    name: "token",
    outputs: [
      {
        internalType: "contract IERC20",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x60c060405234801561001057600080fd5b5060405161127d38038061127d83398101604081905261002f9161004a565b60609190911b6001600160601b03191660805260a052610082565b6000806040838503121561005c578182fd5b82516001600160a01b0381168114610072578283fd5b6020939093015192949293505050565b60805160601c60a0516111c66100b76000396000818160ba01526103e101526000818161012d01526104f401526111c66000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063e7d202831161005b578063e7d2028314610102578063f45346dc14610115578063fc0c546a14610128578063fc7e286d1461017457600080fd5b80632e1a7d4d1461008d5780639f973fd5146100a2578063c2c94b88146100b5578063d994844a146100ef575b600080fd5b6100a061009b366004610fb4565b6101c0565b005b6100a06100b0366004610e80565b610227565b6100dc7f000000000000000000000000000000000000000000000000000000000000000081565b6040519081526020015b60405180910390f35b6100dc6100fd366004610f05565b6103ca565b6100dc610110366004610ea1565b61041a565b6100a0610123366004610eca565b61043c565b61014f7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100e6565b610187610182366004610e80565b610771565b6040805173ffffffffffffffffffffffffffffffffffffffff90931683526bffffffffffffffffffffffff9091166020830152016100e6565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600660248201527f46726f7a656e000000000000000000000000000000000000000000000000000060448201526064015b60405180910390fd5b60006102316107d8565b33600090815260209190915260408120805473ffffffffffffffffffffffffffffffffffffffff8581167fffffffffffffffffffffffff000000000000000000000000000000000000000083161783559193506bffffffffffffffffffffffff74010000000000000000000000000000000000000000820416929116906102b661081d565b905060006102c48284610870565b90506102dc836102d4868461114a565b849190610906565b73ffffffffffffffffffffffffffffffffffffffff8316337f33161cf2da28d747be9df136b6f3729390298494947268743193c53d73d3c2e061033f877fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611092565b60405190815260200160405180910390a3600061035c8388610870565b90506103748761036c8784611011565b859190610906565b60405185815273ffffffffffffffffffffffffffffffffffffffff88169033907f33161cf2da28d747be9df136b6f3729390298494947268743193c53d73d3c2e09060200160405180910390a350505050505050565b6000806103d561081d565b905061040f87876104067f00000000000000000000000000000000000000000000000000000000000000004361114a565b84929190610a45565b979650505050505050565b60008061042561081d565b9050610432818585610ad7565b9150505b92915050565b73ffffffffffffffffffffffffffffffffffffffff81166104b9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f5a65726f20616464722064656c65676174696f6e000000000000000000000000604482015260640161021e565b6040517f23b872dd000000000000000000000000000000000000000000000000000000008152336004820152306024820152604481018390527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906323b872dd90606401602060405180830381600087803b15801561054d57600080fd5b505af1158015610561573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105859190610f94565b5060006105906107d8565b73ffffffffffffffffffffffffffffffffffffffff8086166000908152602092909252604090912080549092501680610670575080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83161780825582908490839060149061063d9084907401000000000000000000000000000000000000000090046bffffffffffffffffffffffff16611029565b92506101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff1602179055506106d9565b8154849083906014906106aa9084907401000000000000000000000000000000000000000090046bffffffffffffffffffffffff16611029565b92506101000a8154816bffffffffffffffffffffffff02191690836bffffffffffffffffffffffff1602179055505b60006106e361081d565b905060006106f18284610870565b90508273ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff167f33161cf2da28d747be9df136b6f3729390298494947268743193c53d73d3c2e08860405161075291815260200190565b60405180910390a3610768836102d48884611011565b50505050505050565b600080600061077e6107d8565b73ffffffffffffffffffffffffffffffffffffffff9485166000908152602091909152604090205493841694740100000000000000000000000000000000000000009094046bffffffffffffffffffffffff169392505050565b60006108186040518060400160405280600881526020017f6465706f73697473000000000000000000000000000000000000000000000000815250610b38565b905090565b6040805180820190915260608152600060208201526108186040518060400160405280600b81526020017f766f74696e67506f776572000000000000000000000000000000000000000000815250610bb1565b60008061087e846020015190565b73ffffffffffffffffffffffffffffffffffffffff841660009081526020919091526040902080549091506fffffffffffffffffffffffffffffffff16806108cb57600092505050610436565b600061040f836108dc60018561114a565b016001015460c081901c9177ffffffffffffffffffffffffffffffffffffffffffffffff90911690565b77ffffffffffffffffffffffffffffffffffffffffffffffff811115610988576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600360248201527f4f6f420000000000000000000000000000000000000000000000000000000000604482015260640161021e565b6000610995846020015190565b73ffffffffffffffffffffffffffffffffffffffff841660009081526020829052604081208054929350914360c01b9185831791608081901c916fffffffffffffffffffffffffffffffff9091169081156109fd576109f9866108dc60018561114a565b5090505b8143821415610a1457610a1160018461114a565b90505b8481600189010155438214610a3857610a388785610a33866001611011565b610bea565b5050505050505050505050565b600080610a53866020015190565b73ffffffffffffffffffffffffffffffffffffffff86166000908152602082905260408120805492935091608081901c916fffffffffffffffffffffffffffffffff9091169080610aa7858a8a8787610c13565b9150915083821115610ac957610abe848387610dec565b610ac9858385610bea565b9a9950505050505050505050565b600080610ae5856020015190565b73ffffffffffffffffffffffffffffffffffffffff85166000908152602082905260408120805492935091608081901c916fffffffffffffffffffffffffffffffff90911690610ac98488838686610c13565b6000807f03a912cdb153207069d92d44a2357e3f0ce00f7ee84da3510f1c6851b4cac4ee905060008184604051602001610b73929190610fcc565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190528051602090910120949350505050565b6040805180820190915260608152600060208201526000610bd183610e1c565b6040805180820190915293845260208401525090919050565b808210610bf657600080fd5b6fffffffffffffffffffffffffffffffff1660809190911b179055565b60008082610c7d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f756e696e697469616c697a656400000000000000000000000000000000000000604482015260640161021e565b85851115610c8a57600080fd5b828410610c9657600080fd5b6000610ca360018561114a565b90508460005b828214610d475760006002610cbe8585611011565b610cc9906001611011565b610cd39190611059565b6001818d01015490915060c081901c9077ffffffffffffffffffffffffffffffffffffffffffffffff168b821415610d1557929650919450610de29350505050565b8b821015610d31578a821015610d29578293505b829450610d3f565b610d3c60018461114a565b95505b505050610ca9565b60018a8301015460c081901c9077ffffffffffffffffffffffffffffffffffffffffffffffff168a821115610dd8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f536561726368204661696c757265000000000000000000000000000000000000604482015260640161021e565b9195509093505050505b9550959350505050565b81831115610df957600080fd5b60018101835b83811015610e1557600082820155600101610dff565b5050505050565b6000807f7b1a68ec3e3284b167e69db1c622dcfa612281976b71d7e2d239dbe16a75891a905060008184604051602001610b73929190610fcc565b803573ffffffffffffffffffffffffffffffffffffffff81168114610e7b57600080fd5b919050565b600060208284031215610e91578081fd5b610e9a82610e57565b9392505050565b60008060408385031215610eb3578081fd5b610ebc83610e57565b946020939093013593505050565b600080600060608486031215610ede578081fd5b610ee784610e57565b925060208401359150610efc60408501610e57565b90509250925092565b600080600080600060808688031215610f1c578081fd5b610f2586610e57565b94506020860135935060408601359250606086013567ffffffffffffffff80821115610f4f578283fd5b818801915088601f830112610f62578283fd5b813581811115610f70578384fd5b896020828501011115610f81578384fd5b9699959850939650602001949392505050565b600060208284031215610fa5578081fd5b81518015158114610e9a578182fd5b600060208284031215610fc5578081fd5b5035919050565b82815260008251815b81811015610ff157602081860181015185830182015201610fd5565b818111156110025782602083860101525b50919091016020019392505050565b6000821982111561102457611024611161565b500190565b60006bffffffffffffffffffffffff80831681851680830382111561105057611050611161565b01949350505050565b60008261108d577f4e487b710000000000000000000000000000000000000000000000000000000081526012600452602481fd5b500490565b60007f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff818413828413858304851182821616156110d1576110d1611161565b7f80000000000000000000000000000000000000000000000000000000000000008487128682058812818416161561110b5761110b611161565b85871292508782058712848416161561112657611126611161565b8785058712818416161561113c5761113c611161565b505050929093029392505050565b60008282101561115c5761115c611161565b500390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fdfea2646970667358221220ce0dc9910e35e987e0fe198f8452feb617a6bcc963e06b4e7206b721f110c21964736f6c63430008040033";

export class FrozenLockingVault__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _token: string,
    _staleBlockLag: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<FrozenLockingVault> {
    return super.deploy(
      _token,
      _staleBlockLag,
      overrides || {}
    ) as Promise<FrozenLockingVault>;
  }
  getDeployTransaction(
    _token: string,
    _staleBlockLag: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_token, _staleBlockLag, overrides || {});
  }
  attach(address: string): FrozenLockingVault {
    return super.attach(address) as FrozenLockingVault;
  }
  connect(signer: Signer): FrozenLockingVault__factory {
    return super.connect(signer) as FrozenLockingVault__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FrozenLockingVaultInterface {
    return new utils.Interface(_abi) as FrozenLockingVaultInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FrozenLockingVault {
    return new Contract(address, _abi, signerOrProvider) as FrozenLockingVault;
  }
}