import * as React from "react";
import * as enzyme from "enzyme";
import PortfolioHeader from "./PortfolioHeader";

it("checks if PortfolioHeader Component is defined", () => {
  const headerData = {
    name: "testName",
    subtitle: "testSubtitle"
  };
  const wrapper = enzyme.shallow(<PortfolioHeader headerData={headerData} />);
  expect(wrapper).toBeDefined();
});
