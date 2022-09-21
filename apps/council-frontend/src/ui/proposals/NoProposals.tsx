import { ReactElement } from "react";
import { t } from "ttag";
import { TabId } from "src/ui/proposals/ProposalsPage";
import EmptySpaceFace from "src/ui/base/svg/EmptySpaceFace";
import H2 from "src/ui/base/H2/H2";
import Card, { CardVariant } from "src/ui/base/Card/Card";

export function NoProposalsList(props: { activeTabId: TabId }): ReactElement {
  return (
    <div className="text-fiatOffWhite my-6 flex flex-1 flex-col items-center">
      <EmptySpaceFace className="-mr-[27px] w-[90%] max-w-[327px]" />
      <p className="mt-4 text-xl font-semibold leading-6">{t`No ${props.activeTabId} proposals`}</p>
    </div>
  );
}

export function NoProposalsDetail(): ReactElement {
  return (
    <Card
      variant={CardVariant.BLACK}
      style={
        // don't scroll app behind popover, makes a double scroll bar
        { overscrollBehavior: "none" }
      }
      className="hidden h-[85vh] min-w-[403px] max-w-[48rem] flex-1 items-center justify-center rounded-xl opacity-90 lg:flex"
    >
      <H2 className="m-4 text-white">{t`Click on a proposal to view it here`}</H2>
    </Card>
  );
}
