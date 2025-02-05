import { UseSmartContractTransactionOptions } from "@elementfi/react-query-typechain/src/hooks/useSmartContractTransaction/useSmartContractTransaction";
import { Contract } from "ethers";
import toast from "react-hot-toast";
import { ETHERSCAN_TRANSACTION_DOMAIN } from "src/integrations/etherscan";
import ExternalLink from "src/ui/base/ExternalLink/ExternalLink";
import { jt, t } from "ttag";

export function buildToastTransactionConfig(
  toastIdRef: React.MutableRefObject<string | undefined>,
): UseSmartContractTransactionOptions<Contract, string> {
  return {
    onError: (e) => {
      toast.error(e.message, { id: toastIdRef.current });
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
        <div>{jt`Confirming transaction... ${etherscanLink}`}</div>
      );

      toastIdRef.current = toast.loading(message);
    },
    onTransactionMined: () => {
      toast.success(t`Transaction successfully confirmed`, {
        id: toastIdRef.current,
      });
    },
  };
}
