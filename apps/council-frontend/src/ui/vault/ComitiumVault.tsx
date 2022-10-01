import { ReactElement } from "react";
import VaultCard from "./VaultCard";
import ActionCard from "./ActionCard";
import DetailCard from "./DetailCard";
import { LockClosedIcon } from "@heroicons/react/outline";

import { useWeb3React } from "@web3-react/core";
import { Signer } from "ethers";

export default function ComitiumVault(): ReactElement {
  const { account, library } = useWeb3React();
  const signer = account ? (library?.getSigner(account) as Signer) : undefined;

  return (
    <VaultCard vaultTitle="Comitium Vault">
      <DetailCard label="Balance" data="x,xxx,xx" />
      <DetailCard label="Lock Expiration" data="June xx, xxxx" />
      <DetailCard label="Voting Power" data="x,xxx FDT" />
      <div className="h-20" />
      <div className="mt-2 flex w-full">
        <ActionCard icon={<LockClosedIcon />} text="Migrate" className="mr-4" />
        <ActionCard icon={<LockClosedIcon />} text="Withdraw" />
      </div>
    </VaultCard>
  );
}
