import * as React from "react";
export interface IProps {
  children: React.ReactNode;
  enable: boolean;
}

function EnableDisable({ children, enable }: IProps) {
  if (enable) {
    return <div>{children}</div>;
  }
  return;
}

export default EnableDisable;
