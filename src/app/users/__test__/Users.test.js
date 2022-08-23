import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Users from '../pages/Users';

describe("Users", () => {

    it("should render the users page", async () => {
        render(
            <BrowserRouter>
                <Users />
            </BrowserRouter>
        );
        await waitFor(() => {
            expect(screen.getByText("Users")).toBeInTheDocument();
        });
    });

    it("should render the users table", async () => {
        render(
            <BrowserRouter>
                <Users />
            </BrowserRouter>
        );
        await waitFor(() => {
            expect(screen.getByText("Users")).toBeInTheDocument();
        });
        expect(screen.getByTestId("users-table")).toBeInTheDocument();
    });

    it("should render the users table with the correct columns", async () => {
        render(
            <BrowserRouter>
                <Users />
            </BrowserRouter>
        );
        await waitFor(() => {
            expect(screen.getByText("Users")).toBeInTheDocument();
        });
        expect(screen.getByText("First Name")).toBeInTheDocument();
        expect(screen.getByText("Last Name")).toBeInTheDocument();
        expect(screen.getByText("Email")).toBeInTheDocument();
        expect(screen.getByText("Group")).toBeInTheDocument();
        expect(screen.getByText("Tenant")).toBeInTheDocument();
        expect(screen.getByText("Last Login")).toBeInTheDocument();
    });

    it("should render the users table with the correct data", async () => {
        render(
            <BrowserRouter>
                <Users />
            </BrowserRouter>
        );
        await waitFor(() => {
            expect(screen.getByText("Users")).toBeInTheDocument();
        });
        expect(screen.getByText("John")).toBeInTheDocument();
        expect(screen.getByText("Doe")).toBeInTheDocument();
        expect(screen.getByText("elij@gmail.com")).toBeInTheDocument();
        expect(screen.getByText("Admin")).toBeInTheDocument();
        expect(screen.getByText("2")).toBeInTheDocument();
        expect(screen.getByText("2020-01-01T00:00:00.000Z")).toBeInTheDocument();
    });

})
