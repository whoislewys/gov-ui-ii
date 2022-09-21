import { assertNever } from "@elementfi/base";
import classNames from "classnames";

export enum ButtonSize {
  SMALL = "SMALL",
  MEDIUM = "MEDIUM",
  LARGE = "LARGE",
  AUTO = "AUTO",
}

// TODO: include padding?
const buttonSizes: Record<ButtonSize, string> = {
  [ButtonSize.SMALL]: classNames("h-8"),
  [ButtonSize.MEDIUM]: classNames("h-12"),
  [ButtonSize.LARGE]: classNames("h-16"),
  [ButtonSize.AUTO]: classNames("h-auto"),
};

export interface ButtonStyles {
  variant?: ButtonVariant;
  size?: ButtonSize;
  round?: boolean;
  fill?: boolean;
  disabled?: boolean;
  error?: boolean;
}

export enum ButtonVariant {
  GRADIENT = "gradient",
  PRIMARY = "primary",
  SECONDARY = "secondary",
  DANGER = "danger",
  WHITE = "white",
  BLACK = "black",
  OUTLINE_WHITE = "outlineWhite",
  OUTLINE_BLUE = "outlineBlue",
  OUTLINE_LAVENDER = "outlineLavender",
  MINIMAL = "minimal",
  PALE = "paleLily",
  REWARD = "reward",
  DARK_GRAY = "darkGray",
  HACKER_SKY = "hackersky",
}

export function getButtonClass({
  variant = ButtonVariant.PRIMARY,
  size = ButtonSize.MEDIUM,
  fill = false,
  round = false,
  disabled = false,
  error = false,
}: ButtonStyles): string {
  const buttonStyle = classNames(
    getHeight(size),
    getTextColor(variant),
    getShadow(variant),
    getBackground(variant, error),
    getBorder(variant),
    getBorderRadius(round),
    "inline-flex",
    "items-center",
    "px-4",
    "py-3",
    "leading-4",
    "font-bold",
    "focus:outline-none",
    "focus:ring-2",
    "focus:ring-fiatLavender",
    { "flex-1": fill, "pointer-events-none": disabled, "opacity-50": disabled },
  );

  return buttonStyle;
}

function getHeight(size: ButtonSize): string {
  return buttonSizes[size];
}

function getShadow(variant: ButtonVariant): string | undefined {
  return variant === ButtonVariant.GRADIENT
    ? classNames("shadow-md", "hover:shadow-none")
    : classNames("shadow", "hover:shadow-none");
}

function getBackground(
  variant: ButtonVariant,
  error: boolean,
): string | undefined {
  switch (variant) {
    case ButtonVariant.PRIMARY:
      return !error
        ? classNames("bg-fiatDarkGray", "hover:bg-fiatDarkGray-dark")
        : classNames("bg-red-500", "hover:bg-red-700");

    case ButtonVariant.SECONDARY:
      return classNames("bg-fiatLightGray", "hover:bg-fiatLightGray-dark");

    case ButtonVariant.DANGER:
      return classNames("bg-statusRed", "hover:bg-red-800");

    case ButtonVariant.GRADIENT:
      return classNames(
        "bg-gradient-to-r",
        "from-fiatPurple",
        "to-fiatTangerine",
        "hover:from-fiatPurple",
        "hover:to-fiatTangerine",
      );

    case ButtonVariant.MINIMAL:
      return classNames("hover:bg-fiatLightGray-dark");

    case ButtonVariant.BLACK:
      return classNames("bg-fiatBlack", "hover:bg-fiatBlack-dark");

    case ButtonVariant.OUTLINE_WHITE:
      return classNames(
        "bg-transparent",
        "hover:bg-white",
        "hover:bg-opacity-20",
      );

    case ButtonVariant.OUTLINE_BLUE:
      return classNames("bg-transparent", "hover:bg-blue-100");

    case ButtonVariant.OUTLINE_LAVENDER:
      return classNames(
        "bg-transparent",
        "hover:bg-fiatLightGray-dark",
      );

    case ButtonVariant.WHITE:
      return classNames("bg-white", "hover:bg-opacity-80");

    case ButtonVariant.PALE:
      return classNames("bg-paleLily", "hover:bg-paleLily-dark");

    case ButtonVariant.REWARD:
      return classNames(
        "bg-gradient-to-b",
        "from-zinc-500/20",
        "to-brandLightBlue",
        "hover:from-brandLightBlue",
      );
    case ButtonVariant.DARK_GRAY:
      return classNames("bg-fiatDarkGray", "disabled:bg-fiatDarkGray", "disabled:opacity-100");
    case ButtonVariant.HACKER_SKY:
      return classNames("bg-hackerSky");

    default: {
      assertNever(variant);
    }
  }
}

function getTextColor(variant: ButtonVariant): string {
  switch (variant) {
    case ButtonVariant.DANGER:
      return classNames("text-deepRed", "hover:text-statusRed");
    case ButtonVariant.PRIMARY:
    case ButtonVariant.OUTLINE_WHITE:
    case ButtonVariant.OUTLINE_LAVENDER:
    case ButtonVariant.GRADIENT:
    case ButtonVariant.REWARD:
    case ButtonVariant.BLACK:
      return classNames("text-fiatWhite");
    case ButtonVariant.SECONDARY:
    case ButtonVariant.MINIMAL:
    case ButtonVariant.OUTLINE_BLUE:
      return classNames("text-fiatWhite");
    case ButtonVariant.WHITE:
    case ButtonVariant.DARK_GRAY:
    case ButtonVariant.PALE:
      return classNames("text-fiatWhite", "disabled:text-opacity-50");
    case ButtonVariant.HACKER_SKY:
      return classNames("text-fiatDarkGray");

    default: {
      assertNever(variant);
      return classNames("text-fiatWhite");
    }
  }
}

function getBorder(variant: ButtonVariant) {
  if (variant === ButtonVariant.OUTLINE_WHITE) {
    return "border border-white";
  }

  if (variant === ButtonVariant.OUTLINE_BLUE) {
    return "border border-brandDarkBlue-dark";
  }

  if (variant === ButtonVariant.OUTLINE_LAVENDER) {
    return "border border-fiatLavender";
  }

  return null;
}

function getBorderRadius(round: boolean) {
  if (round) {
    return classNames("rounded-full");
  }
  return classNames("rounded-xl");
}
