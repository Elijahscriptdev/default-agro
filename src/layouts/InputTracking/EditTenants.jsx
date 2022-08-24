import { Box, SliderTrack, Stack, TextField, Typography } from "@mui/material";
import BreadCrumb from "../../components/common/CustomBreadCrumbs";
import React from "react";
import "./EditTenants.scss";
import logo from "./../../assets/dvalco.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "./../../components/common/Button";

const EditTenants = () => {
  return (
    <div className="edit-tenants">
      <nav id="quick-nav">
        <BreadCrumb
          breadcrumbs={[
            <Typography key="1" color="inherit">
              Settings
            </Typography>,
            <Typography key="2" color="primary.main">
              Developer
            </Typography>,
          ]}
        />
      </nav>

      <Box className="edit-tenant-container">
        <Typography className="edit-tenant-top">Edit Tenant</Typography>
        <Stack
          sx={{
            display: "flex",
            flexDirection: { sm: "column", lg: "row" },
          }}
        >
          <Box className="tenant-logo">
            <Box component="img" src={logo} />
          </Box>
          <Box className="edit-tenant-form">
            <Formik
              initialValues={{
                name: "",
                description: "",
                email: "",
                sms: "",
              }}
              validationSchema={Yup.object({
                name: Yup.string().required("name is required"),
                description: Yup.string().required("description is required"),
                email: Yup.string()
                  .email("invalid email")
                  .required("email is required"),
              })}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit}>
                  <Stack direction="column">
                    <Stack direction="column" mt={2}>
                      <label htmlFor="name_input"> Name</label>
                      <TextField
                        id="name_input form-inputs"
                        name="name"
                        value={values.name}
                        sx={{
                          backgroundColor: "#F3F3F4",
                          mt: 1,
                        }}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        className={
                          errors.name && touched.name ? "input-error" : null
                        }
                      />
                      {errors.name && touched.name && (
                        <span className="error">{errors.name}</span>
                      )}
                    </Stack>

                    <Stack direction="column" mt={2}>
                      <label htmlFor="description_input"> Description</label>
                      <TextField
                        id="description_input form-inputs"
                        name="description"
                        value={values.description}
                        sx={{
                          backgroundColor: "#F3F3F4",
                          mt: 1,
                        }}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        className={
                          errors.description && touched.description
                            ? "input-error"
                            : null
                        }
                      />
                      {errors.description && touched.description && (
                        <span className="error">{errors.description}</span>
                      )}
                    </Stack>

                    <Stack direction="column" mt={2}>
                      <label htmlFor="email_input"> Email</label>
                      <TextField
                        id="email_input form-inputs"
                        name="email"
                        value={values.email}
                        sx={{
                          backgroundColor: "#F3F3F4",
                          mt: 1,
                        }}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        className={
                          errors.email && touched.email ? "input-error" : null
                        }
                      />
                      {errors.email && touched.email && (
                        <span className="error">{errors.email}</span>
                      )}
                    </Stack>

                    <Stack direction="column" mt={2}>
                      <label htmlFor="sms_input"> SMS Sender ID</label>
                      <TextField
                        id="sms_input form-inputs"
                        name="sms"
                        value={values.sms}
                        sx={{
                          backgroundColor: "#F3F3F4",
                          mt: 1,
                        }}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        className={
                          errors.sms && touched.sms ? "input-error" : null
                        }
                      />
                      {errors.sms && touched.sms && (
                        <span className="error">{errors.sms}</span>
                      )}
                    </Stack>

                    <Box mt={4}>
                      <Button type="submit" value="Submit" />
                    </Box>
                  </Stack>
                </form>
              )}
            </Formik>
          </Box>
        </Stack>
      </Box>
    </div>
  );
};

export default EditTenants;
