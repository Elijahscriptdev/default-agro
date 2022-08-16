import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
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

function AddUser() {
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
        <nav id="quick-nav">
          <BreadCrumb
            breadcrumbs={[
              <Typography key="1" color="inherit">
                User Management
              </Typography>,
              <Link href="/user-management/users" key="2" color="inherit">
                Manage Users
              </Link>,
              <Typography key="3" color="primary.main">
                Add User
              </Typography>,
            ]}
          />
        </nav>

        <Stack
          direction="column"
          px={4}
          py={3}
          alignItems="flex-start"
          sx={{
            backgroundColor: "#FFF",
            boxShadow: "0px 5px 20px rgba(108, 117, 125, 0.15)",
            borderRadius: "5px",
          }}
        >
          <h3 className="first-text ml-1.5">Add New User</h3>
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
                  window.setTimeout(() => navigate('/user-management/users'), 1000);
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
                  direction="row"
                  justifyContent="space-between"
                  sx={{
                    flexWrap: {
                      xs: "wrap",
                      lg: "nowrap",
                    },
                  }}
                >
                  <Stack
                    direction="column"
                    sx={{
                      mx: 1,
                      width: "100%",
                    }}
                  >
                    <label htmlFor="first_name" className="second-text my-3">
                      First Name <small className="text-red-500">*</small>
                    </label>
                    <TextField
                      id="first_name"
                      sx={dialogTextStyles}
                      name="first_name"
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
                      <span className="error">{errors.first_name}</span>
                    )}
                  </Stack>

                  <Stack
                    direction="column"
                    sx={{
                      mx: 1,
                      width: "100%",
                    }}
                  >
                    <label htmlFor="last_name" className="second-text my-3">
                      Last Name <small className="text-red-500">*</small>
                    </label>
                    {/* <Modaltextfield /> */}
                    <TextField
                      sx={dialogTextStyles}
                      id="last_name"
                      name="last_name"
                      InputProps={{ style: { height: "44px" } }}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.last_name}
                      className={
                        errors.last_name && touched.last_name
                          ? "input-error"
                          : null
                      }
                    />
                    {errors.last_name && touched.last_name && (
                      <span className="error">{errors.last_name}</span>
                    )}
                  </Stack>
                </Stack>

                <Stack
                  direction="row"
                  justifyContent="space-between"
                  sx={{
                    flexWrap: {
                      xs: "wrap",
                      lg: "nowrap",
                    },
                  }}
                >
                  <Stack
                    direction="column"
                    sx={{
                      mx: 1,
                      width: "100%",
                    }}
                  >
                    <label htmlFor="email" className="second-text my-3">
                      Email <small className="text-red-500">*</small>
                    </label>
                    <TextField
                      sx={dialogTextStyles}
                      id="email"
                      name="email"
                      InputProps={{ style: { height: "44px" } }}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      className={
                        errors.email && touched.email ? "input-error" : null
                      }
                    />
                    {errors.email && touched.email && (
                      <span className="error">{errors.email}</span>
                    )}
                  </Stack>

                  <Stack
                    direction="column"
                    sx={{
                      mx: 1,
                      width: "100%",
                    }}
                  >
                    <label htmlFor="phone" className="second-text my-3">
                      Phone Number
                    </label>
                    <TextField
                      sx={dialogTextStyles}
                      id="phone"
                      name="phone"
                      InputProps={{ style: { height: "44px" } }}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phone}
                      className={
                        errors.phone && touched.phone ? "input-error" : null
                      }
                    />
                  </Stack>
                  {errors.phone && touched.phone && (
                    <span className="error">{errors.phone}</span>
                  )}
                </Stack>

                <Stack
                  direction="row"
                  justifyContent="space-between"
                  sx={{
                    flexWrap: {
                      xs: "wrap",
                      lg: "nowrap",
                    },
                  }}
                >
                  <Stack
                    direction="column"
                    sx={{
                      mx: 1,
                      width: {
                        xs: "100%",
                        // md: "auto",
                      },
                    }}
                  >
                    <label htmlFor="password" className="second-text my-3">
                      Password <small className="text-red-500">*</small>
                    </label>
                    <TextField
                      type="password"
                      sx={dialogTextStyles}
                      id="password"
                      name="password"
                      InputProps={{ style: { height: "44px" } }}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      className={
                        errors.password && touched.password
                          ? "input-error"
                          : null
                      }
                    />
                    {errors.password && touched.password && (
                      <span className="error">{errors.password}</span>
                    )}
                  </Stack>

                  <Stack
                    direction="column"
                    sx={{
                      mx: 1,
                      width: "100%",
                    }}
                  >
                    <label htmlFor="group" className="second-text my-3">
                      User Group <small className="text-red-500">*</small>
                    </label>
                    <CustomSelect
                      name="group"
                      id="group"
                      value={values.group}
                      onChange={handleChange}
                      noneLabel={<em>Select Group</em>}
                      iconType="filled"
                      width={{ md: "400px", xs: "100%" }}
                      height="44px"
                      sx={{ backgroundColor: "grey" }}
                      backgroundColor="#F3F3F4"
                      disableshadow="true"
                      options={roles.map((role) => ({
                        value: role.id,
                        name: role.role,
                      }))}
                      className={
                        errors.group && touched.group ? "input-error" : null
                      }
                    />
                    {errors.group && touched.group && (
                      <span className="error">{errors.group}</span>
                    )}
                  </Stack>
                </Stack>

                <Can
                  role={authenticatedUser?.my_role?.role}
                  perform="user:create:add-tenant-info"
                  yes={() => (
                    <Stack
                      direction="column"
                      sx={{
                        mx: 1,
                      }}
                    >
                      <label htmlFor="tenant" className="second-text my-3">
                        Select Tenant
                      </label>
                      <CustomSelect
                        name="tenant"
                        id="tenant"
                        value={values.tenant}
                        onChange={handleChange}
                        noneLabel={<em>Select</em>}
                        iconType="filled"
                        width="100%"
                        height="44px"
                        sx={{ backgroundColor: "grey" }}
                        backgroundColor="#F3F3F4"
                        disableshadow="true"
                        options={tenants.map((eachTenant) => ({
                          value: eachTenant.id,
                          name: eachTenant.name,
                        }))}
                      />
                      {errors.tenant && touched.tenant && (
                        <span className="error">{errors.tenant}</span>
                      )}
                    </Stack>
                  )}
                  no={() => null}
                />

                <h3 style={{ marginTop: "2rem", marginBottom: "0.5rem" }}>
                  Other Information
                </h3>
                <Stack
                  direction="column"
                  sx={{
                    mx: 1,
                    width: {
                      xs: "100%",
                      md: "auto",
                    },
                  }}
                >
                  <label htmlFor="bvn" className="second-text my-3">
                    BVN
                  </label>
                  <TextField
                    sx={dialogTextStyles}
                    id="bvn"
                    name="bvn"
                    InputProps={{ style: { height: "44px" } }}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.bvn}
                    className={errors.bvn && touched.bvn ? "input-error" : null}
                  />
                  {errors.bvn && touched.bvn && (
                    <span className="error">{errors.bvn}</span>
                  )}
                </Stack>

                <div className="buttons mt-8 ml-1.5">
                  <div className="">
                    <Button
                      type="submit"
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

export default AddUser;
