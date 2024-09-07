import { render, screen, fireEvent } from "@testing-library/react";
import MainContent from ".";
import "@testing-library/jest-dom";

describe("MainContent Component", () => {
  test("renders 4 cards on page load", () => {
    render(<MainContent />);
    const cards = screen.queryAllByRole("img");
    expect(cards.length).toBe(4);
  });

  test("renders all projects with their names", () => {
    render(<MainContent />);

    const project1 = screen.getByText("Project1");
    const project2 = screen.getByText("Project2");
    const project3 = screen.getByText("Project3");
    const project4 = screen.getByText("Project4");

    expect(project1).toBeInTheDocument();
    expect(project2).toBeInTheDocument();
    expect(project3).toBeInTheDocument();
    expect(project4).toBeInTheDocument();
  });

  test("Removes a card when the 'X' button is clicked", () => {
    render(<MainContent />);
    const initialCards = screen.queryAllByRole("img");
    expect(initialCards.length).toBe(4);
    const removeButtons = screen.queryAllByRole("button", { name: /x/i });
    expect(removeButtons.length).toBe(4);

    fireEvent.click(removeButtons[0]);
    const cardsAfterRemoval = screen.queryAllByRole("img");
    expect(cardsAfterRemoval.length).toBe(3);
  });

  test("Check if a specific card is removed using queryBy", () => {
    render(<MainContent />);
    const project1 = screen.getByText("Project1");
    expect(project1).toBeInTheDocument();
    const removeButton = screen.getAllByRole("button", { name: /x/i })[0];
    fireEvent.click(removeButton);

    const project1AfterRemoval = screen.queryByText("Project1");
    expect(project1AfterRemoval).not.toBeInTheDocument();
  });
});
