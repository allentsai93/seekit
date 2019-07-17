import * as types from "../../actions/visitedTypes";
import visitedReducer from "../visited";

describe("visited reducer", () => {
  it("should return initial state", () => {
    expect(visitedReducer(undefined, {})).toEqual([]);
  });
  it("should handle ADD_VISITED", () => {
    expect(
      visitedReducer(undefined, {
        type: types.ADD_VISITED,
        payload: { pk: 1, title: "test" }
      })
    ).toEqual([{ pk: 1, title: "test" }]);
  });
  it("should show visited listings", () => {
    expect(
      visitedReducer([{ pk: 1, title: "test" }], {
        type: types.SHOW_VISITED
      })
    ).toEqual([{ pk: 1, title: "test" }]);
  });
});
