import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import { validations } from "../../utils/validations";
import Can, { check } from "../../utils/rbac/Can";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";

import CustomSelect from "../../components/common/CustomSelect";
import BreadCrumb from "../../components/common/CustomBreadCrumbs";
import Button from "../../components/common/Button";

import { addUser } from "../../redux/actions/UserManagementActions";
import { getRoles } from "../../redux/actions/AppActions";
import { getTenants } from "../../redux/actions/TenantActions";

// import { notify } from "../../utils/toastNotification";
import { textFieldStyles } from "../../components/Modals/globals";

function AddTenants() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isAdding, setIsAdding] = useState(false);
  const [roles, setRoles] = useState([]);

  const authenticatedUser = useSelector(
    (state) =>
      state.AuthReducer.userProfile ||
      JSON.parse(sessionStorage.getItem("user_profile"))
  );

  const tenants = useSelector((state) => state.TenantReducer.tenants);

  const dialogTextStyles = {
    ...textFieldStyles,
    width: {
      ...textFieldStyles.width,
      md: "auto",
    },
  };

  useEffect(() => {
    getRoles(
      { filterByAuthority: true, authUser: authenticatedUser },
      setRoles
    );
    if (
      check({
        role: authenticatedUser?.my_role?.role,
        action: "user:create:add-tenant-info",
      })
    ) {
      dispatch(getTenants({ page: 1 }));
    }
  }, [authenticatedUser, authenticatedUser?.my_role?.role, dispatch]);

  const validationSchema = Yup.object({
    first_name: validations
      .name("First name")
      .required("First name is required"),
    last_name: validations.name("Last name").required("Last name is required"),
    email: validations.email().required("Email is required"),
    password: validations.password("Password").required("Password is required"),
    group: validations.blank().required("User group is required"),
    bvn: validations.bvn("BVN"),
  });

  return (
    <React.Fragment>
        <section>
        <nav id='quick-nav'>
          <BreadCrumb
            breadcrumbs={[
              <Typography key='1' color='inherit'>
                User Management
              </Typography>,
              <Link href='/user-management/users' key='2' color='inherit'>
                Manage Users
              </Link>,
              <Typography key='3' color='primary.main'>
                Add User
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
          <h3 className='first-text ml-1.5'>Add New Tenant</h3>
          <Formik
            initialValues={{
              first_name: "",
              last_name: "",
              email: "",
              password: "",
              group: "",
              bvn: "",
              phone: "",
              tenant: "",
            }}
            validationSchema={validationSchema}
            onSubmit={async (values, { resetForm }) => {
              const body = {
                first_name: values.first_name,
                last_name: values.last_name,
                email: values.email,
                password: values.password,
                group: values.group,
                tenant: values.tenant || "TN-40",
                bvn: values.bvn,
              };
              // console.log(body);
              setIsAdding(true);
              const response = dispatch(addUser(body));

              response.then((result) => {
                console.log(result);
                setIsAdding(false);
                if (result?.data || result?.success) {
                  resetForm();
                  window.setTimeout(
                    () => navigate("/user-management/users"),
                    1000
                  );
                }
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
                      value={values.email}
                      className={
                        errors.email && touched.email ? "input-error" : null
                      }
                    />
                    {errors.email && touched.email && (
                      <span className='error'>{errors.email}</span>
                    )}
                  </Stack>
                </Stack>

                <div className='buttons mt-8 ml-1.5'>
                  <div className=''>
                    <Button
                      type='submit'
                      value={isAdding ? "Adding..." : "Submit"}
                      disabled={isAdding}
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

export default AddTenants;
