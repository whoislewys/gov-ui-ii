import { ReactElement, useState } from "react";
import VotingEscrowVault from "./VotingEscrowVault";
import ComitiumVault from "./ComitiumVault";
import VestingVault from "./VestingVault";
import VotingEscrowDepositModal from "./EscrowVault/VotingEscrowDepositModal";
import VotingEscrowWithdrawModal from "./EscrowVault/VotingEscrowWithdrawModal";
import VotingEscrowExtendLockModal from "./EscrowVault/VotingEscrowExtendLockModal";
import VotingEscrowQuitLockModal from "./EscrowVault/VotingEscrowQuitLockModal";

import VestingVaultWithdrawModal from "./VestingVault/VestingVaultWithdrawModal";

export default function VaultPage(): ReactElement {
  const [veVaultDepositModal, setVeVaultDepositModal] = useState(false)
  const [veVaultWithdrawModal, setVeVaultWithdrawModal] = useState(false)
  const [veVaultQuitLockModal, setVeVaultQuitLockModal] = useState(false)
  const [veVaultExtendLockModal, setVeVaultExtendLockModal] = useState(false)

  const [vestingVaultWithdrawModal, setVestingVaultWithdrawModal] = useState(false)

  return (
    <div className="flex flex-col items-center h-full">
      <div className="flex w-full h-fit px-7 pt-6">

        <VotingEscrowVault 
          setDepositModal={() => setVeVaultDepositModal(true)}
          setWithdrawModal={() => setVeVaultWithdrawModal(true)}
          setQuitLockModal={() => setVeVaultQuitLockModal(true)}
          setExtendLockModal={() => setVeVaultExtendLockModal(true)}
        />
        <ComitiumVault />
        <VestingVault 
          setWithdrawModal={() => setVestingVaultWithdrawModal(true)}
        />

        {/* Modals */}
        <VotingEscrowDepositModal isOpen={veVaultDepositModal} onClose={() => setVeVaultDepositModal(false)} />
        <VotingEscrowWithdrawModal isOpen={veVaultWithdrawModal} onClose={() => setVeVaultWithdrawModal(false)} />
        <VotingEscrowQuitLockModal isOpen={veVaultQuitLockModal} onClose={() => setVeVaultQuitLockModal(false)} />
        <VotingEscrowExtendLockModal isOpen={veVaultExtendLockModal} onClose={() => setVeVaultExtendLockModal(false)} />

        <VestingVaultWithdrawModal isOpen={vestingVaultWithdrawModal} onClose={() => setVestingVaultWithdrawModal(false)} />
      </div>
    </div>
  );
}
