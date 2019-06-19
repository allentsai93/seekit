import { SearchState } from "../types";
export const SET_SEARCH_INPUT = "SET_SEARCH_INPUT";
export const FETCH_SEARCH_REQUEST = "FETCH_SEARCH_REQUEST";
export const FETCH_SEARCH_SUCCESS = "FETCH_SEARCH_SUCCESS";
export const FETCH_SEARCH_FAILURE = "FETCH_SEARCH_FAILURE";
export const ADD_TAG = "ADD_TAG";
export const REMOVE_TAG = "REMOVE_TAG";

interface InvalidSearchAction {
  type: typeof FETCH_SEARCH_FAILURE;
}

interface ReceivedSearchResultsAction {
  type: typeof FETCH_SEARCH_SUCCESS;
  payload: SearchState;
}

interface RequestSearchResultsAction {
  type: typeof FETCH_SEARCH_REQUEST;
}

interface SetSearchInputAction {
  type: typeof SET_SEARCH_INPUT;
  payload: string;
}

interface AddTagAction {
  type: typeof ADD_TAG;
  payload: string;
}

interface RemoveTagAction {
  type: typeof REMOVE_TAG;
  payload: string;
}

export type SearchActionTypes =
  | AddTagAction
  | RemoveTagAction
  | InvalidSearchAction
  | ReceivedSearchResultsAction
  | RequestSearchResultsAction
  | SetSearchInputAction;
