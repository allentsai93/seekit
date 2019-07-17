import { ResultListing } from "./types";

const initialState: ResultListing[] = [];

const visitedReducer = (state = initialState, action: any): ResultListing[] => {
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
