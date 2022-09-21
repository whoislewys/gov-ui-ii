import { useWeb3React } from "@web3-react/core";
import classNames from "classnames";
import { Signer } from "ethers";
import { ReactElement } from "react";
import Button from "src/ui/base/Button/Button";
import { ButtonVariant } from "src/ui/base/Button/styles";
import SimpleDialog from "src/ui/base/Dialog/Dialog";
import TokenInput from "src/ui/base/Input/TokenInput";
import { useNumericInputValue } from "src/ui/base/Input/useNumericInputValue";
import { CURRENT_TIME_IN_SECONDS, ONE_WEEK_IN_SECONDS } from "src/base/time";
import {
  DEFAULT_NUMERIC_INPUT_OPTIONS,
  NumericValueOptions,
} from "src/ui/base/Input/validateNumericInput";
import { useVotingEscrowExtendLock } from "src/ui/contracts/vaults/useVotingEscrowExtendLock";
import { t } from "ttag";

export default function VotingEscrowWithdrawModal(props: {
  isOpen: boolean;
  onClose: () => void;
}): ReactElement {
  const { isOpen, onClose } = props;

  const { account, library } = useWeb3React();

  const weeksToExtendLockOptions = {
    ...DEFAULT_NUMERIC_INPUT_OPTIONS,
    max: 52,
  } as NumericValueOptions;
  const { value: weeksToExtendLock, setNumericValue: setWeeksToExtendLock } =
    useNumericInputValue(weeksToExtendLockOptions);

  const signer = account ? (library?.getSigner(account) as Signer) : undefined;
  const {
    mutate: extendLock,
    isLoading,
    isError,
  } = useVotingEscrowExtendLock(account, signer);

  // add CURRENT_TIME_IN_SECONDS to start lock time from right now
  const lockTime =
    parseInt(weeksToExtendLock) * ONE_WEEK_IN_SECONDS + CURRENT_TIME_IN_SECONDS;

  return (
    <SimpleDialog isOpen={isOpen} onClose={onClose}>
      <p className={classNames("text-fiatWhite mb-4 text-3xl font-semibold")}>
        Extend Lock
      </p>

      <p className={classNames("text-fiatWhite text-md mb-1")}>Weeks to extend lock</p>
      <TokenInput
        screenReaderLabel={t`Enter weeks to extend lock`}
        name={t`Enter weeks to extend lock`}
        id={"weeks-to-lock"}
        value={weeksToExtendLock}
        onChange={(value) => setWeeksToExtendLock(value)}
        placeholder={t`Enter weeks to extend lock`}
        className={classNames("mb-6")}
        showMaxButton
        maxValue={weeksToExtendLockOptions.max?.toString()}
        disabled={isLoading} // TODO: use loading state from approval as well
        error={isError}
      />

      {/* 
        Currently, the value that is being passed is 
        being set as the amount of weeks from today, not 
        the amount of weeks to increase the lock time 
        from the current value
      */}

      <Button
        variant={ButtonVariant.GRADIENT}
        onClick={() => extendLock([lockTime])}
      >
        Extend Lock
      </Button>
    </SimpleDialog>
  );
}
