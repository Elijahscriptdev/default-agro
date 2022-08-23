import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";

import CustomSelect from "../../components/common/CustomSelect";
import Spinner from "../../components/Spinner";
import BreadCrumb from "../../components/common/CustomBreadCrumbs";
import Button from "../../components/common/Button";
import { validations } from "../../utils/validations";

import axiosServices from "../../services/axiosServices";
import { notify } from "../../utils/toastNotification";

import { updateUser } from "../../redux/actions/UserManagementActions";
import { getRoles, getStates } from "../../redux/actions/AppActions";

import { textFieldStyles } from "../../components/Modals/globals";

function EditTenant() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  console.log("user 1234", user);

  const role = [
    {
      name: "Admin",
      value: "Admin",
    },
    {
      name: "RSE Agent",
      value: "RSE Agent",
    },
  ];

  const { userId } = useParams();

  const dialogTextStyles = {
    ...textFieldStyles,
    width: {
      ...textFieldStyles.width,
      md: "auto",
    },
  };

  const params = useParams();
  const states = useSelector((state) => state.AppReducer.states);
  const authenticatedUser = useSelector(
    (state) =>
      state.AuthReducer.userProfile ||
      JSON.parse(sessionStorage.getItem("user_profile"))
  );

  const getSingleUser = async (userId) => {
    try {
      const res = await axiosServices.get(`/getuserbyid/${userId}`);
      console.log("res12345", res);
      setUser(res.user);
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  useEffect(() => {
    getSingleUser(userId);
  }, [userId]);

  return (
    <React.Fragment>
      <section>
        <nav id='quick-nav'>
          <BreadCrumb
            breadcrumbs={[
              <Typography key='1' color='inherit'>
                Tenants
              </Typography>,
              <Link href='/tenants' key='2' color='inherit'>
                Manage Tenants
              </Link>,
              <Typography key='1' color='inherit'>
                Edit Tenants
              </Typography>,
            ]}
          />
        </nav>

        <Stack
          direction='column'
          px={4}
          py={3}
          alignItems='flex-start'
          sx={{
            backgroundColor: "#FFF",
            boxShadow: "0px 5px 20px rgba(108, 117, 125, 0.15)",
            borderRadius: "5px",
          }}
        >
          <h2 className='with-spinner ml-1.5' style={{ fontSize: "20px" }}>
            <span>Edit User</span>
            {isLoading ? <Spinner size={20} color='primary' /> : ""}
          </h2>
          <Formik
            enableReinitialize={true}
            initialValues={{
              first_name: user?.first_name || "",
              email: user?.email || "",
            }}
            validationSchema={Yup.object({
              first_name: validations
                .name("First name")
                .required("First name is required"),
              last_name: validations
                .name("Last name")
                .required("Last name is required"),
              email: validations.email("Email").required("Email is required"),
              mobile: validations.blank("mobile").required("Phone is required"),
              role: validations.blank("role").required("Role is required"),
            })}
            onSubmit={async (values, { resetForm }) => {
              const body = {
                first_name: values.first_name,
                last_name: values.last_name,
                email: values.email,
                bvn: values.bvn,
                mobile: values.mobile,
                role: values.role,
                tenant_id: values.tenant_id,
                password: values.password,
                id: values.id,
              };
              setIsUpdating(true);
              const response = dispatch(updateUser(userId, body));
              response.then((result) => {
                setIsUpdating(false);
                resetForm();
                window.setTimeout(
                  () => navigate("/user-management/users"),
                  1000
                );
              });
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <form
                onSubmit={handleSubmit}
                style={{ width: "100%", border: "1px solid transparent" }}
              >
                <Stack
                  direction='row'
                  justifyContent='space-between'
                  sx={{
                    flexWrap: {
                      xs: "wrap",
                      lg: "nowrap",
                    },
                  }}
                >
                  <Stack
                    direction='column'
                    sx={{
                      mx: 1,
                      width: "100%",
                    }}
                  >
                    <label htmlFor='first_name' className='second-text my-3'>
                      First Name <small className='text-red-500'>*</small>
                    </label>
                    <TextField
                      id='first_name'
                      sx={dialogTextStyles}
                      name='first_name'
                      InputProps={{ style: { height: "44px" } }}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={Object.keys(user).length === 0}
                      value={values.first_name}
                      className={
                        errors.first_name && touched.first_name
                          ? "input-error"
                          : null
                      }
                    />
                    {errors.first_name && touched.first_name && (
                      <span className='error'>{errors.first_name}</span>
                    )}
                  </Stack>

                  <Stack
                    direction='column'
                    sx={{
                      mx: 1,
                      width: "100%",
                    }}
                  >
                    <label htmlFor='last_name' className='second-text my-3'>
                      Last Name <small className='text-red-500'>*</small>
                    </label>
                    <TextField
                      sx={dialogTextStyles}
                      id='last_name'
                      name='last_name'
                      InputProps={{ style: { height: "44px" } }}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={Object.keys(user).length === 0}
                      value={values.last_name}
                      className={
                        errors.last_name && touched.last_name
                          ? "input-error"
                          : null
                      }
                    />
                    {errors.last_name && touched.last_name && (
                      <span className='error'>{errors.last_name}</span>
                    )}
                  </Stack>
                </Stack>

                <Stack
                  direction='row'
                  justifyContent='space-between'
                  sx={{
                    flexWrap: {
                      xs: "wrap",
                      lg: "nowrap",
                    },
                  }}
                >
                  <Stack
                    direction='column'
                    sx={{
                      mx: 1,
                      width: "100%",
                    }}
                  >
                    <label htmlFor='email' className='second-text my-3'>
                      Email <small className='text-red-500'>*</small>
                    </label>
                    <TextField
                      sx={dialogTextStyles}
                      id='email'
                      name='email'
                      InputProps={{ style: { height: "44px" } }}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={Object.keys(user).length === 0}
                      value={values.email}
                      className={
                        errors.email && touched.email ? "input-error" : null
                      }
                    />
                    {errors.email && touched.email && (
                      <span className='error'>{errors.email}</span>
                    )}
                  </Stack>

                  <Stack
                    direction='column'
                    sx={{
                      mx: 1,
                      width: "100%",
                    }}
                  >
                    <label htmlFor='mobile' className='second-text my-3'>
                      Phone Number
                    </label>
                    <TextField
                      sx={dialogTextStyles}
                      id='mobile'
                      name='mobile'
                      InputProps={{ style: { height: "44px" } }}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={Object.keys(user).length === 0}
                      value={values.mobile}
                      className={
                        errors.mobile && touched.mobile ? "input-error" : null
                      }
                    />
                    {errors.mobile && touched.mobile && (
                      <span className='error'>{errors.mobile}</span>
                    )}
                  </Stack>
                </Stack>

                <Stack
                  direction='row'
                  justifyContent='space-between'
                  sx={{
                    flexWrap: {
                      xs: "wrap",
                      lg: "nowrap",
                    },
                  }}
                >
                  <Stack
                    direction='column'
                    sx={{
                      mx: 1,
                      width: "100%",
                    }}
                  >
                    <label htmlFor='bvn' className='second-text my-3'>
                      BVN
                    </label>
                    <TextField
                      sx={dialogTextStyles}
                      id='bvn'
                      name='bvn'
                      InputProps={{ style: { height: "44px" } }}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={Object.keys(user).length === 0}
                      value={values.bvn === null ? user?.bvn : values.bvn}
                      className={
                        errors.bvn && touched.bvn ? "input-error" : null
                      }
                    />
                    {errors.bvn && touched.bvn && (
                      <span className='error'>{errors.bvn}</span>
                    )}
                  </Stack>

                  <Stack
                    direction='column'
                    sx={{
                      mx: 1,
                      width: {
                        xs: "100%",
                        // md: "auto",
                      },
                    }}
                  >
                    <label htmlFor='group' className='second-text my-3'>
                      User Group <small className='text-red-500'>*</small>
                    </label>
                    <CustomSelect
                      name='group'
                      id='group'
                      value={values.role}
                      onChange={handleChange}
                      noneLabel={<em>Select Group</em>}
                      iconType='filled'
                      width={{ md: "400px", xs: "100%" }}
                      height='44px'
                      sx={{ backgroundColor: "grey" }}
                      backgroundColor='#F3F3F4'
                      disableshadow='true'
                      options={role.map((role) => ({
                        value: role.value,
                        name: role.name,
                      }))}
                      className={
                        errors.role && touched.role ? "input-error" : null
                      }
                      disabled={Object.keys(user).length === 0}
                    />
                    {errors.role && touched.role && (
                      <span className='error'>{errors.role}</span>
                    )}
                  </Stack>
                </Stack>

                <div className='buttons mt-8 ml-1.5'>
                  <div className=''>
                    <Button
                      disabled={Object.keys(user).length === 0 || isUpdating}
                      type='submit'
                      value={isUpdating ? "Updating..." : "Submit"}
                    />
                  </div>
                </div>
              </form>
            )}
          </Formik>
        </Stack>
      </section>
    </React.Fragment>
  );
}

export default EditTenant;
