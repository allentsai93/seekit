const search = (state = {}, action: any) => {
  switch (action.type) {
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

export default search;
