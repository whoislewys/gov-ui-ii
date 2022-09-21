import { JSXElementConstructor, ReactElement } from "react";
import { InheritableElementProps, PropsOf } from "src/@types/helper";
import { SVGComponentProps } from "src/ui/base/svg/types";
import SVG from "./FiatDaoIcon.svg";

export enum IconSize {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

export enum IconVariant {
  DARK = "dark",
  LIGHT = "light",
}

interface FiatIconProps extends SVGComponentProps {
  size?: IconSize;
  variant?: IconVariant;
}

export default function FiatIcon({
  size = IconSize.MEDIUM,
  variant = IconVariant.DARK,
  ...props
}: InheritableElementProps<"svg", FiatIconProps>): ReactElement {
  const Component = IconComponent[variant];
  return (
    <Component height={IconHeight[size]} width={IconWidth[size]} {...props} />
  );
}

const IconComponent: Record<
  IconVariant,
  JSXElementConstructor<PropsOf<"svg">>
> = {
  [IconVariant.DARK]: SVG,
  [IconVariant.LIGHT]: SVG, // SVGLight
};
const IconHeight = {
  [IconSize.SMALL]: "12",
  [IconSize.MEDIUM]: "24",
  [IconSize.LARGE]: "48",
};
const IconWidth = {
  [IconSize.SMALL]: "12",
  [IconSize.MEDIUM]: "24",
  [IconSize.LARGE]: "48",
};
