import React from "react";
import { render, screen } from "@testing-library/react";
import Component from "./Component";

test("默认属性", () => {
  render(<Component />);
  const span = screen.getByText("一行段落");
  expect(span).toBeInTheDocument();
});

test("传入属性", () => {
  render(<Component text={"a\nb\nc"} />);

  const span = screen.getByText("a");
  expect(span).toBeInTheDocument();

  expect(span).toHaveTextContent("a");
  expect(span).not.toHaveTextContent("ab"); // 被换行了
});
