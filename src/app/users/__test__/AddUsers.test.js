import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AddUsers from "../pages/AddUsers";

describe("AddUsers", () => {
    
  it("should render the AddUsers page", () => {
    render(
      <BrowserRouter>
        <AddUsers />
      </BrowserRouter>
    );
    expect(screen.getByText("Add Users")).toBeInTheDocument();
  });

  it("should be able to submit form", async () => {
    render(
      <BrowserRouter>
        <AddUsers />
      </BrowserRouter>
    );
    fireEvent.change(screen.getByTestId("firstName"), {
      target: { value: "test" },
    });
    fireEvent.change(screen.getByTestId("lastName"), {
      target: { value: "test" },
    });
    fireEvent.change(screen.getByTestId("email"), {
      target: { value: "elij@gmail.com" },
    });
    fireEvent.change(screen.getByTestId("password"), {
      target: { value: "test" },
    });
    fireEvent.change(screen.getByTestId("confirmPassword"), {
      target: { value: "test" },
    });
    fireEvent.click(screen.getByTestId("submit"));
    await waitFor(() =>
      expect(screen.getByText("User added successfully")).toBeInTheDocument()
    );
  });
});
