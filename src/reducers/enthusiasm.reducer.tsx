// src/reducers/index.tsx

import { EnthusiasmAction } from "../actions";
import { EnthusiasmState } from "../types/index";
import {
  INCREMENT_ENTHUSIASM,
  DECREMENT_ENTHUSIASM,
  initialState
} from "../constants/index";
const enthusiasm_initialState = initialState.enthusiasm;
export default function enthusiasm(
  state: EnthusiasmState = enthusiasm_initialState,
  action: EnthusiasmAction
) {
  // console.log(state);
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
    case DECREMENT_ENTHUSIASM:
      return {
        ...state,
        enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1)
      };
  }
  //   switch (action.type) {
  //     case INCREMENT_ENTHUSIASM:
  //       return { ...state, enthusiasm: {...state.enthusiasm, enthusiasmLevel: state.enthusiasm.enthusiasmLevel + 1 }};
  //     case DECREMENT_ENTHUSIASM:
  //       return { ...state, enthusiasm: {...state.enthusiasm, enthusiasmLevel: Math.max(1, state.enthusiasm.enthusiasmLevel - 1) }};
  //   }
  return state;
}
