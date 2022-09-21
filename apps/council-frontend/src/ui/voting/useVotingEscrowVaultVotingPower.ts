import { votingEscrowVaultContract } from "src/fiat-contracts";
import {
  useQueryVotePower,
  useQueryVotePowerView,
} from "src/ui/voting/useQueryVotePower";

/**
 * Use this to get the current vote power.
 *
 * Voting power can go stale if the current block is beyond the staleBlockLag +
 * atBlockNumber. In the case of stale voting power, this will return "0".
 */
export function useVotingEscrowVaultVotingPower(
  account: string | undefined | null,
  atBlockNumber?: number,
  atTimestamp?: number,
): string {
  return useQueryVotePower(
    account,
    votingEscrowVaultContract,
    atBlockNumber,
    atTimestamp,
    "0x00",
  );
}

/**
 * Use this to get the historical voting power.
 *
 * This does not take into account whether or not the voting power is stale.
 */
export function useVotingEscrowVotingPowerView(
  account: string | undefined | null,
  atBlockNumber?: number,
): string {
  return useQueryVotePowerView(account, votingEscrowVaultContract, atBlockNumber);
}
