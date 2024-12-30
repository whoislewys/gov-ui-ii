/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface MockSmartWalletInterface extends ethers.utils.Interface {
  functions: {
    "createLock(address,uint256,uint256)": FunctionFragment;
    "fdt()": FunctionFragment;
    "increaseAmount(address,uint256)": FunctionFragment;
    "increaseUnlockTime(address,uint256)": FunctionFragment;
    "quitLock(address)": FunctionFragment;
    "withdraw(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "createLock",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "fdt", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "increaseAmount",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "increaseUnlockTime",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "quitLock", values: [string]): string;
  encodeFunctionData(functionFragment: "withdraw", values: [string]): string;

  decodeFunctionResult(functionFragment: "createLock", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "fdt", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "increaseAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increaseUnlockTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "quitLock", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {};
}

export class MockSmartWallet extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: MockSmartWalletInterface;

  functions: {
    createLock(
      ve: string,
      amount: BigNumberish,
      end: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    fdt(overrides?: CallOverrides): Promise<[string]>;

    increaseAmount(
      ve: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    increaseUnlockTime(
      ve: string,
      unlockTime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    quitLock(
      ve: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      ve: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  createLock(
    ve: string,
    amount: BigNumberish,
    end: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  fdt(overrides?: CallOverrides): Promise<string>;

  increaseAmount(
    ve: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  increaseUnlockTime(
    ve: string,
    unlockTime: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  quitLock(
    ve: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    ve: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    createLock(
      ve: string,
      amount: BigNumberish,
      end: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    fdt(overrides?: CallOverrides): Promise<string>;

    increaseAmount(
      ve: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    increaseUnlockTime(
      ve: string,
      unlockTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    quitLock(ve: string, overrides?: CallOverrides): Promise<void>;

    withdraw(ve: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    createLock(
      ve: string,
      amount: BigNumberish,
      end: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    fdt(overrides?: CallOverrides): Promise<BigNumber>;

    increaseAmount(
      ve: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    increaseUnlockTime(
      ve: string,
      unlockTime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    quitLock(
      ve: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdraw(
      ve: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createLock(
      ve: string,
      amount: BigNumberish,
      end: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    fdt(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    increaseAmount(
      ve: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    increaseUnlockTime(
      ve: string,
      unlockTime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    quitLock(
      ve: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      ve: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}