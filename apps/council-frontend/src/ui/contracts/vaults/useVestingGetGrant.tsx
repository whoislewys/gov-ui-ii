import { vestingContract } from "src/fiat-contracts";
import { useSmartContractReadCall } from "@elementfi/react-query-typechain/src/hooks/useSmartContractReadCall/useSmartContractReadCall";

export function useVestingGetGrant(address: string | undefined | null): any {
  const { data } = useSmartContractReadCall(vestingContract, "getGrant", {
    callArgs: [address as string],
    enabled: !!address,
  });

  if (data) {
    return {
      allocation: data[0].toNumber(),
      withdrawn: data[1].toNumber(),
      created: data[2].toNumber(),
      expiration: data[3].toNumber(),
      cliff: data[4].toNumber(),
      latestVotingPower: data[5].toNumber(),
      delegatee: data[6],
      range: [data[7][0].toNumber(), data[7][1].toNumber()],
    };
  }

  return undefined;
}
