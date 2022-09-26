import { useVotingEscrowLocked } from "./useVotingEscrowLocked";
import { MILLISECONDS_PER_SECOND } from "src/base/time";
import { formatAbbreviatedDate } from "src/base/dates";
import { BigNumber } from "ethers";

export function useVotingEscrowLockEndDate(
  address: string | undefined | null,
): any {
  // Recall that public solidity variables have implicit getters generated upon compilation
  // (Ab)using that here to query the LockedBalance struct for a user. The 2nd element of this struct is the delegatee address
  // See VotingEscrow.sol in consilium repo for more
  const data = useVotingEscrowLocked(address);

  if (data && data[1] && data[1].toString() !== "0") {
    // !== '0' check is because even when no lock exists for a user, their lock expiration will be 0

    const ms = data[2].mul(BigNumber.from(MILLISECONDS_PER_SECOND));
    const lockEndDate = formatAbbreviatedDate(new Date(ms.toNumber()));
    return lockEndDate;
  }

  return "";
}
