import * as React from "react";
import * as enzyme from "enzyme";
import PortfolioCard from "./PortfolioCard";

it("checks if PortfolioCard Component is defined", () => {
  const projectData = {
    link: "testLink",
    imageSrc: "test image source",
    imageAlt: "imageAltTest",
    Title: "testTitle",
    TextContent: "testContent"
  };
  const wrapper = enzyme.shallow(<PortfolioCard projectData={projectData} />);
  expect(wrapper).toBeDefined();
});
