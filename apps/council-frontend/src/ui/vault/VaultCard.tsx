import Card, { CardVariant } from "src/ui/base/Card/Card";
import { ReactElement, ReactNode } from "react";
import { Divider } from "src/ui/base/Divider";
import H2 from "src/ui/base/H2/H2";
import { t } from "ttag";

interface VaultCardProps {
  vaultTitle: string
  children?: ReactNode
}

function VaultCard(props: VaultCardProps): ReactElement {
  const {
    vaultTitle,
    children,
  } = props;

  return (
    <Card
      noPadding={true}
      variant={CardVariant.BLACK}
      className="mt-auto rounded-xl w-full h-full mx-3"
    >
      <div className="p-6 center-items">
        <H2 className="text-base tracking-wide text-white">{t`${vaultTitle}`}</H2>
      </div>
      <Divider/>
      <div className="p-6">
        {children}
      </div>
    </Card>
  )
}

export default VaultCard;
