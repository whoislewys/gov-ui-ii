import { useSmartContractEvents } from "@elementfi/react-query-typechain/src/hooks/useSmartContractEvents/useSmartContractEvents";
import { BigNumber } from "ethers";
import { lockingVaultContract } from "src/contracts";
import { votingEscrowContract } from "src/fiat-contracts";

export default function useNumDelegates(): number {
  // TODO: impl if time left. can probably cut this vanity (imo) metric
  const { data: lockingVaultVoteChangeEvents } = useSmartContractEvents(
    lockingVaultContract,
    "VoteChange",
  );
  console.log("lockingVaultVoteChangeEvents: ", lockingVaultVoteChangeEvents);

  const { data: votingEscrowDepositEvents } = useSmartContractEvents(
    votingEscrowContract,
    "Deposit",
  );
  // Look for deposit with arg of LockingVault.DELEGATE
  // But also internal _delegate function emits Deposit and Withdraw events on delegation changes???

  const { data: votingEscrowWithdrawEvents } = useSmartContractEvents(
    votingEscrowContract,
    "Withdraw",
  );
  console.log("votring escrow with evts: ", votingEscrowWithdrawEvents);

  // tally of vote power by delegate
  const votePowerByDelegates: Record<string, BigNumber> = {};
  lockingVaultVoteChangeEvents?.forEach((event) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [unusedAccount, delegate, amount]: [string, string, BigNumber] =
      event.args as [string, string, BigNumber];

    if (delegate in votePowerByDelegates) {
      votePowerByDelegates[delegate] =
        votePowerByDelegates[delegate].add(amount);
    }

    votePowerByDelegates[delegate] = amount;
  });

  const delegatedVotes = Object.values(votePowerByDelegates);

  const filtered = delegatedVotes.filter((votePower) => !votePower.isZero());

  return filtered.length;
}
