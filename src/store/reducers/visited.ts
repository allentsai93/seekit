import { Listing } from "./types";

const initialState: Listing[] = [];

const visitedReducer = (state = initialState, action: any): Listing[] => {
  switch (action.type) {
    case "ADD_VISITED":
      return [...state, action.payload];
    case "SHOW_VISITED":
      return state;
    default:
      return state;
  }
};

export default visitedReducer;
