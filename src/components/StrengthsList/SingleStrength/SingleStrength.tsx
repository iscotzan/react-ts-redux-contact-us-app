import * as React from "react";

export interface StrengthDataProps {
  name: string;
}

export interface StrengthProps {
  singleStrengthData: StrengthDataProps;
}

const SingleStrength = (props: StrengthProps) => {
  const { name } = props.singleStrengthData;
  return (
    <li>
      {" "}
      <span className="blue">{name}</span>{" "}
    </li>
  );
};
export default SingleStrength;
