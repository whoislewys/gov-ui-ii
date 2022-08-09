"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockERC20__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "string",
                name: "name_",
                type: "string",
            },
            {
                internalType: "string",
                name: "symbol_",
                type: "string",
            },
            {
                internalType: "uint8",
                name: "decimals_",
                type: "uint8",
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
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "Approval",
        type: "event",
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
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "Transfer",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
        ],
        name: "allowance",
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
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "approve",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
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
        inputs: [],
        name: "decimals",
        outputs: [
            {
                internalType: "uint8",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "pure",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "subtractedValue",
                type: "uint256",
            },
        ],
        name: "decreaseAllowance",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "addedValue",
                type: "uint256",
            },
        ],
        name: "increaseAllowance",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
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
        inputs: [],
        name: "name",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "destination",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "setBalance",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "symbol",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
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
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
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
        name: "transferFrom",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "destination",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "uncheckedTransfer",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var _bytecode = "0x60a060405234620003385762001174803803806200001d816200033d565b9283398101606082820312620003385781516001600160401b03908181116200033857826200004e91850162000363565b906020928385015182811162000338576040916200006e91870162000363565b9401519360ff851685036200033857825182811162000238576003918254916001958684811c941680156200032d575b8885101462000317578190601f94858111620002c1575b5088908583116001146200025a576000926200024e575b505060001982861b1c191690861b1783555b8051938411620002385760049586548681811c911680156200022d575b828210146200021857838111620001cd575b50809285116001146200015f575093839491849260009562000153575b50501b92600019911b1c19161790555b608052604051610d8d9081620003e78239608051815050f35b0151935038806200012a565b92919084601f1981168860005285600020956000905b89838310620001b2575050501062000197575b50505050811b0190556200013a565b01519060f884600019921b161c191690553880808062000188565b85870151895590970196948501948893509081019062000175565b87600052816000208480880160051c8201928489106200020e575b0160051c019087905b828110620002015750506200010d565b60008155018790620001f1565b92508192620001e8565b602288634e487b7160e01b6000525260246000fd5b90607f1690620000fb565b634e487b7160e01b600052604160045260246000fd5b015190503880620000cc565b90889350601f19831691876000528a6000209260005b8c828210620002aa575050841162000291575b505050811b018355620000de565b015160001983881b60f8161c1916905538808062000283565b8385015186558c9790950194938401930162000270565b90915085600052886000208580850160051c8201928b86106200030d575b918a91869594930160051c01915b828110620002fd575050620000b5565b600081558594508a9101620002ed565b92508192620002df565b634e487b7160e01b600052602260045260246000fd5b93607f16936200009e565b600080fd5b6040519190601f01601f191682016001600160401b038111838210176200023857604052565b81601f8201121562000338578051906001600160401b038211620002385760209062000398601f8401601f191683016200033d565b93838552828483010111620003385782906000905b83838310620003cd57505011620003c357505090565b6000918301015290565b81935082819392010151828288010152018391620003ad56fe6080604081815260048036101561001557600080fd5b600092833560e01c90816306fdde03146107e057508063095ea7b3146107b657806318160ddd1461079757806323b872dd146106a1578063313ce56714610685578063395093511461062957806340c10f191461060057806370a08231146105bd57806395d89b411461043e578063a457c2d714610371578063a9059cbb14610340578063dd62ed3e146102ea578063e22f03c11461027a5763e30443bc146100bd57600080fd5b346102765781600319360112610276576100d561091d565b9060243573ffffffffffffffffffffffffffffffffffffffff8316928386526020928684528587205490851561020e57858852878552868820548281106101a6578290878a5289875203878920556002549082821061017a5750838594929389888682999761017196036002558b519081527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef988991a3610cac565b8551908152a351f35b8860116024927f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b608482878a519162461bcd60e51b8352820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f63650000000000000000000000000000000000000000000000000000000000006064820152fd5b6084908588519162461bcd60e51b8352820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f73000000000000000000000000000000000000000000000000000000000000006064820152fd5b8280fd5b5050346102e657806003193601126102e65761029461091d565b827fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef602073ffffffffffffffffffffffffffffffffffffffff602435946102db8682610cac565b86519586521693a351f35b5080fd5b5050346102e657806003193601126102e6578060209261030861091d565b610310610945565b73ffffffffffffffffffffffffffffffffffffffff91821683526001865283832091168252845220549051908152f35b5050346102e657806003193601126102e65760209061036a61036061091d565b60243590336109a3565b5160018152f35b50823461043b578260031936011261043b5761038b61091d565b918360243592338152600160205281812073ffffffffffffffffffffffffffffffffffffffff861682526020522054908282106103d25760208561036a8585038733610b6b565b608490602086519162461bcd60e51b8352820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f0000000000000000000000000000000000000000000000000000006064820152fd5b80fd5b509190346102e657816003193601126102e657805190828454600181811c908083169283156105b3575b602093848410811461058757838852879594939291811561054a57506001146104ec575b50505003601f01601f191682019267ffffffffffffffff8411838510176104c057508291826104bc9252826108c5565b0390f35b806041867f4e487b71000000000000000000000000000000000000000000000000000000006024945252fd5b8888529193925086917f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b5b8284106105345750505090601f1992601f9282010191819361048c565b8054888501870152879450928501928101610517565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016848701525050151560051b830101905081601f601f1961048c565b60248960228c7f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b91607f1691610468565b5050346102e65760206003193601126102e6578060209273ffffffffffffffffffffffffffffffffffffffff6105f161091d565b16815280845220549051908152f35b5050346102e657806003193601126102e65761062661061d61091d565b60243590610cac565b51f35b5050346102e657806003193601126102e65761036a60209261067e61064c61091d565b913381526001865284812073ffffffffffffffffffffffffffffffffffffffff84168252865284602435912054610968565b9033610b6b565b5050346102e657816003193601126102e6576020905160128152f35b508290346102e65760606003193601126102e6576106bd61091d565b6106c5610945565b91846044359473ffffffffffffffffffffffffffffffffffffffff8416815260016020528181203382526020522054907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361072b575b60208661036a8787876109a3565b84821061075457509183916107496020969561036a95033383610b6b565b91939481935061071d565b606490602087519162461bcd60e51b8352820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152fd5b5050346102e657816003193601126102e6576020906002549051908152f35b5050346102e657806003193601126102e65760209061036a6107d661091d565b6024359033610b6b565b849150833461027657826003193601126102765782600354600181811c908083169283156108bb575b602093848410811461058757838852879594939291811561054a575060011461085c5750505003601f01601f191682019267ffffffffffffffff8411838510176104c057508291826104bc9252826108c5565b600388529193925086917fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b5b8284106108a55750505090601f1992601f9282010191819361048c565b8054888501870152879450928501928101610888565b91607f1691610809565b919091602080825283519081818401526000945b828610610907575050601f81601f199260409596116108fa575b0116010190565b60008582860101526108f3565b85810182015184870160400152948101946108d9565b6004359073ffffffffffffffffffffffffffffffffffffffff8216820361094057565b600080fd5b6024359073ffffffffffffffffffffffffffffffffffffffff8216820361094057565b81198111610974570190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b73ffffffffffffffffffffffffffffffffffffffff809116918215610b015716918215610a9757600082815280602052604081205491808310610a2d57604082827fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef958760209652828652038282205586815220610a22828254610968565b9055604051908152a3565b608460405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e636500000000000000000000000000000000000000000000000000006064820152fd5b608460405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f65737300000000000000000000000000000000000000000000000000000000006064820152fd5b608460405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152fd5b73ffffffffffffffffffffffffffffffffffffffff809116918215610c435716918215610bd95760207f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925918360005260018252604060002085600052825280604060002055604051908152a3565b608460405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f73730000000000000000000000000000000000000000000000000000000000006064820152fd5b608460405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f72657373000000000000000000000000000000000000000000000000000000006064820152fd5b73ffffffffffffffffffffffffffffffffffffffff16908115610d13577fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef602082610cfb600094600254610968565b60025584845283825260408420610a22828254610968565b606460405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152fdfea26469706673582212201dec02c0b71f3d2c7bf432e218169b037be58388d667e24ab11544051c49342664736f6c634300080f0033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var MockERC20__factory = /** @class */ (function (_super) {
    __extends(MockERC20__factory, _super);
    function MockERC20__factory() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = this;
        if (isSuperArgs(args)) {
            _this = _super.apply(this, args) || this;
        }
        else {
            _this = _super.call(this, _abi, _bytecode, args[0]) || this;
        }
        return _this;
    }
    MockERC20__factory.prototype.deploy = function (name_, symbol_, decimals_, overrides) {
        return _super.prototype.deploy.call(this, name_, symbol_, decimals_, overrides || {});
    };
    MockERC20__factory.prototype.getDeployTransaction = function (name_, symbol_, decimals_, overrides) {
        return _super.prototype.getDeployTransaction.call(this, name_, symbol_, decimals_, overrides || {});
    };
    MockERC20__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    MockERC20__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    MockERC20__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    MockERC20__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    MockERC20__factory.bytecode = _bytecode;
    MockERC20__factory.abi = _abi;
    return MockERC20__factory;
}(ethers_1.ContractFactory));
exports.MockERC20__factory = MockERC20__factory;
