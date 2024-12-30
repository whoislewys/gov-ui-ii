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

interface OptimisticRewardsInterface extends ethers.utils.Interface {
  functions: {
    "authorize(address)": FunctionFragment;
    "authorized(address)": FunctionFragment;
    "challengePeriod()": FunctionFragment;
    "challengeRewards()": FunctionFragment;
    "claim(uint256,uint256,bytes32[],address)": FunctionFragment;
    "claimAndDelegate(uint256,address,uint256,bytes32[],address)": FunctionFragment;
    "claimed(address)": FunctionFragment;
    "deauthorize(address)": FunctionFragment;
    "isAuthorized(address)": FunctionFragment;
    "lockingVault()": FunctionFragment;
    "owner()": FunctionFragment;
    "pendingRoot()": FunctionFragment;
    "proposalTime()": FunctionFragment;
    "proposeRewards(bytes32)": FunctionFragment;
    "proposer()": FunctionFragment;
    "queryVotePower(address,uint256,uint256,bytes)": FunctionFragment;
    "rewardsRoot()": FunctionFragment;
    "setChallengePeriod(uint256)": FunctionFragment;
    "setOwner(address)": FunctionFragment;
    "setProposer(address)": FunctionFragment;
    "token()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "authorize", values: [string]): string;
  encodeFunctionData(functionFragment: "authorized", values: [string]): string;
  encodeFunctionData(
    functionFragment: "challengePeriod",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "challengeRewards",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "claim",
    values: [BigNumberish, BigNumberish, BytesLike[], string]
  ): string;
  encodeFunctionData(
    functionFragment: "claimAndDelegate",
    values: [BigNumberish, string, BigNumberish, BytesLike[], string]
  ): string;
  encodeFunctionData(functionFragment: "claimed", values: [string]): string;
  encodeFunctionData(functionFragment: "deauthorize", values: [string]): string;
  encodeFunctionData(
    functionFragment: "isAuthorized",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "lockingVault",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingRoot",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "proposalTime",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "proposeRewards",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "proposer", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "queryVotePower",
    values: [string, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "rewardsRoot",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setChallengePeriod",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "setOwner", values: [string]): string;
  encodeFunctionData(functionFragment: "setProposer", values: [string]): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;

  decodeFunctionResult(functionFragment: "authorize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "authorized", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "challengePeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "challengeRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimAndDelegate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "claimed", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "deauthorize",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isAuthorized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lockingVault",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingRoot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proposalTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proposeRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "proposer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "queryVotePower",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardsRoot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setChallengePeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setProposer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;

  events: {};
}

export class OptimisticRewards extends BaseContract {
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

  interface: OptimisticRewardsInterface;

  functions: {
    authorize(
      who: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    authorized(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    challengePeriod(overrides?: CallOverrides): Promise<[BigNumber]>;

    challengeRewards(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claim(
      amount: BigNumberish,
      totalGrant: BigNumberish,
      merkleProof: BytesLike[],
      destination: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claimAndDelegate(
      amount: BigNumberish,
      delegate: string,
      totalGrant: BigNumberish,
      merkleProof: BytesLike[],
      destination: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claimed(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    deauthorize(
      who: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isAuthorized(who: string, overrides?: CallOverrides): Promise<[boolean]>;

    lockingVault(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pendingRoot(overrides?: CallOverrides): Promise<[string]>;

    proposalTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    proposeRewards(
      newRoot: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    proposer(overrides?: CallOverrides): Promise<[string]>;

    queryVotePower(
      user: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      extraData: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    rewardsRoot(overrides?: CallOverrides): Promise<[string]>;

    setChallengePeriod(
      _challengePeriod: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setOwner(
      who: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setProposer(
      _proposer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    token(overrides?: CallOverrides): Promise<[string]>;
  };

  authorize(
    who: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  authorized(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  challengePeriod(overrides?: CallOverrides): Promise<BigNumber>;

  challengeRewards(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claim(
    amount: BigNumberish,
    totalGrant: BigNumberish,
    merkleProof: BytesLike[],
    destination: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claimAndDelegate(
    amount: BigNumberish,
    delegate: string,
    totalGrant: BigNumberish,
    merkleProof: BytesLike[],
    destination: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claimed(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  deauthorize(
    who: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isAuthorized(who: string, overrides?: CallOverrides): Promise<boolean>;

  lockingVault(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  pendingRoot(overrides?: CallOverrides): Promise<string>;

  proposalTime(overrides?: CallOverrides): Promise<BigNumber>;

  proposeRewards(
    newRoot: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  proposer(overrides?: CallOverrides): Promise<string>;

  queryVotePower(
    user: string,
    arg1: BigNumberish,
    arg2: BigNumberish,
    extraData: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  rewardsRoot(overrides?: CallOverrides): Promise<string>;

  setChallengePeriod(
    _challengePeriod: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setOwner(
    who: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setProposer(
    _proposer: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  token(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    authorize(who: string, overrides?: CallOverrides): Promise<void>;

    authorized(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    challengePeriod(overrides?: CallOverrides): Promise<BigNumber>;

    challengeRewards(overrides?: CallOverrides): Promise<void>;

    claim(
      amount: BigNumberish,
      totalGrant: BigNumberish,
      merkleProof: BytesLike[],
      destination: string,
      overrides?: CallOverrides
    ): Promise<void>;

    claimAndDelegate(
      amount: BigNumberish,
      delegate: string,
      totalGrant: BigNumberish,
      merkleProof: BytesLike[],
      destination: string,
      overrides?: CallOverrides
    ): Promise<void>;

    claimed(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    deauthorize(who: string, overrides?: CallOverrides): Promise<void>;

    isAuthorized(who: string, overrides?: CallOverrides): Promise<boolean>;

    lockingVault(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    pendingRoot(overrides?: CallOverrides): Promise<string>;

    proposalTime(overrides?: CallOverrides): Promise<BigNumber>;

    proposeRewards(
      newRoot: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    proposer(overrides?: CallOverrides): Promise<string>;

    queryVotePower(
      user: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      extraData: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rewardsRoot(overrides?: CallOverrides): Promise<string>;

    setChallengePeriod(
      _challengePeriod: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setOwner(who: string, overrides?: CallOverrides): Promise<void>;

    setProposer(_proposer: string, overrides?: CallOverrides): Promise<void>;

    token(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    authorize(
      who: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    authorized(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    challengePeriod(overrides?: CallOverrides): Promise<BigNumber>;

    challengeRewards(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claim(
      amount: BigNumberish,
      totalGrant: BigNumberish,
      merkleProof: BytesLike[],
      destination: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claimAndDelegate(
      amount: BigNumberish,
      delegate: string,
      totalGrant: BigNumberish,
      merkleProof: BytesLike[],
      destination: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claimed(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    deauthorize(
      who: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isAuthorized(who: string, overrides?: CallOverrides): Promise<BigNumber>;

    lockingVault(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pendingRoot(overrides?: CallOverrides): Promise<BigNumber>;

    proposalTime(overrides?: CallOverrides): Promise<BigNumber>;

    proposeRewards(
      newRoot: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    proposer(overrides?: CallOverrides): Promise<BigNumber>;

    queryVotePower(
      user: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      extraData: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rewardsRoot(overrides?: CallOverrides): Promise<BigNumber>;

    setChallengePeriod(
      _challengePeriod: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setOwner(
      who: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setProposer(
      _proposer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    authorize(
      who: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    authorized(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    challengePeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    challengeRewards(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claim(
      amount: BigNumberish,
      totalGrant: BigNumberish,
      merkleProof: BytesLike[],
      destination: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claimAndDelegate(
      amount: BigNumberish,
      delegate: string,
      totalGrant: BigNumberish,
      merkleProof: BytesLike[],
      destination: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claimed(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    deauthorize(
      who: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isAuthorized(
      who: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lockingVault(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingRoot(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proposalTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proposeRewards(
      newRoot: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    proposer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    queryVotePower(
      user: string,
      arg1: BigNumberish,
      arg2: BigNumberish,
      extraData: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rewardsRoot(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setChallengePeriod(
      _challengePeriod: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setOwner(
      who: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setProposer(
      _proposer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}