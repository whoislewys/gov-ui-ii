import { gql, request } from "graphql-request";
import {GOERLI_CHAIN_ID} from "./chainIds";

// mainnet hub
const SNAPSHOT_GRAPHQL_ENDPOINT = "https://hub.snapshot.org/graphql";
// rinkeby hub
const RINKEBY_SNAPSHOT_GRAPHQL_ENDPOINT = "https://testnet.snapshot.org/graphql";


// goerli and gsc goerli snapshot spaces currently share the same one.
// export const SNAPSHOT_SPACE_ID_MAINNET = "elfi.eth";
// export const SNAPSHOT_GSC_SPACE_ID_MAINNET = "gsc-elfi.eth";
// export const SNAPSHOT_SPACE_ID_GOERLI = "element-finance-goerli.eth";
// export const SNAPSHOT_GSC_SPACE_ID_GOERLI = "element-finance-goerli.eth";

export const SNAPSHOT_SPACE_ID_MAINNET = "fiatdao.eth";
export const SNAPSHOT_GSC_SPACE_ID_MAINNET = "fiatdao.eth";
// NOTE: goerli is a misnomer, these use the demo snapshot hosted on rinkeby to avoid buying a dummy ens on mainnet kek
export const SNAPSHOT_SPACE_ID_GOERLI = "fiatdao-goerli.eth";
export const SNAPSHOT_GSC_SPACE_ID_GOERLI = "fiatdao-goerli.eth";

export interface SnapshotProposal {
  body: string;
  title: string;
}

export async function fetchSnapshotProposalTitleAndBody(
  snapshotId: string,
  chainId: number,
): Promise<SnapshotProposal> {
  const { proposals } = await request(
    // snapshot just used for metadata, so we use their rinkeby testnet hub for goerli proposal metadata
    chainId === GOERLI_CHAIN_ID ? RINKEBY_SNAPSHOT_GRAPHQL_ENDPOINT : SNAPSHOT_GRAPHQL_ENDPOINT,
    gql`
      query {
        proposals(
          where: { id: ${JSON.stringify(snapshotId)} }
        ) {
          title
          body
        }
      }
    `,
  );

  // return the first result, as we're only looking up a single snapshot id
  return proposals[0];
}
