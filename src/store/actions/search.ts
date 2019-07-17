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
import { getParsedUrlQuery, parseQueryToObj } from "../../util";

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

export const getSearchResults = (): ThunkAction<
  void,
  AppState,
  null,
  Action<string>
> => {
  return async (dispatch, getState) => {
    const { router: currentRoute } = getState();
    const queryString = currentRoute.location.search;
    const queryParams: { [index: string]: any } = parseQueryToObj(queryString);
    let { tags = "" } = queryParams;

    if (tags) {
      const allTags = tags.split(",");
      allTags.forEach((tag: string) => {
        dispatch(addTag(tag));
      });
    }

    dispatch(requestSearchResults());
    const response = await fetch(
      `${
        process.env.NODE_ENV === "production"
          ? "https://hbtojv86ij.execute-api.us-east-1.amazonaws.com/dev/api/jobs/"
          : "http://localhost:8000/api/jobs/"
      }${getParsedUrlQuery(queryParams)}`
    );
    const data = await response.json();
    dispatch(receivedSearchResults(data));
  };
};
