import React, { ReactElement } from "react";
import PageView from "src/ui/app/PageView";
import VaultPage from "src/ui/vault/VaultPage";

export default function Vaults(): ReactElement {
  return (
    <PageView childrenContainerClassName={"w-full"} pageTitle="Vaults">
      <VaultPage />
    </PageView>
  );
}
