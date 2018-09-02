import reducer from "./contactUs.reducer";
import * as types from "./../constants/index";
let initialState = types.initialState.contactUs;

describe("contactUs reducer", () => {
  it("should handle UPDATE_FORM_FIELD", () => {
    expect(
      reducer(
        { ...initialState },
        {
          type: types.UPDATE_FORM_FIELD,
          payload: { name: "test" }
        }
      )
    ).toEqual({
      ...initialState,
      values: { ...initialState.values, name: "test" }
    });
  });

  it("should handle RESET_STATE", () => {
    expect(
      reducer(
        { ...initialState, values: { ...initialState.values, name: "test" } },
        {
          type: types.RESET_STATE
        }
      )
    ).toEqual({
      ...initialState
    });
  });
});
