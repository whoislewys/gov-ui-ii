export declare const SNAPSHOT_SPACE_ID_MAINNET = "fiatdao.eth";
export declare const SNAPSHOT_GSC_SPACE_ID_MAINNET = "fiatdao.eth";
export declare const SNAPSHOT_SPACE_ID_GOERLI = "fiatdao-goerli.eth";
export declare const SNAPSHOT_GSC_SPACE_ID_GOERLI = "fiatdao-goerli.eth";
export interface SnapshotProposal {
    body: string;
    title: string;
}
export declare function fetchSnapshotProposalTitleAndBody(snapshotId: string, chainId: number): Promise<SnapshotProposal>;
