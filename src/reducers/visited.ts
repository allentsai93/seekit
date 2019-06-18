import { VisitedState } from "./types";

const initialState: VisitedState = {
  visited: []
};

const visitedReducer = (state = initialState, action: any): VisitedState => {
  switch (action.type) {
    case "ADD_VISITED":
      return {
        visited: [...state.visited, action.payload]
      };
    case "SHOW_VISITED":
      return state;
    default:
      return state;
  }
};

export default visitedReducer;
