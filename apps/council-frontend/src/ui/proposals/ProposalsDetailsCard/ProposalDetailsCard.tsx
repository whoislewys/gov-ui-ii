import { formatBalance2 } from "@elementfi/base";
import { Proposal } from "@elementfi/council-proposals";
import { CheckCircleIcon } from "@heroicons/react/outline";
import classNames from "classnames";
import { ContractTransaction, Signer } from "ethers";
import { commify, formatEther } from "ethers/lib/utils";
import { isNumber } from "lodash";
import React, {
  ReactElement,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";
import toast from "react-hot-toast";
import ReactMarkdown from "react-markdown";
import { getIsVotingOpen } from "src/proposals";
import { ETHERSCAN_TRANSACTION_DOMAIN } from "src/integrations/etherscan";
import { VotingPower } from "src/proposals/VotingPower";
import ElementUrl from "src/urls";
import { BalanceWithLabel } from "src/ui/base/BalanceWithLabel/BalanceWithLabel";
import Button from "src/ui/base/Button/Button";
import { ButtonVariant } from "src/ui/base/Button/styles";
import CloseButton from "src/ui/base/Dialog/CloseButton";
import ExternalLink from "src/ui/base/ExternalLink/ExternalLink";
import H1 from "src/ui/base/H1/H1";
import H2 from "src/ui/base/H2/H2";
import { Intent } from "src/ui/base/Intent";
import { ProgressBar } from "src/ui/base/ProgressBar/ProgressBar";
import { Tag } from "src/ui/base/Tag/Tag";
import { useLatestBlockNumber } from "src/ui/ethereum/useLatestBlockNumber";
import {
  getProposalStatus,
  ProposalStatus,
  ProposalStatusLabels,
} from "src/ui/proposals/ProposalList/ProposalStatus";
import { ProposalStatusIcon } from "src/ui/proposals/ProposalList/ProposalStatusIcon";
import { BallotLabel } from "src/ui/proposals/ProposalsDetailsCard/BallotLabel";
import { StaleVotingPowerMessage } from "src/ui/proposals/ProposalsDetailsCard/StaleVotingPowerMessage";
import { TooltipDefinition } from "src/ui/proposals/ProposalsDetailsCard/tooltipDefinitions";
import { useProposalExecuted } from "src/ui/proposals/useProposalExecuted";
import { useSnapshotProposals } from "src/ui/proposals/useSnapshotProposals";
import { useVotingPowerForProposal } from "src/ui/proposals/useVotingPowerForProposal";
import { Ballot } from "src/ui/voting/Ballot";
import { useBallot } from "src/ui/voting/useBallot";
import { useLastVoteTransactionForAccount } from "src/ui/voting/useLastVoteTransactionForAccount";
import { useVote } from "src/ui/voting/useVote";
import { useVotingPowerForAccountAtBlockNumber } from "src/ui/voting/useVotingPowerForAccount";
import { VotingBallotButton } from "src/ui/voting/VotingBallotButton";
import { jt, t } from "ttag";
import { ReactMarkdownOptions } from "react-markdown/lib/react-markdown";
import Card, { CardVariant } from "src/ui/base/Card/Card";

interface ProposalDetailsCardProps {
  className?: string;
  account: string | null | undefined;
  signer: Signer | undefined;
  proposal: Proposal;
  onClose: () => void;
  unverified?: boolean;
}

const markdownComponents: ReactMarkdownOptions["components"] = {
  a: (props) => (
    <a className="text-yellow-400 hover:underline" href={props.href}>
      {props.children}
    </a>
  ),
  pre: (props) => <pre className="whitespace-pre-line">{props.children}</pre>,
};

export function ProposalDetailsCard(
  props: ProposalDetailsCardProps,
): ReactElement | null {
  const {
    className,
    proposal,
    account,
    signer,
    onClose,
    unverified = false,
  } = props;
  const { proposalId, snapshotId, quorum, forumLink } = proposal;

  const toastIdRef = useRef<string>();

  const [newBallot, setCurrentBallot] = useState<Ballot>();
  const [isChangingVote, setIsChangingVote] = useState(false);
  const [isVoteTxPending, setIsVoteTxPending] = useState(false);
  const [newVoteTransaction, setNewVoteTransaction] =
    useState<ContractTransaction>();

  const { data: snapshotProposals } = useSnapshotProposals([snapshotId]);
  const snapshotProposal = snapshotProposals && snapshotProposals[0];

  const accountVotingPower = useVotingPowerForAccountAtBlockNumber(
    account,
    proposal.created,
  );

  const { data: currentBlockNumber = 0 } = useLatestBlockNumber();
  const isVotingOpen = getIsVotingOpen(proposal, currentBlockNumber);

  const isExecuted = useProposalExecuted(proposalId);

  const { data: currentBallot } = useBallot(account, proposalId);
  const [ballotVotePower, ballotChoice] = currentBallot || [];

  const { data: lastVoteTransaction } = useLastVoteTransactionForAccount(
    account,
    proposalId,
  );

  const etherscanLink = useMemo(() => {
    const hash = newVoteTransaction?.hash || lastVoteTransaction?.hash;
    if (hash && !isChangingVote) {
      return `${ETHERSCAN_TRANSACTION_DOMAIN}/${hash}`;
    }
    return null;
  }, [isChangingVote, lastVoteTransaction, newVoteTransaction]);

  const proposalVotingResults = useVotingPowerForProposal(proposalId);
  const proposalStatus = getProposalStatus(
    isVotingOpen,
    isExecuted,
    quorum,
    proposalVotingResults,
  );

  const voteButtonDisabled =
    unverified || !isVotingOpen || !+accountVotingPower;

  const submitButtonDisabled =
    unverified ||
    !isNumber(newBallot) ||
    !account ||
    !isVotingOpen ||
    isVoteTxPending ||
    !+accountVotingPower;

  const { mutate: vote } = useVote(account, signer, proposal.created, {
    onError: (e) => {
      setIsVoteTxPending(false);
      toast.error(e.message, { id: toastIdRef.current });
    },
    onTransactionSubmitted: (pendingTransaction) => {
      const pendingEtherscanLink = (
        <ExternalLink
          href={`${ETHERSCAN_TRANSACTION_DOMAIN}/${pendingTransaction.hash}`}
          text={t`View on etherscan`}
          className="text-fiatWhite"
        />
      );

      const message = (
        <div>{jt`Submitting vote... ${pendingEtherscanLink}`}</div>
      );

      toastIdRef.current = toast.loading(message);
      setIsChangingVote(false);
      setIsVoteTxPending(true);
      setNewVoteTransaction(pendingTransaction);
    },
    onTransactionMined: () => {
      toast.success(t`Vote successfully submitted`, { id: toastIdRef.current });
      setIsVoteTxPending(false);
    },
  });

  const handleVote = useCallback(() => {
    if (!isNumber(newBallot)) {
      return;
    }
    setIsChangingVote(true);
    vote(proposalId, newBallot);
  }, [newBallot, proposalId, vote]);

  return (
    <Card
      variant={CardVariant.BLACK}
      style={
        // don't scroll app behind popover, makes a double scroll bar
        { overscrollBehavior: "none" }
      }
      className={classNames(
        className,
        "fixed inset-0 z-10 flex w-full flex-1 flex-col items-start overflow-auto rounded-none sm:inset-[initial] sm:h-[85vh] sm:w-[450px] sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-xl lg:sticky lg:top-10 lg:h-[85vh] lg:min-w-[403px] lg:max-w-[48rem] lg:translate-y-0 lg:translate-x-0",
      )}
    >
      <div className="flex h-full w-full flex-1 flex-col p-6">
        <CloseButton
          onClose={onClose}
          className="absolute top-0 right-0 lg:hidden"
        />

        {/* Proposal Header */}
        <H2 className="hidden shrink-0 text-white lg:block">
          {t`Proposal #${proposalId}`}
        </H2>

        {/* Proposal Title */}
        <div className="relative flex justify-between">
          <div className="flex w-full flex-col">
            <div className="mt-8 mb-2 flex justify-between lg:m-0">
              <H2 className="text-white lg:hidden">
                {t`Proposal #${proposalId}`}
              </H2>
              <Tag className="w-min py-2 lg:hidden">
                {proposalStatus && (
                  <div className="flex w-full items-center justify-end space-x-2">
                    <div className="whitespace-nowrap">
                      {ProposalStatusLabels[proposalStatus]}
                    </div>
                    <ProposalStatusIcon
                      signer={signer}
                      proposal={proposal}
                      disableTooltip
                    />
                  </div>
                )}
              </Tag>
            </div>
            <H1 className="flex-1 shrink-0 text-ellipsis !text-2xl font-light !leading-6 text-white lg:mt-4">
              {snapshotProposal?.title || proposal.title}
            </H1>
          </div>

          <Tag className="top-0 right-0 hidden h-min py-2 lg:absolute lg:-mt-8 lg:block">
            {proposalStatus && (
              <div className="text-fiatWhite flex w-full items-center justify-end space-x-2">
                <div className="whitespace-nowrap">
                  {ProposalStatusLabels[proposalStatus]}
                </div>
                <ProposalStatusIcon
                  signer={signer}
                  proposal={proposal}
                  disableTooltip
                />
              </div>
            )}
          </Tag>
        </div>

        {/* Proposal Description */}
        <p className="my-3 shrink-0 overflow-hidden font-light text-white">
          {t`Proposal Description:`}
        </p>
        <div className="h-1/3 overflow-hidden rounded-lg bg-black bg-opacity-20">
          <div className="h-full overflow-auto break-words">
            <p className="shrink-0 whitespace-pre-line py-2 px-4 font-light text-white">
              <ReactMarkdown components={markdownComponents}>
                {proposal.description || ""}
              </ReactMarkdown>
            </p>
          </div>
        </div>

        {/* External Links */}
        {/* TODO: Add link unverified proposals */}
        {unverified ? (
          // Empty placeholder to match my-4
          <div className="my-4"></div>
        ) : (
          <div className="my-4 flex justify-around">
            <ExternalLink
              href={snapshotProposal?.link || ""}
              text={t`View proposal`}
              className="overflow-hidden text-sm text-white"
            />
            <ExternalLink
              href={forumLink || ElementUrl.FORUM}
              text={t`View discussion`}
              className="overflow-hidden text-sm text-white"
            />
          </div>
        )}

        {/* Quorum Bar */}
        {isExecuted ? (
          <Tag className="w-full" intent={Intent.SUCCESS}>
            <span>{t`Executed`}</span>
            <CheckCircleIcon className="ml-2" height="24" />
          </Tag>
        ) : (
          <QuorumBar
            quorum={quorum}
            proposalId={proposalId}
            status={proposalStatus}
            unverified={!proposal.snapshotId}
          />
        )}

        {/* Voting Related Stats / Action Buttons */}
        <div className="mt-auto">
          {/* Stale Voting Warning Message */}
          {isVotingOpen ? (
            <div className="my-4">
              <StaleVotingPowerMessage account={account} proposal={proposal} />
            </div>
          ) : null}

          {/* Action Buttons */}
          <div className="flex w-full flex-1 flex-col items-end justify-end space-y-2">
            <div className="flex w-full items-end justify-between">
              {/* User Stats */}
              <BalanceWithLabel
                className="mt-4 w-full"
                balance={accountVotingPower}
                tooltipText={t`${TooltipDefinition.OWNED_PROPOSAL_VOTING_POWER}`}
                label={t`Voting Power`}
              />

              {etherscanLink && (
                <ExternalLink
                  href={etherscanLink}
                  text={t`View on etherscan`}
                  className="whitespace-nowrap text-sm text-white"
                />
              )}
            </div>
            <div className="flex w-full justify-between">
              <VotingBallotButton
                proposal={proposal}
                currentBallot={newBallot}
                onSelectBallot={setCurrentBallot}
                variant={ButtonVariant.DARK_GRAY}
                disabled={voteButtonDisabled}
              />
              {ballotVotePower?.gt(0) && isNumber(ballotChoice) && (
                <div className="ml-4 flex w-full items-center text-white ">
                  <BallotLabel ballot={ballotChoice} />
                </div>
              )}

              <Button
                disabled={submitButtonDisabled}
                onClick={handleVote}
                loading={isVoteTxPending}
                variant={ButtonVariant.GRADIENT}
                className="w-[95px] shrink-0 justify-center"
              >
                {ballotChoice === undefined ? t`Submit` : t`Modify vote`}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

interface QuorumBarProps {
  proposalId: string;
  // quorum in X * 1e18 format, i.e. '50' = 50 Eth
  quorum: string;
  status: ProposalStatus | undefined;
  unverified: boolean;
}

function QuorumBar(props: QuorumBarProps) {
  const { proposalId, quorum, unverified } = props;
  const proposalVotingResults = useVotingPowerForProposal(proposalId);
  const votes = getVoteCount(proposalVotingResults);

  const quorumPercent = Math.floor((+votes / +quorum) * 100);

  if (unverified) {
    return null;
  }

  return (
    <div className="w-full space-y-1 text-white">
      <div>
        {formatBalance2(votes, 4)} / {commify(quorum)}{" "}
        <span className="text-sm">{t`total votes`}</span>
      </div>
      <ProgressBar progress={+votes / +quorum} />
      <div>
        {`${quorumPercent}%`}{" "}
        <span className="text-sm">{t`quorum reached`}</span>
      </div>
    </div>
  );
}

function getVoteCount(votingPower: VotingPower | undefined): string {
  if (!votingPower) {
    return "0";
  }

  return votingPower[0].gt(votingPower[1])
    ? formatEther(votingPower[0])
    : formatEther(votingPower[1]);
}
