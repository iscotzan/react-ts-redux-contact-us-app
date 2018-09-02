import * as React from "react";
import * as enzyme from "enzyme";
import AboutSection from "./AboutSection";

it("checks if AboutSection Component is defined", () => {
  const wrapper = enzyme.shallow(<AboutSection guestName={"guestTest"} />);
  expect(wrapper).toBeDefined();
});
