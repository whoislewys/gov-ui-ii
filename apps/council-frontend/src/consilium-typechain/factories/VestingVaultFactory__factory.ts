/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  VestingVaultFactory,
  VestingVaultFactoryInterface,
} from "../VestingVaultFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "timelock",
        type: "address",
      },
      {
        internalType: "address",
        name: "vestingManager",
        type: "address",
      },
    ],
    name: "newVestingVault",
    outputs: [
      {
        internalType: "contract VestingVault",
        name: "vestingVault",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50613086806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80632c6dc11714610030575b600080fd5b61004361003e36600461015c565b61006c565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b6000834360405161007c9061014f565b73ffffffffffffffffffffffffffffffffffffffff90921682526020820152604001604051809103906000f0801580156100ba573d6000803e3d6000fd5b506040517f485cc95500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff848116600483015285811660248301529192509082169063485cc95590604401600060405180830381600087803b15801561013057600080fd5b505af1158015610144573d6000803e3d6000fd5b505050509392505050565b612e85806101cc83390190565b600080600060608486031215610170578283fd5b833561017b816101a6565b9250602084013561018b816101a6565b9150604084013561019b816101a6565b809150509250925092565b73ffffffffffffffffffffffffffffffffffffffff811681146101c857600080fd5b5056fe60c06040523480156200001157600080fd5b5060405162002e8538038062002e85833981016040819052620000349162000050565b60609190911b6001600160601b03191660805260a0526200008a565b6000806040838503121562000063578182fd5b82516001600160a01b03811681146200007a578283fd5b6020939093015192949293505050565b60805160601c60a051612da1620000e46000396000818161028d0152611b960152600081816102f5015281816104340152818161072d01528181610a4c01528181610b0c01528181610f4301526118c70152612da16000f3fe608060405234801561001057600080fd5b506004361061016b5760003560e01c8063b6b55f25116100cd578063d0ebdbe711610081578063d994844a11610066578063d994844a146102ca578063e7d20283146102dd578063fc0c546a146102f057600080fd5b8063d0ebdbe7146102af578063d33219b4146102c257600080fd5b8063bf31dbf4116100b2578063bf31dbf414610252578063c1006f4f14610272578063c2c94b881461028857600080fd5b8063b6b55f251461022c578063bdacb3031461023f57600080fd5b8063485cc955116101245780635c19a95c116101095780635c19a95c146101f35780635f389a9d14610206578063747c12551461021957600080fd5b8063485cc955146101d85780634e71d92d146101eb57600080fd5b8063267406cb11610155578063267406cb146101985780633e0bdaf7146101ab578063481c6a75146101b357600080fd5b8062f714ce146101705780632168034d14610185575b600080fd5b61018361017e3660046129c5565b610317565b005b6101836101933660046129ad565b6104b6565b6101836101a6366004612816565b6105b0565b610183610974565b6101bb610c21565b6040516001600160a01b0390911681526020015b60405180910390f35b6101836101e6366004612830565b610c31565b610183610e37565b610183610201366004612816565b61108b565b610183610214366004612862565b611388565b610183610227366004612816565b6117d8565b61018361023a3660046129ad565b611807565b61018361024d366004612816565b61194b565b610265610260366004612816565b6119ec565b6040516101cf9190612a4f565b61027a611aca565b6040519081526020016101cf565b61027a7f000000000000000000000000000000000000000000000000000000000000000081565b6101836102bd366004612816565b611ad4565b6101bb611b75565b61027a6102d83660046128fe565b611b7f565b61027a6102eb3660046128d5565b611bcf565b6101bb7f000000000000000000000000000000000000000000000000000000000000000081565b61031f611bf1565b516001600160a01b0316331461037c5760405162461bcd60e51b815260206004820152600860248201527f216d616e6167657200000000000000000000000000000000000000000000000060448201526064015b60405180910390fd5b6000610386611c5b565b905082816000015410156103dc5760405162461bcd60e51b815260206004820152601460248201527f496e73756666696369656e742062616c616e63650000000000000000000000006044820152606401610373565b828160000160008282546103f09190612cf6565b90915550506040517fa9059cbb0000000000000000000000000000000000000000000000000000000081526001600160a01b038381166004830152602482018590527f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb90604401602060405180830381600087803b15801561047857600080fd5b505af115801561048c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104b0919061298d565b50505050565b6104be611ca0565b516001600160a01b031633146105165760405162461bcd60e51b815260206004820152600960248201527f2174696d656c6f636b00000000000000000000000000000000000000000000006044820152606401610373565b60648111156105675760405162461bcd60e51b815260206004820152600a60248201527f41626f76652031303025000000000000000000000000000000000000000000006044820152606401610373565b6105ad6105a86040518060400160405280601281526020017f756e7665737465644d756c7469706c6965720000000000000000000000000000815250611ced565b829055565b50565b6105b8611bf1565b516001600160a01b031633146106105760405162461bcd60e51b815260206004820152600860248201527f216d616e616765720000000000000000000000000000000000000000000000006044820152606401610373565b600061061a611d66565b6001600160a01b0383811660009081526020928352604080822081516101008101835281546001600160801b038082168352700100000000000000000000000000000000918290048116978301979097526001830154808816838601528190048716606083015260028084015480891660808501529190910490961660a0820152600382015490941660c085015281518083019283905290955091936106eb9392869260e0850192600485019182845b8154815260200190600101908083116106ca57505050505081525050611da6565b6040517fa9059cbb0000000000000000000000000000000000000000000000000000000081526001600160a01b038581166004830152602482018390529192507f00000000000000000000000000000000000000000000000000000000000000009091169063a9059cbb90604401602060405180830381600087803b15801561077357600080fd5b505af1158015610787573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107ab919061298d565b5060006107b6611c5b565b83549091506000906107e690849070010000000000000000000000000000000090046001600160801b0316612b02565b84546107fb91906001600160801b0316612cf6565b9050808260000160008282546108119190612b02565b9091555060009050610821611e89565b60038601549091506000906108409083906001600160a01b0316611edc565b6003870154600288015491925061088c916001600160a01b03909116906108849070010000000000000000000000000000000090046001600160801b031684612cf6565b849190611f5c565b600386015460028701546001600160a01b038981169216907f33161cf2da28d747be9df136b6f3729390298494947268743193c53d73d3c2e0906108ef9070010000000000000000000000000000000090046001600160801b0316600019612b54565b60405190815260200160405180910390a3610908611d66565b6001600160a01b0397909716600090815260209790975250506040852085815560018101869055600281018690556003810180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055600481018690556005019490945550505050565b600061097e611d66565b3360009081526020919091526040812080549092506109bc906001600160801b03700100000000000000000000000000000000820481169116612cce565b6001600160801b0316905060008111610a175760405162461bcd60e51b815260206004820152601260248201527f6e6f206772616e7420617661696c61626c6500000000000000000000000000006044820152606401610373565b6040517fa9059cbb000000000000000000000000000000000000000000000000000000008152336004820152602481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063a9059cbb90604401602060405180830381600087803b158015610a9857600080fd5b505af1158015610aac573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ad0919061298d565b506040517f23b872dd000000000000000000000000000000000000000000000000000000008152336004820152306024820152604481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd90606401602060405180830381600087803b158015610b5857600080fd5b505af1158015610b6c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b90919061298d565b506000610b9b61206b565b516040805180820190915281815290915060208101610bba8484612b02565b9052610bcc9060048501906002612727565b50610c1c610c0e6040518060400160405280600581526020017f626f756e64000000000000000000000000000000000000000000000000000000815250611ced565b610c188484612b02565b9055565b505050565b6000610c2b611bf1565b51919050565b610c6f6040518060400160405280600b81526020017f696e697469616c697a6564000000000000000000000000000000000000000000815250611ced565b5415610cbd5760405162461bcd60e51b815260206004820152600b60248201527f696e697469616c697a65640000000000000000000000000000000000000000006044820152606401610373565b610d04610cfe6040518060400160405280600b81526020017f696e697469616c697a6564000000000000000000000000000000000000000000815250611ced565b60019055565b610d78610d456040518060400160405280600781526020017f6d616e61676572000000000000000000000000000000000000000000000000008152506120cc565b80547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b038516179055565b610dec610db96040518060400160405280600881526020017f74696d656c6f636b0000000000000000000000000000000000000000000000008152506120cc565b80547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b038416179055565b610e33610e2d6040518060400160405280601281526020017f756e7665737465644d756c7469706c6965720000000000000000000000000000815250611ced565b60649055565b5050565b6000610e41611d66565b3360009081526020918252604080822081516101008101835281546001600160801b03808216835270010000000000000000000000000000000091829004811683880152600184015480821684870152829004811660608401526002808501548083166080860152929092041660a083015260038301546001600160a01b031660c083015283518085019485905260048401805482529397509495610f0b959294889460e0870194939092909190600587019085018083116106ca57505050505081525050611da6565b6040517fa9059cbb000000000000000000000000000000000000000000000000000000008152336004820152602481018290529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063a9059cbb90604401602060405180830381600087803b158015610f8f57600080fd5b505af1158015610fa3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fc7919061298d565b50815481908390601090610ff990849070010000000000000000000000000000000090046001600160801b0316612ad7565b92506101000a8154816001600160801b0302191690836001600160801b0316021790555060008260040160016002811061105c577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b01541115611081578060048301600101600082825461107b9190612cf6565b90915550505b610e333383612107565b6000611095611d66565b3360009081526020919091526040902060038101549091506001600160a01b03838116911614156111085760405162461bcd60e51b815260206004820152601160248201527f416c72656164792064656c6567617465640000000000000000000000000000006044820152606401610373565b6000611112611e89565b60038301549091506000906111319083906001600160a01b0316611edc565b604080516101008101825285546001600160801b0380821683527001000000000000000000000000000000009182900481166020840152600188015480821684860152829004811660608401526002808901548083166080860152929092041660a083015260038701546001600160a01b031660c08301528251808401938490529394506000936111ee93889260e08501929160048501919082845b8154815260200190600101908083116111cd575050505050815250506122fe565b6003850154600286015491925061123a916001600160a01b03909116906112329070010000000000000000000000000000000090046001600160801b031685612cf6565b859190611f5c565b6003840154600285015433916001600160a01b0316907f33161cf2da28d747be9df136b6f3729390298494947268743193c53d73d3c2e09061129b9070010000000000000000000000000000000090046001600160801b0316600019612b54565b60405190815260200160405180910390a360006112b88487611edc565b9050336001600160a01b0316866001600160a01b03167f33161cf2da28d747be9df136b6f3729390298494947268743193c53d73d3c2e0846040516112ff91815260200190565b60405180910390a361131d866113158484612b02565b869190611f5c565b506002840180546001600160801b03928316700100000000000000000000000000000000029216919091179055505060030180546001600160a01b039092167fffffffffffffffffffffffff0000000000000000000000000000000000000000909216919091179055565b611390611bf1565b516001600160a01b031633146113e85760405162461bcd60e51b815260206004820152600860248201527f216d616e616765720000000000000000000000000000000000000000000000006044820152606401610373565b826001600160801b0316826001600160801b03161115801561141c5750826001600160801b0316846001600160801b031611155b6114685760405162461bcd60e51b815260206004820152601560248201527f496e76616c696420636f6e66696775726174696f6e00000000000000000000006044820152606401610373565b6001600160801b03841661147a574393505b6000611484611c5b565b9050600061149061236f565b9050866001600160801b0316826000015410156114ef5760405162461bcd60e51b815260206004820152601460248201527f496e73756666696369656e742062616c616e63650000000000000000000000006044820152606401610373565b60006114f9611d66565b6001600160a01b038a1660009081526020919091526040902080549091506001600160801b03161561156d5760405162461bcd60e51b815260206004820152600960248201527f486173204772616e7400000000000000000000000000000000000000000000006044820152606401610373565b6001600160a01b038416156115825783611584565b885b93506000606483600001518a61159a9190612c0c565b6115a49190612b1a565b90506040518061010001604052808a6001600160801b0316815260200160006001600160801b03168152602001896001600160801b03168152602001886001600160801b03168152602001876001600160801b03168152602001826001600160801b03168152602001866001600160a01b03168152602001604051806040016040528060008152602001600081525081525061163e611d66565b6001600160a01b038c8116600090815260209283526040908190208451938501516001600160801b0394851670010000000000000000000000000000000091861682021782559185015160608601519085169085168302176001820155608085015160a086015190851694169091029290921760028084019190915560c08401516003840180547fffffffffffffffffffffffff000000000000000000000000000000000000000016919093161790915560e083015161170391600484019190612727565b50905050886001600160801b03168460000160008282546117249190612cf6565b9091555060009050611734611e89565b60038401549091506000906117539083906001600160a01b0316611edc565b600385015490915061177b906001600160a01b03166108846001600160801b03861684612b02565b60038401546040516001600160801b03851681526001600160a01b038e81169216907f33161cf2da28d747be9df136b6f3729390298494947268743193c53d73d3c2e09060200160405180910390a3505050505050505050505050565b60006117e2611d66565b6001600160a01b0383166000908152602091909152604090209050610e338282612107565b61180f611bf1565b516001600160a01b031633146118675760405162461bcd60e51b815260206004820152600860248201527f216d616e616765720000000000000000000000000000000000000000000000006044820152606401610373565b6000611871611c5b565b9050818160000160008282546118879190612b02565b90915550506040517f23b872dd000000000000000000000000000000000000000000000000000000008152336004820152306024820152604481018390527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906323b872dd90606401602060405180830381600087803b15801561191357600080fd5b505af1158015611927573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c1c919061298d565b611953611ca0565b516001600160a01b031633146119ab5760405162461bcd60e51b815260206004820152600960248201527f2174696d656c6f636b00000000000000000000000000000000000000000000006044820152606401610373565b6105ad610db96040518060400160405280600881526020017f74696d656c6f636b0000000000000000000000000000000000000000000000008152506120cc565b6119f4612765565b6119fc611d66565b6001600160a01b038381166000908152602092835260409081902081516101008101835281546001600160801b038082168352700100000000000000000000000000000000918290048116968301969096526001830154808716838601528190048616606083015260028084015480881660808501529190910490951660a0820152600382015490931660c08401528151808301928390529293909260e08501929091600485019182845b815481526020019060010190808311611aa7575050505050815250509050919050565b6000610c2b61236f565b611adc611ca0565b516001600160a01b03163314611b345760405162461bcd60e51b815260206004820152600960248201527f2174696d656c6f636b00000000000000000000000000000000000000000000006044820152606401610373565b6105ad610db96040518060400160405280600781526020017f6d616e61676572000000000000000000000000000000000000000000000000008152506120cc565b6000610c2b611ca0565b600080611b8a611e89565b9050611bc48787611bbb7f000000000000000000000000000000000000000000000000000000000000000043612cf6565b849291906123bc565b979650505050505050565b600080611bda611e89565b9050611be7818585612438565b9150505b92915050565b604080516020810190915260008152611c3e6040518060400160405280600781526020017f6d616e61676572000000000000000000000000000000000000000000000000008152506120cc565b604080516020810190915290546001600160a01b03168152919050565b6000611c9b6040518060400160405280600a81526020017f756e61737369676e656400000000000000000000000000000000000000000000815250611ced565b905090565b604080516020810190915260008152611c3e6040518060400160405280600881526020017f74696d656c6f636b0000000000000000000000000000000000000000000000008152506120cc565b6000807fec13d6d12b88433319b64e1065a96ea19cd330ef6603f5f6fb685dde3959a320905060008184604051602001611d28929190612a0a565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190528051602090910120949350505050565b6000611c9b6040518060400160405280600681526020017f6772616e74730000000000000000000000000000000000000000000000000000815250612483565b600081608001516001600160801b0316431080611dcf575081604001516001600160801b031643105b15611ddc57506000919050565b81606001516001600160801b03164310611e105760208201518251611e019190612cce565b6001600160801b031692915050565b600082604001518360600151611e269190612cce565b6001600160801b031683604001516001600160801b031643611e489190612cf6565b8451611e5d91906001600160801b0316612c3b565b611e679190612b40565b905082602001516001600160801b031681611e829190612cf6565b9392505050565b604080518082019091526060815260006020820152611c9b6040518060400160405280600b81526020017f766f74696e67506f7765720000000000000000000000000000000000000000008152506124be565b600080611eea846020015190565b6001600160a01b03841660009081526020919091526040902080549091506001600160801b031680611f2157600092505050611beb565b6000611bc483611f32600185612cf6565b016001015460c081901c9177ffffffffffffffffffffffffffffffffffffffffffffffff90911690565b77ffffffffffffffffffffffffffffffffffffffffffffffff811115611fc45760405162461bcd60e51b815260206004820152600360248201527f4f6f4200000000000000000000000000000000000000000000000000000000006044820152606401610373565b6000611fd1846020015190565b6001600160a01b03841660009081526020829052604081208054929350914360c01b9185831791608081901c916001600160801b039091169081156120235761201f86611f32600185612cf6565b5090505b814382141561203a57612037600184612cf6565b90505b848160018901015543821461205e5761205e8785612059866001612b02565b6124f7565b5050505050505050505050565b6040805160208101909152600081526120b86040518060400160405280600581526020017f626f756e64000000000000000000000000000000000000000000000000000000815250611ced565b604080516020810190915290548152919050565b6000807f421683f821a0574472445355be6d2b769119e8515f8376a1d7878523dfdecf7b905060008184604051602001611d28929190612a0a565b6000612111611e89565b60038301549091506000906121309083906001600160a01b0316611edc565b604080516101008101825285546001600160801b0380821683527001000000000000000000000000000000009182900481166020840152600188015480821684860152829004811660608401526002808901548083166080860152929092041660a083015260038701546001600160a01b031660c083015282518084019093529293506000926121f192879160e08401919060048401908282826020028201918154815260200190600101908083116111cd575050505050815250506122fe565b60028501549091506000906122239070010000000000000000000000000000000090046001600160801b031683612c5a565b90508061223257505050505050565b600081131561225c576003850154612257906001600160a01b03166113158386612b02565b612284565b6003850154612284906001600160a01b031661227a83600019612b54565b6113159086612cf6565b60038501546040518281526001600160a01b038881169216907f33161cf2da28d747be9df136b6f3729390298494947268743193c53d73d3c2e09060200160405180910390a350600290930180546001600160801b0394851670010000000000000000000000000000000002941693909317909255505050565b60008061230a83611da6565b9050600083602001516001600160801b0316826123279190612b02565b845161233c91906001600160801b0316612cf6565b9050606461234861236f565b516123539083612c3b565b61235d9190612b40565b6123679083612b02565b949350505050565b6040805160208101909152600081526120b86040518060400160405280601281526020017f756e7665737465644d756c7469706c6965720000000000000000000000000000815250611ced565b6000806123ca866020015190565b6001600160a01b0386166000908152602082905260408120805492935091608081901c916001600160801b039091169080612408858a8a8787612517565b915091508382111561242a5761241f8483876126bc565b61242a8583856124f7565b9a9950505050505050505050565b600080612446856020015190565b6001600160a01b0385166000908152602082905260408120805492935091608081901c916001600160801b039091169061242a8488838686612517565b6000807fe09ca27c98c7039e0ebb504afcf592a1c02936970c7b5952890c3a3eea53d63c905060008184604051602001611d28929190612a0a565b60408051808201909152606081526000602082015260006124de836126ec565b6040805180820190915293845260208401525090919050565b80821061250357600080fd5b6001600160801b031660809190911b179055565b600080826125675760405162461bcd60e51b815260206004820152600d60248201527f756e696e697469616c697a6564000000000000000000000000000000000000006044820152606401610373565b8585111561257457600080fd5b82841061258057600080fd5b600061258d600185612cf6565b90508460005b82821461263157600060026125a88585612b02565b6125b3906001612b02565b6125bd9190612b40565b6001818d01015490915060c081901c9077ffffffffffffffffffffffffffffffffffffffffffffffff168b8214156125ff579296509194506126b29350505050565b8b82101561261b578a821015612613578293505b829450612629565b612626600184612cf6565b95505b505050612593565b60018a8301015460c081901c9077ffffffffffffffffffffffffffffffffffffffffffffffff168a8211156126a85760405162461bcd60e51b815260206004820152600e60248201527f536561726368204661696c7572650000000000000000000000000000000000006044820152606401610373565b9195509093505050505b9550959350505050565b818311156126c957600080fd5b60018101835b838110156126e5576000828201556001016126cf565b5050505050565b6000807f7b1a68ec3e3284b167e69db1c622dcfa612281976b71d7e2d239dbe16a75891a905060008184604051602001611d28929190612a0a565b8260028101928215612755579160200282015b8281111561275557825182559160200191906001019061273a565b506127619291506127b0565b5090565b6040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915260e081016127ab6127c5565b905290565b5b8082111561276157600081556001016127b1565b60405180604001604052806002906020820280368337509192915050565b80356001600160a01b03811681146127fa57600080fd5b919050565b80356001600160801b03811681146127fa57600080fd5b600060208284031215612827578081fd5b611e82826127e3565b60008060408385031215612842578081fd5b61284b836127e3565b9150612859602084016127e3565b90509250929050565b60008060008060008060c0878903121561287a578182fd5b612883876127e3565b9550612891602088016127ff565b945061289f604088016127ff565b93506128ad606088016127ff565b92506128bb608088016127ff565b91506128c960a088016127e3565b90509295509295509295565b600080604083850312156128e7578182fd5b6128f0836127e3565b946020939093013593505050565b600080600080600060808688031215612915578081fd5b61291e866127e3565b94506020860135935060408601359250606086013567ffffffffffffffff80821115612948578283fd5b818801915088601f83011261295b578283fd5b813581811115612969578384fd5b89602082850101111561297a578384fd5b9699959850939650602001949392505050565b60006020828403121561299e578081fd5b81518015158114611e82578182fd5b6000602082840312156129be578081fd5b5035919050565b600080604083850312156129d7578182fd5b82359150612859602084016127e3565b8060005b60028110156104b05781518452602093840193909101906001016129eb565b82815260008251815b81811015612a2f57602081860181015185830182015201612a13565b81811115612a405782602083860101525b50919091016020019392505050565b6000610120820190506001600160801b038084511683528060208501511660208401528060408501511660408401528060608501511660608401528060808501511660808401528060a08501511660a08401525060c0830151612abd60c08401826001600160a01b03169052565b5060e0830151612ad060e08401826129e7565b5092915050565b60006001600160801b03808316818516808303821115612af957612af9612d0d565b01949350505050565b60008219821115612b1557612b15612d0d565b500190565b60006001600160801b0380841680612b3457612b34612d3c565b92169190910492915050565b600082612b4f57612b4f612d3c565b500490565b60007f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81841382841385830485118282161615612b9357612b93612d0d565b7f800000000000000000000000000000000000000000000000000000000000000084871286820588128184161615612bcd57612bcd612d0d565b858712925087820587128484161615612be857612be8612d0d565b87850587128184161615612bfe57612bfe612d0d565b505050929093029392505050565b60006001600160801b0380831681851681830481118215151615612c3257612c32612d0d565b02949350505050565b6000816000190483118215151615612c5557612c55612d0d565b500290565b6000808312837f800000000000000000000000000000000000000000000000000000000000000001831281151615612c9457612c94612d0d565b837f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff018313811615612cc857612cc8612d0d565b50500390565b60006001600160801b0383811690831681811015612cee57612cee612d0d565b039392505050565b600082821015612d0857612d08612d0d565b500390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fdfea26469706673582212201881bb6b06237d56c8b13b4eb35b5416ce9cf9897eee0b4a598268798266d22764736f6c63430008040033a26469706673582212209d558173d2c05a72b17bc591b488805b70c972735c0de4d98c8df06518dc30b764736f6c63430008040033";

export class VestingVaultFactory__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<VestingVaultFactory> {
    return super.deploy(overrides || {}) as Promise<VestingVaultFactory>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): VestingVaultFactory {
    return super.attach(address) as VestingVaultFactory;
  }
  connect(signer: Signer): VestingVaultFactory__factory {
    return super.connect(signer) as VestingVaultFactory__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VestingVaultFactoryInterface {
    return new utils.Interface(_abi) as VestingVaultFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): VestingVaultFactory {
    return new Contract(address, _abi, signerOrProvider) as VestingVaultFactory;
  }
}
