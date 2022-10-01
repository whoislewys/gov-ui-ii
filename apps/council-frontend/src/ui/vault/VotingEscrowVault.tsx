import { ReactElement } from "react";
import VaultCard from "./VaultCard";
import ActionCard from "./ActionCard";
import DetailCard from "./DetailCard";
import { LockClosedIcon } from "@heroicons/react/outline";
import { useVotingEscrowVaultVotingPower } from "src/ui/voting/useVotingEscrowVaultVotingPower";
import { useWeb3React } from "@web3-react/core";
import { formatNumberToFixed } from "src/base/numbers";
import { useVotingEscrowLockEndDate } from "src/ui/contracts/vaults/useVotingEscrowLockEndDate";
import { useVotingEscrowLockBalance } from "src/ui/contracts/vaults/useVotingEscrowLockBalance";

export default function VotingEscrowVault(props: {
  setDepositModal: () => void;
  setWithdrawModal: () => void;
  setQuitLockModal: () => void;
  setExtendLockModal: () => void;
}): ReactElement {
  const {
    setDepositModal,
    setWithdrawModal,
    setQuitLockModal,
    setExtendLockModal,
  } = props;

  const { account } = useWeb3React();
  const votingPower = useVotingEscrowVaultVotingPower(account);
  const lockEndDate = useVotingEscrowLockEndDate(account);
  const balance = useVotingEscrowLockBalance(account);

  return (
    <VaultCard vaultTitle="veFDT Vault">
      <DetailCard
        label="Balance"
        data={`${formatNumberToFixed(balance)} FDT`}
      />
      <DetailCard label="Lock Expiration" data={lockEndDate || "-"} />
      <DetailCard
        label="Voting Power"
        data={`${formatNumberToFixed(Number(votingPower))} FDT`}
      />
      <div className="flex w-full">
        <div className="mr-4 flex w-full flex-col">
          <ActionCard
            onClick={() => setDepositModal()}
            icon={<LockClosedIcon />}
            text="Deposit"
            className="mb-4"
          />
          <ActionCard
            onClick={() => setQuitLockModal()}
            icon={<LockClosedIcon />}
            text="Quit Lock"
          />
        </div>
        <div className="flex w-full flex-col">
          <ActionCard
            onClick={() => setWithdrawModal()}
            icon={<LockClosedIcon />}
            text="Withdraw"
            className="mb-4"
          />
          <ActionCard
            onClick={() => setExtendLockModal()}
            icon={<LockClosedIcon />}
            text="Extend Lock"
          />
        </div>
      </div>
    </VaultCard>
  );
}
