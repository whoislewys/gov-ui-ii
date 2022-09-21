import { useSmartContractReadCall } from "@elementfi/react-query-typechain/src/hooks/useSmartContractReadCall/useSmartContractReadCall";
import { formatEther } from "@ethersproject/units";
import {
  votingEscrowContract,
} from "src/fiat-contracts";

export function useDeposited(
  address: string | undefined | null,
): string | undefined {
  const { data: veVotingPowerBN } = useSmartContractReadCall(
    votingEscrowContract,
    "balanceOf",
    {
      callArgs: [address as string],
      enabled: !!address,
    },
  );

  return veVotingPowerBN && formatEther(veVotingPowerBN);
}
