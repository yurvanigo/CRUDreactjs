import { combineReducers } from "redux";
import spareparts from "./spareparts";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  spareparts,
  form: formReducer,
});
