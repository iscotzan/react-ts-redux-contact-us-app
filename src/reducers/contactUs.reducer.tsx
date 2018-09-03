// src/reducers/index.tsx

import { ContactUsAction } from "../actions";
import { ContactUsState } from "../types/index";
import {
  UPDATE_FORM_FIELD,
  RESET_STATE,
  initialState
} from "../constants/index";

const contactus_initialState = initialState.contactUs;
export default function contactus(
  state: ContactUsState = contactus_initialState,
  action: ContactUsAction
) {
  //   console.log(state);
  switch (action.type) {
    case UPDATE_FORM_FIELD:
      //   console.log("update values: ", action.payload);
      return {
        ...state,
        values: { ...state.values, ...action.payload }
      };
    case RESET_STATE:
      //   console.log("update values: ", action.payload);
      return {
        ...state,
        values: { ...contactus_initialState.values }
      };
  }

  return state;
}
