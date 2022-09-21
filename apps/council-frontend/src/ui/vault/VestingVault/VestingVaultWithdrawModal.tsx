import { useWeb3React } from "@web3-react/core";
import classNames from "classnames";
import { Signer } from "ethers";
import { ReactElement } from "react";
import Button from "src/ui/base/Button/Button";
import { ButtonVariant } from "src/ui/base/Button/styles";
import SimpleDialog from "src/ui/base/Dialog/Dialog";
import { useVestingVaultWithdraw } from "src/ui/contracts/vaults/useVestingVaultWithdraw";
import TokenInput from "src/ui/base/Input/TokenInput";
import { t } from "ttag";
import {
  DEFAULT_NUMERIC_INPUT_OPTIONS,
  NumericValueOptions,
} from "src/ui/base/Input/validateNumericInput";
import { useNumericInputValue } from "src/ui/base/Input/useNumericInputValue";
import { parseEther } from "ethers/lib/utils";

export default function VestingVaultWithdrawModal(props: {
  isOpen: boolean;
  onClose: () => void;
}): ReactElement {
  const { isOpen, onClose } = props;

  const { account, library } = useWeb3React();
  const signer = account ? (library?.getSigner(account) as Signer) : undefined;
  const {
    mutate: withdraw,
    isLoading,
    isError,
  } = useVestingVaultWithdraw(signer);

  const recipient = account || ''

  const withdrawAmountOptions = {
    ...DEFAULT_NUMERIC_INPUT_OPTIONS,
    max: 999969420, // TODO: use user's balance to determine this dynamically. i guess in a useeffect?
  } as NumericValueOptions;
  const { value: withdrawAmount, setNumericValue: setLockAmount } =
    useNumericInputValue(withdrawAmountOptions);
  const withdrawAmountFixedPoint = parseEther(withdrawAmount === "" ? "0" : withdrawAmount)

  return (
    <SimpleDialog isOpen={isOpen} onClose={onClose}>
      <p className={classNames("text-fiatWhite mb-4 text-3xl font-semibold")}>
        Withdraw
      </p>
      
      <p className={classNames("text-fiatWhite text-md mb-1")}>Amount</p>
      <TokenInput
        screenReaderLabel={t`Enter amount to withdraw`}
        name={t`Enter amount to withdraw`}
        id={"amount-to-withdraw"}
        value={withdrawAmount}
        onChange={(value) => setLockAmount(value)}
        placeholder={t`Enter amount to withdraw`}
        className={classNames("mb-4")}
        showMaxButton
        maxValue={withdrawAmountOptions.max?.toString()} // TODO: fetch mnax from users balance of fdt/eth lp toks
        disabled={isLoading} // TODO: use loading state from approval as well
        error={isError}
      />

      <Button
        variant={ButtonVariant.GRADIENT}
        onClick={() => {console.log(12, withdrawAmountFixedPoint, recipient); withdraw([withdrawAmountFixedPoint, recipient])}} //TODO: move this to a seperate method and close modal after loading completes
      >
        Withdraw
      </Button>
    </SimpleDialog>
  );
}
