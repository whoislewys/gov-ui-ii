import { useVotingEscrowLocked } from "./useVotingEscrowLocked";
import { formatEther } from "ethers/lib/utils";

export function useVotingEscrowLockBalance(
  address: string | undefined | null,
): any {
  // Recall that public solidity variables have implicit getters generated upon compilation
  // (Ab)using that here to query the LockedBalance struct for a user. The 1st element of this struct is the lock amount
  // See VotingEscrow.sol in consilium repo for more
  const data = useVotingEscrowLocked(address);

  // Getting an overflow error on this... not sure why
  if (data && data[0]) {
    const lockAmount = formatEther(data[0])
    return lockAmount;
  }

  return 0;
}
