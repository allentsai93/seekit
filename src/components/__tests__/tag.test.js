import React from "react";
import { render, cleanup } from "@testing-library/react";
import Tag from "../Tag";

afterEach(cleanup);

const tagProps = {
  tag: "TagTitle",
  show: true,
  clickHandler: jest.fn(() => {})
};

test("loads tag component not from filter box and displays info", () => {
  const { container } = render(<Tag fromFilterBox={false} {...tagProps} />);
  expect(container.firstChild).toBeDefined();
  const style = window.getComputedStyle(container.firstChild);
  expect(style.display).toBe("flex");
  expect(style.opacity).toBe("0.4");
});

test("loads tag component from filter box and displays info", () => {
  const { container } = render(<Tag fromFilterBox={true} {...tagProps} />);
  expect(container.firstChild).toBeDefined();
  const style = window.getComputedStyle(container.firstChild);
  expect(style.display).toBe("flex");
  expect(style.opacity).toBe("1");
});
