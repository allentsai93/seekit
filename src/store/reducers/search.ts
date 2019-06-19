import { SearchState } from "./types";

const initialState: SearchState = {
  searchInput: "",
  tags: [],
  status: "",
  results: {}
};

const searchReducer = (state = initialState, action: any): SearchState => {
  switch (action.type) {
    case "ADD_TAG":
      return {
        ...state,
        tags: [...state.tags, action.payload]
      };
    case "REMOVE_TAG":
      let newTagState = [...state.tags];
      newTagState.splice(newTagState.indexOf(action.payload), 1);
      return {
        ...state,
        tags: newTagState
      };
    case "CLEAR_TAGS":
      return {
        ...state,
        tags: []
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
