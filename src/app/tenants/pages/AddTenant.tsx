import axios from "axios";
import { Form, Formik, FormikHelpers } from "formik";
import { useToasts } from "react-toast-notifications";
import FormControl from "../../../components/form/FormControl";
import LoadingSpinner from "../../../components/LoadingSpinner";
import config from "../../../config";
import useStore from "../../auth/store/authStore";
import Drawer from "../../layout/Drawer";
import { addTenantValidationSchema } from "../helpers/validation";

type AddTenantsFormValues = {
  name: string;
  description: string;
  sms_sender_id: string;
  custom_domain: string;
  country: string;
  currency: string;
};

const initialValues: AddTenantsFormValues = {
  name: "",
  description: "",
  sms_sender_id: "",
  custom_domain: "",
  country: "",
  currency: "",
};

const AddTenant = () => {
  const token = useStore((state) => state.token);
  const { addToast } = useToasts();

  const onSubmit = async (
    values: AddTenantsFormValues,
    actions: FormikHelpers<AddTenantsFormValues>
  ) => {
    const requestHeader = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      await axios.post(`${config.baseUrl}/createtenant`, values, requestHeader);
      addToast("Tenant added successfully", { appearance: "success" });
    } catch (e: any) {
      addToast(e.response.data.message, { appearance: "error" });
    }
  };

  return (
    <div className='flex flex-row'>
      <Drawer />

      <div className='flex flex-row w-4/5 flex-grow'>
        <div className=' w-full mx-auto h-screen flex flex-col p-10'>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={addTenantValidationSchema}
          >
            {(formik) => (
              <Form>
                <div className=''>
                  <h2 className='text-xl text-black-500 font-bold mb-5'>
                    Create New Tenant
                  </h2>

                  <div className=' -mx-3 mb-6'>
                    <div className='w-full md:w-1/2 px-3 mb-6 md:mb-6'>
                      <FormControl
                        control='input'
                        type='text'
                        name='name'
                        label='Tenant Name'
                        required
                        placeholder='Enter Tenant Name'
                      />
                    </div>

                    <div className='w-full md:w-1/2 px-3 mb-6 md:mb-6'>
                      <FormControl
                        control='textarea'
                        type='text'
                        label='Description'
                        name='description'
                        rows='8'
                        required
                        placeholder='Enter Description'
                      />
                    </div>

                    <div className='w-full md:w-1/2 px-3 mb-6 md:mb-6'>
                      <FormControl
                        control='input'
                        type='country'
                        label='Country'
                        name='country'
                        required
                        placeholder='Enter Country'
                      />
                    </div>

                    <div className='w-full md:w-1/2 px-3 mb-6 md:mb-6'>
                      <FormControl
                        control='input'
                        type='currency'
                        label='Currency'
                        name='currency'
                        required
                        placeholder='Enter Currency'
                      />
                    </div>

                    <div className='w-full md:w-1/2 px-3 mb-6 md:mb-6'>
                      <FormControl
                        control='input'
                        type='sms_sender_id'
                        label='SMS Sender Id'
                        name='sms_sender_id'
                        required
                        placeholder='Enter SMS Sender Id'
                      />
                    </div>
                  </div>

                  <div className=''>
                    <button
                      disabled={formik.isSubmitting}
                      type='submit'
                      className=' bg-green-400 text-white py-4 px-8 rounded-md hover:bg-green-500'
                    >
                      {formik.isSubmitting ? (
                        <LoadingSpinner size={"6"} />
                      ) : (
                        "Submit"
                      )}
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default AddTenant;
