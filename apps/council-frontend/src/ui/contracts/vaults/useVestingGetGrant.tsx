import { vestingContract } from "src/fiat-contracts";
import { useSmartContractReadCall } from "@elementfi/react-query-typechain/src/hooks/useSmartContractReadCall/useSmartContractReadCall";

export function useVestingGetGrant(
  address: string | undefined | null,
): any {
  const { data } = useSmartContractReadCall(vestingContract, "getGrant", {
    callArgs: [address as string],
    enabled: !!address,
  });

  if (data) {
    return data;
  }

  return "";
}
