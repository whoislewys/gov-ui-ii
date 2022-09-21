
import { useSmartContractTransaction } from "@elementfi/react-query-typechain/src/hooks/useSmartContractTransaction/useSmartContractTransaction";
import { MockERC20 } from "src/consilium-typechain/MockERC20";
import { fdtEthLpTokenContract } from "src/fiat-contracts";
import { UseMutationResult } from "react-query";
import { ContractReceipt, Signer } from "ethers";
import { useRef } from "react";
import { toast } from "react-hot-toast";
import { ETHERSCAN_TRANSACTION_DOMAIN } from "src/integrations/etherscan";
import { t, jt } from "ttag";
import ExternalLink from "src/ui/base/ExternalLink/ExternalLink";

export function useDepositVeVaultApproval(
  signer: Signer | undefined,
): UseMutationResult<
  ContractReceipt | undefined,
  unknown,
  Parameters<MockERC20["approve"]>
> {

  const toastIdRef = useRef<string>();

  return useSmartContractTransaction(
    fdtEthLpTokenContract,
    "approve",
    signer,
    {
      onError: (e) => {
        toast.error(e.message, {
          id: toastIdRef.current,
        });
      },
      onTransactionSubmitted: (tx) => {
        const etherscanLink = (
          // TODO: make the toasts look pretty in fiat style
          <ExternalLink
            href={`${ETHERSCAN_TRANSACTION_DOMAIN}/${tx.hash}`}
            text={t`View on etherscan`}
            className="text-fiatWhite"
          />
        );

        const message = (
          <div>{jt`Approving... ${etherscanLink}`}</div>
        );

        toastIdRef.current = toast.loading(message);
      },
      onTransactionMined: () => {
        toast.success(t`Approval successfull`, {
          id: toastIdRef.current,
        });
      },
    },
  );
}
