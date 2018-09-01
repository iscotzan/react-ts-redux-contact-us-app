import { combineReducers } from "redux";
import enthusiasm from "./enthusiasm.reducer";
import contactUs from "./contactUs.reducer";
import { routerReducer } from "react-router-redux";
import { reducer as toastrReducer } from "react-redux-toastr";
export default combineReducers({
  enthusiasm: enthusiasm,
  contactUs: contactUs,
  toastr: toastrReducer,
  router: routerReducer
});
