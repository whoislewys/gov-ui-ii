import { useSmartContractReadCall } from "@elementfi/react-query-typechain/src/hooks/useSmartContractReadCall/useSmartContractReadCall";
import { ERC20Permit } from "@elementfi/council-typechain";
import { BigNumber } from "ethers";
import { QueryObserverResult } from "react-query";
import { IERC20, MockERC20 } from "src/consilium-typechain";

// Note on the strange types...
// ERC20Permit keeps compatibility with Element token
// MockERC20 for FIAT LPToken on Goerli
// IERC20 to support the mainnet FDT/ETH BalancerPoolToken (it inherits from this)
export function useTokenBalanceOf(
  contract: ERC20Permit | MockERC20 | IERC20 | undefined,
  address: string | null | undefined,
): QueryObserverResult<BigNumber> {
  return useSmartContractReadCall(contract, "balanceOf", {
    callArgs: [address as string], // safe to cast because `enabled` is set
    enabled: !!address,
  });
}
