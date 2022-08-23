import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("EditTenants", () => {
  it("renders edit user page", () => {
    render(
      <BrowserRouter>
        <EditTenants />
      </BrowserRouter>
    );
    expect(screen.getByTestId("edit-tenant-page")).toBeInTheDocument();
  });

  it("should be able to submit form", async () => {
    render(
      <BrowserRouter>
        <EditTenants />
      </BrowserRouter>
    );
    const submitButton = screen.getByTestId("submit-button");
    fireEvent.click(submitButton);
    await waitFor(() =>
      expect(screen.getByTestId("edit-tenant-page")).toBeInTheDocument()
    );
  });
});
