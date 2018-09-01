import * as React from "react";
import { Row, Col } from "reactstrap";
import {
  SocialButtonDataProps
} from "./SingleSocialButton/SingleSocialButton";
import SingleSocialButton from "./SingleSocialButton/SingleSocialButton";
const socialButtonsData = [
  {
    link: "https://www.linkedin.com/in/ori-iscovici/",
    iconClassName: "fab fa-linkedin-in",
    buttonText: "LinkedIn"
  },
  {
    link: "https://github.com/iscotzan",
    iconClassName: "fab fa-github",
    buttonText: "GitHub"
  },
  {
    link: "https://www.freecodecamp.org/iscotzan",
    iconClassName: "fab fa-free-code-camp",
    buttonText: "freeCodeCamp"
  },
  {
    link: "https://codepen.io/Iscotzan/",
    iconClassName: "fab fa-codepen",
    buttonText: "CodePen"
  }
];
// export class Porfolio extends React.Component<IFormProps, IFormState> {
const ContactSocial = () => {
  return (
    <Row className="text-center">
      <Col md={{ size: 6, offset: 3 }}>
        {socialButtonsData.map((singleButtonData: SocialButtonDataProps) => {
          return <SingleSocialButton key={singleButtonData.buttonText} buttonData={singleButtonData} />;
        })}
      </Col>{" "}
      <Col md={{ size: 5, offset: 1 }} className="align-self-center" />{" "}
    </Row>
  );
};

export default ContactSocial;
