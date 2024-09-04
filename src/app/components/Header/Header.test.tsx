import { render, screen } from "@testing-library/react";
import Header from ".";
import "@testing-library/jest-dom";

test("Renders the Page title", () => {
  render(<Header />);
  const HeaderTitle = screen.getByRole("heading", { name: "Card-Beta-Test" });
  expect(HeaderTitle).toBeInTheDocument();
});
