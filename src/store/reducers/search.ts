import { SearchState } from "./types";

const initialState: SearchState = {
  searchInput: "",
  tags: [],
  status: "",
  results: {}
};

const searchReducer = (state = initialState, action: any): SearchState => {
  switch (action.type) {
    case "ADD_ADDITIONAL_TAG":
      return {
        tags: [...state.tags, action.payload],
        ...state
      };
    case "SET_SEARCH_INPUT":
      return {
        ...state,
        searchInput: action.payload
      };
    case "FETCH_SEARCH_REQUEST":
      return state;
    case "FETCH_SEARCH_FAILURE":
      return {
        ...state,
        status: "error"
      };
    case "FETCH_SEARCH_SUCCESS":
      return {
        ...state,
        status: "success",
        results: action.payload
      };
    default:
      return state;
  }
};

export default searchReducer;
