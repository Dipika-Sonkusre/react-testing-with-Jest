/* eslint-disable no-undef */
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  beforeEach(() => {
    render(<App />);
  });

  it("renders the Todo App title", () => {
    expect(screen.getByText("Todo App")).toBeInTheDocument();
  });

  it("renders initial todo", () => {
    expect(screen.getByText("Sleep")).toBeInTheDocument();
  });

  it("adds a new todo", () => {
    const input = screen.getByRole("textbox");
    const addButton = screen.getByText("ADD");

    fireEvent.change(input, { target: { value: "New Todo" } });
    fireEvent.click(addButton);

    expect(screen.getByText("New Todo")).toBeInTheDocument();
  });

  it("does not add empty todo and shows alert", () => {
    const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});
    const addButton = screen.getByText("ADD");

    fireEvent.click(addButton);

    expect(alertMock).toHaveBeenCalledWith("Field can not be empty!");
    alertMock.mockRestore();
  });

  it("edits a todo", () => {
    const editButton = screen.getByText("Edit");

    fireEvent.click(editButton);

    const input = screen.getByRole("textbox");
    expect(input.value).toBe("Sleep");

    fireEvent.change(input, { target: { value: "Updated Sleep" } });
    const saveButton = screen.getByText("SAVE");
    fireEvent.click(saveButton);

    expect(screen.getByText("Updated Sleep")).toBeInTheDocument();
    expect(screen.queryByText("Sleep")).not.toBeInTheDocument();
  });

  it("deletes a todo", () => {
    const deleteButton = screen.getByText("Delete");

    fireEvent.click(deleteButton);

    expect(screen.queryByText("Sleep")).not.toBeInTheDocument();
  });
});
