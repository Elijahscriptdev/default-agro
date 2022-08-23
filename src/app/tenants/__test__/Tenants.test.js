import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Tenants from "../pages/Tenants";

describe("Tenants", () => {
  it("should render the tenants page", () => {
    render(
      <BrowserRouter>
        <Tenants />
      </BrowserRouter>
    );
    expect(screen.getByText("Tenants")).toBeInTheDocument();
  });

  it("should render the tenants table", () => {
    render(
      <BrowserRouter>
        <Tenants />
      </BrowserRouter>
    );
    expect(screen.getByTestId("tenants-table")).toBeInTheDocument();
  });

  it("should render the users table with the correct columns", () => {
    render(
      <BrowserRouter>
        <Tenants />
      </BrowserRouter>
    );
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Description")).toBeInTheDocument();
    expect(screen.getByText("Tenant ID")).toBeInTheDocument();
  });

  it("should render the tenants table with the correct data", () => {
    render(
      <BrowserRouter>
        <Tenants />
      </BrowserRouter>
    );
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("elij@gmail.com")).toBeInTheDocument();
    expect(screen.getByText("hello tobi")).toBeInTheDocument();
    expect(screen.getByText("12")).toBeInTheDocument();
  });
});
