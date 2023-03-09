import addItem from "./handleCart";

import { combineReducers } from "redux";
const rootReducers = combineReducers({
  addItem: addItem,
});
export default rootReducers;
