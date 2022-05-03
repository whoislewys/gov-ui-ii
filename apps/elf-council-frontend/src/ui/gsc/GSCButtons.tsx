import React, { ReactElement, useRef, useState } from "react";

import { Signer } from "ethers";

import { t } from "ttag";

import { ButtonVariant } from "src/ui/base/Button/styles";
import Button from "src/ui/base/Button/Button";
import Dialog from "src/ui/base/Dialog/Dialog";
import { useJoinGSC } from "./useJoinGSC";
import { useLeaveGSC } from "./useLeaveGSC";
import toast from "react-hot-toast";
import ExternalLink from "src/ui/base/ExternalLink/ExternalLink";
import { ETHERSCAN_TRANSACTION_DOMAIN } from "src/elf-etherscan/domain";

interface GSCButtonProps {
  account: string | null | undefined;
  signer: Signer | undefined;
  disabled?: boolean;
}

export function JoinGSCButton({
  account,
  signer,
  disabled,
}: GSCButtonProps): ReactElement {
  const toastIdRef = useRef<string>();
  const handleJoin = useJoinGSC(account, signer, {
    onError: (e) => {
      toast.error(e.message, { id: toastIdRef.current });
    },
    onTransactionSubmitted: (tx) => {
      const etherscanLink = (
        <ExternalLink
          href={`${ETHERSCAN_TRANSACTION_DOMAIN}/${tx.hash}`}
          text={t`View on etherscan`}
          className="text-principalRoyalBlue"
        />
      );

      const message = (
        <div>{t`Confirming transaction... ${etherscanLink}`}</div>
      );

      toastIdRef.current = toast.loading(message);
    },
    onTransactionMined: () => {
      toast.success(t`Transaction successfully confirmed`, {
        id: toastIdRef.current,
      });

      setDialogOpen(false);
    },
  });

  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <Button
        variant={ButtonVariant.PRIMARY}
        disabled={disabled}
        onClick={() => setDialogOpen(true)}
      >{t`Join`}</Button>

      <Dialog isOpen={dialogOpen} onClose={() => setDialogOpen(false)}>
        <div>
          <div className="text-principalRoyalBlue mb-4 text-lg font-bold">
            {t`Join Confirmation`}
          </div>
          <div className="text-principalRoyalBlue mb-8 text-sm">
            {t`Are you sure you want to join the the GSC? This means that you will
            be responsible for the rights and responsibilities of a GSC member
            and held accountable by Element DAO from this moment forward.`}
          </div>
          <div className="flex w-full justify-end">
            <Button
              className="mr-2"
              variant={ButtonVariant.OUTLINE_BLUE}
              onClick={() => setDialogOpen(false)}
            >{t`Cancel`}</Button>
            <Button
              variant={ButtonVariant.GRADIENT}
              onClick={() => handleJoin()}
            >{t`Join`}</Button>
          </div>
        </div>
      </Dialog>
    </>
  );
}

export function LeaveGSCButton({
  account,
  signer,
}: GSCButtonProps): ReactElement {
  const toastIdRef = useRef<string>();

  const handleLeave = useLeaveGSC(account, signer, {
    onError: (e) => {
      toast.error(e.message, { id: toastIdRef.current });
    },
    onTransactionSubmitted: (tx) => {
      const etherscanLink = (
        <ExternalLink
          href={`${ETHERSCAN_TRANSACTION_DOMAIN}/${tx.hash}`}
          text={t`View on etherscan`}
          className="text-principalRoyalBlue"
        />
      );

      const message = (
        <div>{t`Confirming transaction... ${etherscanLink}`}</div>
      );

      toastIdRef.current = toast.loading(message);
    },
    onTransactionMined: () => {
      toast.success(t`Transaction successfully confirmed`, {
        id: toastIdRef.current,
      });

      setDialogOpen(false);
    },
  });

  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setDialogOpen(true)}>{t`Leave`}</Button>

      <Dialog isOpen={dialogOpen} onClose={() => setDialogOpen(false)}>
        <div>
          <div className="text-principalRoyalBlue mb-4 text-lg font-bold">
            {t`Leave Confirmation`}
          </div>
          <div className="text-principalRoyalBlue mb-8 text-sm">
            {t`Are you sure you want to leave the the GSC? By leaving the GSC, you
            will forfeit the benefits, roles, and responsibilities of GSC
            membership, as outlined in the GSC Membership forum post.You will
            not be able to rejoin without becoming eligible. To learn more about
            what makes you eligible read more here.`}
          </div>
          <div className="flex w-full justify-end">
            <Button
              className="mr-2"
              variant={ButtonVariant.OUTLINE_BLUE}
              onClick={() => setDialogOpen(false)}
            >{t`Cancel`}</Button>
            <Button
              variant={ButtonVariant.GRADIENT}
              onClick={() => handleLeave()}
            >{t`Confirm`}</Button>
          </div>
        </div>
      </Dialog>
    </>
  );
}