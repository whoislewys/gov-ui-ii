import { useQuery } from "react-query";

import { useSmartContractReadCall } from "@elementfi/react-query-typechain/src/hooks/useSmartContractReadCall/useSmartContractReadCall";
import { formatEther } from "@ethersproject/units";
import { BigNumber, BigNumberish, BytesLike, ethers } from "ethers";
import { Logger } from "ethers/lib/utils";

import { useLatestBlockNumber } from "src/ui/ethereum/useLatestBlockNumber";
import {
  CURRENT_TIME_IN_MILLISECONDS,
  CURRENT_TIME_IN_SECONDS,
} from "src/base/time";
import {
  OptimisticRewards,
  VestingVault,
  VotingEscrowVault,
} from "src/consilium-typechain";

/**
 * Use this to get the current vote power.
 *
 * Voting power can go stale if the current block is beyond the staleBlockLag +
 * atBlockNumber. In the case of stale voting power, this will return "0".
 */
export function useQueryVotePower(
  account: string | undefined | null,
  vaultContract: VotingEscrowVault | VestingVault | OptimisticRewards,
  atBlockNumber?: number,
  atTimestamp?: number,
  extraData?: BytesLike,
): string {
  const { data: latestBlockNumber } = useLatestBlockNumber();
  const blockNumber = atBlockNumber || latestBlockNumber;
  const timestamp = atTimestamp || CURRENT_TIME_IN_SECONDS;

  // TODO: use useSmartContractReadCall when onError is overridable and when we can disable ethers
  // logging
  const { data: votePower } = useQuery({
    queryFn: async () => {
      try {
        // TODO: find a better solution for this.
        // ethers.js will spit out an error message that we can't disable without turning off the
        // logger.  because the smart contract code for queryVotePower returns an error if the
        // account is not found, it can flood the console with errors.  this is a workaround until a
        // better solution is found.
        ethers.utils.Logger.setLogLevel(Logger.levels.OFF);
        const votePower = await vaultContract.callStatic.queryVotePower(
          account as string,
          blockNumber as number,
          timestamp as number,
          extraData as BytesLike,
        );
        // TODO: fucj ui dekegated, but delegated elfi. need to delegate fiat voting power to myself
        ethers.utils.Logger.setLogLevel(Logger.levels.WARNING);
        return votePower;
      } catch (error) {
        if (process.env.NODE_ENV === "development") {
          console.error(error);
        }
      }
    },
    queryKey: ["queryVotePower", account, vaultContract.address, atBlockNumber],
    /* We want to cache the previous stale data until a refresh.
      This boolean prevents data from being kept when account is disconnected */
    keepPreviousData: !!account,
    enabled: !!account && !!blockNumber && !!extraData,
  });

  return formatEther(votePower || 0);
}

/**
 * Use this to get the historical voting power.
 *
 * This does not take into account whether or not the voting power is stale.
 */
export function useQueryVotePowerView(
  account: string | undefined | null,
  vaultContract: VotingEscrowVault | VestingVault,
  atBlockNumber?: number,
): string {
  const { data: latestBlockNumber } = useLatestBlockNumber();
  const blockNumber = atBlockNumber || latestBlockNumber;

  // TODO: use useSmartContractReadCall when onError is overridable and when we can disable ethers logging
  const { data: votePower } = useQuery({
    queryFn: async () => {
      try {
        // TODO: find a better solution for this.
        // ethers.js will spit out an error message that we can't disable without turning off the
        // logger.  because the smart contract code for queryVotePower returns an error if the
        // account is not found, it can flood the console with errors.  this is a workaround until a
        // better solution is found.
        ethers.utils.Logger.setLogLevel(Logger.levels.OFF);
        const votePower = await vaultContract.callStatic.queryVotePowerView(
          account as string,
          blockNumber as number,
        );
        ethers.utils.Logger.setLogLevel(Logger.levels.WARNING);
        return votePower;
      } catch (error) {
        if (process.env.NODE_ENV === "development") {
          console.error(error);
        }
      }
    },
    queryKey: ["queryVotePower", account, vaultContract.address, atBlockNumber],
    /* We want to cache the previous stale data until a refresh.
      This boolean prevents data from being kept when account is disconnected */
    keepPreviousData: !!account,
    enabled: !!account && !!blockNumber,
  });

  return formatEther(votePower || 0);
}

/**
 * @deprecated - this throws errors if there is no vote power found for an account.  because of this
 * we wrote hooks with custom useQuery calls to block these errors.
 * Use this to get the historical voting power.
 *
 * This does not take into account whether or not the voting power is stale.
 */
export function useQueryVotePowerViewOld(
  account: string | undefined | null,
  vaultContract: VotingEscrowVault | VestingVault,
  atBlockNumber?: number,
): string {
  const { data: latestBlockNumber } = useLatestBlockNumber();

  const blockNumber = atBlockNumber || latestBlockNumber;

  // TODO: use method in useQueryVotePower instead of useSmartContractReadCall so that we can
  // prevent flooding of errors in the console
  const { data: votingPower } = useSmartContractReadCall(
    vaultContract,
    "queryVotePowerView",
    {
      callArgs: [account as string, blockNumber as number],
      /* We want to cache the previous stale data until a refresh.
      This boolean prevents data from being kept when account is disconnected */
      keepPreviousData: !!account,
      enabled: !!account && !!blockNumber,
    },
  );

  return formatEther(votingPower || 0);
}
