import { addressesJson } from "src/addresses";
import { ChainId } from "@elementfi/base";

export const SNAPSHOT_GRAPHQL_ENDPOINT = "https://hub.snapshot.org/graphql";
export const ELEMENT_FINANCE_SNAPSHOT_URL = getSnapshotUrl();
export const ELEMENT_FINANCE_GSC_SNAPSHOT_URL = getGSCSnapshotUrl();

function getSnapshotUrl() {
  switch (addressesJson.chainId) {
    case ChainId.MAINNET:
      return "https://snapshot.org/#/fiatdao.eth";
    case ChainId.GOERLI:
    case ChainId.LOCAL:
    default:
      return "https://snapshot.org/#/element-finance-goerli.eth";
  }
}

function getGSCSnapshotUrl() {
  switch (addressesJson.chainId) {
    case ChainId.MAINNET:
      return "https://snapshot.org/#/gsc-fiatdao.eth"; // TODO: register new snapshot url for gsc members to vote on snapshot?
    case ChainId.GOERLI:
    case ChainId.LOCAL:
    default:
      return "https://snapshot.org/#/element-finance-goerli.eth";
  }
}
