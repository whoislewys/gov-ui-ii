import { GraphQLResolveInfo } from "graphql";
import { ResolverContext } from "@elementfi/graphql";
import { gql } from "@apollo/client";

/* eslint-disable */
// NOTE: This is a generated file and should not be edited directly.
// To edit this file, modify the @element/graphql codegen script.

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
// Generated on 2022-08-22T18:24:51-05:00

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type BuySwapPreview = {
  __typename?: "BuySwapPreview";
  baseAssetAmountIn: Scalars["String"];
  principalTokenAmountOut: Scalars["String"];
  slippage?: Maybe<Scalars["Int"]>;
};

export type MultiPool = {
  __typename?: "MultiPool";
  address: Scalars["ID"];
  pool?: Maybe<Pool>;
  pools?: Maybe<Array<Maybe<Pool>>>;
  /** Possibly fetched from a registry */
  yieldSource?: Maybe<YieldSource>;
};

export type MultiPoolPoolArgs = {
  maturity: Scalars["String"];
};

export type MultiTerm = {
  __typename?: "MultiTerm";
  /** general lookup across terms for arbitrary helper functions, to be expanded */
  address: Scalars["ID"];
  /** The underlying token, sometimes referred to as base asset */
  baseAsset?: Maybe<Token>;
  perDayVolume?: Maybe<Scalars["String"]>;
  terms?: Maybe<Array<Maybe<Term>>>;
  /** scratch space: are these useful? */
  totalVolume?: Maybe<Scalars["String"]>;
  /** pretty sure this is useful */
  tvl?: Maybe<Scalars["String"]>;
  /** Possibly fetched from a registry */
  yieldSource?: Maybe<YieldSource>;
  yields?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type MultiTermTvlArgs = {
  atBlock?: InputMaybe<Scalars["Int"]>;
};

export type Pool = {
  __typename?: "Pool";
  baseAsset?: Maybe<Token>;
  baseAssetReserves?: Maybe<Scalars["String"]>;
  buyPreview?: Maybe<BuySwapPreview>;
  id: Scalars["ID"];
  lpToken?: Maybe<Token>;
  maturity: Scalars["String"];
  multiPool: MultiPool;
  price?: Maybe<Scalars["String"]>;
  priceFiat?: Maybe<Scalars["String"]>;
  principalToken?: Maybe<PrincipalToken>;
  principalTokenReserves?: Maybe<Scalars["String"]>;
  sellPreview?: Maybe<SellSwapPreview>;
  shareAsset?: Maybe<Token>;
  shareAssetReserves?: Maybe<Scalars["String"]>;
  term?: Maybe<Term>;
  tvl?: Maybe<Scalars["String"]>;
  yieldSource?: Maybe<YieldSource>;
};

export type PoolBuyPreviewArgs = {
  baseAssetAmountIn: Scalars["String"];
};

export type PoolSellPreviewArgs = {
  principalAmountTokenIn: Scalars["String"];
};

export type PrincipalToken = {
  __typename?: "PrincipalToken";
  address: Scalars["ID"];
  /**  the token this principal token will resolve 1 to 1 to. */
  baseAsset?: Maybe<Token>;
  maturity: Scalars["String"];
  /** price in terms of base asset or fiat */
  pool?: Maybe<Pool>;
  tokenId: Scalars["ID"];
};

export type Query = {
  __typename?: "Query";
  multiPool?: Maybe<MultiPool>;
  /** Look up the multi term contract for a given yield source, eg: Yearn USDC Vault */
  multiTerm?: Maybe<MultiTerm>;
  multiTerms: Array<Maybe<MultiTerm>>;
  /** Look up the pool for a given maturity date */
  pool?: Maybe<Pool>;
  pools?: Maybe<Array<Maybe<Pool>>>;
  term?: Maybe<Term>;
  terms?: Maybe<Array<Maybe<Term>>>;
  token?: Maybe<Token>;
  tokens?: Maybe<Token>;
};

export type QueryMultiPoolArgs = {
  yieldSource: Scalars["ID"];
};

export type QueryMultiTermArgs = {
  address?: InputMaybe<Scalars["ID"]>;
  yieldSource?: InputMaybe<Scalars["ID"]>;
};

export type QueryMultiTermsArgs = {
  addresses?: InputMaybe<Array<Scalars["ID"]>>;
  baseAsset?: InputMaybe<Array<Scalars["ID"]>>;
  yieldSources?: InputMaybe<Array<Scalars["ID"]>>;
};

export type QueryPoolArgs = {
  maturity: Scalars["String"];
  multiPool: Scalars["ID"];
};

export type QueryPoolsArgs = {
  multiPool: Scalars["ID"];
};

export type QueryTermArgs = {
  maturity: Scalars["String"];
  multiTerm: Scalars["ID"];
};

export type QueryTermsArgs = {
  baseAssets?: InputMaybe<Array<Scalars["ID"]>>;
  holders?: InputMaybe<Array<Scalars["ID"]>>;
  multiTerms?: InputMaybe<Array<Scalars["ID"]>>;
  timeRemaining?: InputMaybe<Scalars["String"]>;
  yieldSources?: InputMaybe<Array<Scalars["ID"]>>;
};

export type QueryTokenArgs = {
  address: Scalars["ID"];
};

export type QueryTokensArgs = {
  addresses?: InputMaybe<Array<Scalars["ID"]>>;
};

export type SellSwapPreview = {
  __typename?: "SellSwapPreview";
  baseAssetAmountOut: Scalars["String"];
  principalTokenAmountIn: Scalars["String"];
  slippage?: Maybe<Scalars["Int"]>;
};

export type Term = {
  __typename?: "Term";
  baseAsset?: Maybe<Token>;
  /** Block Int the term was created at */
  createdAtBlock?: Maybe<Scalars["Int"]>;
  /** Timestamp in milliseconds since unix epoch */
  createdTimestamp?: Maybe<Scalars["Int"]>;
  fixedAPR?: Maybe<Scalars["Int"]>;
  id: Scalars["ID"];
  /** Timestamp in milliseconds since unix epoch */
  maturity: Scalars["String"];
  multiTerm: MultiTerm;
  name: Scalars["String"];
  pool?: Maybe<Pool>;
  principalToken?: Maybe<PrincipalToken>;
  /** Dollar amount of deposits into the term: union(mint,LP) */
  tvl?: Maybe<Scalars["String"]>;
  variableAPY?: Maybe<Scalars["Int"]>;
  /** Possibly fetched from a registry */
  yieldSource?: Maybe<YieldSource>;
  /** startDate must be between created and maturity */
  yieldToken?: Maybe<YieldToken>;
};

export type TermTvlArgs = {
  atBlock?: InputMaybe<Scalars["Int"]>;
};

export type TermYieldTokenArgs = {
  startDate: Scalars["String"];
};

export type Token = {
  __typename?: "Token";
  address: Scalars["ID"];
  allowance?: Maybe<Scalars["String"]>;
  balanceOf?: Maybe<Scalars["String"]>;
  decimals: Scalars["String"];
  name: Scalars["String"];
  price?: Maybe<Scalars["String"]>;
  symbol: Scalars["String"];
};

export type TokenAllowanceArgs = {
  owner: Scalars["String"];
  spender: Scalars["String"];
};

export type TokenBalanceOfArgs = {
  owner: Scalars["String"];
};

export type YieldSource = {
  __typename?: "YieldSource";
  address: Scalars["ID"];
  name: Scalars["String"];
  /** placeholder for more yield source specific data */
  pricePerShare?: Maybe<Scalars["String"]>;
  protocol: Scalars["String"];
};

export type YieldToken = {
  __typename?: "YieldToken";
  accruedInterest?: Maybe<Scalars["String"]>;
  address: Scalars["ID"];
  maturity: Scalars["String"];
  startDate: Scalars["String"];
  tokenId: Scalars["ID"];
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {},
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
  BuySwapPreview: ResolverTypeWrapper<BuySwapPreview>;
  ID: ResolverTypeWrapper<Scalars["ID"]>;
  Int: ResolverTypeWrapper<Scalars["Int"]>;
  MultiPool: ResolverTypeWrapper<MultiPool>;
  MultiTerm: ResolverTypeWrapper<MultiTerm>;
  Pool: ResolverTypeWrapper<Pool>;
  PrincipalToken: ResolverTypeWrapper<PrincipalToken>;
  Query: ResolverTypeWrapper<{}>;
  SellSwapPreview: ResolverTypeWrapper<SellSwapPreview>;
  String: ResolverTypeWrapper<Scalars["String"]>;
  Term: ResolverTypeWrapper<Term>;
  Token: ResolverTypeWrapper<Token>;
  YieldSource: ResolverTypeWrapper<YieldSource>;
  YieldToken: ResolverTypeWrapper<YieldToken>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars["Boolean"];
  BuySwapPreview: BuySwapPreview;
  ID: Scalars["ID"];
  Int: Scalars["Int"];
  MultiPool: MultiPool;
  MultiTerm: MultiTerm;
  Pool: Pool;
  PrincipalToken: PrincipalToken;
  Query: {};
  SellSwapPreview: SellSwapPreview;
  String: Scalars["String"];
  Term: Term;
  Token: Token;
  YieldSource: YieldSource;
  YieldToken: YieldToken;
};

export type BuySwapPreviewResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes["BuySwapPreview"] = ResolversParentTypes["BuySwapPreview"],
> = {
  baseAssetAmountIn?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType
  >;
  principalTokenAmountOut?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType
  >;
  slippage?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MultiPoolResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes["MultiPool"] = ResolversParentTypes["MultiPool"],
> = {
  address?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  pool?: Resolver<
    Maybe<ResolversTypes["Pool"]>,
    ParentType,
    ContextType,
    RequireFields<MultiPoolPoolArgs, "maturity">
  >;
  pools?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Pool"]>>>,
    ParentType,
    ContextType
  >;
  yieldSource?: Resolver<
    Maybe<ResolversTypes["YieldSource"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MultiTermResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes["MultiTerm"] = ResolversParentTypes["MultiTerm"],
> = {
  address?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  baseAsset?: Resolver<Maybe<ResolversTypes["Token"]>, ParentType, ContextType>;
  perDayVolume?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  terms?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Term"]>>>,
    ParentType,
    ContextType
  >;
  totalVolume?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  tvl?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType,
    Partial<MultiTermTvlArgs>
  >;
  yieldSource?: Resolver<
    Maybe<ResolversTypes["YieldSource"]>,
    ParentType,
    ContextType
  >;
  yields?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["String"]>>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PoolResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes["Pool"] = ResolversParentTypes["Pool"],
> = {
  baseAsset?: Resolver<Maybe<ResolversTypes["Token"]>, ParentType, ContextType>;
  baseAssetReserves?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  buyPreview?: Resolver<
    Maybe<ResolversTypes["BuySwapPreview"]>,
    ParentType,
    ContextType,
    RequireFields<PoolBuyPreviewArgs, "baseAssetAmountIn">
  >;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  lpToken?: Resolver<Maybe<ResolversTypes["Token"]>, ParentType, ContextType>;
  maturity?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  multiPool?: Resolver<ResolversTypes["MultiPool"], ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  priceFiat?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  principalToken?: Resolver<
    Maybe<ResolversTypes["PrincipalToken"]>,
    ParentType,
    ContextType
  >;
  principalTokenReserves?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  sellPreview?: Resolver<
    Maybe<ResolversTypes["SellSwapPreview"]>,
    ParentType,
    ContextType,
    RequireFields<PoolSellPreviewArgs, "principalAmountTokenIn">
  >;
  shareAsset?: Resolver<
    Maybe<ResolversTypes["Token"]>,
    ParentType,
    ContextType
  >;
  shareAssetReserves?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  term?: Resolver<Maybe<ResolversTypes["Term"]>, ParentType, ContextType>;
  tvl?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  yieldSource?: Resolver<
    Maybe<ResolversTypes["YieldSource"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PrincipalTokenResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes["PrincipalToken"] = ResolversParentTypes["PrincipalToken"],
> = {
  address?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  baseAsset?: Resolver<Maybe<ResolversTypes["Token"]>, ParentType, ContextType>;
  maturity?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  pool?: Resolver<Maybe<ResolversTypes["Pool"]>, ParentType, ContextType>;
  tokenId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"],
> = {
  multiPool?: Resolver<
    Maybe<ResolversTypes["MultiPool"]>,
    ParentType,
    ContextType,
    RequireFields<QueryMultiPoolArgs, "yieldSource">
  >;
  multiTerm?: Resolver<
    Maybe<ResolversTypes["MultiTerm"]>,
    ParentType,
    ContextType,
    Partial<QueryMultiTermArgs>
  >;
  multiTerms?: Resolver<
    Array<Maybe<ResolversTypes["MultiTerm"]>>,
    ParentType,
    ContextType,
    Partial<QueryMultiTermsArgs>
  >;
  pool?: Resolver<
    Maybe<ResolversTypes["Pool"]>,
    ParentType,
    ContextType,
    RequireFields<QueryPoolArgs, "maturity" | "multiPool">
  >;
  pools?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Pool"]>>>,
    ParentType,
    ContextType,
    RequireFields<QueryPoolsArgs, "multiPool">
  >;
  term?: Resolver<
    Maybe<ResolversTypes["Term"]>,
    ParentType,
    ContextType,
    RequireFields<QueryTermArgs, "maturity" | "multiTerm">
  >;
  terms?: Resolver<
    Maybe<Array<Maybe<ResolversTypes["Term"]>>>,
    ParentType,
    ContextType,
    Partial<QueryTermsArgs>
  >;
  token?: Resolver<
    Maybe<ResolversTypes["Token"]>,
    ParentType,
    ContextType,
    RequireFields<QueryTokenArgs, "address">
  >;
  tokens?: Resolver<
    Maybe<ResolversTypes["Token"]>,
    ParentType,
    ContextType,
    Partial<QueryTokensArgs>
  >;
};

export type SellSwapPreviewResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes["SellSwapPreview"] = ResolversParentTypes["SellSwapPreview"],
> = {
  baseAssetAmountOut?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType
  >;
  principalTokenAmountIn?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType
  >;
  slippage?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TermResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes["Term"] = ResolversParentTypes["Term"],
> = {
  baseAsset?: Resolver<Maybe<ResolversTypes["Token"]>, ParentType, ContextType>;
  createdAtBlock?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  createdTimestamp?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  fixedAPR?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  maturity?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  multiTerm?: Resolver<ResolversTypes["MultiTerm"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  pool?: Resolver<Maybe<ResolversTypes["Pool"]>, ParentType, ContextType>;
  principalToken?: Resolver<
    Maybe<ResolversTypes["PrincipalToken"]>,
    ParentType,
    ContextType
  >;
  tvl?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType,
    Partial<TermTvlArgs>
  >;
  variableAPY?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  yieldSource?: Resolver<
    Maybe<ResolversTypes["YieldSource"]>,
    ParentType,
    ContextType
  >;
  yieldToken?: Resolver<
    Maybe<ResolversTypes["YieldToken"]>,
    ParentType,
    ContextType,
    RequireFields<TermYieldTokenArgs, "startDate">
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TokenResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes["Token"] = ResolversParentTypes["Token"],
> = {
  address?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  allowance?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType,
    RequireFields<TokenAllowanceArgs, "owner" | "spender">
  >;
  balanceOf?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType,
    RequireFields<TokenBalanceOfArgs, "owner">
  >;
  decimals?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  symbol?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type YieldSourceResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes["YieldSource"] = ResolversParentTypes["YieldSource"],
> = {
  address?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  pricePerShare?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  protocol?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type YieldTokenResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes["YieldToken"] = ResolversParentTypes["YieldToken"],
> = {
  accruedInterest?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  address?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  maturity?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  startDate?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  tokenId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = ResolverContext> = {
  BuySwapPreview?: BuySwapPreviewResolvers<ContextType>;
  MultiPool?: MultiPoolResolvers<ContextType>;
  MultiTerm?: MultiTermResolvers<ContextType>;
  Pool?: PoolResolvers<ContextType>;
  PrincipalToken?: PrincipalTokenResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  SellSwapPreview?: SellSwapPreviewResolvers<ContextType>;
  Term?: TermResolvers<ContextType>;
  Token?: TokenResolvers<ContextType>;
  YieldSource?: YieldSourceResolvers<ContextType>;
  YieldToken?: YieldTokenResolvers<ContextType>;
};
