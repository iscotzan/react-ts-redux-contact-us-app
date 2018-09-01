import * as React from "react";
import { Row, Col } from "reactstrap";
import { StrengthDataProps } from "./SingleStrength/SingleStrength";
import SingleStrength from "./SingleStrength/SingleStrength";
const strengthsData = [
  {
    name: "Javascript"
  },
  {
    name: "Typescript"
  },
  {
    name: "React"
  },
  {
    name: "React Native"
  },
  {
    name: "Redux"
  },
  {
    name: "Angular"
  },
  {
    name: "AWS"
  },
  {
    name: "Azure"
  },
  {
    name: "SELECT * FROM SQL/noSQL"
  },
  {
    name: "NodeJS"
  },
  {
    name: "PHP"
  },
  {
    name: "HTML"
  },
  {
    name: "Sass/Scss/CSS"
  },
  {
    name: "Git"
  },
  {
    name: "jQuery"
  },
  {
    name: "Project Management"
  },
  {
    name: "Creative Skills"
  }
];
let strengthsPerCol;
let oddToTheLeft;
if (strengthsData.length % 2 === 0) {
  strengthsPerCol = strengthsData.length / 2;
  oddToTheLeft = 0;
} else {
  strengthsPerCol = Math.floor(strengthsData.length / 2);
  oddToTheLeft = 1;
}

let strengthDividedTwoCol: any = [[], []];
for (let i = 0; i < strengthsData.length; i++) {
  if (i < strengthsPerCol + oddToTheLeft) {
    strengthDividedTwoCol[0].push(strengthsData[i]);
  } else {
    strengthDividedTwoCol[1].push(strengthsData[i]);
  }
}
// export class Porfolio extends React.Component<IFormProps, IFormState> {
const ContactSocial = () => {
  return (
    <div className="text-left">
      <h4>
        <span className="pink">Strengths</span>:
      </h4>
      <Row>
        <Col className="col-6">
          <ul>
            {strengthDividedTwoCol[0].map(
              (singleStrengthData: StrengthDataProps) => {
                return (
                  <SingleStrength key={singleStrengthData.name} singleStrengthData={singleStrengthData} />
                );
              }
            )}
          </ul>
        </Col>
        <Col className="col-6">
          <ul>
            {strengthDividedTwoCol[1].map(
              (singleStrengthData: StrengthDataProps) => {
                return (
                  <SingleStrength key={singleStrengthData.name} singleStrengthData={singleStrengthData} />
                );
              }
            )}
          </ul>
        </Col>
      </Row>
    </div>
  );
};

export default ContactSocial;
