import Card from "src/ui/base/Card/Card";
import React, { ReactElement } from "react";
import classNames from "classnames";

interface ActionCardProps {
  onClick?: (arg: any) => void;
  text: string
  icon: React.ReactNode
  className?: string
}

function ActionCard(props: ActionCardProps): ReactElement {
  const {
    onClick,
    text,
    icon,
    className,
  } = props;

  return (
    <Card 
      interactive={true} 
      onClick={onClick}
      className={classNames("text-white flex w-full place-content-center", className)}
    >
      <div className="h-5 w-5 flex-shrink-0 mr-2">{icon}</div>
      <p className="font-medium text-sm">{text}</p>
    </Card>
  )
}

export default ActionCard;