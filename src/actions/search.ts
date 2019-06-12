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

export const getSearchResults = () => {
  return async (dispatch: ThunkDispatch<{}, void, Action>, getState: any) => {
    dispatch(requestSearchResults());
    return fetch(`http://localhost:8000/api/jobs/`)
      .then(res => res.json())
      .then(json => dispatch(receivedSearchResults(json)));
  };
};
