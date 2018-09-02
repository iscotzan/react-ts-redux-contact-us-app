import * as React from "react";
import "./PageNotFound.scss";
export interface IProps {
  children?: React.ReactNode;
}

// function PageNotFound({children}: IProps) {

export const PageNotFound: React.SFC<IProps> = () => {
  return (
    <div className="pageNotFoundWrapper">
      <h1 className="retroshadow">404: Page Not Found</h1>
    </div>
  );
};

// export default PageNotFound;
