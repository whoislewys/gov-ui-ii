import { toast } from "react-hot-toast";
import { ContractReceipt, Signer } from "ethers";
import { UseMutationResult } from "react-query";
import { VestingVault } from "src/consilium-typechain"; 
import { vestingContract } from "src/fiat-contracts";
import { makeSmartContractReadCallQueryKey } from "@elementfi/react-query-typechain/src/hooks/useSmartContractReadCall/useSmartContractReadCall";
import { useSmartContractTransaction } from "@elementfi/react-query-typechain/src/hooks/useSmartContractTransaction/useSmartContractTransaction";
import { queryClient } from "src/queryClient";
import { useRef } from "react";
import { ETHERSCAN_TRANSACTION_DOMAIN } from "src/integrations/etherscan";
import { t, jt } from "ttag";
import ExternalLink from "src/ui/base/ExternalLink/ExternalLink";

export function useVestingVaultWithdraw(
  signer: Signer | undefined,
): UseMutationResult<
  ContractReceipt | undefined,
  unknown,
  Parameters<VestingVault["withdraw"]>
> {
  const toastIdRef = useRef<string>();

  return useSmartContractTransaction(
    vestingContract,
    "withdraw",
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
          <div>{jt`Withdrawing... ${etherscanLink}`}</div>
        );

        toastIdRef.current = toast.loading(message);
      },
      onTransactionMined: () => {
        toast.success(t`Withdrawl successful`, {
          id: toastIdRef.current,
        });
      },
    },
  );
}
