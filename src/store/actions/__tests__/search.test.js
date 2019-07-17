import * as types from "../searchTypes";
import * as actions from "../search";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";

describe("synchronous actions", () => {
  it("should create an action to set search input", () => {
    const input = "Software Tester";
    const expectedAction = {
      type: types.SET_SEARCH_INPUT,
      payload: input
    };
    expect(actions.setSearchInput(input)).toEqual(expectedAction);
  });
  it("should create an action to add a tag", () => {
    const input = "software";
    const expectedAction = {
      type: types.ADD_TAG,
      payload: input
    };
    expect(actions.addTag(input)).toEqual(expectedAction);
  });
  it("should create an action to remove a tag", () => {
    const input = "software";
    const expectedAction = {
      type: types.REMOVE_TAG,
      payload: input
    };
    expect(actions.removeTag(input)).toEqual(expectedAction);
  });
  it("should create an action to clear tags", () => {
    const expectedAction = {
      type: types.CLEAR_TAGS
    };
    expect(actions.clearTags()).toEqual(expectedAction);
  });
  it("should create an action to request search results", () => {
    const expectedAction = {
      type: types.FETCH_SEARCH_REQUEST
    };
    expect(actions.requestSearchResults()).toEqual(expectedAction);
  });
  it("should create an action to receive search results", () => {
    const input = "result";
    const expectedAction = {
      type: types.FETCH_SEARCH_SUCCESS,
      payload: input
    };
    expect(actions.receivedSearchResults(input)).toEqual(expectedAction);
  });
  it("should create an action to fail receiving search results", () => {
    const expectedAction = {
      type: types.FETCH_SEARCH_FAILURE
    };
    expect(actions.invalidSearch()).toEqual(expectedAction);
  });
});

describe("asynchronous actions", () => {
  const mockHistory = { push: jest.fn(() => {}) };
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  afterEach(() => {
    fetchMock.restore();
  });

  it("creates receivedSearchResults when fetching results is done", async () => {
    fetchMock.getOnce("http://localhost:8000/api/jobs/?tags=test", {
      body: { results: ["data1", "data2"] },
      headers: { "content-type": "application/json" }
    });

    const expectedActions = [
      { type: types.FETCH_SEARCH_REQUEST },
      {
        type: types.FETCH_SEARCH_SUCCESS,
        payload: { results: ["data1", "data2"] }
      }
    ];

    const store = mockStore({
      search: { searchInput: "test", results: [], tags: [] }
    });

    await store.dispatch(actions.getSearchResults("test"));
    return expect(store.getActions()).toEqual(expectedActions);
  });
});
