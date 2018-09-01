import * as React from "react";
import * as enzyme from "enzyme";
import Hello from "./Hello";

it("renders the correct text when no enthusiasm level is given", () => {
  const hello = enzyme.shallow(<Hello name="Daniel" />);
  expect(hello.find(".greeting").text()).toEqual("Hello Daniel!");
});

it("renders the correct text with an explicit enthusiasm of 1", () => {
  const hello = enzyme.shallow(<Hello name="Daniel" enthusiasmLevel={1} />);
  expect(hello.find(".greeting").text()).toEqual("Hello Daniel!");
});

it("renders the correct text with an explicit enthusiasm level of 5", () => {
  const hello = enzyme.shallow(<Hello name="Daniel" enthusiasmLevel={5} />);
  expect(hello.find(".greeting").text()).toEqual("Hello Daniel!!!!!");
});

it("throws when the enthusiasm level is 0", () => {
  expect(() => {
    enzyme.shallow(<Hello name="Daniel" enthusiasmLevel={0} />);
  }).toThrow();
});

it("throws when the enthusiasm level is negative", () => {
  expect(() => {
    enzyme.shallow(<Hello name="Daniel" enthusiasmLevel={-1} />);
  }).toThrow();
});

// it('calls onClick event on click of a board square', () =>{
//   const onClick = jest.fn();
//   let wrapper = enzyme.mount(<Hello name={"johnson"}/>);
//   wrapper.find('button').first().simulate('click');
//   expect(onClick).toBeCalledWith(0)
// })
// it("calls the onIncrement when clicking the onIncrement button", () => {
//   const mock_fn = jest.fn();
//   const wrapper = enzyme.shallow(<Hello name={"johnson"}/>)
//   const button = wrapper.find(".incrementButton");
//   expect(() => {
//     button.simulate("click").
//   })
// });
// it("calls the onDecrement when clicking the onDecrement button", () => {
//   const mock_fn = jest.fn();
//   const wrapper = enzyme.shallow(<Hello name={"johnson"}/>)
//   const button = wrapper.find(".decrementButton");
//   expect(() => {
//     button.simulate("click").
//   })
// });
