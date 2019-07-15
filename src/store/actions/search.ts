import { ThunkAction } from "redux-thunk";
import { AppState } from "../index";
import { Action } from "redux";
import {
  SET_SEARCH_INPUT,
  FETCH_SEARCH_FAILURE,
  FETCH_SEARCH_REQUEST,
  FETCH_SEARCH_SUCCESS,
  ADD_TAG,
  REMOVE_TAG,
  CLEAR_TAGS,
  SearchActionTypes
} from "./searchTypes";
const qs = require("query-string");

export const addTag = (tag: string): SearchActionTypes => ({
  type: ADD_TAG,
  payload: tag
});

export const removeTag = (tag: string): SearchActionTypes => ({
  type: REMOVE_TAG,
  payload: tag
});

export const clearTags = (): SearchActionTypes => ({
  type: CLEAR_TAGS
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
  route?: any
): ThunkAction<void, AppState, null, Action<string>> => {
  return async (dispatch, getState) => {
    let query = "";
    const { history, location } = route;
    const queryString = location.search;
    const queryParams = qs.parse(queryString);

    const { search: currentState } = getState();

    if (queryParams.q && !currentState.searchInput) {
      query = queryParams.q;
    } else {
      query = currentState.searchInput;
    }

    if (currentState.tags.length > 0) {
      query =
        currentState.tags.join(",") +
        (currentState.searchInput ? "," + currentState.searchInput : "");
    } else {
      if (!currentState.searchInput) {
        query = "";
      }
    }

    dispatch(requestSearchResults());
    const response = await fetch(
      `${
        process.env.NODE_ENV === "production"
          ? "https://hbtojv86ij.execute-api.us-east-1.amazonaws.com/dev/api/jobs/?tags="
          : "http://localhost:8000/api/jobs/?tags="
      }${query}`
    );
    const data = await response.json();
    history.push(`/jobs${query ? "?q=" + query : ""}`);
    return dispatch(receivedSearchResults(data));
  };
};
