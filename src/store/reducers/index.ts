import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import searchReducer from "./search";
import visitedReducer from "./visited";

export default (history: any) => {
  return combineReducers({
    router: connectRouter(history),
    search: searchReducer,
    visited: visitedReducer
  });
};
