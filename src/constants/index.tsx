// src/constants/index.tsx

export const INCREMENT_ENTHUSIASM = "INCREMENT_ENTHUSIASM";
export type INCREMENT_ENTHUSIASM = typeof INCREMENT_ENTHUSIASM;

export const DECREMENT_ENTHUSIASM = "DECREMENT_ENTHUSIASM";
export type DECREMENT_ENTHUSIASM = typeof DECREMENT_ENTHUSIASM;

export const UPDATE_FORM_FIELD = "UPDATE_FORM_FIELD";
export type UPDATE_FORM_FIELD = typeof UPDATE_FORM_FIELD;

export const RESET_STATE = "RESET_STATE";
export type RESET_STATE = typeof RESET_STATE;

export const initialState = {
  enthusiasm: {
    languageName: "Joe Schmoe",
    enthusiasmLevel: 1
  },
  contactUs: {
    values: {
      name: "",
      email: "",
      reason: "",
      notes: ""
    }
  }
};
