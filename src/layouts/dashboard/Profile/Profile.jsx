import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";

import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { getUserProfile } from "../../../redux/actions/AuthActions";
import CustomAvater from "../../../components/common/UserAvatar";
import Button from "../../../components/common/Button";
import * as Yup from "yup";
import "./Profile.scss"

// const { notify } = require("../../../utils/toastNotification");
// import { textFieldStyles } from "../../../components/Modals/globals";

const textFieldStyles = {
  backgroundColor: "#F3F3F4",
  width: { xl: "500px", xs: "100%" },
  mt: 1,
};

function Profile() {
  const dispatch = useDispatch();
  const authenticatedUser = useSelector(
    (state) =>
      state.AuthReducer.userProfile ||
      JSON.parse(sessionStorage.getItem("user_profile"))
  );
  const isLoading = useSelector((state) => state.AuthReducer.isLoading);
  console.log("loading", isLoading);

  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);

  const [profilePage, setProfilePage] = useState("editProfile");

  return (
    <React.Fragment>
      <section>
        <nav id="quick-nav">
          <span>Profile</span>
        </nav>

        <Stack
          direction="row"
          sx={{
            px: 4,
            py: 5,
            backgroundColor: "white",
            width: "100%",
            minHeight: "400px",
            boxShadow: "0px 5px 20px rgba(108, 117, 125, 0.15)",
            borderRadius: "5px",
            boxSizing: "border-box",
            flexWrap: {
              xs: "wrap",
              lg: "no-wrap",
            },
          }}
        >
          <Stack
            direction="column"
            alignItems="center"
            flexGrow={1}
            sx={{
              mx: { xs: "auto", lg: 1 },
              mb: 4,
              width: "30%",
              minWidth: "300px",
              maxWidth: "600px",
              // border: "1px solid",
              // borderColor: {
              //   xs: "red",
              //   sm: "blue",
              //   md: "green",
              //   lg: "yellow",
              //   xl: "orange",
              // },
            }}
          >
            <CustomAvater
              size="140px"
              fontSize="64px"
              firstname={authenticatedUser?.first_name || ""}
              lastname={authenticatedUser?.last_name || ""}
              avatarUrl="#"
            />
            <Typography fontSize={18} fontWeight={700} mt={2}>{`${
              authenticatedUser?.first_name || "-"
            } ${authenticatedUser?.last_name || "-"}`}</Typography>
            <Typography
              fontSize={16}
              fontWeight={700}
              sx={{
                color: (theme) => theme.palette.primary.main,
              }}
            >
              {authenticatedUser?.my_role?.role || "-"}
            </Typography>
            <Typography fontSize={14} fontWeight={600}>
              {authenticatedUser?.mobile || "-"}
            </Typography>
            <Typography fontSize={14} fontWeight={600}>
              {authenticatedUser?.email || "-"}
            </Typography>
          </Stack>

          <Stack
            direction="column"
            alignItems="center"
            flexGrow={1}
            sx={{ mx: 1 }}
          >
            <Stack
              direction="row"
              spacing={2}
              sx={{
                backgroundColor: (theme) => theme.palette.primary.main,
                p: 1,
                width: "100%",
              }}
            >
              <Button
                value="Edit Profile"
                sx={{
                  backgroundColor:profilePage == "editProfile"? "white":null,
                  color:profilePage == "editProfile"? "black":null,
                }}
                onClick={()=>setProfilePage("editProfile")}
              />
              <Button value="Change Password"
                 sx={{
                  backgroundColor:profilePage == "changePassword"? "white":null,
                  color:profilePage == "changePassword"? "black":null,
                }}
               onClick={()=>setProfilePage("changePassword")}/>
            </Stack>

            <Stack
              direction="column"
              flexGrow={1}
              sx={{
                width: "100%",
              }}
            >
              {profilePage == "editProfile" ? (
                <Formik
                  initialValues={{
                    first_name: authenticatedUser?.first_name || "",
                    last_name: authenticatedUser?.last_name || "",
                    mobile: authenticatedUser?.mobile || "",
                    email: authenticatedUser?.email || "",
                  }}
                  validate={(values) => {
                    const errors = {};
                    if (!values.first_name) {
                      errors.first_name = "First name cannot be empty";
                    } else if (!/[A-Za-z]{3,}/i.test(values.first_name)) {
                      errors.first_name = "Invalid first name";
                    }

                    if (!values.last_name) {
                      errors.last_name = "Last name cannot be empty";
                    } else if (!/[A-Za-z]{3,}/i.test(values.last_name)) {
                      errors.last_name = "Invalid last name";
                    }

                    // if (!values.mobile) {
                    //   errors.mobile = "Phone number is required";
                    // }

                    if (!values.email) {
                      errors.email = "Email address is required";
                    }
                    return errors;
                  }}
                  onSubmit={async (values, { setSubmitting }) => {
                    const body = {
                      first_name: values.first_name,
                      last_name: values.last_name,
                      mobile: values.mobile,
                      email: values.email,
                    };
                    console.log(body);
                    // dispatch(addSubCluster(body));
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
                    <form onSubmit={handleSubmit} className="profile-form">
                      <Stack direction="row" justifyContent="space-between">
                        <Stack direction="column" mt={2}>
                          <label htmlFor="first_name_input">First Name</label>
                          <TextField
                            id="first_name_input form-inputs"
                            name="first_name"
                            value={values.first_name}
                            sx={textFieldStyles}
                            InputProps={{ style: { height: "44px" } }}
                            onBlur={handleBlur}
                            onChange={handleChange}
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

                        <Stack direction="column" mt={2}>
                          <label htmlFor="last_name_input">Last Name</label>
                          <TextField
                            id="last_name_input  form-inputs"
                            name="last_name"
                            value={values.last_name}
                            sx={textFieldStyles}
                            InputProps={{ style: { height: "44px" } }}
                            onBlur={handleBlur}
                            onChange={handleChange}
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

                      <Stack direction="row" justifyContent="space-between">
                        <Stack direction="column" mt={2}>
                          <label htmlFor="mobile_input">Phone Number</label>
                          <TextField
                            id="mobile_input  form-inputs"
                            name="mobile"
                            value={values.mobile}
                            sx={textFieldStyles}
                            InputProps={{ style: { height: "44px" } }}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            className={
                              errors.mobile && touched.mobile
                                ? "input-error"
                                : null
                            }
                          />
                          {errors.mobile && touched.mobile && (
                            <span className="error">{errors.mobile}</span>
                          )}
                        </Stack>

                        <Stack direction="column" mt={2}>
                          <label htmlFor="email_input">Email</label>
                          <TextField
                            id="email_input  form-inputs"
                            name="email"
                            value={values.email}
                            sx={textFieldStyles}
                            InputProps={{ style: { height: "44px" } }}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            className={
                              errors.email && touched.email
                                ? "input-error"
                                : null
                            }
                          />
                          {errors.email && touched.email && (
                            <span className="error">{errors.email}</span>
                          )}
                        </Stack>
                      </Stack>

                      <Box mt={4}>
                        <Button type="submit" value="Submit" />
                      </Box>
                    </form>
                  )}
                </Formik>
              ) : 
              <Formik
              initialValues={{
                oldpassword:"",
                newpassword:"",
                confirmpassword:"",
              }}
              validationSchema={Yup.object({
                oldpassword: Yup.string().required("old password is required"),
                newpassword: Yup.string().required("new password is required"),
                confirmpassword: Yup.string()
                  .required("you need to renter your password")
                  .oneOf([Yup.ref("newpassword"), null], "Password must match with new password"),
              })}
              // onSubmit={async (values, { setSubmitting }) => {
              //   const body = {
              //     first_name: values.first_name,
              //     last_name: values.last_name,
              //     mobile: values.mobile,
              //     email: values.email,
              //   };
              //   console.log(body);
                // dispatch(addSubCluster(body));
              // }}
              
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
              }) => (
                <form onSubmit={handleSubmit} className="profile-form">
                  <Stack direction="row" justifyContent="space-between">
                    <Stack direction="column" mt={2}>
                      <label htmlFor="oldpassword">Old Password</label>
                      <TextField
                        id="oldpassword  form-inputs"
                        name="oldpassword"
                        value={values.oldpassword}
                        sx={textFieldStyles}
                        InputProps={{ style: { height: "44px" } }}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        className={
                          errors.oldpassword && touched.oldpassword
                            ? "input-error"
                            : null
                        }
                      />
                      {errors.oldpassword && touched.oldpassword && (
                        <span className="error">{errors.oldpassword}</span>
                      )}
                    </Stack>

                    <Stack direction="column" mt={2}>
                      <label htmlFor="last_name_input">New Password</label>
                      <TextField
                        id="newpassword  form-inputs"
                        name="newpassword"
                        value={values.newpassword}
                        sx={textFieldStyles}
                        InputProps={{ style: { height: "44px" } }}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        className={
                          errors.newpassword && touched.newpassword
                            ? "input-error"
                            : null
                        }
                      />
                      {errors.newpassword && touched.newpassword && (
                        <span className="error">{errors.newpassword}</span>
                      )}
                    </Stack>
                  </Stack>

                  <Stack direction="row" justifyContent="space-between">
                    <Stack direction="column" mt={2}>
                      <label htmlFor="mobile_input">Confirm Password</label>
                      <TextField
                        id="confirmpassword  form-inputs"
                        name="confirmpassword"
                        value={values.confirmpassword}
                        sx={textFieldStyles}
                        InputProps={{ style: { height: "44px" } }}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        className={
                          errors.confirmpassword && touched.confirmpassword
                            ? "input-error"
                            : null
                        }
                      />
                      {errors.confirmpassword && touched.confirmpassword && (
                        <span className="error">{errors.confirmpassword}</span>
                      )}
                    </Stack>

                  </Stack>

                  <Box mt={4}>
                    <Button type="submit" value="Submit" />
                  </Box>
                </form>
              )}
            </Formik>
            }
            </Stack>
          </Stack>
        </Stack>
      </section>
    </React.Fragment>
  );
}

export default Profile;
