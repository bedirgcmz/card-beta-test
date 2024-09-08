import { render, screen } from "@testing-library/react";
import MyFooter from ".";

describe("Footer Component", () => {
  const navLinks: { name: string; href: string }[] = [];
  const socialLinks: { name: string; href: string }[] = [];

  test("Includes Copyright in a paragraph", () => {
    render(<MyFooter navLinks={navLinks} socialLinks={socialLinks} />);
    expect(screen.getByText(/Copyright Edwin Andermyr/i)).toBeInTheDocument();
  });

  test("Includes 3 nav links", () => {
    const navLinks = [
      { name: "Home", href: "#" },
      { name: "About", href: "#" },
      { name: "Contact Us", href: "#" },
    ];
    const socialLinks: { name: string; href: string }[] = [];

    render(<MyFooter navLinks={navLinks} socialLinks={socialLinks} />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems.length).toBe(3);
  });

  test("Includes 3 social icons", () => {
    const navLinks: { name: string; href: string }[] = [];
    const socialLinks = [
      { name: "Instagram", href: "#" },
      { name: "Github", href: "#" },
      { name: "Twitter", href: "#" },
    ];

    render(<MyFooter navLinks={navLinks} socialLinks={socialLinks} />);
    const icons = screen.getAllByTestId("social-icon");
    expect(icons.length).toBe(3);
  });
});
