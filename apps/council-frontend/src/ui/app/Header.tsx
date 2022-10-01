import React, { ReactElement } from "react";
import { useWeb3React } from "@web3-react/core";
import { t } from "ttag";
import { WalletProfileButton } from "src/ui/wallet/ConnectWalletButton";
import ElementUrl from "src/urls";
import { Provider } from "@ethersproject/providers";
import ExternalLink from "src/ui/base/ExternalLink/ExternalLink";
import { Divider } from "src/ui/base/Divider";
import H2 from "src/ui/base/H2/H2";

interface HeaderProps {
  title?: string;
}

function Header(props: HeaderProps): ReactElement {
  const { title } = props;
  const { account, active, library } = useWeb3React<Provider>();

  return (
    <div className="flex w-full flex-col">
      <div className="flex w-full justify-between p-5">
        <div className="flex items-center space-x-3">
          <H2 className="text-3xl text-fiatWhite">{title}</H2>
        </div>
        <div className="flex items-center space-x-4 text-fiatWhite">
          {account ? (
            <div className="flex items-center">
              <span className="mr-8 hidden items-center gap-1 lg:flex">
                <ExternalLink
                  href={ElementUrl.DOCS}
                  text={t`Learn how to vote`}
                  className="text-fiatWhite"
                />
              </span>
            </div>
          ) : null}

          <WalletProfileButton
            account={account}
            provider={library}
            walletConnectionActive={active}
          />
        </div>
      </div>
      <Divider />
    </div>
  );
}

export default Header;
