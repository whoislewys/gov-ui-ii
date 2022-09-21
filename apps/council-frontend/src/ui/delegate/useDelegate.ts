import { useSmartContractReadCall } from "@elementfi/react-query-typechain/src/hooks/useSmartContractReadCall/useSmartContractReadCall";
import { votingEscrowContract } from "src/fiat-contracts";

export function useDelegate(
  address: string | undefined | null,
): string | undefined {
  // Recall that public solidity variables have implicit getters generated upon compilation
  // (Ab)using that here to query the LockedBalance struct for a user. The 4th element of this struct is the delegatee address
  // See VotingEscrow.sol in consilium repo for more
  const { data } = useSmartContractReadCall(votingEscrowContract, "locked", {
    callArgs: [address as string],
    enabled: !!address,
  });

  if (data && data[3]) {
    const delegatee = data[3];
    return delegatee;
  }

  return "";
}
