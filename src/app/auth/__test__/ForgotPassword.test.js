import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom';
import ForgotPassword from '../pages/ForgotPassword';

describe("ForgotPassword", () => {

    it('should render input elements', () => {
        render(
            <BrowserRouter>
                <ForgotPassword />
            </BrowserRouter>
        );

        const inputEmailElement = screen.getByPlaceholderText(/Enter email address/i);
        expect(inputEmailElement).toBeInTheDocument();
    });

    it('should be able to type into input', async () => {
        render(
            <BrowserRouter>
                <ForgotPassword />
            </BrowserRouter>
        );
        const inputEmailElement = screen.getByPlaceholderText(/Enter email address/i);

        await waitFor(() => {
            fireEvent.change(inputEmailElement, { target: { value: "test@test.com" } })
        })

        expect(inputEmailElement.value).toBe("test@test.com");
    });


    // it('should be able to submit the form', async () => {
    //     const onSubmit = jest.fn()
    //     render(
    //         <BrowserRouter>
    //             <ForgotPassword />
    //         </BrowserRouter>
    //     );
    //     const inputEmailElement = screen.getByPlaceholderText(/Enter email address/i);


    //     await waitFor(() => {
    //         fireEvent.change(inputEmailElement, { target: { value: "test@test.com" } })
    //     })
    //     fireEvent.click(screen.getByRole('button', { type: /submit/i }))

    //     await waitFor(() =>
    //         expect(onSubmit).toHaveBeenCalled(),
    //     )
    // });

})




