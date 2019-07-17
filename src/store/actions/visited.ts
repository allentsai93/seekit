import { ADD_VISITED, VisitedActionTypes } from "./visitedTypes";
import { Listing } from "../types";

export const addVisitedListing = (result: Listing): VisitedActionTypes => {
  return {
    type: ADD_VISITED,
    payload: result
  };
};
