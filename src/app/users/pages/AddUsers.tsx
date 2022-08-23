import axios from "axios";
import { Form, Formik, FormikHelpers } from "formik";
import FormControl from "../../../components/form/FormControl";
import { Option } from "../../../shared/option.model";
import { useToasts } from "react-toast-notifications";
import { useQuery } from "react-query";
import * as api from "../usersApi";
import useStore from "../../auth/store/authStore";
import { TenantResponse } from "../../tenants/tenant.type";
import { addUserValidationSchema } from "../helpers/validation";
import { AddUserFormValues } from "../types/user.types";
import config from "../../../config";
import LoadingSpinner from "../../../components/LoadingSpinner";
import Can from "../../../utils/rbac/Can";
import Drawer from "../../layout/Drawer";

const initialValues: AddUserFormValues = {
  first_name: "",
  last_name: "",
  email: "",
  mobile: "",
  password: "",
  bvn: "",
  role: "",
  tenant_id: "",
};

const AddUsers = () => {
  const token = useStore((state) => state.token);
  const user = useStore((state) => state.user);
  const { addToast } = useToasts();

  const roles: Option[] = [
    {
      name: "Admin",
      value: "Admin",
    },
    {
      name: "RSE Agent",
      value: "RSE Agent",
    },
  ];

  const { data } = useQuery("Tenants", api.getTenants, {
    select: (data: TenantResponse) => {
      const tenants =
        data?.data?.map((item) => {
          return { name: item.name, value: item.tenant_id } as Option;
        }) ?? [];
      return tenants;
    },
  });

  const onSubmit = async (
    values: AddUserFormValues,
    actions: FormikHelpers<AddUserFormValues>
  ) => {
    const requestHeader = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      await axios.post(`${config.baseUrl}/createuser`, values, requestHeader);
      addToast("User created successfully", {
        appearance: "success",
        autoDismiss: true,
      });
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
            validationSchema={addUserValidationSchema}
          >
            {(formik) => (
              <Form>
                <div className=''>
                  <h2 className='text-xl text-black-500 font-bold mb-5'>
                    Create New User
                  </h2>

                  <div className='flex flex-wrap -mx-3 mb-6'>
                    <div className='w-full md:w-1/2 px-3 mb-6 md:mb-6'>
                      <FormControl
                        control='input'
                        type='text'
                        label='First Name'
                        name='first_name'
                        placeholder='Enter First Name'
                      />
                    </div>

                    <div className='w-full md:w-1/2 px-3 mb-6 md:mb-6'>
                      <FormControl
                        control='input'
                        label='Last Name'
                        type='text'
                        name='last_name'
                        placeholder='Enter last Name'
                      />
                    </div>

                    <div className='w-full md:w-1/2 px-3 mb-6 md:mb-6'>
                      <FormControl
                        control='input'
                        label='Email'
                        type='email'
                        name='email'
                        placeholder='Enter email address'
                      />
                    </div>

                    <div className='w-full md:w-1/2 px-3 mb-6 md:mb-6'>
                      <FormControl
                        control='input'
                        type='tel'
                        label='Phone Number'
                        name='mobile'
                        placeholder='Enter mobile'
                      />
                    </div>

                    <div className='w-full md:w-1/2 px-3 mb-6 md:mb-6'>
                      <FormControl
                        control='input'
                        type='password'
                        label='Password'
                        name='password'
                        placeholder='Enter password'
                      />
                    </div>

                    <div className='w-full md:w-1/2 px-3 mb-6 md:mb-6'>
                      <FormControl
                        control='select'
                        name='role'
                        label='User group'
                        type='select'
                        options={roles}
                        placeholder="Select group"
                      />
                    </div>

                    <Can
                      role={user.role}
                      perform='tenants:visit'
                      yes={() => (
                        <div className='w-full md:w-1/2 px-3 mb-6 md:mb-6'>
                          <FormControl
                            control='select'
                            type='tenant_id'
                            label='Select tenant'
                            name='tenant_id'
                            options={data}
                            placeholder="Select Tenant"
                          />
                        </div>
                      )}
                      no={() => null}
                    />
                  </div>

                  <h3 className='block tracking-wide mb-6 md:mb-6 text-gray-600 text-lg font-bold  mb-3'>
                    Other Information
                  </h3>
                  <div className='w-full md:w-1/2 px-3 mb-6 md:mb-6'>
                    <FormControl
                      control='input'
                      label='Bvn'
                      type='bvn'
                      name='bvn'
                      placeholder='Enter bvn'
                    />
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

export default AddUsers;
