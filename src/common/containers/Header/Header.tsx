import * as React from "react";
export interface IProps {
  children?: React.ReactNode;
}

// function Header({children}: IProps) {

export const Header: React.SFC<IProps> = () => {
  return <div className="headerWrapper">Header</div>;
};

// export default Header;
