import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import searchReducer from "./reducers/search";
import visitedReducer from "./reducers/visited";

const rootReducer = combineReducers({
  search: searchReducer,
  visited: visitedReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const composeEnhancer =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunk))
  );

  return store;
}
