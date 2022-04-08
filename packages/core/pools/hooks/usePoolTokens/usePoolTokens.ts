import { Vault } from "@elementfi/core-typechain/dist/v1";
import {
  PrincipalPoolTokenInfo,
  YieldPoolTokenInfo,
} from "@elementfi/tokenlist";
import { balancerVaultContract } from "integrations/balancer/vault";
import {
  useSmartContractReadCall,
  ContractMethodArgs,
} from "@elementfi/react-query-typechain";
import { PoolContract } from "core/pools/PoolContract";
import { getTokenInfo } from "core/tokenlists/tokenlists";
import { BigNumber } from "ethers";
import { QueryObserverResult } from "react-query";

export function usePoolTokens(
  pool: PoolContract | undefined
): QueryObserverResult<
  [
    string[], // addresses
    BigNumber[], // balances
    BigNumber // lastChangeBlock
  ]
> {
  const poolId = pool?.address
    ? getTokenInfo<PrincipalPoolTokenInfo | YieldPoolTokenInfo>(pool?.address)
        .extensions.poolId
    : undefined;

  const poolTokensResults = useSmartContractReadCall(
    balancerVaultContract,
    "getPoolTokens",
    {
      enabled: !!poolId,
      callArgs: [poolId] as ContractMethodArgs<Vault, "getPoolTokens">,
    }
  );
  return poolTokensResults;
}