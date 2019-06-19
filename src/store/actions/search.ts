import { ThunkAction } from "redux-thunk";
import { SearchState } from "../types";
import { Action } from "redux";
import {
  SET_SEARCH_INPUT,
  FETCH_SEARCH_FAILURE,
  FETCH_SEARCH_REQUEST,
  FETCH_SEARCH_SUCCESS,
  ADD_TAG,
  REMOVE_TAG,
  SearchActionTypes
} from "./searchTypes";

export const addTag = (tag: string): SearchActionTypes => ({
  type: ADD_TAG,
  payload: tag
});

export const removeTag = (tag: string): SearchActionTypes => ({
  type: REMOVE_TAG,
  payload: tag
});

export const setSearchInput = (text: string): SearchActionTypes => ({
  type: SET_SEARCH_INPUT,
  payload: text
});

export const requestSearchResults = (): SearchActionTypes => {
  return {
    type: FETCH_SEARCH_REQUEST
  };
};

export const receivedSearchResults = (results: any): SearchActionTypes => {
  return {
    type: FETCH_SEARCH_SUCCESS,
    payload: results
  };
};

export const invalidSearch = (): SearchActionTypes => {
  return {
    type: FETCH_SEARCH_FAILURE
  };
};

export const getSearchResults = (
  query: string
): ThunkAction<void, SearchState, null, Action<string>> => {
  return async dispatch => {
    dispatch(requestSearchResults());
    const response = await fetch(
      `${
        process.env.NODE_ENV === "production"
          ? "https://hbtojv86ij.execute-api.us-east-1.amazonaws.com/dev/api/jobs/?tags="
          : "http://localhost:8000/api/jobs/?tags="
      }${query}`
    );
    const data = await response.json();
    return dispatch(receivedSearchResults(data));
  };
};
