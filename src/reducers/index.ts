import { combineReducers } from "redux";
import search from "./search";
import visited from "./visited";

export default combineReducers({
  search,
  visited
});
