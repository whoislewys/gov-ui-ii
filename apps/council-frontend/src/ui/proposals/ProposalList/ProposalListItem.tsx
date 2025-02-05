import React, { ReactElement, useCallback } from "react";

import { Signer } from "@ethersproject/abstract-signer";
import classNames from "classnames";
import { Proposal } from "@elementfi/council-proposals";
import { t } from "ttag";

import { formatAbbreviatedDate } from "src/base/dates";
import { MS_PER_S, SECONDS_PER_BLOCK } from "src/base/time";
import Card, { CardVariant } from "src/ui/base/Card/Card";
import CardHeader from "src/ui/base/Card/CardHeader";
import { ProposalStatusIcon } from "src/ui/proposals/ProposalList/ProposalStatusIcon";
import { useSnapshotProposals } from "src/ui/proposals/useSnapshotProposals";
import { useLatestBlockNumber } from "src/ui/ethereum/useLatestBlockNumber";
import { BallotIcon } from "./BallotIcon";

interface ProposalListItemProps {
  account: string | null | undefined;
  signer: Signer | undefined;
  proposal: Proposal;
  active: boolean;
  onClick: (proposalId: string | undefined) => void;
  isGSCProposal?: boolean;
}

export function ProposalListItem({
  account,
  signer,
  proposal,
  active,
  onClick,
  isGSCProposal,
}: ProposalListItemProps): ReactElement {
  const { proposalId, snapshotId } = proposal;
  const { data: [snapshotProposal] = [] } = useSnapshotProposals([snapshotId]);
  const { data: currentBlockNumber = 0 } = useLatestBlockNumber();

  const now = Date.now();
  const votingPeriodEndsTimestampMS = Math.round(
    now +
      (proposal.expiration - currentBlockNumber) * SECONDS_PER_BLOCK * MS_PER_S,
  );

  const pastProposal = now > votingPeriodEndsTimestampMS;

  const votingPeriodEndsDate = formatAbbreviatedDate(
    new Date(votingPeriodEndsTimestampMS),
  );

  const votingPeriod = pastProposal
    ? t`Voting ended ${votingPeriodEndsDate}`
    : t`Voting ends ${votingPeriodEndsDate}`;

  const handleClick = useCallback(
    () => onClick(proposalId),
    [onClick, proposalId],
  );

  return (
    <Card
      interactive
      active={active}
      onClick={handleClick}
      key={proposal.proposalId}
      className="flex items-center justify-between"
      variant={CardVariant.BLACK}
    >
      <div className="flex w-full flex-col space-y-4">
        <div className="flex flex-col justify-between">
          <CardHeader
            title={snapshotProposal?.title || proposal.title}
            description={t`Proposal #${proposalId}`}
          />
          <div
            className={classNames(
              "text-fiatWhite flex h-full items-center justify-between space-x-4",
            )}
          >
            {currentBlockNumber && (
              <div className="text-sm">{votingPeriod}</div>
            )}
            <div className="flex items-center space-x-4">
              <div className="pb-0.5">
                <BallotIcon
                  isGSCProposal={isGSCProposal}
                  account={account}
                  proposalId={proposalId}
                />
              </div>
              <ProposalStatusIcon
                isGSCProposal={isGSCProposal}
                signer={signer}
                proposal={proposal}
              />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
