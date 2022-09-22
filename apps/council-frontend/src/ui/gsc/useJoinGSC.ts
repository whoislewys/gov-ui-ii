import { useCallback } from "react";

import {
  useSmartContractTransaction,
  UseSmartContractTransactionOptions,
} from "@elementfi/react-query-typechain/src/hooks/useSmartContractTransaction/useSmartContractTransaction";
import { Signer } from "ethers";

import { addressesJson, FiatAddressesJsonFile } from "src/addresses";
import {
  gscVaultContract,
  votingEscrowVaultContract,
  vestingContract,
} from "src/fiat-contracts";
import { useQueryVotePowerView } from "src/ui/voting/useQueryVotePower";
import { GSCVault } from "src/consilium-typechain";

const fiatAddresses = addressesJson as FiatAddressesJsonFile;
const { votingEscrow, vestingVault } = fiatAddresses.addresses;

const EMPTY_BYTE = "0x00";

export function useJoinGSC(
  account: string | null | undefined,
  signer?: Signer,
  options?: UseSmartContractTransactionOptions<GSCVault, "proveMembership">,
): { handleJoin: () => Promise<void>; isLoading: boolean } {
  const { mutate: join, isLoading } = useSmartContractTransaction(
    gscVaultContract,
    "proveMembership",
    signer,
    options,
  );

  const votingEscrowVotePower = useQueryVotePowerView(
    account,
    votingEscrowVaultContract,
  );
  const vestingVaultVotePower = useQueryVotePowerView(account, vestingContract);

  const handleJoin = useCallback(async () => {
    const vaults: string[] = [];

    if (!!Number(votingEscrowVotePower)) {
      vaults.push(votingEscrow);
    }

    if (!!Number(vestingVaultVotePower)) {
      vaults.push(vestingVault);
    }

    // stub out empty bytes for the extra data since neither locking nor vesting use it
    const extraData = vaults.map(() => EMPTY_BYTE);
    join([vaults, extraData]);
  }, [join, votingEscrowVaultContract, vestingVaultVotePower]);

  return { handleJoin, isLoading };
}
