import React from "react";
import { Form, Formik, FormikHelpers } from "formik";
import { useParams } from "react-router";
import FormControl from "../../../components/form/FormControl";
import { useQuery } from "react-query";
import * as api from "../usersApi";
import { Option } from "../../../shared/option.model";
import axios from "axios";
import useStore from "../../auth/store/authStore";
import { TenantResponse } from "../../tenants/tenant.type";
import { editUserValidationSchema } from "../helpers/validation";
import { EditUserFormValues, User } from "../types/user.types";
import config from "../../../config";
import { useToasts } from "react-toast-notifications";
import LoadingSpinner from "../../../components/LoadingSpinner";
import Drawer from "../../layout/Drawer";
import Can from "../../../utils/rbac/Can";

type UsersResponse = {
  status: string;
  data: User[];
  message: string;
  page: number;
  totalpages: number;
  user: any;
};

type RouteParams = {
  id: string;
};

const EditUsers: React.FC = () => {
  const token = useStore((state) => state.token);
  const user = useStore((state) => state.user);
  let { id } = useParams<RouteParams>();
  const { addToast } = useToasts();

  const requestHeader = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data: tenants } = useQuery("Tenants", api.getTenants, {
    select: (data: TenantResponse) => {
      const tenants =
        data?.data.map((item) => {
          return { name: item.name, value: item.tenant_id } as Option;
        }) ?? [];
      return tenants;
    },
  });

  const { data, isFetching } = useQuery<UsersResponse>("userData", () =>
    axios
      .get(`${config.baseUrl}/getuserbyid/${id}`, requestHeader)
      .then((res) => res.data)
  );

  const initialValues: EditUserFormValues = {
    first_name: data?.user?.first_name ?? "",
    last_name: data?.user?.last_name ?? "",
    email: data?.user?.email ?? "",
    mobile: data?.user?.mobile ?? "",
    bvn: data?.user?.bvn ?? "",
    role: data?.user?.role ?? "",
    tenant_id: data?.user?.tenant?.id ?? "",
    password: "",
    id: data?.user?.id ?? "",
  };

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

  const onSubmit = async (
    values: EditUserFormValues,
    actions: FormikHelpers<EditUserFormValues>
  ) => {
    const requestHeader = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      await axios.post(
        `${config.baseUrl}/edituserbyadminorsuperadmin`,
        values,
        requestHeader
      );

      // const user = res.data;
      addToast("User updated successfully", { appearance: "success" });
    } catch (e: any) {
      addToast(e.response.data.message, { appearance: "error" });
      addToast("User update failed", { appearance: "error" });
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
            validationSchema={editUserValidationSchema}
          >
            {(formik) => (
              <Form>
                {isFetching ? (
                  <p>loading</p>
                ) : (
                  <div className=''>
                    <h2 className='text-xl text-black-500 font-bold mb-5'>
                      Update User Information
                    </h2>

                    <div className='flex flex-wrap -mx-3 mb-6'>
                      <div className='w-full md:w-1/2 px-3 mb-6 md:mb-6'>
                        <FormControl
                          control='input'
                          type='first_name'
                          name='first_name'
                          label='First Name'
                          required
                          placeholder='Enter First Name'
                        />
                      </div>

                      <div className='w-full md:w-1/2 px-3 mb-6 md:mb-6'>
                        <FormControl
                          control='input'
                          type='last_name'
                          label='Last Name'
                          name='last_name'
                          required
                          placeholder='Enter last Name'
                        />
                      </div>

                      <div className='w-full md:w-1/2 px-3 mb-6 md:mb-6'>
                        <FormControl
                          control='input'
                          label='Email'
                          type='email'
                          name='email'
                          required
                          placeholder='Enter email address'
                        />
                      </div>

                      <div className='w-full md:w-1/2 px-3 mb-6 md:mb-6'>
                        <FormControl
                          control='input'
                          type='mobile'
                          label='Phone Number'
                          name='mobile'
                          required
                          placeholder='Enter mobile'
                        />
                      </div>

                      <div className='w-full md:w-1/2 px-3 mb-6 md:mb-6'>
                        <FormControl
                          control='select'
                          type='role'
                          label='User group'
                          name='role'
                          required
                          placeholder='Select Role'
                          options={roles}
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
                              options={tenants}
                              placeholder='Select Tenant'
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
                        required
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
                )}
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default EditUsers;
