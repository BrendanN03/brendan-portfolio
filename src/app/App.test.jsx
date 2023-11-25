import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders redesigned portfolio home", () => {
  render(<App />);
  expect(screen.getAllByText("Brendan Nguyen").length).toBeGreaterThan(0);
  expect(
    screen.queryByText(/software engineering, data, and mathematical systems/i)
  ).not.toBeInTheDocument();
  expect(screen.getByText(/Master of Science in Engineering in Data Science/i)).toBeInTheDocument();
  expect(screen.getAllByText(/Bloomberg/).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/incoming software engineer/i).length).toBeGreaterThan(0);
  expect(screen.getByText(/Trimble Maps/)).toBeInTheDocument();
  expect(screen.getByText(/Chess Game/)).toBeInTheDocument();
  expect(screen.queryByText(/UPenn Student Federal Credit Union/i)).not.toBeInTheDocument();
});
