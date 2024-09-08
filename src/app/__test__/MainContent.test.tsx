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

  test("Check if a specific card is removed clicking X using queryBy", () => {
    render(<MainContent />);
    const project1 = screen.getByText("Project1");
    expect(project1).toBeInTheDocument();
    const removeButton = screen.getAllByRole("button", { name: /x/i })[0];
    fireEvent.click(removeButton);

    const project1AfterRemoval = screen.queryByText("Project1");
    expect(project1AfterRemoval).not.toBeInTheDocument();
  });

  test("Successfully shows the CardForm component when the Add Cards button is clicked", () => {
    render(<MainContent />);
    expect(screen.queryByPlaceholderText("Project Name")).toBeNull(); // Form not present yet

    fireEvent.click(screen.getByText("Add Cards"));
    expect(screen.getByPlaceholderText("Project Name")).toBeInTheDocument(); // Form is successfully shown
  });

  test("Successfully hides the CardForm component when Cancel button is clicked", () => {
    render(<MainContent />);

    fireEvent.click(screen.getByText("Add Cards"));
    expect(screen.getByPlaceholderText("Project Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Project Link")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Technologies")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Cancel"));

    expect(screen.queryByPlaceholderText("Project Name")).toBeNull();
    expect(screen.queryByPlaceholderText("Project Link")).toBeNull();
    expect(screen.queryByPlaceholderText("Technologies")).toBeNull();
  });

  test("Successfully adds a new card after form is submitted", () => {
    render(<MainContent />);

    fireEvent.click(screen.getByTestId("add-card-button"));

    fireEvent.change(screen.getByPlaceholderText("Project Name"), {
      target: { value: "My New Project" },
    });
    fireEvent.change(screen.getByPlaceholderText("Project Link"), {
      target: { value: "https://newproject.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Technologies"), {
      target: { value: "HTML, CSS" },
    });

    fireEvent.click(screen.getByText("Add Card"));
    expect(screen.getByText("My New Project")).toBeInTheDocument();
  });

  test("Successfully verifies the correct number of cards after adding a new one", () => {
    render(<MainContent />);

    const initialCardCount = screen.queryAllByRole("img").length;

    fireEvent.click(screen.getByText("Add Cards"));
    fireEvent.change(screen.getByPlaceholderText("Project Name"), {
      target: { value: "Project B" },
    });
    fireEvent.change(screen.getByPlaceholderText("Project Link"), {
      target: { value: "https://projectb.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Technologies"), {
      target: { value: "TypeScript" },
    });

    fireEvent.click(screen.getByText("Add Card"));

    const newCardCount = screen.queryAllByRole("img").length;
    expect(newCardCount).toBe(initialCardCount + 1);

    fireEvent.click(screen.getByText("Add Cards"));
    fireEvent.change(screen.getByPlaceholderText("Project Name"), {
      target: { value: "A New Project B" },
    });
    fireEvent.change(screen.getByPlaceholderText("Project Link"), {
      target: { value: "https://aNEWprojectb.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Technologies"), {
      target: { value: "TypeScript and NEXT JS" },
    });
    fireEvent.click(screen.getByText("Add Card"));
    const reNewCardCount = screen.queryAllByRole("img").length;
    expect(reNewCardCount).toBe(initialCardCount + 2);
  });
});
