import { ReactElement } from "react";
import classNames from "classnames";

export interface DividerProps {
  vertical?: boolean 
}

export function Divider({vertical = false}: DividerProps): ReactElement {

  return (
    <div
      className={classNames({
        "bg-dividerGray h-px w-full": !vertical,
        "bg-dividerGray w-px h-full": vertical
      })}
    />
  );
}
