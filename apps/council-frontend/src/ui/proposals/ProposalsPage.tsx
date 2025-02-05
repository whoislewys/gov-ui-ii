import {
  Fragment,
  ReactElement,
  useCallback,
  useMemo,
  useState,
  useEffect,
} from "react";
import Head from "next/head";
import { Dialog, Transition } from "@headlessui/react";
import { ExternalLinkIcon } from "@heroicons/react/solid";
import { useWeb3React } from "@web3-react/core";
import { Proposal, ProposalsJson } from "@elementfi/council-proposals";
import { t } from "ttag";

import { ELEMENT_FINANCE_SNAPSHOT_URL } from "src/integrations/snapshot/endpoints";
import AnchorButton from "src/ui/base/Button/AnchorButton";
import { ButtonVariant } from "src/ui/base/Button/styles";
import H1 from "src/ui/base/H1/H1";
import Tabs, { Tab } from "src/ui/base/Tabs/Tabs";
import {
  useIsTailwindSmallScreen,
  useIsTailwindLargeScreen,
} from "src/ui/base/tailwindBreakpoints";
import { useSigner } from "src/ui/signer/useSigner";
import { ProposalList } from "./ProposalList/ProposalList";
import {
  NoProposalsDetail,
  NoProposalsList,
} from "src/ui/proposals/NoProposals";
import { ProposalDetailsCard } from "src/ui/proposals/ProposalsDetailsCard/ProposalDetailsCard";
import { useUnverifiedProposals } from "src/ui/proposals/useUnverifiedProposals";
import { coreVotingContract } from "src/fiat-contracts";

export enum TabId {
  ACTIVE = "active",
  PAST = "past",
}

interface ProposalsPageProps {
  proposalsJson: ProposalsJson;
  currentBlockNumber: number;
}

export default function ProposalsPage({
  proposalsJson,
  currentBlockNumber,
}: ProposalsPageProps): ReactElement {
  const { account, library } = useWeb3React();
  const signer = useSigner(account, library);

  const [activeTabId, setActiveTabId] = useState<TabId>(TabId.ACTIVE);

  const isTailwindSmallScreen = useIsTailwindSmallScreen();
  const isTailwindLargeScreen = useIsTailwindLargeScreen();

  const unverifiedProposals = useUnverifiedProposals(
    proposalsJson.proposals,
    coreVotingContract,
  );
  const allProposals = proposalsJson.proposals.concat(unverifiedProposals);

  const activeProposals = useFilteredProposals(
    TabId.ACTIVE,
    allProposals,
    currentBlockNumber,
  );
  const pastProposals = useFilteredProposals(
    TabId.PAST,
    allProposals,
    currentBlockNumber,
  );

  const setDefaultActiveProposal = useCallback(() => {
    setSelectedProposalId(activeProposals?.[0]?.proposalId);
    setSelectedProposal(activeProposals?.[0]);
    activeProposals.length ? setIsModalOpen(true) : setIsModalOpen(false);
  }, [activeProposals]);

  const setDefaultPastProposal = useCallback(() => {
    setSelectedProposalId(pastProposals?.[0]?.proposalId);
    setSelectedProposal(pastProposals?.[0]);
    pastProposals.length ? setIsModalOpen(true) : setIsModalOpen(false);
  }, [pastProposals]);

  const calculateModalOpenState = () => {
    if (!isTailwindLargeScreen) {
      return false;
    }

    if (activeTabId === TabId.ACTIVE) {
      return !!activeProposals.length;
    }

    if (activeTabId === TabId.PAST) {
      return !!pastProposals.length;
    }

    // Will not reach this
    return false;
  };

  const [isModalOpen, setIsModalOpen] = useState(calculateModalOpenState());

  // set the default to the first active proposal, since that's what filter is
  // on by default
  const [selectedProposalId, setSelectedProposalId] = useState<
    string | undefined
  >(isTailwindSmallScreen ? undefined : activeProposals?.[0]?.proposalId);
  const [selectedProposal, setSelectedProposal] = useState<
    Proposal | undefined
  >(isTailwindSmallScreen ? undefined : activeProposals?.[0]);

  const handleSelectProposal = useCallback(
    (proposalId: string | undefined) => {
      const proposal = allProposals.find((p) => p.proposalId === proposalId);
      setSelectedProposal(proposal);
      setSelectedProposalId(proposalId);
      setIsModalOpen(true);
    },
    [allProposals],
  );

  const handleActiveTabClick = () => {
    if (activeTabId !== TabId.ACTIVE) {
      setActiveTabId(TabId.ACTIVE);
      // select the first proposal when the user clicks to view the
      // active tab
      if (isTailwindSmallScreen) {
        setSelectedProposalId(undefined);
        setSelectedProposal(undefined);
      } else {
        setDefaultActiveProposal();
      }
    }
  };

  const handlePastTabClick = () => {
    if (activeTabId !== TabId.PAST) {
      setActiveTabId(TabId.PAST);
      if (isTailwindSmallScreen) {
        setSelectedProposalId(undefined);
        setSelectedProposal(undefined);
      } else {
        // select the first proposal when the user clicks to view the
        // past tab
        setDefaultPastProposal();
      }
    }
  };

  const handleOnClose = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  // Populates the default past/active proposal when moving from small -> big screen size
  useEffect(() => {
    if (isTailwindLargeScreen && !isModalOpen) {
      if (activeTabId === TabId.PAST) {
        setDefaultPastProposal();
      } else {
        setDefaultActiveProposal();
      }
    }
  }, [
    activeTabId,
    isModalOpen,
    isTailwindLargeScreen,
    pastProposals,
    selectedProposal,
    setDefaultActiveProposal,
    setDefaultPastProposal,
  ]);

  const proposalDetail = !!selectedProposal ? (
    <ProposalDetailsCard
      key={selectedProposalId}
      onClose={handleOnClose}
      account={account}
      signer={signer}
      proposal={selectedProposal}
      unverified={!selectedProposal.snapshotId}
    />
  ) : null;

  const showNoProposalsState =
    (activeTabId === TabId.ACTIVE && !activeProposals.length) ||
    (activeTabId === TabId.PAST && !pastProposals.length);

  return (
    <div className="flex h-full w-full pr-8 pl-8 lg:justify-center xl:max-w-[1400px]">
      <Head>
        <title>{t`Proposals | Fiat Council Protocol`}</title>
      </Head>

      <div className="h-full w-full flex-1 space-y-8 pt-8 lg:max-w-lg lg:pr-8">
        <div className="flex justify-between gap-2">
          <Tabs aria-label={t`Filter proposals`}>
            <Tab
              first
              current={activeTabId === TabId.ACTIVE}
              onClick={handleActiveTabClick}
              name={t`Active`}
            />
            <Tab
              last
              current={activeTabId === TabId.PAST}
              onClick={handlePastTabClick}
              name={t`Past`}
            />
          </Tabs>
          <OffChainProposalsLink />
        </div>
        <div className="flex space-x-12">
          {showNoProposalsState ? (
            <NoProposalsList activeTabId={activeTabId} />
          ) : (
            <ProposalList
              account={account}
              signer={signer}
              proposals={
                activeTabId === TabId.ACTIVE ? activeProposals : pastProposals
              }
              selectedProposalId={selectedProposalId}
              onClickItem={handleSelectProposal}
              isModalOpen={isModalOpen}
            />
          )}
        </div>
      </div>

      {showNoProposalsState ? <NoProposalsDetail /> : null}

      {isTailwindLargeScreen ? (
        proposalDetail
      ) : (
        <Transition.Root show={isModalOpen} as={Fragment}>
          <Dialog
            // Using z-20 so that the dialog appears above the Sidebar, which is currently set to z-10
            className="fixed inset-0 z-20 overflow-y-auto"
            onClose={handleOnClose}
          >
            <div className="fixed top-1/2 left-1/2">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
              </Transition.Child>

              <Transition.Child
                as="div"
                enter="ease-out duration-300"
                enterFrom="opacity-0 sm:scale-95"
                enterTo="opacity-100 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 sm:scale-100"
                leaveTo="opacity-0 sm:scale-95"
              >
                {proposalDetail}
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
      )}
    </div>
  );
}

function OffChainProposalsLink() {
  return (
    <AnchorButton
      target="_blank"
      href={ELEMENT_FINANCE_SNAPSHOT_URL}
      variant={ButtonVariant.BLACK}
    >
      <div className="flex h-full items-center">
        <span className="mr-1">{t`Off-chain`}</span>
        <ExternalLinkIcon height={24} />
      </div>
    </AnchorButton>
  );
}

/**
 * To make sure we are only showing proposals that are deemed safe to vote on, we keep a curated
 * list of proposals hardcoded in the frontend.  The client grabs the snapshot information and we
 * link the on-chain proposal with the snapshot information.
 *
 * @param activeTabId current proposal selected
 * @param proposals list of proposals
 * @param currentBlockNumber
 * @returns filtered proposals based on activeTabId
 */
function useFilteredProposals(
  activeTabId: TabId,
  proposals: Proposal[],
  currentBlockNumber: number,
): Proposal[] {
  return useMemo(() => {
    if (activeTabId === TabId.ACTIVE) {
      return proposals?.filter(
        (proposal) => proposal.expiration > currentBlockNumber,
      );
    }

    if (activeTabId === TabId.PAST) {
      return proposals?.filter(
        (proposal) => proposal.expiration <= currentBlockNumber,
      );
    }

    return [];
  }, [activeTabId, currentBlockNumber, proposals]);
}
