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

interface AbstractVestingVaultInterface extends ethers.utils.Interface {
  functions: {
    "acceptGrant()": FunctionFragment;
    "addGrantAndDelegate(address,uint128,uint128,uint128,uint128,address)": FunctionFragment;
    "changeUnvestedMultiplier(uint256)": FunctionFragment;
    "claim()": FunctionFragment;
    "delegate(address)": FunctionFragment;
    "deposit(uint256)": FunctionFragment;
    "getGrant(address)": FunctionFragment;
    "initialize(address,address)": FunctionFragment;
    "manager()": FunctionFragment;
    "queryVotePower(address,uint256,uint256,bytes)": FunctionFragment;
    "queryVotePowerView(address,uint256)": FunctionFragment;
    "removeGrant(address)": FunctionFragment;
    "setManager(address)": FunctionFragment;
    "setTimelock(address)": FunctionFragment;
    "staleBlockLag()": FunctionFragment;
    "timelock()": FunctionFragment;
    "token()": FunctionFragment;
    "unvestedMultiplier()": FunctionFragment;
    "updateVotingPower(address)": FunctionFragment;
    "withdraw(uint256,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "acceptGrant",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addGrantAndDelegate",
    values: [
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      string
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "changeUnvestedMultiplier",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "claim", values?: undefined): string;
  encodeFunctionData(functionFragment: "delegate", values: [string]): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "getGrant", values: [string]): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "manager", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "queryVotePower",
    values: [string, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "queryVotePowerView",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "removeGrant", values: [string]): string;
  encodeFunctionData(functionFragment: "setManager", values: [string]): string;
  encodeFunctionData(functionFragment: "setTimelock", values: [string]): string;
  encodeFunctionData(
    functionFragment: "staleBlockLag",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "timelock", values?: undefined): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "unvestedMultiplier",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "updateVotingPower",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptGrant",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addGrantAndDelegate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeUnvestedMultiplier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "delegate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getGrant", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "manager", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "queryVotePower",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "queryVotePowerView",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeGrant",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setManager", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setTimelock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "staleBlockLag",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "timelock", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "unvestedMultiplier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateVotingPower",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "VoteChange(address,address,int256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "VoteChange"): EventFragment;
}

export class AbstractVestingVault extends BaseContract {
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

  interface: AbstractVestingVaultInterface;

  functions: {
    acceptGrant(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addGrantAndDelegate(
      _who: string,
      _amount: BigNumberish,
      _startTime: BigNumberish,
      _expiration: BigNumberish,
      _cliff: BigNumberish,
      _delegatee: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    changeUnvestedMultiplier(
      _multiplier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claim(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    delegate(
      _to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deposit(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getGrant(
      _who: string,
      overrides?: CallOverrides
    ): Promise<
      [
        [
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          string,
          [BigNumber, BigNumber]
        ] & {
          allocation: BigNumber;
          withdrawn: BigNumber;
          created: BigNumber;
          expiration: BigNumber;
          cliff: BigNumber;
          latestVotingPower: BigNumber;
          delegatee: string;
          range: [BigNumber, BigNumber];
        }
      ]
    >;

    initialize(
      manager_: string,
      timelock_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    manager(overrides?: CallOverrides): Promise<[string]>;

    queryVotePower(
      user: string,
      blockNumber: BigNumberish,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    queryVotePowerView(
      user: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    removeGrant(
      _who: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setManager(
      manager_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTimelock(
      timelock_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    staleBlockLag(overrides?: CallOverrides): Promise<[BigNumber]>;

    timelock(overrides?: CallOverrides): Promise<[string]>;

    token(overrides?: CallOverrides): Promise<[string]>;

    unvestedMultiplier(overrides?: CallOverrides): Promise<[BigNumber]>;

    updateVotingPower(
      _who: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      _amount: BigNumberish,
      _recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  acceptGrant(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addGrantAndDelegate(
    _who: string,
    _amount: BigNumberish,
    _startTime: BigNumberish,
    _expiration: BigNumberish,
    _cliff: BigNumberish,
    _delegatee: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  changeUnvestedMultiplier(
    _multiplier: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claim(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  delegate(
    _to: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deposit(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getGrant(
    _who: string,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      string,
      [BigNumber, BigNumber]
    ] & {
      allocation: BigNumber;
      withdrawn: BigNumber;
      created: BigNumber;
      expiration: BigNumber;
      cliff: BigNumber;
      latestVotingPower: BigNumber;
      delegatee: string;
      range: [BigNumber, BigNumber];
    }
  >;

  initialize(
    manager_: string,
    timelock_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  manager(overrides?: CallOverrides): Promise<string>;

  queryVotePower(
    user: string,
    blockNumber: BigNumberish,
    arg2: BigNumberish,
    arg3: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  queryVotePowerView(
    user: string,
    blockNumber: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  removeGrant(
    _who: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setManager(
    manager_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTimelock(
    timelock_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  staleBlockLag(overrides?: CallOverrides): Promise<BigNumber>;

  timelock(overrides?: CallOverrides): Promise<string>;

  token(overrides?: CallOverrides): Promise<string>;

  unvestedMultiplier(overrides?: CallOverrides): Promise<BigNumber>;

  updateVotingPower(
    _who: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    _amount: BigNumberish,
    _recipient: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    acceptGrant(overrides?: CallOverrides): Promise<void>;

    addGrantAndDelegate(
      _who: string,
      _amount: BigNumberish,
      _startTime: BigNumberish,
      _expiration: BigNumberish,
      _cliff: BigNumberish,
      _delegatee: string,
      overrides?: CallOverrides
    ): Promise<void>;

    changeUnvestedMultiplier(
      _multiplier: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    claim(overrides?: CallOverrides): Promise<void>;

    delegate(_to: string, overrides?: CallOverrides): Promise<void>;

    deposit(_amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    getGrant(
      _who: string,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        [BigNumber, BigNumber]
      ] & {
        allocation: BigNumber;
        withdrawn: BigNumber;
        created: BigNumber;
        expiration: BigNumber;
        cliff: BigNumber;
        latestVotingPower: BigNumber;
        delegatee: string;
        range: [BigNumber, BigNumber];
      }
    >;

    initialize(
      manager_: string,
      timelock_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    manager(overrides?: CallOverrides): Promise<string>;

    queryVotePower(
      user: string,
      blockNumber: BigNumberish,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    queryVotePowerView(
      user: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeGrant(_who: string, overrides?: CallOverrides): Promise<void>;

    setManager(manager_: string, overrides?: CallOverrides): Promise<void>;

    setTimelock(timelock_: string, overrides?: CallOverrides): Promise<void>;

    staleBlockLag(overrides?: CallOverrides): Promise<BigNumber>;

    timelock(overrides?: CallOverrides): Promise<string>;

    token(overrides?: CallOverrides): Promise<string>;

    unvestedMultiplier(overrides?: CallOverrides): Promise<BigNumber>;

    updateVotingPower(_who: string, overrides?: CallOverrides): Promise<void>;

    withdraw(
      _amount: BigNumberish,
      _recipient: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    VoteChange(
      to?: string | null,
      from?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { to: string; from: string; amount: BigNumber }
    >;
  };

  estimateGas: {
    acceptGrant(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addGrantAndDelegate(
      _who: string,
      _amount: BigNumberish,
      _startTime: BigNumberish,
      _expiration: BigNumberish,
      _cliff: BigNumberish,
      _delegatee: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    changeUnvestedMultiplier(
      _multiplier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claim(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    delegate(
      _to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deposit(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getGrant(_who: string, overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      manager_: string,
      timelock_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    manager(overrides?: CallOverrides): Promise<BigNumber>;

    queryVotePower(
      user: string,
      blockNumber: BigNumberish,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    queryVotePowerView(
      user: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeGrant(
      _who: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setManager(
      manager_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTimelock(
      timelock_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    staleBlockLag(overrides?: CallOverrides): Promise<BigNumber>;

    timelock(overrides?: CallOverrides): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;

    unvestedMultiplier(overrides?: CallOverrides): Promise<BigNumber>;

    updateVotingPower(
      _who: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdraw(
      _amount: BigNumberish,
      _recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptGrant(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addGrantAndDelegate(
      _who: string,
      _amount: BigNumberish,
      _startTime: BigNumberish,
      _expiration: BigNumberish,
      _cliff: BigNumberish,
      _delegatee: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    changeUnvestedMultiplier(
      _multiplier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claim(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    delegate(
      _to: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deposit(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getGrant(
      _who: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      manager_: string,
      timelock_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    manager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    queryVotePower(
      user: string,
      blockNumber: BigNumberish,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    queryVotePowerView(
      user: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeGrant(
      _who: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setManager(
      manager_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTimelock(
      timelock_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    staleBlockLag(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    timelock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    unvestedMultiplier(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    updateVotingPower(
      _who: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      _amount: BigNumberish,
      _recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
