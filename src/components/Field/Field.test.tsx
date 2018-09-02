import * as React from "react";
import * as enzyme from "enzyme";
import { Field } from "./Field";

it("checks if Field Component is defined", () => {
  let wrapper = enzyme.mount(<Field id="name"
  label="test"
  editor="textbox"
  value="test" />);
  expect(wrapper).toBeDefined();
});
