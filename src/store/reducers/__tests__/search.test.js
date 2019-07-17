import * as types from "../../actions/searchTypes";
import searchReducer from "../search";

const initialState = {
  results: {},
  searchInput: "",
  status: "",
  tags: []
};

describe("search reducer", () => {
  it("should return initial state", () => {
    expect(searchReducer(undefined, {})).toEqual({
      searchInput: "",
      tags: [],
      status: "",
      results: {
        count: 0,
        data: [],
        nextlink: "",
        numpages: 0,
        prevlink: ""
      }
    });
  });

  it("should handle SET_SEARCH_INPUT", () => {
    expect(
      searchReducer(initialState, {
        type: types.SET_SEARCH_INPUT,
        payload: "software tester"
      })
    ).toEqual({
      results: {},
      searchInput: "software tester",
      status: "",
      tags: []
    });
  });

  it("should change searchInput when using SET_SEARCH_INPUT", () => {
    initialState.searchInput = "first input";
    expect(
      searchReducer(initialState, {
        type: types.SET_SEARCH_INPUT,
        payload: "second input"
      })
    ).toEqual({
      results: {},
      searchInput: "second input",
      status: "",
      tags: []
    });
    initialState.searchInput = "";
  });

  it("should handle ADD_TAG", () => {
    expect(
      searchReducer(initialState, {
        type: types.ADD_TAG,
        payload: "tag"
      })
    ).toEqual({
      results: {},
      searchInput: "",
      status: "",
      tags: ["tag"]
    });
  });

  it("should handle REMOVE_TAG", () => {
    expect(
      searchReducer(initialState, {
        type: types.REMOVE_TAG,
        payload: "tag"
      })
    ).toEqual({
      results: {},
      searchInput: "",
      status: "",
      tags: []
    });
  });

  it("should handle CLEAR_TAGS", () => {
    initialState.tags = ["tag1", "tag2"];
    expect(
      searchReducer(initialState, {
        type: types.CLEAR_TAGS
      })
    ).toEqual({
      results: {},
      searchInput: "",
      status: "",
      tags: []
    });
    initialState.tags = [];
  });

  it("should handle FETCH_SEARCH_REQUEST", () => {
    expect(
      searchReducer(initialState, {
        type: types.FETCH_SEARCH_REQUEST
      })
    ).toEqual({
      results: {},
      searchInput: "",
      status: "",
      tags: []
    });
  });

  it("should handle FETCH_SEARCH_SUCCESS", () => {
    expect(
      searchReducer(initialState, {
        type: types.FETCH_SEARCH_SUCCESS,
        status: "success",
        payload: {
          data: [
            {
              pk: 1,
              title: "test 1"
            },
            {
              pk: 2,
              title: "test 2"
            }
          ]
        }
      })
    ).toEqual({
      results: {
        data: [
          {
            pk: 1,
            title: "test 1"
          },
          {
            pk: 2,
            title: "test 2"
          }
        ]
      },
      searchInput: "",
      status: "success",
      tags: []
    });
  });

  it("should handle FETCH_SEARCH_FAILURE", () => {
    expect(
      searchReducer(initialState, {
        type: types.FETCH_SEARCH_FAILURE,
        status: "error"
      })
    ).toEqual({
      results: {},
      searchInput: "",
      status: "error",
      tags: []
    });
  });
});
