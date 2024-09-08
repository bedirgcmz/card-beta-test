import { render, screen, fireEvent } from "@testing-library/react";
import CardForm from ".";

describe("CardForm Component", () => {
  const mockOnAddCard = jest.fn();
  const mockOnClose = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders form with all fields", () => {
    render(<CardForm onAddCard={mockOnAddCard} onClose={mockOnClose} />);

    expect(screen.getByPlaceholderText("Project Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Project Link")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Technologies")).toBeInTheDocument();
    expect(screen.getByText("Add Card")).toBeInTheDocument();
    expect(screen.getByText("Cancel")).toBeInTheDocument();
  });

  test("updates form fields correctly", () => {
    render(<CardForm onAddCard={mockOnAddCard} onClose={mockOnClose} />);

    const projectInput = screen.getByPlaceholderText("Project Name");
    const linkInput = screen.getByPlaceholderText("Project Link");
    const techInput = screen.getByPlaceholderText("Technologies");

    fireEvent.change(projectInput, { target: { value: "New Project" } });
    fireEvent.change(linkInput, { target: { value: "https://example.com" } });
    fireEvent.change(techInput, { target: { value: "React, TypeScript" } });

    expect(projectInput).toHaveValue("New Project");
    expect(linkInput).toHaveValue("https://example.com");
    expect(techInput).toHaveValue("React, TypeScript");
  });

  test("calls onAddCard with correct values on form submit", () => {
    render(<CardForm onAddCard={mockOnAddCard} onClose={mockOnClose} />);

    const projectInput = screen.getByPlaceholderText("Project Name");
    const linkInput = screen.getByPlaceholderText("Project Link");
    const techInput = screen.getByPlaceholderText("Technologies");

    fireEvent.change(projectInput, { target: { value: "New Project" } });
    fireEvent.change(linkInput, { target: { value: "https://example.com" } });
    fireEvent.change(techInput, { target: { value: "React, TypeScript" } });

    fireEvent.submit(screen.getByTestId("card-form"));

    expect(mockOnAddCard).toHaveBeenCalledWith({
      project: "New Project",
      link: "https://example.com",
      tech: "React, TypeScript",
      image: "", // Placeholder value
    });
    expect(mockOnAddCard).toHaveBeenCalledTimes(1);
  });

  test("Successfully calls onClose when Cancel button is clicked", () => {
    render(<CardForm onAddCard={mockOnAddCard} onClose={mockOnClose} />);

    fireEvent.click(screen.getByText("Cancel"));

    expect(mockOnClose).toHaveBeenCalledTimes(1);
    expect(mockOnClose).not.toHaveBeenCalledTimes(2);
  });

  test("Successfully clears form after submit", () => {
    render(<CardForm onAddCard={mockOnAddCard} onClose={mockOnClose} />);

    const projectInput = screen.getByPlaceholderText("Project Name");
    const linkInput = screen.getByPlaceholderText("Project Link");
    const techInput = screen.getByPlaceholderText("Technologies");

    fireEvent.change(projectInput, { target: { value: "New Project" } });
    fireEvent.change(linkInput, { target: { value: "https://example.com" } });
    fireEvent.change(techInput, { target: { value: "React, TypeScript" } });

    fireEvent.submit(screen.getByTestId("card-form"));

    expect(projectInput).toHaveValue("");
    expect(linkInput).toHaveValue("");
    expect(techInput).toHaveValue("");
  });

  test("Successfully Take in new Data in consideration", () => {
    render(<CardForm onAddCard={mockOnAddCard} onClose={mockOnClose} />);

    const projectInput = screen.getByPlaceholderText("Project Name");
    const linkInput = screen.getByPlaceholderText("Project Link");
    const techInput = screen.getByPlaceholderText("Technologies");

    fireEvent.change(projectInput, {
      target: { value: "My Amazing New Project 2" },
    });
    fireEvent.change(linkInput, { target: { value: "https://example2.com" } });
    fireEvent.change(techInput, {
      target: { value: "Next JS, TypeScript, Tailwind, Next UI" },
    });

    expect(projectInput).toHaveValue("My Amazing New Project 2");
    expect(linkInput).toHaveValue("https://example2.com");
    expect(techInput).toHaveValue("Next JS, TypeScript, Tailwind, Next UI");

    fireEvent.change(projectInput, {
      target: { value: "No This is My Awesome Project 3" },
    });
    fireEvent.change(linkInput, { target: { value: "https://example3.com" } });
    fireEvent.change(techInput, {
      target: { value: "Next JS, Tailwind, Next UI" },
    });

    expect(projectInput).toHaveValue("No This is My Awesome Project 3");
    expect(linkInput).toHaveValue("https://example3.com");
    expect(techInput).toHaveValue("Next JS, Tailwind, Next UI");
  });
});
