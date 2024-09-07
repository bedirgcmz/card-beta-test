import { render, screen } from "@testing-library/react";
import Header from ".";
import "@testing-library/jest-dom";

describe("Header Component", () => {
  test("Renders the Page title", () => {
    render(<Header />);
    const HeaderTitle = screen.getByRole("heading", { name: "Card-Beta-Test" });
    expect(HeaderTitle).toBeInTheDocument();
  });

  test("Render the Subtitle correctly", () => {
    render(<Header />);
    const HeaderSubtitle = screen.getByText("Create Cards Easily");
    expect(HeaderSubtitle).toBeInTheDocument();
  });

  test("Navbar has list items with correct text", () => {
    render(<Header />);
    const homeItem = screen.queryByText("Home");
    const aboutItem = screen.queryByText("About");
    const contactItem = screen.queryByText("Contact");
    expect(homeItem).toBeInTheDocument();
    expect(aboutItem).toBeInTheDocument();
    expect(contactItem).toBeInTheDocument();
  });
});
