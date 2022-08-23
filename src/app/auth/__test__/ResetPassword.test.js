import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ResetPassword from '../pages/ResetPassword';

describe("ResetPassword", () => {

    it('should render input elements', () => {
        render(
            <BrowserRouter>
                <ResetPassword />
            </BrowserRouter>
        );

        const inputPasswordElement = screen.getByPlaceholderText(/Enter new password/i);
        expect(inputPasswordElement).toBeInTheDocument();
    });

    it('should be able to type into input', async () => {
        render(
            <BrowserRouter>
                <ResetPassword />
            </BrowserRouter>
        );
        const inputPasswordElement = screen.getByPlaceholderText(/Enter new password/i);

        await waitFor(() => {
            fireEvent.change(inputPasswordElement, { target: { value: "test@test.com" } })
        })

        expect(inputPasswordElement.value).toBe("test@test.com");
    });

})




