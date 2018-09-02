import * as React from "react";
import * as enzyme from "enzyme";
import SingleStrength from "./SingleStrength";

it("checks if SingleStrength Component is defined", () => {
  const wrapper = enzyme.shallow(<SingleStrength singleStrengthData={{name: "test"}} />);
  expect(wrapper).toBeDefined();
});
