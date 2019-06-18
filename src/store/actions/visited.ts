import { VISITED_LISTING, VisitedActionTypes } from "./visitedTypes";
import { Listing } from "../types";

export const addVisitedListing = (result: Listing): VisitedActionTypes => {
  return {
    type: VISITED_LISTING,
    payload: result
  };
};
