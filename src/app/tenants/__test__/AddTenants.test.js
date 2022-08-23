import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AddTenant from "../pages/AddTenant";

describe("AddTenants", () => {
  it("should render the AddUsers page", () => {
    render(
      <BrowserRouter>
        <AddTenant />
      </BrowserRouter>
    );
    expect(screen.getByText("Add Tenants")).toBeInTheDocument();
  });

  it("should be able to submit form", async () => {
    render(
      <BrowserRouter>
        <AddTenant />
      </BrowserRouter>
    );
    const name = screen.getByLabelText("Name");
    const email = screen.getByLabelText("Email");
    const description = screen.getByLabelText("Description");
    const submit = screen.getByText("Submit");
    fireEvent.change(name, { target: { value: "test" } });
    fireEvent.change(email, { target: { value: "elij@gmail.com" } });
    fireEvent.change(description, { target: { value: "Hello" } });
    fireEvent.click(submit);
    await waitFor(() =>
      expect(screen.getByText("Tenant added successfully")).toBeInTheDocument()
    );
  });
});
