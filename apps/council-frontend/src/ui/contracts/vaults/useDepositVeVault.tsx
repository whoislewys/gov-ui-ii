import { toast } from "react-hot-toast";
import { ContractReceipt, Signer } from "ethers";
import { UseMutationResult } from "react-query";
import { VotingEscrow } from "src/consilium-typechain"; 
import { votingEscrowContract } from "src/fiat-contracts";
import { makeSmartContractReadCallQueryKey } from "@elementfi/react-query-typechain/src/hooks/useSmartContractReadCall/useSmartContractReadCall";
import { useSmartContractTransaction } from "@elementfi/react-query-typechain/src/hooks/useSmartContractTransaction/useSmartContractTransaction";
import { queryClient } from "src/queryClient";
import { useRef } from "react";
import { ETHERSCAN_TRANSACTION_DOMAIN } from "src/integrations/etherscan";
import { t, jt } from "ttag";
import ExternalLink from "src/ui/base/ExternalLink/ExternalLink";

export function useDepositVeVault(
  address: string | null | undefined,
  signer: Signer | undefined,
): UseMutationResult<
  ContractReceipt | undefined,
  unknown,
  Parameters<VotingEscrow["createLock"]>
> {
  const toastIdRef = useRef<string>();

  return useSmartContractTransaction(
    votingEscrowContract,
    "createLock",
    signer,
    {
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

        const message = (
          <div>{jt`Depositing... ${etherscanLink}`}</div>
        );

        toastIdRef.current = toast.loading(message);
      },
      onTransactionMined: () => {
        // Invalidate `deposits` so that consumers of `useDelegate` refresh
        queryClient.invalidateQueries(   // idk if we want this or not....
          makeSmartContractReadCallQueryKey(
            votingEscrowContract.address,
            "balanceOf",
            [address as string],
          ),
        );

        toast.success(t`Deposit successful`, {
          id: toastIdRef.current,
        });
      },
    },
  );
}
