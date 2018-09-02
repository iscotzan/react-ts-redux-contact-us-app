import * as React from "react";
import * as enzyme from "enzyme";
import { Form } from "./Form";

it("checks if Form Component is defined", () => {
  const wrapper = enzyme.shallow(
    <Form
      action="https://google.com"
      fields={{}}
      formValues={{}}
      onFieldUpdate={() => {}}
      render={() => "test"}
    />
  );

  expect(wrapper).toBeDefined();
});
