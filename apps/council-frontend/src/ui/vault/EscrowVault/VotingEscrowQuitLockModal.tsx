import { useWeb3React } from "@web3-react/core";
import classNames from "classnames";
import { Signer } from "ethers";
import { ReactElement } from "react";
import Button from "src/ui/base/Button/Button";
import { ButtonVariant } from "src/ui/base/Button/styles";
import SimpleDialog from "src/ui/base/Dialog/Dialog";
import { useVotingEscrowQuitLock } from "src/ui/contracts/vaults/useVotingEscrowQuitLock";

export default function VotingEscrowQuitLockModal(props: {
  isOpen: boolean;
  onClose: () => void;
}): ReactElement {
  const { isOpen, onClose } = props;

  const { account, library } = useWeb3React();
  const signer = account ? (library?.getSigner(account) as Signer) : undefined;

  const {
    mutate: quitLock,
  } = useVotingEscrowQuitLock(account, signer);

  return (
    <SimpleDialog isOpen={isOpen} onClose={onClose}>
      <p className={classNames("text-fiatWhite mb-4 text-3xl font-semibold")}>
        Quit Lock
      </p>
      <p className={classNames("text-fiatWhite mb-4")}>
        Are you sure you want to quit lock? You will lose all voting power
      </p>

      <Button
        variant={ButtonVariant.GRADIENT}
        onClick={() => quitLock([])}
      >
        Quit Lock
      </Button>
    </SimpleDialog>
  );
}
