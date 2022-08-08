import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { MockTWAROracle, MockTWAROracleInterface } from "../../../contracts/mocks/MockTWAROracle";
declare type MockTWAROracleConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MockTWAROracle__factory extends ContractFactory {
    constructor(...args: MockTWAROracleConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<MockTWAROracle>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): MockTWAROracle;
    connect(signer: Signer): MockTWAROracle__factory;
    static readonly bytecode = "0x6080806040523461001657610b6f908161001c8239f35b600080fdfe60406080815260048036101561001457600080fd5b6000803560e01c806362549f281461035557806372f1b5fc14610309578063763d768d146102d0578063c646c13c146100b05763fe2f3f161461005657600080fd5b346100ad57826003193601126100ad57506100977bffffffffffffffffffffffffffffffffffffffffffffffffffffffff916100906103d6565b9035610433565b63ffffffff849392935193168352166020820152f35b80fd5b509190346102cc5760606003193601126102cc5780356100ce6103d6565b906044359161ffff808416918285036102c857600183111561026b578161012485600052600060205260406000205461ffff80821690808360101c16908360201c169163ffffffff808560301c169460501c1694565b50925050501661020e5782156101e257160492600163ffffffff85161061018557509063ffff00009185528460205260101b16906dffffffff0000000000000000000069ffffffff0000000000004260301b169160501b1617178183205551f35b60649060208651917f08c379a0000000000000000000000000000000000000000000000000000000008352820152601660248201527f6d696e696d756d2074696d6520737465702069732031000000000000000000006044820152fd5b6024886012887f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b60648660208951917f08c379a0000000000000000000000000000000000000000000000000000000008352820152601a60248201527f62756666657220616c726561647920696e697469616c697a65640000000000006044820152fd5b60648660208951917f08c379a0000000000000000000000000000000000000000000000000000000008352820152600f60248201527f6d696e206c656e677468206973203100000000000000000000000000000000006044820152fd5b8780fd5b8280fd5b509190346102cc57816003193601126102cc576024359263ffffffff841684036100ad5750602092610302913561065b565b9051908152f35b509190346102cc57816003193601126102cc576024357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff811681036103515761034e9135610947565b51f35b8380fd5b508290346100ad5760206003193601126100ad57506103a660a09235600052600060205260406000205461ffff80821690808360101c16908360201c169163ffffffff808560301c169460501c1694565b92949384519563ffffffff809216875216602086015261ffff938480931690860152166060840152166080820152f35b6024359061ffff821682036103e757565b600080fd5b80548210156104045760005260206000200190600090565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9061046d82600052600060205260406000205461ffff80821690808360101c16908360201c169163ffffffff808560301c169460501c1694565b935050505061ffff80911690821610156104c45761049791600052600060205260406000206103ec565b90549060031b1c7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff81169060e01c91565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f696e646578206f7574206f6620626f756e6473000000000000000000000000006044820152fd5b61ffff1661fffe81116105355760010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b9061ffff80911691821561057757160690565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b818110610535570390565b61ffff1660018110610535577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff9182169116818110610535570390565b63ffffffff9182169116818110610535570390565b907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff80911691821561057757160490565b8115610577570490565b9061069582600052600060205260406000205461ffff80821690808360101c16908360201c169163ffffffff808560301c169460501c1694565b925092509261ffff80921691600192838111156108e957600090858316036108e357506106ca846106c587610522565b610564565b955b63ffffffff94854216966106e48760009616426105a6565b936106ef8285610433565b9a909788848b82168911610883575050805b61081c575b50828216911603610756575050505061075293929161074561074b927bffffffffffffffffffffffffffffffffffffffffffffffffffffffff976105e2565b9361060f565b1690610624565b1690565b61077192916106c561076b929a98959a610522565b90610433565b9190816107a07bffffffffffffffffffffffffffffffffffffffffffffffffffffffff808096169616866105a6565b9116946107ad89876105a6565b90827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04821183151516610535576107fc966107f5946107ee9216906105a6565b9102610651565b93166105a6565b91811983116105355761081993610812916105a6565b9101610651565b90565b979096868a8395949516101580610875575b1561086a57505080821661085b5750610846826105b1565b905b6108528285610433565b96909780610701565b610864906105b1565b90610848565b969097929192610706565b50838816848416141561082e565b92509998505061075299507bffffffffffffffffffffffffffffffffffffffffffffffffffffffff9a95506107459492506108d2939161074b97508116156000146108d9575061076b906105b1565b90926105e2565b61076b91506105b1565b956106cc565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f6e6f7420656e6f75676820656c656d656e7473000000000000000000000000006044820152fd5b61098081600052600060205260406000205461ffff80821690808360101c16908360201c169163ffffffff808560301c169460501c1694565b9291949390839163ffffffff928342169761099b868a61060f565b858085169116108015610b2d575b610b2157600097885287602052604088209461ffff8098169687159a8b15610ae3575b906109d69161060f565b167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff809b16808c04821181151516610535578b9182910216981698898b03891161053557849015610ad15750506000945b8684168110610abd575b50610a7b9563ffff000091169260101b169065ffff000000008560201b16906dffffffff0000000000000000000069ffffffff0000000000004260301b169160501b161717171781556103ec565b91909384549260031b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821b94859301164260e01b17901b16911916179055565b905085811461053557600101610a7b610a2d565b6106c5610add92610522565b94610a23565b99506109d6907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff610b10858a6103ec565b90549060031b1c169a9091506109cc565b50505050505050505050565b5061ffff8416156109a956fea264697066735822122081ba742fb4029c240f665013c3ed1f4136d9fd27d8ebb61b740c7c29ed2c747764736f6c634300080f0033";
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): MockTWAROracleInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MockTWAROracle;
}
export {};