import * as types from "../visitedTypes";
import * as actions from "../visited";

describe("sync visited actions", () => {
  it("should create an action add a visited listing", () => {
    const payload = {
      title: "test"
    };
    const expectedAction = {
      type: types.ADD_VISITED,
      payload
    };
    expect(actions.addVisitedListing(payload)).toEqual(expectedAction);
  });
});
