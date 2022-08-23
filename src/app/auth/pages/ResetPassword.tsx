import axios from 'axios';
import { useToasts } from 'react-toast-notifications';
import { Form, Formik, FormikHelpers } from 'formik';
import { useParams, useHistory } from 'react-router-dom';
import FormControl from '../../../components/form/FormControl';
import config from '../../../config';
import ImageBinary from '../../../images/image-binary.png';
import { resetPasswordValidationSchema } from '../helpers/validation';
import LoadingSpinner from '../../../components/LoadingSpinner';



type RouteParams = {
    token?: string
}

type ResetPasswordFormValues = {
    password: string,
    confirm_password: string
}

const initialValues: ResetPasswordFormValues = { password: "", confirm_password: "" };

const ResetPassword = () => {

    const history = useHistory();

    const { addToast } = useToasts();

    let { token } = useParams<RouteParams>();

    const onSubmit = async (values: ResetPasswordFormValues, actions: FormikHelpers<ResetPasswordFormValues>) => {
        const body = { ...values, token }
        try {
            await axios.post(`${config.baseUrl}/resetpassword`, body)
            history.push('/login')

        }
        catch (e: any) {
            addToast(e.response.data.message, { appearance: 'error' });
        }
        finally {
            actions.setSubmitting(false)
        }
    }
    return (
        <div className="flex flex-row">

            <div className="hidden md:block w-2/5 relative h-screen relative ">
                <img className="h-full w-full object-cover z-0 " src={ImageBinary} alt="Binary" />
                <div className="absolute z-2 w-full h-full bg-green-400 bg-opacity-50 top-0 left-0" />
            </div>
            <div className="md:w-3/5 w-full mx-auto h-screen flex flex-col justify-center">
                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={resetPasswordValidationSchema}
                >
                    {(formik) => (
                        <Form>

                            <div className="w-5/6 md:w-3/5 mx-auto space-y-4">
                                <p className="text-xl text-gray-500 font-bold text-center">Enter new Password</p>
                                <FormControl
                                    control="input"
                                    type="password"
                                    name="password"
                                    placeholder="Enter new password"
                                />
                                <FormControl
                                    control="input"
                                    type="password"
                                    name="confirm_password"
                                    placeholder="Confirm password"
                                />
                                <button disabled={formik.isSubmitting} type="submit" className="w-full bg-green-400 text-white p-4 rounded-md hover:bg-green-500">
                                    {formik.isSubmitting ? <LoadingSpinner size={"6"} /> : 'Submit'}
                                </button>
                            </div>

                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default ResetPassword