import { ReactElement } from "react";
import VaultCard from "./VaultCard";
import ActionCard from "./ActionCard";
import DetailCard from "./DetailCard";
import { LockClosedIcon } from "@heroicons/react/outline";
import { useWeb3React } from "@web3-react/core";
import { useVestingVaultVotingPower } from "src/ui/voting/useVestingVaultVotingPower";
import { useVestingGetGrant } from "src/ui/contracts/vaults/useVestingGetGrant";

export default function VestingVault(props: {
  setWithdrawModal: () => void
}): ReactElement {
  const { setWithdrawModal } = props;

  const { account } = useWeb3React();
  const vestingVaultVotingPower = useVestingVaultVotingPower(account);

  const vestingVaultGrant = useVestingGetGrant(account);

  return (
    <VaultCard vaultTitle="VestingVault">
      <DetailCard label="Vested" data="x,xxx,xx" />
      <DetailCard label="Unvested Balance" data="x,xxx,xx" />
      <DetailCard label="Voting Power" data={`${vestingVaultVotingPower} FDT`} />
      <div className="h-20" />
      <ActionCard onClick={() => setWithdrawModal()} icon={<LockClosedIcon/>} text="Withdraw Vested Tokens" className="mt-2"/>
    </VaultCard>
  )
}
