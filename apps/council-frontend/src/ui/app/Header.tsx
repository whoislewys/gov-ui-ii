import React, { ReactElement } from "react";
import { useWeb3React } from "@web3-react/core";
import { t } from "ttag";
import { WalletProfileButton } from "src/ui/wallet/ConnectWalletButton";
import { useGasPrice } from "src/ui/ethereum/useGasPrice";
import ElementUrl from "src/urls";
import GasIcon from "src/ui/base/svg/GasIcon";
import { useDeposited } from "src/ui/base/lockingVault/useDeposited";
import {
  ElementIconCircle,
  IconSize,
} from "src/ui/base/ElementIconCircle/ElementIconCircle";
import Tooltip from "src/ui/base/Tooltip/Tooltip";
import { TooltipDefinition } from "src/ui/voting/tooltipDefinitions";
import { Provider } from "@ethersproject/providers";
import ExternalLink from "src/ui/base/ExternalLink/ExternalLink";
import { Divider } from "src/ui/base/Divider";
import H2 from "src/ui/base/H2/H2";

const GAS_URL = "https://www.etherchain.org/tools/gasnow";

interface HeaderProps {
  title?: string;
}

function Header(props: HeaderProps): ReactElement {
  const { title } = props;
  const { account, active, library } = useWeb3React<Provider>();
  const { data: gasPrice } = useGasPrice();
  const amountDeposited = useDeposited(account) || "0";
  const formattedAmountDeposited = parseFloat(amountDeposited).toFixed(2);

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

              <ExternalLink
                href={GAS_URL}
                className="text-fiatWhite mr-8 flex items-center"
                showIcon={false}
              >
                <GasIcon className="fill-fiatLavender h-5 w-5" />
                <span className="font-bold">
                  {gasPrice?.recommendedBaseFee || 0.0}
                </span>
              </ExternalLink>

                {/*
              <span className="text-fiatWhite mr-8 flex items-center gap-2 font-bold">
                <ElementIconCircle size={IconSize.MEDIUM} />
                  {formattedAmountDeposited}
                  <span className="hidden lg:inline"> FDT</span>
                </span>
              </span>
                */}
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
