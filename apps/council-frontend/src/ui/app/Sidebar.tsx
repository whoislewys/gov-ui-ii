import React, { Fragment, ReactElement, useCallback, useState } from "react";
import {
  MenuAlt4Icon,
  ExternalLinkIcon,
  HomeIcon,
  LibraryIcon,
  ShieldCheckIcon,
  PencilAltIcon,
  UserGroupIcon,
} from "@heroicons/react/solid";
import Link from "next/link";
import { useRouter, NextRouter } from "next/router";
import classNames from "classnames";
import { t } from "ttag";
import AnchorButton from "src/ui/base/Button/AnchorButton";
import FiatIcon, { IconSize } from "src/ui/base/svg/FiatIcon/FiatIcon";
import { ButtonVariant } from "src/ui/base/Button/styles";
import { MerkleRewardType, useMerkleInfo } from "src/ui/merkle/useMerkleInfo";
import { useUnclaimedAirdrop } from "src/ui/airdrop/useUnclaimedAirdrop";
import ElementUrl from "src/urls";
import PoweredByCouncil from "src/ui/base/svg/PoweredByCouncil";
import CloseButton from "src/ui/base/Dialog/CloseButton";
import { Divider } from "src/ui/base/Divider";

interface SidebarProps {
  account: string | null | undefined;
}

export default function Sidebar(props: SidebarProps): ReactElement {
  const { account } = props;
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const { data: merkleInfo } = useMerkleInfo(account, MerkleRewardType.RETRO);
  const unclaimedAirdrop = useUnclaimedAirdrop(account, merkleInfo);

  const onOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const getSidebarIconColorForLink = (link: string) => {
    const isActive = router.pathname === link;
    return isActive ? "text-fiatWhite" : "text-fiatLavender";
  };

  return (
    <Fragment>
      <div className="flex">
        <div>
          <button
            className="fixed top-0 left-0 flex h-12 w-12 cursor-pointer items-center justify-center rounded-md p-0 hover:shadow md:hidden"
            onClick={onOpen}
          >
            <MenuAlt4Icon className="h-6 w-6" />
          </button>
          <div
            className={classNames(
              { "-translate-x-full": !isOpen },
              "fixed top-0 left-0 z-10 flex h-full w-full transform-gpu flex-col items-center justify-between py-14 transition-all duration-300 ease-in-out md:w-60 md:translate-x-0",
            )}
          >
            <div className="w-full">
              <div className="mt-1 flex justify-around py-3">
                <FiatIcon size={IconSize.LARGE} title="FiatDAO" />
                <CloseButton
                  onClose={onClose}
                  className="absolute top-0 right-0 md:hidden"
                  iconClassName="text-black"
                />
              </div>
              <div className="mt-16 space-y-6 overflow-hidden py-1">
                <SidebarLink
                  link="/"
                  label={t`Overview`}
                  router={router}
                  icon={
                    <HomeIcon
                      className={`${getSidebarIconColorForLink(
                        "/",
                      )} h-4 w-4 flex-shrink-0`}
                    />
                  }
                />
                <SidebarLink
                  link="/proposals"
                  label={t`Proposals`}
                  router={router}
                  icon={
                    <PencilAltIcon
                      className={`${getSidebarIconColorForLink(
                        "/proposals",
                      )} h-4 w-4 flex-shrink-0`}
                    />
                  }
                />
                <SidebarLink
                  link="/delegate"
                  label={t`Delegate`}
                  router={router}
                  icon={
                    <UserGroupIcon
                      className={`${getSidebarIconColorForLink(
                        "/delegate",
                      )} h-4 w-4 flex-shrink-0`}
                    />
                  }
                />
                <SidebarLink
                  link="/gsc"
                  label={t`GSC`}
                  router={router}
                  icon={
                    <LibraryIcon
                      className={`${getSidebarIconColorForLink(
                        "/gsc",
                      )} h-4 w-4 flex-shrink-0`}
                    />
                  }
                />
                <SidebarLink
                  link="/vaults"
                  label={t`Vaults`}
                  router={router}
                  icon={
                    <ShieldCheckIcon
                      className={`${getSidebarIconColorForLink(
                        "/vaults",
                      )} h-4 w-4 flex-shrink-0`}
                    />
                  }
                />
                <SidebarLinkExternal link={ElementUrl.FORUM} label={t`Forum`} />
                <SidebarLinkExternal link={ElementUrl.DOCS} label={t`Resources`} />

                {!!Number(unclaimedAirdrop) && <AirdropLink link="/airdrop" />}
              </div>
            </div>
          </div>
        </div>
        <Divider vertical={true}/>
      </div>
    </Fragment>
  );
}

interface SidebarLinkExternalProps {
  link: string;
  label: string;
}

interface AirdropLinkProps {
  link: string;
}
function AirdropLink(props: AirdropLinkProps): ReactElement {
  const { link } = props;

  return (
    <div className="text-center">
      <Link href={link} passHref>
        <AnchorButton variant={ButtonVariant.GRADIENT}>
          {t`Claim ELFI`}
        </AnchorButton>
      </Link>
    </div>
  );
}

interface SidebarLinkProps {
  className?: string;
  link: string;
  label: string;
  router: NextRouter;
  icon?: ReactElement;
}

function SidebarLink(props: SidebarLinkProps): ReactElement {
  const { className, link, label, router, icon } = props;

  const isActive = router.pathname === link;

  /* const menuItemClassNames = isActive ? */

  return (
    <div className={classNames(className, "flex justify-center")}>
      <Link href={link}>
        {/* There's a big discussion about how awful the Link api is for a11y
      here: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/issues/402 the
      best thing to do for now is just ignore this rule when an anchor tag is
      the child of a Link since all a tags *should* have an href 🙁 */
        /* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a
          className={`hover:bg-fiatDarkGray-dark md:w-full ${
            isActive ? "bg-fiatDarkGray border-fiatLavender border-r-4" : ""
          }`}
        >
          <div
            className={classNames(
              "text-fiatLavender flex cursor-pointer items-center justify-start gap-2 px-2 py-3 md:relative md:left-[50%] md:translate-x-[-25%]",
              {
                "font-bold": isActive,
              },
            )}
          >
            {icon}
            <p className={isActive ? "text-fiatWhite" : ""}>{label}</p>
          </div>
        </a>
      </Link>
    </div>
  );
}

function SidebarLinkExternal(props: SidebarLinkExternalProps): ReactElement {
  const { link, label } = props;
  return (
    <div className="flex justify-center">
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className=" hover:bg-fiatDarkGray md:w-full"
      >
        <div className="text-fiatWhite flex cursor-pointer items-center justify-start gap-2 px-2 py-3 md:relative md:left-[50%] md:translate-x-[-25%]">
          <ExternalLinkIcon className="text-fiatWhite h-4 w-4 flex-shrink-0" />
          <p>{label}</p>
        </div>
      </a>
    </div>
  );
}
