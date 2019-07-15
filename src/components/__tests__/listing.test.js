import React from "react";
import { render, cleanup } from "@testing-library/react";
import Listing from "../Listing";

afterEach(cleanup);

const listingProps = {
  city: "Vancouver",
  company: "Test Company",
  country: "Canada",
  description: "Test Description",
  post_date: "July 9th 2019",
  state: "B.C.",
  title: "Test Title",
  tags: ["test1", "test2"],
  url: "http://www.test.com"
};

test("loads Listing and displays info", () => {
  const { getByText } = render(<Listing {...listingProps} />);
});
