/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface IRewarderInterface extends utils.Interface {
  functions: {
    "onSushiReward(uint256,address,address,uint256,uint256)": FunctionFragment;
    "pendingTokens(uint256,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "onSushiReward",
    values: [BigNumberish, string, string, BigNumberish, BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: "pendingTokens",
    values: [BigNumberish, string, BigNumberish],
  ): string;

  decodeFunctionResult(
    functionFragment: "onSushiReward",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingTokens",
    data: BytesLike,
  ): Result;

  events: {};
}

export interface IRewarder extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IRewarderInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>,
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>,
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    onSushiReward(
      pid: BigNumberish,
      user: string,
      recipient: string,
      sushiAmount: BigNumberish,
      newLpAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    "onSushiReward(uint256,address,address,uint256,uint256)"(
      pid: BigNumberish,
      user: string,
      recipient: string,
      sushiAmount: BigNumberish,
      newLpAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    pendingTokens(
      pid: BigNumberish,
      user: string,
      sushiAmount: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[string[], BigNumber[]]>;

    "pendingTokens(uint256,address,uint256)"(
      pid: BigNumberish,
      user: string,
      sushiAmount: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[string[], BigNumber[]]>;
  };

  onSushiReward(
    pid: BigNumberish,
    user: string,
    recipient: string,
    sushiAmount: BigNumberish,
    newLpAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  "onSushiReward(uint256,address,address,uint256,uint256)"(
    pid: BigNumberish,
    user: string,
    recipient: string,
    sushiAmount: BigNumberish,
    newLpAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  pendingTokens(
    pid: BigNumberish,
    user: string,
    sushiAmount: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<[string[], BigNumber[]]>;

  "pendingTokens(uint256,address,uint256)"(
    pid: BigNumberish,
    user: string,
    sushiAmount: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<[string[], BigNumber[]]>;

  callStatic: {
    onSushiReward(
      pid: BigNumberish,
      user: string,
      recipient: string,
      sushiAmount: BigNumberish,
      newLpAmount: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>;

    "onSushiReward(uint256,address,address,uint256,uint256)"(
      pid: BigNumberish,
      user: string,
      recipient: string,
      sushiAmount: BigNumberish,
      newLpAmount: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>;

    pendingTokens(
      pid: BigNumberish,
      user: string,
      sushiAmount: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[string[], BigNumber[]]>;

    "pendingTokens(uint256,address,uint256)"(
      pid: BigNumberish,
      user: string,
      sushiAmount: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[string[], BigNumber[]]>;
  };

  filters: {};

  estimateGas: {
    onSushiReward(
      pid: BigNumberish,
      user: string,
      recipient: string,
      sushiAmount: BigNumberish,
      newLpAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    "onSushiReward(uint256,address,address,uint256,uint256)"(
      pid: BigNumberish,
      user: string,
      recipient: string,
      sushiAmount: BigNumberish,
      newLpAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    pendingTokens(
      pid: BigNumberish,
      user: string,
      sushiAmount: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    "pendingTokens(uint256,address,uint256)"(
      pid: BigNumberish,
      user: string,
      sushiAmount: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    onSushiReward(
      pid: BigNumberish,
      user: string,
      recipient: string,
      sushiAmount: BigNumberish,
      newLpAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    "onSushiReward(uint256,address,address,uint256,uint256)"(
      pid: BigNumberish,
      user: string,
      recipient: string,
      sushiAmount: BigNumberish,
      newLpAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    pendingTokens(
      pid: BigNumberish,
      user: string,
      sushiAmount: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    "pendingTokens(uint256,address,uint256)"(
      pid: BigNumberish,
      user: string,
      sushiAmount: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
  };
}
