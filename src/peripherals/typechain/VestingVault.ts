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
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export type GrantStruct = {
  allocation: BigNumberish;
  withdrawn: BigNumberish;
  created: BigNumberish;
  expiration: BigNumberish;
  cliff: BigNumberish;
  latestVotingPower: BigNumberish;
  delegatee: string;
  range: [BigNumberish, BigNumberish];
};

export type GrantStructOutput = [
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  string,
  [BigNumber, BigNumber],
] & {
  allocation: BigNumber;
  withdrawn: BigNumber;
  created: BigNumber;
  expiration: BigNumber;
  cliff: BigNumber;
  latestVotingPower: BigNumber;
  delegatee: string;
  range: [BigNumber, BigNumber];
};

export interface VestingVaultInterface extends utils.Interface {
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
    "queryVotePower(address,uint256,bytes)": FunctionFragment;
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
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: "addGrantAndDelegate",
    values: [
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      string,
    ],
  ): string;
  encodeFunctionData(
    functionFragment: "changeUnvestedMultiplier",
    values: [BigNumberish],
  ): string;
  encodeFunctionData(functionFragment: "claim", values?: undefined): string;
  encodeFunctionData(functionFragment: "delegate", values: [string]): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [BigNumberish],
  ): string;
  encodeFunctionData(functionFragment: "getGrant", values: [string]): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string],
  ): string;
  encodeFunctionData(functionFragment: "manager", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "queryVotePower",
    values: [string, BigNumberish, BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: "queryVotePowerView",
    values: [string, BigNumberish],
  ): string;
  encodeFunctionData(functionFragment: "removeGrant", values: [string]): string;
  encodeFunctionData(functionFragment: "setManager", values: [string]): string;
  encodeFunctionData(functionFragment: "setTimelock", values: [string]): string;
  encodeFunctionData(
    functionFragment: "staleBlockLag",
    values?: undefined,
  ): string;
  encodeFunctionData(functionFragment: "timelock", values?: undefined): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "unvestedMultiplier",
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: "updateVotingPower",
    values: [string],
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish, string],
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptGrant",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "addGrantAndDelegate",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeUnvestedMultiplier",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "delegate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getGrant", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "manager", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "queryVotePower",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "queryVotePowerView",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeGrant",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: "setManager", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setTimelock",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "staleBlockLag",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: "timelock", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "unvestedMultiplier",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateVotingPower",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "VoteChange(address,address,int256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "VoteChange"): EventFragment;
}

export type VoteChangeEvent = TypedEvent<
  [string, string, BigNumber],
  { to: string; from: string; amount: BigNumber }
>;

export type VoteChangeEventFilter = TypedEventFilter<VoteChangeEvent>;

export interface VestingVault extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: VestingVaultInterface;

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
    acceptGrant(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    "acceptGrant()"(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    addGrantAndDelegate(
      _who: string,
      _amount: BigNumberish,
      _startTime: BigNumberish,
      _expiration: BigNumberish,
      _cliff: BigNumberish,
      _delegatee: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    "addGrantAndDelegate(address,uint128,uint128,uint128,uint128,address)"(
      _who: string,
      _amount: BigNumberish,
      _startTime: BigNumberish,
      _expiration: BigNumberish,
      _cliff: BigNumberish,
      _delegatee: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    changeUnvestedMultiplier(
      _multiplier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    "changeUnvestedMultiplier(uint256)"(
      _multiplier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    claim(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    "claim()"(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    delegate(
      _to: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    "delegate(address)"(
      _to: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    deposit(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    "deposit(uint256)"(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    getGrant(
      _who: string,
      overrides?: CallOverrides,
    ): Promise<[GrantStructOutput]>;

    "getGrant(address)"(
      _who: string,
      overrides?: CallOverrides,
    ): Promise<[GrantStructOutput]>;

    initialize(
      manager_: string,
      timelock_: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    "initialize(address,address)"(
      manager_: string,
      timelock_: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    manager(overrides?: CallOverrides): Promise<[string]>;

    "manager()"(overrides?: CallOverrides): Promise<[string]>;

    queryVotePower(
      user: string,
      blockNumber: BigNumberish,
      arg2: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    "queryVotePower(address,uint256,bytes)"(
      user: string,
      blockNumber: BigNumberish,
      arg2: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    queryVotePowerView(
      user: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    "queryVotePowerView(address,uint256)"(
      user: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    removeGrant(
      _who: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    "removeGrant(address)"(
      _who: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    setManager(
      manager_: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    "setManager(address)"(
      manager_: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    setTimelock(
      timelock_: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    "setTimelock(address)"(
      timelock_: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    staleBlockLag(overrides?: CallOverrides): Promise<[BigNumber]>;

    "staleBlockLag()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    timelock(overrides?: CallOverrides): Promise<[string]>;

    "timelock()"(overrides?: CallOverrides): Promise<[string]>;

    token(overrides?: CallOverrides): Promise<[string]>;

    "token()"(overrides?: CallOverrides): Promise<[string]>;

    unvestedMultiplier(overrides?: CallOverrides): Promise<[BigNumber]>;

    "unvestedMultiplier()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    updateVotingPower(
      _who: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    "updateVotingPower(address)"(
      _who: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    withdraw(
      _amount: BigNumberish,
      _recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    "withdraw(uint256,address)"(
      _amount: BigNumberish,
      _recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;
  };

  acceptGrant(
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  "acceptGrant()"(
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  addGrantAndDelegate(
    _who: string,
    _amount: BigNumberish,
    _startTime: BigNumberish,
    _expiration: BigNumberish,
    _cliff: BigNumberish,
    _delegatee: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  "addGrantAndDelegate(address,uint128,uint128,uint128,uint128,address)"(
    _who: string,
    _amount: BigNumberish,
    _startTime: BigNumberish,
    _expiration: BigNumberish,
    _cliff: BigNumberish,
    _delegatee: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  changeUnvestedMultiplier(
    _multiplier: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  "changeUnvestedMultiplier(uint256)"(
    _multiplier: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  claim(
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  "claim()"(
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  delegate(
    _to: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  "delegate(address)"(
    _to: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  deposit(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  "deposit(uint256)"(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  getGrant(_who: string, overrides?: CallOverrides): Promise<GrantStructOutput>;

  "getGrant(address)"(
    _who: string,
    overrides?: CallOverrides,
  ): Promise<GrantStructOutput>;

  initialize(
    manager_: string,
    timelock_: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  "initialize(address,address)"(
    manager_: string,
    timelock_: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  manager(overrides?: CallOverrides): Promise<string>;

  "manager()"(overrides?: CallOverrides): Promise<string>;

  queryVotePower(
    user: string,
    blockNumber: BigNumberish,
    arg2: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  "queryVotePower(address,uint256,bytes)"(
    user: string,
    blockNumber: BigNumberish,
    arg2: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  queryVotePowerView(
    user: string,
    blockNumber: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  "queryVotePowerView(address,uint256)"(
    user: string,
    blockNumber: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  removeGrant(
    _who: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  "removeGrant(address)"(
    _who: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  setManager(
    manager_: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  "setManager(address)"(
    manager_: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  setTimelock(
    timelock_: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  "setTimelock(address)"(
    timelock_: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  staleBlockLag(overrides?: CallOverrides): Promise<BigNumber>;

  "staleBlockLag()"(overrides?: CallOverrides): Promise<BigNumber>;

  timelock(overrides?: CallOverrides): Promise<string>;

  "timelock()"(overrides?: CallOverrides): Promise<string>;

  token(overrides?: CallOverrides): Promise<string>;

  "token()"(overrides?: CallOverrides): Promise<string>;

  unvestedMultiplier(overrides?: CallOverrides): Promise<BigNumber>;

  "unvestedMultiplier()"(overrides?: CallOverrides): Promise<BigNumber>;

  updateVotingPower(
    _who: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  "updateVotingPower(address)"(
    _who: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  withdraw(
    _amount: BigNumberish,
    _recipient: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  "withdraw(uint256,address)"(
    _amount: BigNumberish,
    _recipient: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    acceptGrant(overrides?: CallOverrides): Promise<void>;

    "acceptGrant()"(overrides?: CallOverrides): Promise<void>;

    addGrantAndDelegate(
      _who: string,
      _amount: BigNumberish,
      _startTime: BigNumberish,
      _expiration: BigNumberish,
      _cliff: BigNumberish,
      _delegatee: string,
      overrides?: CallOverrides,
    ): Promise<void>;

    "addGrantAndDelegate(address,uint128,uint128,uint128,uint128,address)"(
      _who: string,
      _amount: BigNumberish,
      _startTime: BigNumberish,
      _expiration: BigNumberish,
      _cliff: BigNumberish,
      _delegatee: string,
      overrides?: CallOverrides,
    ): Promise<void>;

    changeUnvestedMultiplier(
      _multiplier: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>;

    "changeUnvestedMultiplier(uint256)"(
      _multiplier: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>;

    claim(overrides?: CallOverrides): Promise<void>;

    "claim()"(overrides?: CallOverrides): Promise<void>;

    delegate(_to: string, overrides?: CallOverrides): Promise<void>;

    "delegate(address)"(_to: string, overrides?: CallOverrides): Promise<void>;

    deposit(_amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "deposit(uint256)"(
      _amount: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>;

    getGrant(
      _who: string,
      overrides?: CallOverrides,
    ): Promise<GrantStructOutput>;

    "getGrant(address)"(
      _who: string,
      overrides?: CallOverrides,
    ): Promise<GrantStructOutput>;

    initialize(
      manager_: string,
      timelock_: string,
      overrides?: CallOverrides,
    ): Promise<void>;

    "initialize(address,address)"(
      manager_: string,
      timelock_: string,
      overrides?: CallOverrides,
    ): Promise<void>;

    manager(overrides?: CallOverrides): Promise<string>;

    "manager()"(overrides?: CallOverrides): Promise<string>;

    queryVotePower(
      user: string,
      blockNumber: BigNumberish,
      arg2: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    "queryVotePower(address,uint256,bytes)"(
      user: string,
      blockNumber: BigNumberish,
      arg2: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    queryVotePowerView(
      user: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    "queryVotePowerView(address,uint256)"(
      user: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    removeGrant(_who: string, overrides?: CallOverrides): Promise<void>;

    "removeGrant(address)"(
      _who: string,
      overrides?: CallOverrides,
    ): Promise<void>;

    setManager(manager_: string, overrides?: CallOverrides): Promise<void>;

    "setManager(address)"(
      manager_: string,
      overrides?: CallOverrides,
    ): Promise<void>;

    setTimelock(timelock_: string, overrides?: CallOverrides): Promise<void>;

    "setTimelock(address)"(
      timelock_: string,
      overrides?: CallOverrides,
    ): Promise<void>;

    staleBlockLag(overrides?: CallOverrides): Promise<BigNumber>;

    "staleBlockLag()"(overrides?: CallOverrides): Promise<BigNumber>;

    timelock(overrides?: CallOverrides): Promise<string>;

    "timelock()"(overrides?: CallOverrides): Promise<string>;

    token(overrides?: CallOverrides): Promise<string>;

    "token()"(overrides?: CallOverrides): Promise<string>;

    unvestedMultiplier(overrides?: CallOverrides): Promise<BigNumber>;

    "unvestedMultiplier()"(overrides?: CallOverrides): Promise<BigNumber>;

    updateVotingPower(_who: string, overrides?: CallOverrides): Promise<void>;

    "updateVotingPower(address)"(
      _who: string,
      overrides?: CallOverrides,
    ): Promise<void>;

    withdraw(
      _amount: BigNumberish,
      _recipient: string,
      overrides?: CallOverrides,
    ): Promise<void>;

    "withdraw(uint256,address)"(
      _amount: BigNumberish,
      _recipient: string,
      overrides?: CallOverrides,
    ): Promise<void>;
  };

  filters: {
    "VoteChange(address,address,int256)"(
      to?: string | null,
      from?: string | null,
      amount?: null,
    ): VoteChangeEventFilter;
    VoteChange(
      to?: string | null,
      from?: string | null,
      amount?: null,
    ): VoteChangeEventFilter;
  };

  estimateGas: {
    acceptGrant(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    "acceptGrant()"(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    addGrantAndDelegate(
      _who: string,
      _amount: BigNumberish,
      _startTime: BigNumberish,
      _expiration: BigNumberish,
      _cliff: BigNumberish,
      _delegatee: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    "addGrantAndDelegate(address,uint128,uint128,uint128,uint128,address)"(
      _who: string,
      _amount: BigNumberish,
      _startTime: BigNumberish,
      _expiration: BigNumberish,
      _cliff: BigNumberish,
      _delegatee: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    changeUnvestedMultiplier(
      _multiplier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    "changeUnvestedMultiplier(uint256)"(
      _multiplier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    claim(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    "claim()"(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    delegate(
      _to: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    "delegate(address)"(
      _to: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    deposit(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    "deposit(uint256)"(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    getGrant(_who: string, overrides?: CallOverrides): Promise<BigNumber>;

    "getGrant(address)"(
      _who: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    initialize(
      manager_: string,
      timelock_: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    "initialize(address,address)"(
      manager_: string,
      timelock_: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    manager(overrides?: CallOverrides): Promise<BigNumber>;

    "manager()"(overrides?: CallOverrides): Promise<BigNumber>;

    queryVotePower(
      user: string,
      blockNumber: BigNumberish,
      arg2: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    "queryVotePower(address,uint256,bytes)"(
      user: string,
      blockNumber: BigNumberish,
      arg2: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    queryVotePowerView(
      user: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    "queryVotePowerView(address,uint256)"(
      user: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    removeGrant(
      _who: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    "removeGrant(address)"(
      _who: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    setManager(
      manager_: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    "setManager(address)"(
      manager_: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    setTimelock(
      timelock_: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    "setTimelock(address)"(
      timelock_: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    staleBlockLag(overrides?: CallOverrides): Promise<BigNumber>;

    "staleBlockLag()"(overrides?: CallOverrides): Promise<BigNumber>;

    timelock(overrides?: CallOverrides): Promise<BigNumber>;

    "timelock()"(overrides?: CallOverrides): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;

    "token()"(overrides?: CallOverrides): Promise<BigNumber>;

    unvestedMultiplier(overrides?: CallOverrides): Promise<BigNumber>;

    "unvestedMultiplier()"(overrides?: CallOverrides): Promise<BigNumber>;

    updateVotingPower(
      _who: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    "updateVotingPower(address)"(
      _who: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    withdraw(
      _amount: BigNumberish,
      _recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    "withdraw(uint256,address)"(
      _amount: BigNumberish,
      _recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptGrant(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    "acceptGrant()"(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    addGrantAndDelegate(
      _who: string,
      _amount: BigNumberish,
      _startTime: BigNumberish,
      _expiration: BigNumberish,
      _cliff: BigNumberish,
      _delegatee: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    "addGrantAndDelegate(address,uint128,uint128,uint128,uint128,address)"(
      _who: string,
      _amount: BigNumberish,
      _startTime: BigNumberish,
      _expiration: BigNumberish,
      _cliff: BigNumberish,
      _delegatee: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    changeUnvestedMultiplier(
      _multiplier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    "changeUnvestedMultiplier(uint256)"(
      _multiplier: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    claim(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    "claim()"(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    delegate(
      _to: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    "delegate(address)"(
      _to: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    deposit(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    "deposit(uint256)"(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    getGrant(
      _who: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    "getGrant(address)"(
      _who: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    initialize(
      manager_: string,
      timelock_: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    "initialize(address,address)"(
      manager_: string,
      timelock_: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    manager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "manager()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    queryVotePower(
      user: string,
      blockNumber: BigNumberish,
      arg2: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    "queryVotePower(address,uint256,bytes)"(
      user: string,
      blockNumber: BigNumberish,
      arg2: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    queryVotePowerView(
      user: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    "queryVotePowerView(address,uint256)"(
      user: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    removeGrant(
      _who: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    "removeGrant(address)"(
      _who: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    setManager(
      manager_: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    "setManager(address)"(
      manager_: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    setTimelock(
      timelock_: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    "setTimelock(address)"(
      timelock_: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    staleBlockLag(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "staleBlockLag()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    timelock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "timelock()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "token()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    unvestedMultiplier(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    "unvestedMultiplier()"(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    updateVotingPower(
      _who: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    "updateVotingPower(address)"(
      _who: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    withdraw(
      _amount: BigNumberish,
      _recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    "withdraw(uint256,address)"(
      _amount: BigNumberish,
      _recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;
  };
}
