import { combineReducers } from "redux";
import searchReducer from "./search";
import visitedReducer from "./visited";

export default combineReducers({
  search: searchReducer,
  visited: visitedReducer
});
