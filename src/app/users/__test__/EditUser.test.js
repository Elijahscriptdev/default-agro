import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import EditUsers from "../pages/EditUsers";

describe("EditUsers", () => {
  it("renders edit user page", () => {
    const { getByText } = render(
      <BrowserRouter>
        <EditUsers />
      </BrowserRouter>
    );
    const linkElement = getByText(/Edit User/i);
    expect(linkElement).toBeInTheDocument();
  });

  it("should be able to submit form", async () => {
    render(
      <BrowserRouter>
        <EditUsers />
      </BrowserRouter>
    );
    const inputFirstNameElement =
      screen.getByPlaceholderText(/Enter First Name/i);
    const inputLastNameElement =
      screen.getByPlaceholderText(/Enter last Name/i);
    const inputEmailElement = screen.getByPlaceholderText(/Enter Email/i);
    const inputPasswordElement = screen.getByPlaceholderText(/Enter Password/i);
    const inputPhoneNumberElement =
      screen.getByPlaceholderText(/Enter Phone Number/i);
    const inputRoleElement = screen.getByPlaceholderText(/Enter Role/i);

    await waitFor(() => {
      fireEvent.change(inputFirstNameElement, {
        target: { value: "Elijah" },
      });
    });

    await waitFor(() => {
      fireEvent.change(inputLastNameElement, {
        target: { value: "chimdi" },
      });
    });

    await waitFor(() => {
      fireEvent.change(inputEmailElement, {
        target: { value: "elij@gmail.com" },
      });
    });

    await waitFor(() => {
      fireEvent.change(inputPasswordElement, {
        target: { value: "password" },
      });
    });

    await waitFor(() => {
      fireEvent.change(inputPhoneNumberElement, {
        target: { value: "08033333333" },
      });
    });

    await waitFor(() => {
      fireEvent.change(inputRoleElement, {
        target: { value: "admin" },
      });
    });

    const submitButton = screen.getByText(/Submit/i);
    fireEvent.click(submitButton);
    expect(submitButton).toBeInTheDocument();
  });
});
