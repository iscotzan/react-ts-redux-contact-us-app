// import * as React from "react";
// import * as enzyme from "enzyme";

import reducer from "./enthusiasm.reducer";

// import * as actions from "./../actions/index";
import * as types from "./../constants/index";
let initialState = types.initialState.enthusiasm;
// let initialState = { "enthusiasmLevel": 1 };

describe("default test", () => {
  it("should return true", () => {
    expect(true).toEqual(true);
  });
});

describe("enthusiasm reducer", () => {
  it("should handle INCREMENT_ENTHUSIASM", () => {
    expect(
      reducer(
        { ...initialState },
        {
          type: types.INCREMENT_ENTHUSIASM
        }
      )
    ).toEqual({
      ...initialState,
      enthusiasmLevel: 2
    });
  });

  it("should handle DECREMENT_ENTHUSIASM", () => {
    expect(
      reducer(
        { ...initialState, enthusiasmLevel: 2 },
        {
          type: types.DECREMENT_ENTHUSIASM
        }
      )
    ).toEqual({
      ...initialState,
      enthusiasmLevel: 1
    });
  });
  it("should not reduce to less than 1 enthusiasmLevel", () => {
    expect(
      reducer(
        { ...initialState, enthusiasmLevel: 1 },
        {
          type: types.DECREMENT_ENTHUSIASM
        }
      )
    ).toEqual({
      ...initialState,
      enthusiasmLevel: 1
    });
  });
});
