import { lockingVaultContract } from "src/contracts";
import { toast } from "react-hot-toast";
import { ContractReceipt, Signer } from "ethers";
import { UseMutationResult } from "react-query";
import { LockingVault } from "@elementfi/council-typechain";
import { makeSmartContractReadCallQueryKey } from "@elementfi/react-query-typechain/src/hooks/useSmartContractReadCall/useSmartContractReadCall";
import { useSmartContractTransaction } from "@elementfi/react-query-typechain/src/hooks/useSmartContractTransaction/useSmartContractTransaction";
import { queryClient } from "src/queryClient";
import { useRef } from "react";
import { ETHERSCAN_TRANSACTION_DOMAIN } from "src/integrations/etherscan";
import { t, jt } from "ttag";
import ExternalLink from "src/ui/base/ExternalLink/ExternalLink";
import { votingEscrowContract } from "src/fiat-contracts";

export function useChangeDelegation(
  address: string | null | undefined,
  signer: Signer | undefined,
): UseMutationResult<
  ContractReceipt | undefined,
  unknown,
  Parameters<LockingVault["changeDelegation"]>
> {
  const toastIdRef = useRef<string>();

  return useSmartContractTransaction(votingEscrowContract, "delegate", signer, {
    onError: (e) => {
      toast.error(e.message, {
        id: toastIdRef.current,
      });
    },
    onTransactionSubmitted: (tx) => {
      const etherscanLink = (
        <ExternalLink
          href={`${ETHERSCAN_TRANSACTION_DOMAIN}/${tx.hash}`}
          text={t`View on etherscan`}
          className="text-fiatWhite"
        />
      );

      const message = <div>{jt`Changing delegation... ${etherscanLink}`}</div>;

      toastIdRef.current = toast.loading(message);
    },
    onTransactionMined: () => {
      // Invalidate `deposits` so that consumers of `useDelegate` refresh
      queryClient.invalidateQueries(
        makeSmartContractReadCallQueryKey(
          votingEscrowContract.address,
          "locked",
          [address as string],
        ),
      );

      toast.success(t`Delegation successfully changed`, {
        id: toastIdRef.current,
      });
    },
  });
}
