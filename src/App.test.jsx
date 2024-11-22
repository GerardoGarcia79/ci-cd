import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the heading", () => {
  render(<App />);
  const heading = screen.getByText(/javascript/i); // Update the regex if the text is different
  expect(heading).toBeInTheDocument();
});

