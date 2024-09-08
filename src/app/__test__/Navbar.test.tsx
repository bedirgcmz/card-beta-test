import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from ".";

describe("Navbar Component", () => {
  test("renders three list items in the navbar", () => {
    render(<Navbar />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(3);
  });

  test("renders three links in the navbar", () => {
    render(<Navbar />);
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(3);
  });
});
