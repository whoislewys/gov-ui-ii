import { lockingVaultContract } from "src/contracts";
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
export function useLockingVaultVotingPower(
  account: string | undefined | null,
  atBlockNumber?: number,
): string {
  // TODO: use vote escrow vote power
  // return useQueryVotePower(
  //   account,
  //   lockingVaultContract,
  //   atBlockNumber,
  //   "0x00",
  // );
  return "-1"
}

/**
 * Use this to get the historical voting power.
 *
 * This does not take into account whether or not the voting power is stale.
 */
export function useLockingVaultVotingPowerView(
  account: string | undefined | null,
  atBlockNumber?: number,
): string {
  // TODO: use vote escrow vote power
  // return useQueryVotePowerView(account, lockingVaultContract, atBlockNumber);
  return "-1"
}
