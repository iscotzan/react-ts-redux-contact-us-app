import * as constants from "../constants";
import { toastr } from "react-redux-toastr";

export interface IncrementEnthusiasm {
  type: constants.INCREMENT_ENTHUSIASM;
}

export interface DecrementEnthusiasm {
  type: constants.DECREMENT_ENTHUSIASM;
}
export interface UpdateFormField {
  type: constants.UPDATE_FORM_FIELD;
  payload: any;
}
export interface ResetState {
  type: constants.RESET_STATE;
}

export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm;

export type ContactUsAction = UpdateFormField | ResetState;

export function incrementEnthusiasm(): IncrementEnthusiasm {
  return {
    type: constants.INCREMENT_ENTHUSIASM
  };
}

export function decrementEnthusiasm(): DecrementEnthusiasm {
  return {
    type: constants.DECREMENT_ENTHUSIASM
  };
}
export function updateFormField(values: any): UpdateFormField {
  return {
    type: constants.UPDATE_FORM_FIELD,
    payload: values
  };
}
export function resetState(): ResetState {
  toastr.success("Hey there John/Jane Doe", "The form state has been reset successfully");
  return {
    type: constants.RESET_STATE
  };
}
