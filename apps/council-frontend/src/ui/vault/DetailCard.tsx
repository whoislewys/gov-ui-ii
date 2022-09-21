import Card, { CardVariant } from "src/ui/base/Card/Card";
import { ReactElement, ReactNode } from "react";
import { Label } from "src/ui/base/Label/Label";
import { t } from "ttag";

interface DetailCardProps {
  label: string
  data: string
}

function DetailCard(props: DetailCardProps): ReactElement {
  const {
    label,
    data,
  } = props;

  return (
    <Card
      variant={CardVariant.DARK_GRAY}
      className="flex flex-col mb-4 px-4 py-3.5"
      noPadding={true}
    >
      <Label small className="tracking-wide text-fiatLightGray pb-1">{t`${label}`}</Label>
      <Label small className="tracking-wide text-white">{t`${data}`}</Label>
    </Card>
  )
}

export default DetailCard;
