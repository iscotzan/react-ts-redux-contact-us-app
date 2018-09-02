import * as React from "react";
import * as enzyme from "enzyme";
import Portfolio from "./Portfolio";

it("checks if Portfolio Component is defined", () => {
  const wrapper = enzyme.shallow(<Portfolio />);
  expect(wrapper).toBeDefined();
});
