export const VISITED_LISTING = "VISITED_LISTING";

interface VisitedListingAction {
  type: typeof VISITED_LISTING;
  payload: {};
}

export type VisitedActionTypes = VisitedListingAction;
