import { FixedNumber } from "ethers";
import { useLatestBlockNumber } from "src/ui/ethereum/useLatestBlockNumber";
import { useVestingVaultVotingPower } from "src/ui/voting/useVestingVaultVotingPower";
import { useVotingEscrowVaultVotingPower } from "src/ui/voting/useVotingEscrowVaultVotingPower";

export function useVotingPowerForAccountAtLatestBlock(
  account: string | undefined | null,
): string {
  const { data: latestBlockNumber } = useLatestBlockNumber();
  return useVotingPowerForAccount(account, latestBlockNumber);
}

/**
 * Useful for looking up vote power available for a proposal, where
 * atBlockNumber is when the proposal was created.
 */
export function useVotingPowerForAccountAtBlockNumber(
  account: string | undefined | null,
  atBlockNumber: number,
): string {
  return useVotingPowerForAccount(account, atBlockNumber);
}

function useVotingPowerForAccount(
  account: string | undefined | null,
  atBlockNumber?: number,
  atTimestamp?: number,
): string {
  // const vestingVaultPower = useVestingVaultVotingPower(account, atBlockNumber, atTimestamp);
  // console.log("vesting power: ", vestingVaultPower);
  // const lockingVotingPower = useLockingVaultVotingPower(account, atBlockNumber);
  const votingEscrowVaultPower = useVotingEscrowVaultVotingPower(
    account,
    atBlockNumber,
    atTimestamp,
  );
  // TODO: add comitium vote power

  return votingEscrowVaultPower.toString();
  // const votingPower = FixedNumber.from(votingEscrowVaultPower)
  //   .addUnsafe(FixedNumber.from(vestingVaultPower || "0"))
  //   .toString();

  // return votingPower;
}
