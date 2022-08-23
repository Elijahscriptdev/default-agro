import axios from "axios";
import { Form, Formik, FormikHelpers } from "formik";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import FormControl from "../../../components/form/FormControl";
import LoadingSpinner from "../../../components/LoadingSpinner";
import config from "../../../config";
import img from "../../../images/dvalco 1.png";
import useStore from "../../auth/store/authStore";
import Drawer from "../../layout/Drawer";
import { editTenantValidationSchema } from "../helpers/validation";
import { TenantResponse } from "../tenant.type";

type EditTenantsFormValues = {
  name: string;
  description: string;
  sms_sender_id: string;
  custom_domain: string;
  country: string;
  currency: string;
  id: string;
};

type RouteParams = {
  id?: string;
};

const EditTenant = () => {
  const token = useStore((state) => state.token);
  let { id } = useParams<RouteParams>();
  const { addToast } = useToasts();

  const requestHeader = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { isLoading, data, isFetching } = useQuery<TenantResponse>(
    "tenantData",
    async () =>
      await axios
        .get(`${config.baseUrl}/gettenantbyid/${id}}`, requestHeader)
        .then((res) => res.data)
  );

  const initialValues: EditTenantsFormValues = {
    name: data?.tenant?.name ?? "",
    description: data?.tenant?.description ?? "",
    sms_sender_id: data?.tenant?.sms_sender_id ?? "",
    custom_domain: data?.tenant?.custom_domain ?? "",
    country: data?.tenant?.country ?? "",
    currency: data?.tenant?.currency ?? "",
    id: data?.tenant?.id ?? "",
  };

  const onSubmit = async (
    values: EditTenantsFormValues,
    actions: FormikHelpers<EditTenantsFormValues>
  ) => {
    const requestHeader = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      await axios.post(`${config.baseUrl}/edittenant`, values, requestHeader);
      addToast("Tenant updated successfully", {
        appearance: "success",
        autoDismiss: true,
      });
    } catch (e: any) {
      addToast(e.response.data.message, { appearance: "error" });
    }
  };

  if (isFetching) {
    return <span>loading...</span>;
  }

  return (
    <div className='flex flex-row'>
      <Drawer />

      <div className='flex flex-row w-4/5 flex-grow'>
        <div className=' w-full mx-auto h-screen flex flex-col p-10'>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={editTenantValidationSchema}
          >
            {(formik) => (
              <Form>
                {isLoading ? (
                  <p>loading</p>
                ) : (
                  <div className=''>
                    <h2 className='text-xl text-black-500 font-bold mb-8'>
                      Edit Tenant
                    </h2>

                    <div className='flex flex-wrap -mx-3 mb-6'>
                      <div className='w-full md:w-1/4 mb-6 md:mb-6 '>
                        <div className='rounded shadow-lg flex justify-center py-20'>
                          <img src={img} alt='' />
                        </div>
                      </div>

                      <div className='w-full md:w-1/3 px-3 mb-6 md:mb-6'>
                        <div className='w-full md:w-1/1 px-3 mb-6 md:mb-6'>
                          <FormControl
                            control='input'
                            type='name'
                            label='Name'
                            name='name'
                            required
                            placeholder='Enter last Name'
                          />
                        </div>

                        <div className='w-full md:w-1/1 px-3 mb-6 md:mb-6'>
                          <FormControl
                            control='textarea'
                            type='description'
                            label='Description'
                            name='description'
                            rows='8'
                            required
                            placeholder='Enter last Name'
                          />
                        </div>

                        <div className='w-full md:w-1/1 px-3 mb-6 md:mb-6'>
                          <FormControl
                            control='input'
                            type='country'
                            label='Country'
                            name='country'
                            required
                            placeholder='Enter last Name'
                          />
                        </div>

                        <div className='w-full md:w-1/1 px-3 mb-6 md:mb-6'>
                          <FormControl
                            control='input'
                            type='currency'
                            label='Currency'
                            name='currency'
                            required
                            placeholder='Enter last Name'
                          />
                        </div>

                        <div className='w-full md:w-1/1 px-3 mb-6 md:mb-6'>
                          <FormControl
                            control='input'
                            type='sms_sender_id'
                            label='SMS Sender Id'
                            name='sms_sender_id'
                            required
                            placeholder='Enter last Name'
                          />
                        </div>

                        <div className='px-3 mb-6 md:mb-6'>
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
                    </div>
                  </div>
                )}
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default EditTenant;
