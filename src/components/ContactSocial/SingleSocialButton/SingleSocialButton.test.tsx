import * as React from "react";
import * as enzyme from "enzyme";
import SingleSocialButton from "./SingleSocialButton";

it("checks if SingleSocialButton is defined", () => {
  const buttonData = {
    iconClassName: "fa-test",
    buttonText: "testText",
    link: "testLink"
  };
  let wrapper = enzyme.mount(<SingleSocialButton buttonData={buttonData} />);
  expect(wrapper).toBeDefined();
});
