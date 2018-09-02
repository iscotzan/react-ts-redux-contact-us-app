import * as React from "react";
import * as enzyme from "enzyme";
import ContactSocial from "./ContactSocial";

it("checks if ContactSocial Component is defined", () => {
  let wrapper = enzyme.mount(<ContactSocial  />);
  expect(wrapper).toBeDefined();
});
