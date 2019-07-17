import React from "react";
import { render, cleanup } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "../../store/index";
import Listing from "../Listing";

function renderWithRedux(
  ui,
  { initialState, store = createStore(rootReducer, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    // adding `store` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    store
  };
}

afterEach(cleanup);

const listingProps = {
  city: "Vancouver",
  company: "Test Company",
  country: "Canada",
  description: "Test Description",
  post_date: "July 9th 2019",
  state: "B.C.",
  title: "Test Title",
  tags: ["test_tag", "company_tag"],
  url: "http://www.test.com"
};

test("loads Listing and displays info", () => {
  const { getByText } = renderWithRedux(<Listing {...listingProps} />);
  expect(getByText("Test Company")).toBeDefined();
  expect(getByText("Test Description")).toBeDefined();
  expect(getByText("Test Title")).toBeDefined();
  expect(getByText("Test Title")).toBeDefined();
  expect(getByText("test_tag")).toBeDefined();
  expect(getByText("company_tag")).toBeDefined();
});
