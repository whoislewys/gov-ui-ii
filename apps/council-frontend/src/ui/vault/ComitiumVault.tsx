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
    <VaultCard vaultTitle="ComitiumVault">
      <DetailCard label="Balance" data="x,xxx,xx" />
      <DetailCard label="Lock Expiration" data="June 17, 2022" />
      <DetailCard label="Voting Power" data="2,154 FDT" />
      <div className="h-20" />
      <div className="flex w-full mt-2">
        <ActionCard icon={<LockClosedIcon/>} text="Migrate" className="mr-4" />
        <ActionCard icon={<LockClosedIcon/>} text="Withdraw" />
      </div>
    </VaultCard>
  )
}