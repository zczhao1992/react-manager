import React from "react";
import { render, screen } from "@testing-library/react";
import Component from "./Component";

test("默认属性", () => {
  render(<Component />);

  const h = screen.getByText("问卷标题");

  expect(h).toBeInTheDocument();
});

test("传入属性", () => {
  render(<Component title="wdawd" desc="dddd" />);

  const h = screen.getByText("wdawd");

  expect(h).toBeInTheDocument();

  const p = screen.getByText("dddd");
  expect(p).toBeInTheDocument();
});

test("多行文字", () => {
  render(<Component desc={"a\nb\nc"} />);

  const span = screen.getByText("a");
  expect(span).toBeInTheDocument();

  expect(span).toHaveTextContent("a");
  expect(span).not.toHaveTextContent("ab"); // 被换行了
});
