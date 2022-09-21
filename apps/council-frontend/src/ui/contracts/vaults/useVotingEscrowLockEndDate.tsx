import { useVotingEscrowLocked } from "./useVotingEscrowLocked";
import { MILLISECONDS_PER_SECOND } from "src/base/time";
import { formatAbbreviatedDate } from "src/base/dates";

export function useVotingEscrowLockEndDate(
  address: string | undefined | null,
): any {
  // Recall that public solidity variables have implicit getters generated upon compilation
  // (Ab)using that here to query the LockedBalance struct for a user. The 2nd element of this struct is the delegatee address
  // See VotingEscrow.sol in consilium repo for more
  const data = useVotingEscrowLocked(address);

  if (data && data[1]) {
    const lockEndDate = formatAbbreviatedDate(
      new Date(
        data[1].toNumber() * MILLISECONDS_PER_SECOND
      )
    )
    return lockEndDate;
  }

  return "";
}
