
import axios, { AxiosResponse } from 'axios';
import { Form, Formik, FormikHelpers } from 'formik';
import { Link } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import FormControl from '../../../components/form/FormControl';
import LoadingSpinner from '../../../components/LoadingSpinner';
import config from '../../../config';
import ImageBinary from '../../../images/image-binary.png';
import { useProfileAuth } from '../../profile/helpers/data';
import { loginValidationSchema } from '../helpers/validation';
import useStore from '../store/authStore';
import { LoginFormValues, LoginResponse } from '../types/login.types';


const initialValues: LoginFormValues = { email: "", password: "" };


const Login = () => {

    const setUser = useStore(state => state.setUser)
    const setToken = useStore(state => state.setToken)

    const token = useStore(state => state.token)

    const { isLoading } = useProfileAuth(token, setUser)

    const { addToast } = useToasts()

    const onSubmit = async (values: LoginFormValues, actions: FormikHelpers<LoginFormValues>) => {
        try {
            const res: AxiosResponse<LoginResponse> = await axios.post(`${config.authBaseUrl}/login`, values)
            setToken(res.data.token, res.data.expires_in)
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
                    validationSchema={loginValidationSchema}
                    onSubmit={onSubmit}
                >
                    {(formik) => (
                        <Form>

                            <div className="w-5/6 md:w-3/5 mx-auto space-y-6">
                                <p className="text-xl text-gray-500 font-bold text-center">Sign In</p>


                                <FormControl
                                    control="input"
                                    type="email"
                                    name="email"
                                    placeholder="Enter email address"
                                />
                                <FormControl
                                    control="input"
                                    type="password"
                                    name="password"
                                    placeholder="Enter password"
                                />
                                <button disabled={formik.isSubmitting} type="submit" className="w-full bg-green-400 text-white p-4 rounded-md hover:bg-green-500">
                                    {formik.isSubmitting || isLoading ? <LoadingSpinner size={"6"} /> : 'Sign In'}
                                </button>
                                <Link to="/forgot-password">
                                    <p className="text-right text-gray-500 italic text-sm mt-2">Forgot Password?</p>
                                </Link>
                            </div>

                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default Login