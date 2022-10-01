import { ReactElement } from "react";
import VaultCard from "./VaultCard";
import ActionCard from "./ActionCard";
import DetailCard from "./DetailCard";
import { LockClosedIcon } from "@heroicons/react/outline";
import { useWeb3React } from "@web3-react/core";
import { useVestingVaultVotingPower } from "src/ui/voting/useVestingVaultVotingPower";
import { useVestingGetVestedTokens } from "src/ui/contracts/vaults/useVestingGetVestedTokens";

export default function VestingVault(props: {
  setWithdrawModal: () => void;
}): ReactElement {
  const { setWithdrawModal } = props;

  const { account } = useWeb3React();
  const vestingVaultVotingPower = useVestingVaultVotingPower(account);

  const [vestedTokens, unvestedTokens] = useVestingGetVestedTokens(account);

  return (
    <VaultCard vaultTitle="Vesting Vault">
      <DetailCard label="Vested" data={vestedTokens} />
      <DetailCard label="Unvested Balance" data={unvestedTokens} />
      <DetailCard label="Voting Power" data={`${vestingVaultVotingPower}`} />
      <div className="h-20" />
      <ActionCard
        onClick={() => setWithdrawModal()}
        icon={<LockClosedIcon />}
        text="Withdraw Vested Tokens"
        className="mt-2"
      />
    </VaultCard>
  );
}
