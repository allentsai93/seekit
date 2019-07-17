export const ADD_VISITED = "ADD_VISITED";

export const SHOW_VISITED = "SHOW_VISITED";

interface VisitedListingAction {
  type: typeof ADD_VISITED;
  payload: {};
}

interface ShowVisitedAction {
  type: typeof SHOW_VISITED;
}

export type VisitedActionTypes = VisitedListingAction | ShowVisitedAction;
