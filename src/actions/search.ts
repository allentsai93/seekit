import { ThunkDispatch } from "redux-thunk";
import { Action } from "redux";

export const setSearchInput = (text: String) => ({
  type: "SET_SEARCH_INPUT",
  payload: text
});

export const requestSearchResults = () => {
  return {
    type: "FETCH_SEARCH_REQUEST"
  };
};

export const receivedSearchResults = (results: any) => {
  return {
    type: "FETCH_SEARCH_SUCCESS",
    payload: results
  };
};

export const invalidSearch = () => {
  return {
    type: "FETCH_SEARCH_FAILURE"
  };
};

export const getSearchResults = (query: string) => {
  return async (dispatch: ThunkDispatch<{}, void, Action>, getState: any) => {
    dispatch(requestSearchResults());
    return fetch(
      `${
        process.env.NODE_ENV === "production"
          ? "https://hbtojv86ij.execute-api.us-east-1.amazonaws.com/dev/api/jobs/?tags="
          : "http://localhost:8000/api/jobs/?tags="
      }${query}`
    )
      .then(res => res.json())
      .then(json => dispatch(receivedSearchResults(json)));
  };
};
