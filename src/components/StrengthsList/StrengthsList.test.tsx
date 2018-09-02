import * as React from "react";
import * as enzyme from "enzyme";
import StrengthsList from "./StrengthsList";

it("checks if StrengthsList Component is defined", () => {
  const wrapper = enzyme.shallow(<StrengthsList />);
  expect(wrapper).toBeDefined();
});
