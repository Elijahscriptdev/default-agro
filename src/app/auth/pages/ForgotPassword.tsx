import axios from 'axios';
import { Form, Formik, FormikHelpers } from 'formik';
import { useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import FormControl from '../../../components/form/FormControl';
import LoadingSpinner from '../../../components/LoadingSpinner';
import config from '../../../config';
import ImageBinary from '../../../images/image-binary.png';
import { forgotPasswordValidationSchema } from '../helpers/validation';



type ForgotPasswordFormValues = {
    email: string,
}

const initialValues: ForgotPasswordFormValues = { email: "" };

const ForgotPassword = () => {

    const [success, setSuccess] = useState(false)

    const { addToast } = useToasts();

    const onSubmit = async (values: ForgotPasswordFormValues, actions: FormikHelpers<ForgotPasswordFormValues>) => {
        try {
            await axios.post(`${config.baseUrl}/sendpasswordresetlink`, values)
            setSuccess(true)
        }
        catch (e: any) {
            if (e.response) {
                addToast(e.response.data.message, { appearance: 'error' });
            }
            else {
                addToast(e.message, { appearance: 'error' });
            }

        }
        finally {
            actions.setSubmitting(false)
        }
    }
    return (
        <div className="flex flex-row">

            <div className="hidden md:block w-2/5 relative h-screen relative">
                <img className="h-full w-full object-cover z-0 " src={ImageBinary} alt="Binary" />
                <div className="absolute z-2 w-full h-full bg-green-400 bg-opacity-50 top-0 left-0" />
            </div>

            <div className="md:w-3/5 w-full mx-auto h-screen flex flex-col justify-center">
                {success ?
                    <div className="w-1/2 mx-auto">
                        <p className="md:text-3xl text-xl text-center">A password reset link has been sent to your email address</p>
                    </div> : <Formik
                        initialValues={initialValues}
                        onSubmit={onSubmit}
                        validationSchema={forgotPasswordValidationSchema}
                    >
                        {(formik) => (
                            <Form>

                                <div className="w-5/6 md:w-3/5 mx-auto space-y-6">
                                    <p className="text-xl text-gray-500 font-bold text-center">Reset Password</p>
                                    <FormControl
                                        control="input"
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="Enter email address"
                                    />
                                    <button disabled={formik.isSubmitting} type="submit" className="w-full bg-green-400 text-white p-4 rounded-md hover:bg-green-500">
                                        {formik.isSubmitting ? <LoadingSpinner size={"6"} /> : 'Reset Password'}
                                    </button>
                                </div>

                            </Form>
                        )}
                    </Formik>}

            </div>
        </div>
    )
}

export default ForgotPassword