import axios from 'axios';
import { useToasts } from 'react-toast-notifications';
import { Form, Formik, FormikHelpers } from 'formik';
import FormControl from '../../../components/form/FormControl';
import config from '../../../config';
import { editProfileValidationSchema } from '../helpers/validation';
import LoadingSpinner from '../../../components/LoadingSpinner';
import useStore from '../../auth/store/authStore';
import { UpdateUserResponse } from '../../users/types/user.types';


type EditProfileFormValues = {
    first_name: string,
    last_name: string,
    mobile: string,
}

const EditProfile = () => {

    const token = useStore(state => state.token)
    const user = useStore(state => state.user)
    const updateUser = useStore(state => state.updateUser)


    const initialValues: EditProfileFormValues = {
        first_name: user?.first_name,
        last_name: user?.last_name,
        mobile: user?.mobile ?? '',
    };

    const { addToast } = useToasts();

    const onSubmit = async (values: EditProfileFormValues, actions: FormikHelpers<EditProfileFormValues>) => {

        const body = { ...values, role: user?.role, tenant_id: user?.tenant_id }

        try {
            const res: UpdateUserResponse = await axios.post(`${config.baseUrl}/updateuser`, body, { headers: { 'Authorization': `Bearer ${token}` } });
            addToast("Your profile has been updated successfully", { appearance: 'success' });
            updateUser(res.data?.data)
        }
        catch (e: any) {
            addToast(e.response.data.message, { appearance: 'error' });
        }
        finally {
            actions.setSubmitting(false)

        }
    }
    return (


        <div className="w-full mx-auto">
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={editProfileValidationSchema}
            >
                {(formik) => (
                    <Form>

                        <div className="w-full space-y-4">
                            <FormControl
                                control="input"
                                type="text"
                                name="first_name"
                                placeholder="Enter first name"
                                label="First Name"
                            />
                            <FormControl
                                control="input"
                                type="text"
                                name="last_name"
                                placeholder="Enter last name"
                                label="Last Name"
                            />
                            <FormControl
                                control="input"
                                type="tel"
                                name="mobile"
                                placeholder="Enter mobile number"
                                label="Mobile Number"
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

export default EditProfile