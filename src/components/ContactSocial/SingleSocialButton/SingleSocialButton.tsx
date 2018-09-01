import * as React from "react";
import { Button } from "reactstrap";

export interface SocialButtonDataProps {
  link: string;
  iconClassName: string;
  buttonText: string;
}

export interface SocialButtonProps {
  buttonData: SocialButtonDataProps;
}

const SingleSocialButton = (props: SocialButtonProps) => {
  const { link, iconClassName, buttonText } = props.buttonData;
  return (
    <Button className="btn-dark" block>
      <a className="h5" href={link} target="_blank">
        <i className={iconClassName} /> {buttonText}
      </a>
    </Button>
  );
};
export default SingleSocialButton;
