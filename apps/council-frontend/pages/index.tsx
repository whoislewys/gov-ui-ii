import OverviewPage from "src/ui/overview/OverviewPage";
import React, { ReactElement } from "react";
import PageView from "src/ui/app/PageView";
// TODO: fukkit only static import of proposals
// import { ProposalsJson } from "@elementfi/council-proposals";
import { ProposalsJson } from "src/proposals/ProposalJson/types";
import { goerliProposals } from "src/proposals/ProposalJson";
// import { PROPOSALS_JSON_URL } from "src/proposals";
// import mainnetProposals from "@elementfi/council-proposals/dist/mainnet.proposals.json";

interface HomeProps {
  proposalsJson: ProposalsJson;
}
export default function Home({ proposalsJson }: HomeProps): ReactElement {
  return (
    <PageView
      childrenContainerClassName="flex justify-center"
      pageTitle="Governance Overview"
    >
      <OverviewPage proposalsJson={proposalsJson} />
    </PageView>
  );
}

export async function getStaticProps(): Promise<{
  props: { proposalsJson: ProposalsJson };
  revalidate: number;
}> {
  // const res = await fetch(PROPOSALS_JSON_URL);
  // ^ up here is hardcoded aws url to fetch proposals, wtf
  // console.log('Proposals resp: ', res)
  // const proposalsJson = await res.json();
  // console.log('Proposals json: ', proposalsJson)

  // in development we want to read directly from the package instead of going
  // to s3. This way we can test out locally how a new proposal looks in the UI
  // without having to update production s3 buckets.
  // if (process.env.NODE_ENV === "development") {
  //   return {
  //     props: { proposalsJson: mainnetProposals as ProposalsJson },
  //     revalidate: 60, // seconds
  //   };
  // }

  const proposalsJson = goerliProposals as ProposalsJson;
  return {
    props: { proposalsJson },
    revalidate: 60, // seconds
  };
}
