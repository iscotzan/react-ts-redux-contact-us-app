import * as React from "react";
import * as enzyme from "enzyme";
import ActionButton from "./actionButton";

it('calls onClick event on click of a board square', () =>{
  const onClick = jest.fn();
  let wrapper = enzyme.mount(<ActionButton className={"onIncrement"} buttonText={"test"} onClick={onClick} />);
  wrapper.find('button').simulate('click');
  expect(onClick).toHaveBeenCalled();
})