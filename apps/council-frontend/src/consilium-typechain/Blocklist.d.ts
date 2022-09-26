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

interface BlocklistInterface extends ethers.utils.Interface {
  functions: {
    "blockContract(address)": FunctionFragment;
    "isBlocked(address)": FunctionFragment;
    "manager()": FunctionFragment;
    "ve()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "blockContract",
    values: [string],
  ): string;
  encodeFunctionData(functionFragment: "isBlocked", values: [string]): string;
  encodeFunctionData(functionFragment: "manager", values?: undefined): string;
  encodeFunctionData(functionFragment: "ve", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "blockContract",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: "isBlocked", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "manager", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ve", data: BytesLike): Result;

  events: {};
}

export class Blocklist extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>,
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>,
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>,
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>,
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>,
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
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
    toBlock?: string | number | undefined,
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: BlocklistInterface;

  functions: {
    blockContract(
      addr: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    isBlocked(addr: string, overrides?: CallOverrides): Promise<[boolean]>;

    manager(overrides?: CallOverrides): Promise<[string]>;

    ve(overrides?: CallOverrides): Promise<[string]>;
  };

  blockContract(
    addr: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  isBlocked(addr: string, overrides?: CallOverrides): Promise<boolean>;

  manager(overrides?: CallOverrides): Promise<string>;

  ve(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    blockContract(addr: string, overrides?: CallOverrides): Promise<void>;

    isBlocked(addr: string, overrides?: CallOverrides): Promise<boolean>;

    manager(overrides?: CallOverrides): Promise<string>;

    ve(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    blockContract(
      addr: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    isBlocked(addr: string, overrides?: CallOverrides): Promise<BigNumber>;

    manager(overrides?: CallOverrides): Promise<BigNumber>;

    ve(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    blockContract(
      addr: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    isBlocked(
      addr: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    manager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ve(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
