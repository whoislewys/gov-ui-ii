/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  CoreVotingFactory,
  CoreVotingFactoryInterface,
} from "../CoreVotingFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "timelock",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "baseQuorum",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minProposalPower",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "gsc",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "votingVaults",
        type: "address[]",
      },
    ],
    name: "newCoreVoting",
    outputs: [
      {
        internalType: "contract CoreVoting",
        name: "coreVoting",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50612f28806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063865b711214610030575b600080fd5b61004361003e3660046100ed565b61006c565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b6000868686868686604051610080906100b7565b61008f96959493929190610191565b604051809103906000f0801580156100ab573d6000803e3d6000fd5b50979650505050505050565b612ce18061021283390190565b803573ffffffffffffffffffffffffffffffffffffffff811681146100e857600080fd5b919050565b60008060008060008060a08789031215610105578182fd5b61010e876100c4565b9550602087013594506040870135935061012a606088016100c4565b9250608087013567ffffffffffffffff80821115610146578384fd5b818901915089601f830112610159578384fd5b813581811115610167578485fd5b8a60208260051b850101111561017b578485fd5b6020830194508093505050509295509295509295565b600060a0820173ffffffffffffffffffffffffffffffffffffffff808a16845260208981860152886040860152818816606086015260a060808601528286845260c086019050879350845b8781101561020157836101ee866100c4565b16825293820193908201906001016101dc565b509b9a505050505050505050505056fe6080604052620000136119606003620002d1565b600455620000256119606005620002d1565b6005553480156200003557600080fd5b5060405162002ce138038062002ce18339810160408190526200005891620001c1565b600080546001600160a01b03191633178155600385905560068490555b8151811015620000ed57600160096000848481518110620000a657634e487b7160e01b600052603260045260246000fd5b6020908102919091018101516001600160a01b03168252810191909152604001600020805460ff191691151591909117905580620000e481620002f3565b91505062000075565b50620000f98562000130565b62000125826001600160a01b03166000908152600160208190526040909120805460ff19169091179055565b50505050506200033d565b6000546001600160a01b03163314620001825760405162461bcd60e51b815260206004820152601060248201526f29b2b73232b9103737ba1037bbb732b960811b604482015260640160405180910390fd5b600080546001600160a01b0319166001600160a01b0392909216919091179055565b80516001600160a01b0381168114620001bc57600080fd5b919050565b600080600080600060a08688031215620001d9578081fd5b620001e486620001a4565b94506020808701519450604087015193506200020360608801620001a4565b60808801519093506001600160401b038082111562000220578384fd5b818901915089601f83011262000234578384fd5b81518181111562000249576200024962000327565b8060051b604051601f19603f8301168101818110858211171562000271576200027162000327565b604052828152858101935084860182860187018e101562000290578788fd5b8795505b83861015620002bd57620002a881620001a4565b85526001959095019493860193860162000294565b508096505050505050509295509295909350565b6000816000190483118215151615620002ee57620002ee62000311565b500290565b60006000198214156200030a576200030a62000311565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b612994806200034d6000396000f3fe608060405234801561001057600080fd5b50600436106101ad5760003560e01c80639f2524ee116100ee578063bd9c75a511610097578063d4b8756711610071578063d4b87567146104d6578063da35c664146104df578063f131e5eb146104e8578063fe9fbb80146104f157600080fd5b8063bd9c75a514610490578063c52ea3db146104a3578063d1b67627146104c357600080fd5b8063af7a060c116100c8578063af7a060c14610427578063b6a5d7de1461045a578063b91816111461046d57600080fd5b80639f2524ee146103a7578063a4c950771461040b578063aa35fb511461041457600080fd5b806327c97fa51161015b5780634eb665af116101355780634eb665af14610329578063771a53231461033c5780637d5709eb1461034f5780638da5cb5b1461036257600080fd5b806327c97fa5146102f0578063341a7b42146103035780634392b99c1461031657600080fd5b806313af40351161018c57806313af4035146102c157806315126a3d146102d45780631c39c96c146102e757600080fd5b806214d11d146101b2578063013cf08b146101c757806304554443146102aa575b600080fd5b6101c56101c0366004612397565b61052a565b005b61024c6101d5366004612397565b600a602052600090815260409020805460018201546002830154600590930154919267ffffffffffffffff80831693680100000000000000008404909116926fffffffffffffffffffffffffffffffff70010000000000000000000000000000000091829004811693808216939290048116911687565b6040805197885267ffffffffffffffff968716602089015295909416948601949094526fffffffffffffffffffffffffffffffff91821660608601528116608085015291821660a08401521660c082015260e0015b60405180910390f35b6102b360045481565b6040519081526020016102a1565b6101c56102cf36600461215a565b61059b565b6101c56102e23660046123c7565b610649565b6102b360035481565b6101c56102fe36600461215a565b610bf3565b6101c5610311366004612174565b610c88565b6101c56103243660046121e0565b610d27565b6101c5610337366004612397565b610de4565b6102b361034a3660046121ae565b610e50565b6101c561035d366004612397565b610ec1565b6000546103829073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016102a1565b6103fd6103b536600461221b565b600b6020908152600092835260408084209091529082529020546fffffffffffffffffffffffffffffffff811690700100000000000000000000000000000000900460ff1682565b6040516102a192919061274a565b6102b360055481565b6102b361042236600461231c565b610f2d565b61044a61043536600461215a565b60096020526000908152604090205460ff1681565b60405190151581526020016102a1565b6101c561046836600461215a565b61163a565b61044a61047b36600461215a565b60016020526000908152604090205460ff1681565b6101c561049e366004612244565b6116dc565b6104b66104b1366004612397565b611d2a565b6040516102a191906126d7565b6101c56104d1366004612397565b611db6565b6102b360065481565b6102b360075481565b6102b361196081565b61044a6104ff36600461215a565b73ffffffffffffffffffffffffffffffffffffffff1660009081526001602052604090205460ff1690565b60005473ffffffffffffffffffffffffffffffffffffffff1633146105965760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e65720000000000000000000000000000000060448201526064015b60405180910390fd5b600555565b60005473ffffffffffffffffffffffffffffffffffffffff1633146106025760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e657200000000000000000000000000000000604482015260640161058d565b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60025460ff161561069c5760405162461bcd60e51b815260206004820152600a60248201527f5265656e7472616e637900000000000000000000000000000000000000000000604482015260640161058d565b6002805460ff191660019081179091556000848152600a6020526040902001546fffffffffffffffffffffffffffffffff700100000000000000000000000000000000909104164310156107325760405162461bcd60e51b815260206004820152600c60248201527f6e6f7420756e6c6f636b65640000000000000000000000000000000000000000604482015260640161058d565b6000838152600a602052604090206001015470010000000000000000000000000000000090046fffffffffffffffffffffffffffffffff166107b65760405162461bcd60e51b815260206004820152601360248201527f50726576696f75736c7920657865637574656400000000000000000000000000604482015260640161058d565b6000838152600a60205260409020600501546fffffffffffffffffffffffffffffffff1643106108285760405162461bcd60e51b815260206004820152601860248201527f70617374206c6173742063616c6c2074696d657374616d700000000000000000604482015260640161058d565b6000838152600a602090815260409182902054915161084b918591859101612628565b60405160208183030381529060405280519060200120146108ae5760405162461bcd60e51b815260206004820152600d60248201527f68617368206d69736d6174636800000000000000000000000000000000000000604482015260640161058d565b6000838152600a60205260408082208151606081019283905291600391820191908285855b82829054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1681526020019060100190602082600f010492830192600103820291508084116108d3575050506000888152600a60209081526040808320600201549087015191870151875197985092967001000000000000000000000000000000009091046fffffffffffffffffffffffffffffffff1695509093506109829250612828565b61098c9190612828565b6fffffffffffffffffffffffffffffffff1610159050600082600160200201516fffffffffffffffffffffffffffffffff1683600060200201516fffffffffffffffffffffffffffffffff161190508180156109e55750805b610a315760405162461bcd60e51b815260206004820152600e60248201527f43616e6e6f742065786563757465000000000000000000000000000000000000604482015260640161058d565b60005b8551811015610b58576000868281518110610a5f57634e487b7160e01b600052603260045260246000fd5b602002602001015173ffffffffffffffffffffffffffffffffffffffff16868381518110610a9d57634e487b7160e01b600052603260045260246000fd5b6020026020010151604051610ab291906124a9565b6000604051808303816000865af19150503d8060008114610aef576040519150601f19603f3d011682016040523d82523d6000602084013e610af4565b606091505b5050905080610b455760405162461bcd60e51b815260206004820152600b60248201527f43616c6c206661696c6564000000000000000000000000000000000000000000604482015260640161058d565b5080610b50816128f9565b915050610a34565b506040518681527f712ae1383f79ac853f8d882153778e0260ef8f03b504e2866e0593e04d2b291f9060200160405180910390a150505060009283525050600a6020526040812081815560018101829055600280820183905560038201839055600482019290925560050180547fffffffffffffffffffffffffffffffff00000000000000000000000000000000169055805460ff19169055565b60005473ffffffffffffffffffffffffffffffffffffffff163314610c5a5760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e657200000000000000000000000000000000604482015260640161058d565b73ffffffffffffffffffffffffffffffffffffffff166000908152600160205260409020805460ff19169055565b60005473ffffffffffffffffffffffffffffffffffffffff163314610cef5760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e657200000000000000000000000000000000604482015260640161058d565b73ffffffffffffffffffffffffffffffffffffffff919091166000908152600960205260409020805460ff1916911515919091179055565b60005473ffffffffffffffffffffffffffffffffffffffff163314610d8e5760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e657200000000000000000000000000000000604482015260640161058d565b73ffffffffffffffffffffffffffffffffffffffff90921660009081526008602090815260408083207fffffffff0000000000000000000000000000000000000000000000000000000090941683529290522055565b60005473ffffffffffffffffffffffffffffffffffffffff163314610e4b5760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e657200000000000000000000000000000000604482015260640161058d565b600455565b73ffffffffffffffffffffffffffffffffffffffff821660009081526008602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000008516845290915281205480610eb2575050600354610ebb565b9050610ebb565b505b92915050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610f285760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e657200000000000000000000000000000000604482015260640161058d565b600355565b6000828152600a602052604081206001015467ffffffffffffffff16610f955760405162461bcd60e51b815260206004820152601760248201527f70726f706f73616c20646f6573206e6f74206578697374000000000000000000604482015260640161058d565b6000838152600a60205260409020600201546fffffffffffffffffffffffffffffffff164311156110085760405162461bcd60e51b815260206004820152600760248201527f4578706972656400000000000000000000000000000000000000000000000000604482015260640161058d565b6000805b86518110156112e357600061102282600161285c565b90505b875181101561110a5787818151811061104e57634e487b7160e01b600052603260045260246000fd5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1688838151811061108c57634e487b7160e01b600052603260045260246000fd5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1614156110f85760405162461bcd60e51b815260206004820152600f60248201527f6475706c6963617465207661756c740000000000000000000000000000000000604482015260640161058d565b80611102816128f9565b915050611025565b506009600088838151811061112f57634e487b7160e01b600052603260045260246000fd5b60209081029190910181015173ffffffffffffffffffffffffffffffffffffffff1682528101919091526040016000205460ff166111af5760405162461bcd60e51b815260206004820152601060248201527f756e7665726966696564207661756c7400000000000000000000000000000000604482015260640161058d565b8681815181106111cf57634e487b7160e01b600052603260045260246000fd5b6020908102919091018101516000878152600a909252604090912060010154875173ffffffffffffffffffffffffffffffffffffffff9092169163d994844a91339167ffffffffffffffff8083169268010000000000000000900416908b908790811061124c57634e487b7160e01b600052603260045260246000fd5b60200260200101516040518563ffffffff1660e01b815260040161127394939291906124c5565b602060405180830381600087803b15801561128d57600080fd5b505af11580156112a1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112c591906123af565b6112cf9083612828565b9150806112db816128f9565b91505061100c565b50336000908152600b602090815260408083208784529091529020546fffffffffffffffffffffffffffffffff161561141657336000908152600b6020908152604080832087845280835281842054600a845291909320929091526fffffffffffffffffffffffffffffffff81169160030190700100000000000000000000000000000000900460ff16600281111561138c57634e487b7160e01b600052602160045260246000fd5b600381106113aa57634e487b7160e01b600052603260045260246000fd5b600291828204019190066010028282829054906101000a90046fffffffffffffffffffffffffffffffff166113df9190612874565b92506101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff1602179055505b6040518060400160405280826fffffffffffffffffffffffffffffffff16815260200184600281111561145957634e487b7160e01b600052602160045260246000fd5b9052336000908152600b602090815260408083208884528252909120825181546fffffffffffffffffffffffffffffffff9091167fffffffffffffffffffffffffffffffff0000000000000000000000000000000082168117835592840151919283917fffffffffffffffffffffffffffffff0000000000000000000000000000000000161770010000000000000000000000000000000083600281111561151157634e487b7160e01b600052602160045260246000fd5b021790555050506000848152600a60205260409020819060030184600281111561154b57634e487b7160e01b600052602160045260246000fd5b6003811061156957634e487b7160e01b600052603260045260246000fd5b600291828204019190066010028282829054906101000a90046fffffffffffffffffffffffffffffffff1661159e9190612828565b82546fffffffffffffffffffffffffffffffff9182166101009390930a928302919092021990911617905550336000818152600b602090815260408083208884529091529081902090518692917f79597d31752b5a254be8f219c055ebfefe925e085d99c7b04b0883298b35695191611617919061271a565b60405180910390a36fffffffffffffffffffffffffffffffff1695945050505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146116a15760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e657200000000000000000000000000000000604482015260640161058d565b6116d98173ffffffffffffffffffffffffffffffffffffffff166000908152600160208190526040909120805460ff19169091179055565b50565b84831461172b5760405162461bcd60e51b815260206004820152601560248201527f6172726179206c656e677468206d69736d617463680000000000000000000000604482015260640161058d565b846117785760405162461bcd60e51b815260206004820152600e60248201527f656d7074792070726f706f73616c000000000000000000000000000000000000604482015260640161058d565b6000868686866040516020016117919493929190612518565b60408051601f19818403018152919052805160209091012090506000805b878110156118f05760006118288888848181106117dc57634e487b7160e01b600052603260045260246000fd5b90506020028101906117ee9190612770565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611e2292505050565b90506000600860008c8c8681811061185057634e487b7160e01b600052603260045260246000fd5b9050602002016020810190611865919061215a565b73ffffffffffffffffffffffffffffffffffffffff168152602080820192909252604090810160009081207fffffffff0000000000000000000000000000000000000000000000000000000086168252909252902054905080156118c957806118cd565b6003545b9050838111156118db578093505b505080806118e8906128f9565b9150506117af565b50600554600454611901904361285c565b61190b919061285c565b84116119595760405162461bcd60e51b815260206004820152601a60248201527f65787069726573206265666f726520766f74696e6720656e6473000000000000604482015260640161058d565b60405180610100016040528083815260200160014361197891906128a5565b67ffffffffffffffff1681526020016119926014426128a5565b67ffffffffffffffff168152602001600454436119af919061285c565b6fffffffffffffffffffffffffffffffff168152602001600554600454436119d7919061285c565b6119e1919061285c565b6fffffffffffffffffffffffffffffffff168152602001826fffffffffffffffffffffffffffffffff168152602001600a60006007548152602001908152602001600020600301600380602002604051908101604052809291908260038015611aa3576020028201916000905b82829054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1681526020019060100190602082600f01049283019260010382029150808411611a4e5790505b50505091835250506fffffffffffffffffffffffffffffffff8681166020928301526007546000908152600a8352604090819020845181559284015160018401805492860151606087015167ffffffffffffffff9384167fffffffffffffffffffffffffffffffff00000000000000000000000000000000909516949094176801000000000000000093909116929092029190911783167001000000000000000000000000000000009284168302179055608084015160a085015190831692160217600282015560c0820151611b7f9060038084019190611e4b565b5060e08201518160050160006101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff1602179055509050506000611c108d8d80806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250611c0792508e91508f90506128bc565b60075487610f2d565b90506000600654831115611c2657600654611c28565b825b3360009081526001602052604090205490915060ff16611c925780821015611c925760405162461bcd60e51b815260206004820152601960248201527f696e73756666696369656e7420766f74696e6720706f77657200000000000000604482015260640161058d565b7fafbd5d299242bf861d198949ad835672e2e35b2e1838cee606a0b5aec2b4fa426007544360045443611cc5919061285c565b600554600454611cd5904361285c565b611cdf919061285c565b60408051948552602085019390935291830152606082015260800160405180910390a1600160076000828254611d15919061285c565b90915550505050505050505050505050505050565b611d32611f0b565b6000828152600a60205260408082208151606081019283905292600391820192908390855b82829054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1681526020019060100190602082600f01049283019260010382029150808411611d57575094979650505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314611e1d5760405162461bcd60e51b815260206004820152601060248201527f53656e646572206e6f74206f776e657200000000000000000000000000000000604482015260640161058d565b600655565b602001517ffffffffff00000000000000000000000000000000000000000000000000000001690565b600283019183908215611efb5791602002820160005b83821115611ebd57835183826101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff1602179055509260200192601001602081600f01049283019260010302611e61565b8015611ef95782816101000a8154906fffffffffffffffffffffffffffffffff0219169055601001602081600f01049283019260010302611ebd565b505b50611f07929150611f29565b5090565b60405180606001604052806003906020820280368337509192915050565b5b80821115611f075760008155600101611f2a565b6000611f51611f4c84612804565b6127d3565b9050808382526020808301915083868660051b86011115611f7157600080fd5b60005b8681101561200657813567ffffffffffffffff80821115611f9457600080fd5b8188019150601f8a81840112611fa957600080fd5b823582811115611fbb57611fbb612948565b611fcc87601f1984840116016127d3565b92508083528b87828601011115611fe257600080fd5b80878501888501376000908301870152508552509282019290820190600101611f74565b505050509392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461203557600080fd5b919050565b60008083601f84011261204b578182fd5b50813567ffffffffffffffff811115612062578182fd5b6020830191508360208260051b850101111561207d57600080fd5b9250929050565b600082601f830112612094578081fd5b813560206120a4611f4c83612804565b80838252828201915082860187848660051b89010111156120c3578586fd5b855b858110156120e8576120d682612011565b845292840192908401906001016120c5565b5090979650505050505050565b600082601f830112612105578081fd5b61211483833560208501611f3e565b9392505050565b80357fffffffff000000000000000000000000000000000000000000000000000000008116811461203557600080fd5b80356003811061203557600080fd5b60006020828403121561216b578081fd5b61211482612011565b60008060408385031215612186578081fd5b61218f83612011565b9150602083013580151581146121a3578182fd5b809150509250929050565b600080604083850312156121c0578182fd5b6121c983612011565b91506121d76020840161211b565b90509250929050565b6000806000606084860312156121f4578081fd5b6121fd84612011565b925061220b6020850161211b565b9150604084013590509250925092565b6000806040838503121561222d578182fd5b61223683612011565b946020939093013593505050565b60008060008060008060008060008060c08b8d031215612262578586fd5b8a3567ffffffffffffffff80821115612279578788fd5b6122858e838f0161203a565b909c509a5060208d013591508082111561229d578788fd5b6122a98e838f0161203a565b909a50985060408d01359150808211156122c1578788fd5b6122cd8e838f0161203a565b909850965060608d01359150808211156122e5578586fd5b506122f28d828e0161203a565b90955093505060808b0135915061230b60a08c0161214b565b90509295989b9194979a5092959850565b60008060008060808587031215612331578384fd5b843567ffffffffffffffff80821115612348578586fd5b61235488838901612084565b95506020870135915080821115612369578485fd5b50612376878288016120f5565b9350506040850135915061238c6060860161214b565b905092959194509250565b6000602082840312156123a8578081fd5b5035919050565b6000602082840312156123c0578081fd5b5051919050565b6000806000606084860312156123db578081fd5b83359250602084013567ffffffffffffffff808211156123f9578283fd5b61240587838801612084565b9350604086013591508082111561241a578283fd5b50612427868287016120f5565b9150509250925092565b8183528181602085013750600080602083850101526020601f19601f840116840101905092915050565b600081518084526124738160208601602086016128c9565b601f01601f19169290920160200192915050565b600381106124a557634e487b7160e01b600052602160045260246000fd5b9052565b600082516124bb8184602087016128c9565b9190910192915050565b73ffffffffffffffffffffffffffffffffffffffff85168152600067ffffffffffffffff80861660208401528085166040840152506080606083015261250e608083018461245b565b9695505050505050565b6040808252810184905260008560608301825b8781101561256f5761255e8261254085612011565b73ffffffffffffffffffffffffffffffffffffffff16815260200190565b60209390930192915060010161252b565b506020915083810382850152808582528282019050828660051b83010187855b8881101561261857601f1985840301845281357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18b36030181126125d1578788fd5b8a01803567ffffffffffffffff8111156125e9578889fd5b8036038c13156125f7578889fd5b61260485828a8501612431565b95880195945050509085019060010161258f565b50909a9950505050505050505050565b604080825283519082018190526000906020906060840190828701845b8281101561267957815173ffffffffffffffffffffffffffffffffffffffff16845260208401935090840190600101612645565b50505083810382850152845180825282820190600581901b83018401878501865b838110156126c857601f198684030185526126b683835161245b565b9487019492509086019060010161269a565b50909998505050505050505050565b60608101818360005b60038110156127115781516fffffffffffffffffffffffffffffffff168352602092830192909101906001016126e0565b50505092915050565b81546fffffffffffffffffffffffffffffffff811682526040820190610eb960208401608083901c60ff16612487565b6fffffffffffffffffffffffffffffffff83168152604081016121146020830184612487565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126127a4578283fd5b83018035915067ffffffffffffffff8211156127be578283fd5b60200191503681900382131561207d57600080fd5b604051601f8201601f1916810167ffffffffffffffff811182821017156127fc576127fc612948565b604052919050565b600067ffffffffffffffff82111561281e5761281e612948565b5060051b60200190565b60006fffffffffffffffffffffffffffffffff80831681851680830382111561285357612853612932565b01949350505050565b6000821982111561286f5761286f612932565b500190565b60006fffffffffffffffffffffffffffffffff8381169083168181101561289d5761289d612932565b039392505050565b6000828210156128b7576128b7612932565b500390565b6000612114368484611f3e565b60005b838110156128e45781810151838201526020016128cc565b838111156128f3576000848401525b50505050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561292b5761292b612932565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfea2646970667358221220c318ff522b176cdc30738eedf26da232074a884fd8098d3a9fcf893e4aa2896364736f6c63430008040033a2646970667358221220872114e7dfd7d67145c5cba8ca889d214b0c1c2ad7bdb32f4325fdbab526aae664736f6c63430008040033";

export class CoreVotingFactory__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<CoreVotingFactory> {
    return super.deploy(overrides || {}) as Promise<CoreVotingFactory>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): CoreVotingFactory {
    return super.attach(address) as CoreVotingFactory;
  }
  connect(signer: Signer): CoreVotingFactory__factory {
    return super.connect(signer) as CoreVotingFactory__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CoreVotingFactoryInterface {
    return new utils.Interface(_abi) as CoreVotingFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): CoreVotingFactory {
    return new Contract(address, _abi, signerOrProvider) as CoreVotingFactory;
  }
}
