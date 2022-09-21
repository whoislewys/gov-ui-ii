import { useWeb3React } from "@web3-react/core";
import classNames from "classnames";
import { constants, Signer, utils } from "ethers";
import { ReactElement } from "react";
import { addressesJson, FiatAddressesJsonFile } from "src/addresses";
import { CURRENT_TIME_IN_SECONDS, ONE_WEEK_IN_SECONDS } from "src/base/time";
import Button from "src/ui/base/Button/Button";
import { ButtonVariant } from "src/ui/base/Button/styles";
import SimpleDialog from "src/ui/base/Dialog/Dialog";
import TokenInput from "src/ui/base/Input/TokenInput";
import { useNumericInputValue } from "src/ui/base/Input/useNumericInputValue";
import {
  DEFAULT_NUMERIC_INPUT_OPTIONS,
  NumericValueOptions,
} from "src/ui/base/Input/validateNumericInput";
import { useDepositVeVault } from "src/ui/contracts/vaults/useDepositVeVault";
import { useDepositVeVaultApproval } from "src/ui/contracts/vaults/useDepositVeVaultApproval";
import { t } from "ttag";

export default function VotingEscrowDepositModal(props: {
  isOpen: boolean;
  onClose: () => void;
}): ReactElement {
  const { isOpen, onClose } = props;

  const { account, library } = useWeb3React();

  const weeksToLockOptions = {
    ...DEFAULT_NUMERIC_INPUT_OPTIONS,
    max: 52,
  } as NumericValueOptions;
  const { value: weeksToLock, setNumericValue: setWeeksToLock } =
    useNumericInputValue(weeksToLockOptions);

  const lockAmountOptions = {
    ...DEFAULT_NUMERIC_INPUT_OPTIONS,
    max: 999969420, // TODO: use user's balance to determine this dynamically. i guess in a useeffect?
  } as NumericValueOptions;
  const { value: lockAmount, setNumericValue: setLockAmount } =
    useNumericInputValue(lockAmountOptions);
  const lockAmountFixedPoint = utils.parseEther(lockAmount === "" ? "0" : lockAmount)

  const signer = account ? (library?.getSigner(account) as Signer) : undefined;
  const {
    mutate: depositVeVault,
    isLoading,
    isError,
    isSuccess,
  } = useDepositVeVault(account, signer);

  const { votingEscrow: votingEscrowAddress } = (
    addressesJson as FiatAddressesJsonFile
  ).addresses;

  const { mutate: depositVeVaultApproval } = useDepositVeVaultApproval(signer);

  const APPROVAL_AMOUNT = constants.MaxUint256;

  // add CURRENT_TIME_IN_SECONDS to start lock time from right now
  const lockTime =
    parseInt(weeksToLock) * ONE_WEEK_IN_SECONDS + CURRENT_TIME_IN_SECONDS;

  return (
    <SimpleDialog isOpen={isOpen} onClose={onClose}>
      <p className={classNames("text-fiatWhite mb-4 text-3xl font-semibold")}>
        Create Lock
      </p>

      <p className={classNames("text-fiatWhite text-md mb-1")}>Amount</p>
      <TokenInput
        screenReaderLabel={t`Enter amount to lock`}
        name={t`Enter amount to lock`}
        id={"amount-to-lock"}
        value={lockAmount}
        onChange={(value) => setLockAmount(value)}
        placeholder={t`Enter amount to lock`}
        className={classNames("mb-4")}
        showMaxButton
        maxValue={lockAmountOptions.max?.toString()} // TODO: fetch mnax from users balance of fdt/eth lp toks
        disabled={isLoading} // TODO: use loading state from approval as well
        error={isError}
      />

      <p className={classNames("text-fiatWhite text-md mb-1")}>Weeks to lock</p>
      <TokenInput
        screenReaderLabel={t`Enter weeks to lock`}
        name={t`Enter weeks to lock`}
        id={"weeks-to-lock"}
        value={weeksToLock}
        onChange={(value) => setWeeksToLock(value)}
        placeholder={t`Enter weeks to lock`}
        className={classNames("mb-6")}
        showMaxButton
        maxValue={weeksToLockOptions.max?.toString()}
        disabled={isLoading} // TODO: use loading state from approval as well
        error={isError}
      />

      {/*
        TODO: condense these 2 buttons into just 1 button
        (first it says approve, then create lock when approval exists)
      */}
      <Button
        variant={ButtonVariant.GRADIENT}
        onClick={() =>
          depositVeVaultApproval([votingEscrowAddress, APPROVAL_AMOUNT])
        }
        className={classNames("mr-4")}
      >
        Approve
      </Button>
      <Button
        variant={ButtonVariant.GRADIENT}
        onClick={() => depositVeVault([lockAmountFixedPoint, lockTime])}
      >
        Create Lock
      </Button>
    </SimpleDialog>
  );
}
