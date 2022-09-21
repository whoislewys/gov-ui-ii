// See: https://tailwindui.com/components/application-ui/layout/panels#component-415761fd4b5592742ec78ce4c638973e

import { ElementType, ReactElement } from "react";

import { assertNever } from "@elementfi/base";
import classNames from "classnames";

import { PolymorphicComponentProps } from "src/@types/helper";

export enum CardVariant {
  GRADIENT = "gradient",
  DARK_GRAY = "darkGray",
  BLUE = "blue",
  HACKER_SKY = "hackersky",
  BLACK = "fiatBlack",
}

export interface CardProps {
  variant?: CardVariant;
  interactive?: boolean;
  active?: boolean;
  noPadding?: boolean
}

type PolymorphicCardProps<C extends ElementType> = PolymorphicComponentProps<
  C,
  CardProps
>;

export default function Card<C extends ElementType = "div">({
  as,
  className,
  variant = CardVariant.DARK_GRAY,
  interactive = false,
  active = false,
  noPadding = false,
  children,
  ...tagProps
}: PolymorphicCardProps<C>): ReactElement {
  const cardClassName = classNames(
    getBackgroundColor(variant, active, interactive),
    "overflow-hidden rounded-xl",
    active ? "shadow-md" : "shadow",
    {
      "sm:p-6": !noPadding,
      "px-4": !noPadding,
      "py-5": !noPadding,
      "hover:shadow-md": interactive,
      "focus:ring-fiatLavender": interactive,
      "focus:ring-2": interactive,
    },
    className,
  );

  const Tag = as || (interactive ? "button" : "div");

  return (
    <Tag className={cardClassName} {...tagProps}>
      {children}
    </Tag>
  );
}

function getBackgroundColor(
  variant: CardVariant,
  active: boolean,
  interactive: boolean,
): string {
  if (active) {
    return "bg-fiatDarkGray";
  }

  switch (variant) {
    case CardVariant.BLUE:
      return "bg-gradient-to-br from-principalRoyalBlue via-yieldBlue to-principalRoyalBlue";
    case CardVariant.GRADIENT:
      return "bg-gradient-to-br from-fiatTangerine to-fiatPurple";
    case CardVariant.DARK_GRAY:
      return "bg-fiatDarkGray";
    case CardVariant.HACKER_SKY:
      return classNames("bg-hackerSky", { "hover:bg-white": interactive });
    case CardVariant.BLACK:
      return classNames("bg-fiatBlack");
    default:
      assertNever(variant);
      return "";
  }
}
