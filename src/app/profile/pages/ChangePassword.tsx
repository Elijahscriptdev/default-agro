import axios from 'axios';
import { useToasts } from 'react-toast-notifications';
import { Form, Formik, FormikHelpers } from 'formik';
import FormControl from '../../../components/form/FormControl';
import config from '../../../config';
import { changePasswordValidationSchema } from '../helpers/validation';
import LoadingSpinner from '../../../components/LoadingSpinner';
import useStore from '../../auth/store/authStore';



type ChangePasswordFormValues = {
    old_password: string,
    new_password: string,
    confirm_password: string
}

const initialValues: ChangePasswordFormValues = { old_password: "", confirm_password: "", new_password: "" };

const ChangePassword = () => {

    const token = useStore(state => state.token)

    const { addToast } = useToasts();

    const onSubmit = async (values: ChangePasswordFormValues, actions: FormikHelpers<ChangePasswordFormValues>) => {

        try {
            await axios.post(`${config.baseUrl}/updatepassword`, values, { headers: { 'Authorization': `Bearer ${token}` } });
            addToast("Your password has been updated successfully", { appearance: 'success' });
            actions.resetForm()
        }
        catch (e: any) {
            addToast(e.response.data.message, { appearance: 'error' });
        }
        finally {
            actions.setSubmitting(false)

        }
    }
    return (

        <div className="w-full">
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={changePasswordValidationSchema}
            >
                {(formik) => (
                    <Form>

                        <div className="w-full pr-4 space-y-4">
                            <FormControl
                                control="input"
                                type="password"
                                name="old_password"
                                placeholder="Enter current password"
                                label="Current Password"
                            />
                            <FormControl
                                control="input"
                                type="password"
                                name="new_password"
                                placeholder="Enter new password"
                                label="New Password"
                            />
                            <FormControl
                                control="input"
                                type="password"
                                name="confirm_password"
                                placeholder="Confirm password"
                                label="Confirm Password"
                            />
                            <button disabled={formik.isSubmitting} type="submit" className="w-full bg-green-400 text-white p-4 rounded-md hover:bg-green-500">
                                {formik.isSubmitting ? <LoadingSpinner size={"6"} /> : 'Submit'}
                            </button>
                        </div>

                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default ChangePassword