import React from "react";
import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import Button from "./Button";

test("renders Button component and checks data attribute", () => {
  // Arrange
  const label = "Click Me";
  const dataAttr = "test-value";

  // Act
  render(<Button data-test={dataAttr}>{label}</Button>);

  // Assert
  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toHaveAttribute("data-test", dataAttr);
  expect(buttonElement).toHaveTextContent(label);
});
