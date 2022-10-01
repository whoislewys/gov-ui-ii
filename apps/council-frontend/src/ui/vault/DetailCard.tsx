import Card, { CardVariant } from "src/ui/base/Card/Card";
import { ReactElement, ReactNode } from "react";
import { Label } from "src/ui/base/Label/Label";
import { t } from "ttag";

interface DetailCardProps {
  label: string;
  data: string | number;
}

function DetailCard(props: DetailCardProps): ReactElement {
  const { label, data } = props;

  return (
    <Card
      variant={CardVariant.DARK_GRAY}
      className="mb-4 flex flex-col px-4 py-3.5"
      noPadding={true}
    >
      <Label
        small
        className="pb-1 tracking-wide text-fiatLightGray"
      >{t`${label}`}</Label>
      <Label small className="tracking-wide text-white">{t`${data}`}</Label>
    </Card>
  );
}

export default DetailCard;
