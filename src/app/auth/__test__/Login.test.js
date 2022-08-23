import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Login from '../pages/Login';

describe("Login", () => {

    it('should render input elements', () => {
        render(
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        );

        const inputEmailElement = screen.getByPlaceholderText(/Enter email address/i);
        const inputPasswordElement = screen.getByPlaceholderText(/Enter password/i);
        expect(inputEmailElement).toBeInTheDocument();
        expect(inputPasswordElement).toBeInTheDocument();
    });

    it('should be able to type into input', async () => {
        render(
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        );
        const inputEmailElement = screen.getByPlaceholderText(/Enter email address/i);
        const inputPasswordElement = screen.getByPlaceholderText(/Enter password/i);

        await waitFor(() => {
            fireEvent.change(inputEmailElement, { target: { value: "test@test.com" } })
        })

        await waitFor(() => {
            fireEvent.change(inputPasswordElement, { target: { value: "password" } })
        });

        expect(inputEmailElement.value).toBe("test@test.com");
        expect(inputPasswordElement.value).toBe("password");
    });

})




