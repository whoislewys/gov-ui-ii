import { useWeb3React } from "@web3-react/core";
import classNames from "classnames";
import { Signer } from "ethers";
import { ReactElement } from "react";
import Button from "src/ui/base/Button/Button";
import { ButtonVariant } from "src/ui/base/Button/styles";
import SimpleDialog from "src/ui/base/Dialog/Dialog";
import { useVotingEscrowWithdraw } from "src/ui/contracts/vaults/useVotingEscrowWithdraw";

export default function VotingEscrowWithdrawModal(props: {
  isOpen: boolean;
  onClose: () => void;
}): ReactElement {
  const { isOpen, onClose } = props;

  const { account, library } = useWeb3React();
  const signer = account ? (library?.getSigner(account) as Signer) : undefined;
  const {
    mutate: withdraw,
  } = useVotingEscrowWithdraw(account, signer);

  return (
    <SimpleDialog isOpen={isOpen} onClose={onClose}>
      <p className={classNames("text-fiatWhite mb-4 text-3xl font-semibold")}>
        Withdraw
      </p>
      <p className={classNames("text-fiatWhite mb-4")}>
        Are you sure you want to withdraw? You will lose all voting power
      </p>

      <Button
        variant={ButtonVariant.GRADIENT}
        onClick={() => withdraw([])} //TODO: move this to a seperate method and close modal after loading completes
      >
        Withdraw
      </Button>
    </SimpleDialog>
  );
}
