import { useSmartContractReadCall } from "@elementfi/react-query-typechain/src/hooks/useSmartContractReadCall/useSmartContractReadCall";
import { votingEscrowContract } from "src/fiat-contracts";

export function useVotingEscrowLocked(
  address: string | undefined | null,
): any {
  // Recall that public solidity variables have implicit getters generated upon compilation
  // See VotingEscrow.sol in consilium repo for more
  const { data } = useSmartContractReadCall(votingEscrowContract, "locked", {
    callArgs: [address as string],
    enabled: !!address,
  });

  if (data) {
    return data;
  }

  return "";
}
