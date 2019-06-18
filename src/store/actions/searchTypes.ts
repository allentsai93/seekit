import { SearchState } from "../types";
export const SET_SEARCH_INPUT = "SET_SEARCH_INPUT";
export const FETCH_SEARCH_REQUEST = "FETCH_SEARCH_REQUEST";
export const FETCH_SEARCH_SUCCESS = "FETCH_SEARCH_SUCCESS";
export const FETCH_SEARCH_FAILURE = "FETCH_SEARCH_FAILURE";

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

export type SearchActionTypes =
  | InvalidSearchAction
  | ReceivedSearchResultsAction
  | RequestSearchResultsAction
  | SetSearchInputAction;
