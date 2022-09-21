import { useMemo } from "react";
import { useSmartContractEvents } from "@elementfi/react-query-typechain/src/hooks/useSmartContractEvents/useSmartContractEvents";
import { BigNumber, ethers } from "ethers";
import { formatEther } from "ethers/lib/utils";
import { useQuery } from "react-query";
import { addressesJson, FiatAddressesJsonFile } from "src/addresses";
import {
  fdtContract,
  vestingContract as fiatVestingContract,
  votingEscrowContract,
} from "src/fiat-contracts";
import { useTokenBalanceOf } from "src/ui/token/useTokenBalanceOf";

const { comitiumVault: comitiumVaultAddr } = (
  addressesJson as FiatAddressesJsonFile
).addresses;

export function useVotingPowerForProtocol(): number {
  // Vesting Vault
  const vestingVaultVotingPower = useVestingVaultVotingPower();

  // VE contract's total calculated voting power
  const votingEscrowVotingPower = useVotingEscrowVotingPower();

  // Comitium Vault
  const { data: comitiumVaultBalanceBN } = useTokenBalanceOf(
    fdtContract,
    comitiumVaultAddr,
  );
  const comitiumVaultVotingPower = +formatEther(comitiumVaultBalanceBN || 0);

  const votingPower =
    +vestingVaultVotingPower +
    +votingEscrowVotingPower +
    comitiumVaultVotingPower;

  return votingPower;
}

function useVestingVaultVotingPower(): string {
  const { data: events } = useSmartContractEvents(
    fiatVestingContract,
    "VoteChange",
  );

  const result = useMemo(() => {
    if (!events) {
      return "0";
    }

    // tally vote power for each address
    const votingPowerByAddress: Record<string, BigNumber> = {};
    events.forEach((event) => {
      const [delegatee, , amount]: [string, string, BigNumber] =
        (event.args as [string, string, BigNumber]) || [
          ethers.constants.AddressZero,
          ethers.constants.AddressZero,
          BigNumber.from(0),
        ];

      const previousVotingPower =
        votingPowerByAddress[delegatee] || BigNumber.from(0);
      votingPowerByAddress[delegatee] = previousVotingPower.add(amount);
    });

    // sum up vote power across all addresses
    let vestingVaultVotingPowerBN = BigNumber.from(0);
    Object.keys(votingPowerByAddress).forEach((address) => {
      const votePowerBN = votingPowerByAddress[address];
      vestingVaultVotingPowerBN = vestingVaultVotingPowerBN.add(votePowerBN);
    });

    const vestingVaultVotingPower = formatEther(vestingVaultVotingPowerBN);
    return vestingVaultVotingPower;
    // events are immutable, only update if there are new events.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [events?.length]);

  return result;
}

function useVotingEscrowVotingPower(): string {
  const response = useQuery({
    queryKey: ["votingEscrowVotingPower"],
    queryFn: () => {
      const votingPower = votingEscrowContract.totalSupply();
      return votingPower;
    },
  });

  return formatEther(response.data ?? BigNumber.from(0));
}
