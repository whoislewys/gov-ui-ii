import classNames from "classnames";
import { ReactElement, ReactNode } from "react";

interface WarningLabelProps {
  className?: string;
  children?: ReactNode;
}

function WarningLabel({
  className,
  children,
}: WarningLabelProps): ReactElement {
  return (
    <div
      className={classNames(
        className,
        "bg-fiatLightGray text-fiatBlack flex items-center rounded-md text-sm font-bold leading-5",
      )}
    >
      {children}
    </div>
  );
}

export default WarningLabel;
