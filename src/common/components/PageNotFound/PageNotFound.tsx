import * as React from "react";
import "./PageNotFound.css";
export interface IProps {
  children?: React.ReactNode;
}

// function PageNotFound({children}: IProps) {

export const PageNotFound: React.SFC<IProps> = () => {
  return (
    <div className={"PageNotFoundWrapper"}>
      <code>{"{"}--<span>:++ 404 NOT FOUND ++:</span>--"{"}"}</code>
      {/* <code>{"404 NOT FOUND"}</code> */}
    </div>
  );
};

// export default PageNotFound;
