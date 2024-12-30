/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  DeployerConsilium,
  DeployerConsiliumInterface,
} from "../DeployerConsilium";

const _abi = [
  {
    inputs: [],
    name: "Deployer__checkStep_missingPreviousStep",
    type: "error",
  },
  {
    inputs: [],
    name: "Guarded__notGranted",
    type: "error",
  },
  {
    inputs: [],
    name: "Guarded__notRoot",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "sig",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "who",
        type: "address",
      },
    ],
    name: "AllowCaller",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "sig",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "who",
        type: "address",
      },
    ],
    name: "BlockCaller",
    type: "event",
  },
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
        internalType: "address",
        name: "vestingManager",
        type: "address",
      },
    ],
    name: "assertOwnership",
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
    name: "baseQuorum",
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
    inputs: [],
    name: "blocklist",
    outputs: [
      {
        internalType: "contract Blocklist",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "blocklistFactory",
    outputs: [
      {
        internalType: "contract BlocklistFactory",
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
  {
    inputs: [],
    name: "comitium",
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
    name: "comitiumVault",
    outputs: [
      {
        internalType: "contract ComitiumVault",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "comitiumVaultFactory",
    outputs: [
      {
        internalType: "contract ComitiumVaultFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "coreVoting",
    outputs: [
      {
        internalType: "contract CoreVoting",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "coreVotingFactory",
    outputs: [
      {
        internalType: "contract CoreVotingFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "coreVotingGSC",
    outputs: [
      {
        internalType: "contract CoreVoting",
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
        name: "_manager",
        type: "address",
      },
    ],
    name: "deployBlocklist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "deployComitiumVault",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "deployCoreVoting",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "deployGSCCoreVoting",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "deployGSCVault",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "deploySimpleProxy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "deployTimelock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "fdt",
        type: "address",
      },
      {
        internalType: "address",
        name: "vestingManager",
        type: "address",
      },
    ],
    name: "deployVestingVault",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_penaltyRecipient",
        type: "address",
      },
      {
        internalType: "address",
        name: "_lpToken",
        type: "address",
      },
    ],
    name: "deployVotingEscrow",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_manager",
        type: "address",
      },
    ],
    name: "deployVotingEscrowVault",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "expiration",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getVaults",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getVaultsGSC",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "gscVault",
    outputs: [
      {
        internalType: "contract GSCVault",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "gscVaultFactory",
    outputs: [
      {
        internalType: "contract GSCVaultFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "minProposalPower",
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
        internalType: "contract CoreVotingFactory",
        name: "coreVotingFactory_",
        type: "address",
      },
      {
        internalType: "contract TimelockFactory",
        name: "timelockFactory_",
        type: "address",
      },
      {
        internalType: "contract GSCVaultFactory",
        name: "gscVaultFactory_",
        type: "address",
      },
      {
        internalType: "contract BlocklistFactory",
        name: "blocklistFactory_",
        type: "address",
      },
      {
        internalType: "contract VotingEscrowFactory",
        name: "votingEscrowFactory_",
        type: "address",
      },
      {
        internalType: "contract VotingEscrowVaultFactory",
        name: "votingEscrowVaultFactory_",
        type: "address",
      },
      {
        internalType: "contract ComitiumVaultFactory",
        name: "comitiumVaultFactory_",
        type: "address",
      },
      {
        internalType: "contract VestingVaultFactory",
        name: "vestingVaultFactory_",
        type: "address",
      },
      {
        internalType: "contract SimpleProxyFactory",
        name: "simpleProxyFactory_",
        type: "address",
      },
    ],
    name: "setFactory",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "setGSCandTimelock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "simpleProxy",
    outputs: [
      {
        internalType: "contract SimpleProxy",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "simpleProxyFactory",
    outputs: [
      {
        internalType: "contract SimpleProxyFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "step",
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
    name: "timelock",
    outputs: [
      {
        internalType: "contract Timelock",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "timelockFactory",
    outputs: [
      {
        internalType: "contract TimelockFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "transferTimelock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "vestingVault",
    outputs: [
      {
        internalType: "contract VestingVault",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "vestingVaultFactory",
    outputs: [
      {
        internalType: "contract VestingVaultFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "voteScale",
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
    name: "votingEscrow",
    outputs: [
      {
        internalType: "contract VotingEscrow",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "votingEscrowFactory",
    outputs: [
      {
        internalType: "contract VotingEscrowFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "votingEscrowVault",
    outputs: [
      {
        internalType: "contract VotingEscrowVault",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "votingEscrowVaultFactory",
    outputs: [
      {
        internalType: "contract VotingEscrowVaultFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "votingPowerBound",
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
    name: "waitTime",
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
  "0x608060405262093a806014556706f05b59d3b2000060165534801561002357600080fd5b5061002d33610032565b6100d2565b6001600160a01b03811660008181527f107ee6c9edf8142ba51e10023f320f7b6ccd180a42be95ddbc18c0e5425b29006020908152604091829020805460ff1916600117905581517f13eb61d6467453b8d8e0d2a40b8dcee776dde376f951013dfdab1b9189651b618152908101929092527f9c21fb13a2f9c0e9222fe9a6810fe483b60248132981e1e0554bae602e93a9dd910160405180910390a150565b612b7b80620000e26000396000f3fe608060405234801561001057600080fd5b50600436106103205760003560e01c806385e33766116101a7578063bbbf3237116100ee578063dc8c19e411610097578063f11c5fe411610071578063f11c5fe414610679578063f1a4af101461068c578063f9d137b01461069f57600080fd5b8063dc8c19e41461064a578063e25fe1751461065d578063e6aa01f71461066657600080fd5b8063d33219b4116100c8578063d33219b41461061b578063d4b875671461062e578063d64e53961461063757600080fd5b8063bbbf3237146105d8578063bbd91c46146105eb578063ccca123b1461061257600080fd5b8063a2c980c711610150578063a746d4891161012a578063a746d4891461059f578063ae4b3628146105b2578063b85c8704146105c557600080fd5b8063a2c980c714610566578063a37ebdcb14610579578063a5917baf1461058c57600080fd5b806391ae1d6e1161018157806391ae1d6e1461052d5780639286e8ce1461054057806399082e0c1461055357600080fd5b806385e33766146104ff5780638beaa666146105075780638fcc7aa11461051a57600080fd5b806344d00f821161026b57806355e3ce51116102145780636b03170a116101ee5780636b03170a146104e75780637060f2e7146104ef5780637e94dac7146104f757600080fd5b806355e3ce51146104c35780635cf84d4d146104cc578063601846df146104d457600080fd5b806347317a4a1161024557806347317a4a146104855780634f2bfe5b1461048d57806352b43adf146104a057600080fd5b806344d00f821461042b57806345c01762146104405780634665096d1461044857600080fd5b8063217d5abb116102cd57806338e02bf7116102a757806338e02bf7146103fc578063439e71171461040557806344b912511461041857600080fd5b8063217d5abb146103af5780632936ff2b146103c2578063377f0aaa146103e957600080fd5b80631bea8180116102fe5780631bea8180146103725780631c39c96c146103855780631eeec3451461039c57600080fd5b8063012abbe914610325578063097e2a151461033a5780630bcca55714610342575b600080fd5b610338610333366004612920565b6106a7565b005b610338610795565b600954610355906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b600754610355906001600160a01b031681565b61038e60185481565b604051908152602001610369565b600254610355906001600160a01b031681565b601054610355906001600160a01b031681565b61038e7f13eb61d6467453b8d8e0d2a40b8dcee776dde376f951013dfdab1b9189651b6181565b6103386103f73660046128c8565b61090b565b61038e601a5481565b600654610355906001600160a01b031681565b600e54610355906001600160a01b031681565b610433610aa1565b6040516103699190612a85565b610338610b03565b601754610464906fffffffffffffffffffffffffffffffff1681565b6040516fffffffffffffffffffffffffffffffff9091168152602001610369565b610338610c83565b600d54610355906001600160a01b031681565b6104b36104ae366004612920565b610dc6565b6040519015158152602001610369565b61038e60165481565b610338610e69565b600154610355906001600160a01b031681565b61043361103e565b61033861109e565b6103386111f2565b610338611330565b610338610515366004612890565b6114fa565b6104b3610528366004612890565b6116af565b61033861053b366004612944565b61233c565b61033861054e3660046129ff565b612449565b610338610561366004612890565b612589565b600b54610355906001600160a01b031681565b600454610355906001600160a01b031681565b600f54610355906001600160a01b031681565b6103386105ad366004612920565b6126b9565b601154610355906001600160a01b031681565b600554610355906001600160a01b031681565b601254610355906001600160a01b031681565b6103557f48a48edb17b6277f3d9897feeb510d1503580c3997a055cb5a635e86f81c243a81565b61038e60145481565b600a54610355906001600160a01b031681565b61038e60195481565b600c54610355906001600160a01b031681565b600354610355906001600160a01b031681565b61038e601b5481565b600854610355906001600160a01b031681565b601354610355906001600160a01b031681565b601554610355906001600160a01b031681565b610338612770565b3360009081527f107ee6c9edf8142ba51e10023f320f7b6ccd180a42be95ddbc18c0e5425b2900602052604090205460ff1615610763576000828152602081815260408083206001600160a01b0385168085529083529281902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690558051858152918201929092527faec761575684e54a883064093131de012d7a9e8fc898f13474e50fcfbdce7d0b91015b60405180910390a15050565b6040517f6d6b83b300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107c37fffffffff000000000000000000000000000000000000000000000000000000006000351633610dc6565b156108d957601b546007908082146107ee57604051630fc34b4960e31b815260040160405180910390fd5b600754600a54600f546040517f6aa1e2790000000000000000000000000000000000000000000000000000000081526001600160a01b0392831660048201529082166024820152911690636aa1e27990604401602060405180830381600087803b15801561085b57600080fd5b505af115801561086f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061089391906128ac565b6010805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055601b80549060006108d083612ad2565b91905055505050565b6040517faa68b5bf00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6109397fffffffff000000000000000000000000000000000000000000000000000000006000351633610dc6565b156108d957601b5460039080821461096457604051630fc34b4960e31b815260040160405180910390fd5b600480546040517fb25836e300000000000000000000000000000000000000000000000000000000815230928101929092526001600160a01b038681166024840152858116604484015260a06064840152600560a484018190527f766546445400000000000000000000000000000000000000000000000000000060c4850181905260e0608486015260e4850191909152610104840152169063b25836e39061012401602060405180830381600087803b158015610a2157600080fd5b505af1158015610a35573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a5991906128ac565b600d805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055601b8054906000610a9683612ad2565b919050555050505050565b6060601c805480602002602001604051908101604052809291908181526020018280548015610af957602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610adb575b5050505050905090565b610b317fffffffff000000000000000000000000000000000000000000000000000000006000351633610dc6565b156108d957601b54600990808214610b5c57604051630fc34b4960e31b815260040160405180910390fd5b600954601154601a54600a546040517ff57d13400000000000000000000000000000000000000000000000000000000081526001600160a01b03938416600482015260248101929092528216604482015291169063f57d134090606401602060405180830381600087803b158015610bd357600080fd5b505af1158015610be7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c0b91906128ac565b601280546001600160a01b039290921673ffffffffffffffffffffffffffffffffffffffff199283168117909155601d805460018101825560009182527f6d4407e7be21f808e6509aa9fa9143369579dd7d760fe20a2c09680fc146134f018054909316909117909155601b8054916108d083612ad2565b610cb17fffffffff000000000000000000000000000000000000000000000000000000006000351633610dc6565b156108d957601b54600a90808214610cdc57604051630fc34b4960e31b815260040160405180910390fd5b600854600a546018546019546040517f865b71120000000000000000000000000000000000000000000000000000000081526001600160a01b039485169463865b711294610d37949116929091600090601d90600401612a11565b602060405180830381600087803b158015610d5157600080fd5b505af1158015610d65573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d8991906128ac565b6013805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055601b80549060006108d083612ad2565b6000828152602081815260408083206001600160a01b038516845290915281205460ff1680610e2c57506001600160a01b03821660009081527f107ee6c9edf8142ba51e10023f320f7b6ccd180a42be95ddbc18c0e5425b2900602052604090205460ff165b80610e62575060008381526020818152604080832073eb510d1503580c3997a055cb5a635e86f81c243a845290915290205460ff165b9392505050565b610e977fffffffff000000000000000000000000000000000000000000000000000000006000351633610dc6565b156108d957601b54600c90808214610ec257604051630fc34b4960e31b815260040160405180910390fd5b600a546013546040517fb6a5d7de0000000000000000000000000000000000000000000000000000000081526001600160a01b03918216600482015291169063b6a5d7de90602401600060405180830381600087803b158015610f2457600080fd5b505af1158015610f38573d6000803e3d6000fd5b5050600a546040517f27c97fa50000000000000000000000000000000000000000000000000000000081523060048201526001600160a01b0390911692506327c97fa59150602401600060405180830381600087803b158015610f9a57600080fd5b505af1158015610fae573d6000803e3d6000fd5b5050600a546011546040517f13af40350000000000000000000000000000000000000000000000000000000081526001600160a01b039182166004820152911692506313af403591506024015b600060405180830381600087803b15801561101557600080fd5b505af1158015611029573d6000803e3d6000fd5b5050601b80549250905060006108d083612ad2565b6060601d805480602002602001604051908101604052809291908181526020018280548015610af9576020028201919060005260206000209081546001600160a01b03168152600190910190602001808311610adb575050505050905090565b6110cc7fffffffff000000000000000000000000000000000000000000000000000000006000351633610dc6565b156108d957601b546002908082146110f757604051630fc34b4960e31b815260040160405180910390fd5b6002546015546017546016546040517f187ef3870000000000000000000000000000000000000000000000000000000081526001600160a01b0393841660048201526fffffffffffffffffffffffffffffffff9092166024830152604482015291169063187ef38790606401602060405180830381600087803b15801561117d57600080fd5b505af1158015611191573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111b591906128ac565b600b805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055601b80549060006108d083612ad2565b6112207fffffffff000000000000000000000000000000000000000000000000000000006000351633610dc6565b156108d957601b5460019080821461124b57604051630fc34b4960e31b815260040160405180910390fd5b6001546014546040517f415baca50000000000000000000000000000000000000000000000000000000081526004810191909152306024820181905260448201526001600160a01b039091169063415baca590606401602060405180830381600087803b1580156112bb57600080fd5b505af11580156112cf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112f391906128ac565b600a805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055601b80549060006108d083612ad2565b61135e7fffffffff000000000000000000000000000000000000000000000000000000006000351633610dc6565b156108d957601b5460089080821461138957604051630fc34b4960e31b815260040160405180910390fd5b600b54601c80546001818101835560008381527f0e4562a10381dec21b205ed72637e6b1b523bdd0e4d4d50af5cd23dd4500a211928301805473ffffffffffffffffffffffffffffffffffffffff199081166001600160a01b0397881617909155600e548554808501875585018054831691881691909117905560105485549384018655929093018054909316918516919091179091556008546018546019546040517f865b7112000000000000000000000000000000000000000000000000000000008152929095169463865b71129461146b943094909190600401612a11565b602060405180830381600087803b15801561148557600080fd5b505af1158015611499573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114bd91906128ac565b6011805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055601b80549060006108d083612ad2565b6115287fffffffff000000000000000000000000000000000000000000000000000000006000351633610dc6565b156108d957601b5460049080821461155357604051630fc34b4960e31b815260040160405180910390fd5b600354600d546040517ffb6e6d4c0000000000000000000000000000000000000000000000000000000081526001600160a01b038681166004830152918216602482015291169063fb6e6d4c90604401602060405180830381600087803b1580156115bd57600080fd5b505af11580156115d1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115f591906128ac565b600c805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b03928316908117909155600d546040517f4684532e000000000000000000000000000000000000000000000000000000008152600481019290925290911690634684532e90602401600060405180830381600087803b15801561167957600080fd5b505af115801561168d573d6000803e3d6000fd5b5050601b80549250905060006116a283612ad2565b9190505550505050565b50565b601154600a54604080517f8da5cb5b00000000000000000000000000000000000000000000000000000000815290516000936001600160a01b03908116931691638da5cb5b916004808301926020929190829003018186803b15801561171457600080fd5b505afa158015611728573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061174c91906128ac565b6001600160a01b0316146117a75760405162461bcd60e51b815260206004820152601460248201527f57726f6e672054696d656c6f636b204f776e657200000000000000000000000060448201526064015b60405180910390fd5b600a546013546040517ffe9fbb800000000000000000000000000000000000000000000000000000000081526001600160a01b03918216600482015291169063fe9fbb809060240160206040518083038186803b15801561180757600080fd5b505afa15801561181b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061183f9190612900565b61188b5760405162461bcd60e51b815260206004820152601e60248201527f475343206e6f7420617574686f72697a656420696e2074696d656c6f636b0000604482015260640161179e565b600a546040517ffe9fbb800000000000000000000000000000000000000000000000000000000081523060048201526001600160a01b039091169063fe9fbb809060240160206040518083038186803b1580156118e757600080fd5b505afa1580156118fb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061191f9190612900565b156119925760405162461bcd60e51b815260206004820152602d60248201527f5468697320636f6e7472616374206973207374696c6c20617574686f72697a6560448201527f64206f6e2074696d656c6f636b00000000000000000000000000000000000000606482015260840161179e565b600a54601154604080517f8da5cb5b00000000000000000000000000000000000000000000000000000000815290516001600160a01b039384169390921691638da5cb5b91600480820192602092909190829003018186803b1580156119f757600080fd5b505afa158015611a0b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a2f91906128ac565b6001600160a01b031614611a855760405162461bcd60e51b815260206004820152601660248201527f57726f6e6720436f7265566f74696e67204f776e657200000000000000000000604482015260640161179e565b6011546013546040517ffe9fbb800000000000000000000000000000000000000000000000000000000081526001600160a01b03918216600482015291169063fe9fbb809060240160206040518083038186803b158015611ae557600080fd5b505afa158015611af9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b1d9190612900565b611b695760405162461bcd60e51b815260206004820181905260248201527f475343206e6f7420617574686f72697a656420696e20436f7265566f74696e67604482015260640161179e565b6011546040517ffe9fbb800000000000000000000000000000000000000000000000000000000081523060048201526001600160a01b039091169063fe9fbb809060240160206040518083038186803b158015611bc557600080fd5b505afa158015611bd9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611bfd9190612900565b15611c705760405162461bcd60e51b815260206004820152603060248201527f5468697320636f6e7472616374206973207374696c6c20617574686f72697a6560448201527f64206f6e20636f726520766f74696e6700000000000000000000000000000000606482015260840161179e565b600a54600f54604080517fd33219b400000000000000000000000000000000000000000000000000000000815290516001600160a01b03938416939092169163d33219b491600480820192602092909190829003018186803b158015611cd557600080fd5b505afa158015611ce9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d0d91906128ac565b6001600160a01b031614611d635760405162461bcd60e51b815260206004820152601e60248201527f57726f6e672074696d656c6f636b20696e2056657374696e675661756c740000604482015260640161179e565b600f54604080517f481c6a7500000000000000000000000000000000000000000000000000000000815290516001600160a01b0380861693169163481c6a75916004808301926020929190829003018186803b158015611dc257600080fd5b505afa158015611dd6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611dfa91906128ac565b6001600160a01b031614611e505760405162461bcd60e51b815260206004820152601d60248201527f57726f6e67206d616e6167657220696e2056657374696e675661756c74000000604482015260640161179e565b600a54601054604080517f8c1e1df000000000000000000000000000000000000000000000000000000000815290516001600160a01b039384169390921691638c1e1df091600480820192602092909190829003018186803b158015611eb557600080fd5b505afa158015611ec9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611eed91906128ac565b6001600160a01b031614611f435760405162461bcd60e51b815260206004820181905260248201527f57726f6e6720676f7665726e616e636520696e2073696d706c652070726f7879604482015260640161179e565b600f54601054604080517f0c870f9100000000000000000000000000000000000000000000000000000000815290516001600160a01b039384169390921691630c870f9191600480820192602092909190829003018186803b158015611fa857600080fd5b505afa158015611fbc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611fe091906128ac565b6001600160a01b03161461205b5760405162461bcd60e51b8152602060048201526024808201527f57726f6e6720696d706c656d656e746174696f6e20696e2073696d706c65207060448201527f726f787900000000000000000000000000000000000000000000000000000000606482015260840161179e565b600a54601254604080517f8da5cb5b00000000000000000000000000000000000000000000000000000000815290516001600160a01b039384169390921691638da5cb5b91600480820192602092909190829003018186803b1580156120c057600080fd5b505afa1580156120d4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120f891906128ac565b6001600160a01b03161461214e5760405162461bcd60e51b815260206004820152601560248201527f57726f6e6720677363207661756c74206f776e65720000000000000000000000604482015260640161179e565b601154601254604080517fae4b362800000000000000000000000000000000000000000000000000000000815290516001600160a01b03938416939092169163ae4b362891600480820192602092909190829003018186803b1580156121b357600080fd5b505afa1580156121c7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121eb91906128ac565b6001600160a01b0316146122415760405162461bcd60e51b815260206004820152601560248201527f57726f6e672067736320636f726520766f74696e670000000000000000000000604482015260640161179e565b600a54601354604080517f8da5cb5b00000000000000000000000000000000000000000000000000000000815290516001600160a01b039384169390921691638da5cb5b91600480820192602092909190829003018186803b1580156122a657600080fd5b505afa1580156122ba573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122de91906128ac565b6001600160a01b0316146123345760405162461bcd60e51b815260206004820152601b60248201527f57726f6e672047534320636f726520766f74696e67206f776e65720000000000604482015260640161179e565b506001919050565b61236a7fffffffff000000000000000000000000000000000000000000000000000000006000351633610dc6565b156108d957601b54600090801561239457604051630fc34b4960e31b815260040160405180910390fd5b6008805473ffffffffffffffffffffffffffffffffffffffff199081166001600160a01b038e8116919091179092556001805482168d84161790556009805482168c84161790556003805482168b84161790556004805482168a841617905560058054821689841617905560028054821688841617905560068054821687841617905560078054909116918516919091179055601b805490600061243783612ad2565b91905055505050505050505050505050565b6124777fffffffff000000000000000000000000000000000000000000000000000000006000351633610dc6565b156108d957601b546006908082146124a257604051630fc34b4960e31b815260040160405180910390fd5b600654600a546040517f2c6dc1170000000000000000000000000000000000000000000000000000000081526001600160a01b03878116600483015291821660248201528582166044820152911690632c6dc11790606401602060405180830381600087803b15801561251457600080fd5b505af1158015612528573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061254c91906128ac565b600f805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055601b8054906000610a9683612ad2565b6125b77fffffffff000000000000000000000000000000000000000000000000000000006000351633610dc6565b156108d957601b546005908082146125e257604051630fc34b4960e31b815260040160405180910390fd5b600554600d546040517f4fbc05230000000000000000000000000000000000000000000000000000000081526001600160a01b039182166004820152911690634fbc052390602401602060405180830381600087803b15801561264457600080fd5b505af1158015612658573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061267c91906128ac565b600e805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055601b80549060006116a283612ad2565b3360009081527f107ee6c9edf8142ba51e10023f320f7b6ccd180a42be95ddbc18c0e5425b2900602052604090205460ff1615610763576000828152602081815260408083206001600160a01b0385168085529083529281902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790558051858152918201929092527f9c21fb13a2f9c0e9222fe9a6810fe483b60248132981e1e0554bae602e93a9dd9101610757565b61279e7fffffffff000000000000000000000000000000000000000000000000000000006000351633610dc6565b156108d957601b54600b908082146127c957604051630fc34b4960e31b815260040160405180910390fd5b6011546013546040517fb6a5d7de0000000000000000000000000000000000000000000000000000000081526001600160a01b03918216600482015291169063b6a5d7de90602401600060405180830381600087803b15801561282b57600080fd5b505af115801561283f573d6000803e3d6000fd5b5050601154600a546040517f13af40350000000000000000000000000000000000000000000000000000000081526001600160a01b039182166004820152911692506313af40359150602401610ffb565b6000602082840312156128a1578081fd5b8135610e6281612b30565b6000602082840312156128bd578081fd5b8151610e6281612b30565b600080604083850312156128da578081fd5b82356128e581612b30565b915060208301356128f581612b30565b809150509250929050565b600060208284031215612911578081fd5b81518015158114610e62578182fd5b60008060408385031215612932578182fd5b8235915060208301356128f581612b30565b60008060008060008060008060006101208a8c031215612962578485fd5b893561296d81612b30565b985060208a013561297d81612b30565b975060408a013561298d81612b30565b965060608a013561299d81612b30565b955060808a01356129ad81612b30565b945060a08a01356129bd81612b30565b935060c08a01356129cd81612b30565b925060e08a01356129dd81612b30565b91506101008a01356129ee81612b30565b809150509295985092959850929598565b600080604083850312156128da578182fd5b600060a082016001600160a01b03808916845260208881860152876040860152818716606086015260a0608086015282865480855260c0870191508786528286209450855b81811015612a74578554851683526001958601959284019201612a56565b50909b9a5050505050505050505050565b6020808252825182820181905260009190848201906040850190845b81811015612ac65783516001600160a01b031683529284019291840191600101612aa1565b50909695505050505050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415612b29577f4e487b710000000000000000000000000000000000000000000000000000000081526011600452602481fd5b5060010190565b6001600160a01b03811681146116ac57600080fdfea2646970667358221220f7ce21aac140080f48cee0bf8874ad8eebba91ffe972d47257555d437d53418264736f6c63430008040033";

export class DeployerConsilium__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<DeployerConsilium> {
    return super.deploy(overrides || {}) as Promise<DeployerConsilium>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): DeployerConsilium {
    return super.attach(address) as DeployerConsilium;
  }
  connect(signer: Signer): DeployerConsilium__factory {
    return super.connect(signer) as DeployerConsilium__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DeployerConsiliumInterface {
    return new utils.Interface(_abi) as DeployerConsiliumInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): DeployerConsilium {
    return new Contract(address, _abi, signerOrProvider) as DeployerConsilium;
  }
}