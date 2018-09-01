import * as React from "react";
import "./FooterStyle.css";
export interface IProps {
  children?: React.ReactNode;
}

export const Footer: React.SFC<IProps> = () => {
  return (
    <div className="footerWrapper">
      Created with <span className={"hvr-grow-rotate"}>☕</span>,{" "}
      <span className={"hvr-buzz-out"}>🎵</span> &{" "}
      <span className={"hvr-pulse-grow"}>❤</span> by Ori Iscovici
    </div>
  );
};
