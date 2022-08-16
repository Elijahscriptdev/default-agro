import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { Formik } from "formik";
import * as Yup from "yup";

import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import Button from "../../../components/common/Button";
import CustomSelect from "../../../components/common/CustomSelect";
import DialogHeader from "../../../components/Modals/DialogHeader";

import { validations } from "../../../utils/validations";
// import { BASE_URL } from '../../../configs/api';

import {
  textFieldStyles,
  dialogContentStyles,
} from "../../../components/Modals/globals";

import {
  addUser,
  deleteUser,
  updateUser,
  bulkUploadFarmers,
  bulkUploadUsers,
  deleteSourcingAgent,
  // downloadUserTemplate,
  // downloadFarmerTemplate
} from "../../../redux/actions/UserManagementActions";

import FarmerUploadTemplate from "../../../data/downloads/FARMER UPLOAD SAMPLE.xlsx";
import UserUploadTemplate from "../../../data/downloads/USER UPLOAD SAMPLE.xlsx";

const dialogTextStyles = {
  ...textFieldStyles,
  width: {
    ...textFieldStyles.width,
    md: "400px",
  },
};

export const AddNewUser = ({ closeHandler, roles }) => {
  const dispatch = useDispatch();
  let [isAdding, setIsAdding] = useState(false);
  // console.log(roles);
  const validationSchema = Yup.object({
    first_name: validations
      .name("First name")
      .required("First name is required"),
    last_name: validations.name("Last name").required("Last name is required"),
    email: validations.email().required("Email is required"),
    password: validations.password("Password").required("Password is required"),
    group: validations.blank().required("User group is required"),
    bvn: validations
      .blank()
      .matches(/[0-9]/g, "Invalid BVN")
      .length(11, "BVN must be 11 digits"),
  });
  return (
    <Box sx={dialogContentStyles}>
      <DialogHeader title="Add User" closeHandler={closeHandler} />

      <Formik
        initialValues={{
          first_name: "",
          last_name: "",
          email: "",
          password: "",
          group: "",
          bvn: "",
          phone: "",
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { resetForm }) => {
          const body = {
            first_name: values.first_name,
            last_name: values.last_name,
            email: values.email,
            password: values.password,
            group: values.group,
          };
          // console.log(body);
          setIsAdding(true);
          const response = dispatch(addUser(body));

          response.then(() => {
            setIsAdding(false);
            resetForm();
            closeHandler();
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
          <form onSubmit={handleSubmit}>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{
                flexWrap: {
                  xs: "wrap",
                  md: "nowrap",
                },
              }}
            >
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
              </Stack>

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
                    errors.last_name && touched.last_name ? "input-error" : null
                  }
                />
              </Stack>
            </Stack>

            <Stack direction="row" justifyContent="space-between">
              <Stack direction="column" sx={{ mx: 1 }}>
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
              </Stack>

              <Stack direction="column" sx={{ mx: 1 }}>
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
            </Stack>

            <Stack direction="row" justifyContent="space-between">
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
                    errors.password && touched.password ? "input-error" : null
                  }
                />
              </Stack>

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
                />
              </Stack>
            </Stack>

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
            </Stack>

            <DialogActions>
              <div className="buttons mt-8">
                <div className="">
                  <Button
                    type="submit"
                    value={isAdding ? "Adding..." : "Submit"}
                  />
                </div>
              </div>
            </DialogActions>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export const UploadUsers = ({ closeHandler }) => {
  const dispatch = useDispatch();
  const [isAdding, setIsAdding] = useState(false);
  const [uploadFile, setUploadFile] = useState(null);
  const [doneSelecting, setDoneSelecting] = useState(false);

  const fileHandler = (handleChange) => (e) => {
    setDoneSelecting(true);
    setUploadFile(e.target.files[0]);
    handleChange(e);
  };

  return (
    <Box sx={dialogContentStyles}>
      <DialogHeader
        title="Upload Excel File (.xls or .xlsx)"
        closeHandler={closeHandler}
      />

      <Formik
        initialValues={{
          upload: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.upload && doneSelecting) {
            errors.upload = "File is missing!";
          } else if (!/.+(\.csv|\.xlsx|\.xls)$/gi.test(values.upload) && doneSelecting) {
            errors.upload = "The upload must be a file of type: csv, xlsx, xls.";
          }
          return errors;
        }}
        onSubmit={async (values, { resetForm }) => {
          const body = {
            upload: uploadFile,
          };
          // console.log(body);
          setIsAdding(true);
          const response = dispatch(bulkUploadUsers(body));

          response.then(() => {
            setIsAdding(false);
            resetForm();
            closeHandler();
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
          <form onSubmit={handleSubmit}>
            <Stack direction="column">
              <TextField
                sx={dialogTextStyles}
                id="upload"
                name="upload"
                type="file"
                InputProps={{ style: { height: "44px" } }}
                onChange={fileHandler(handleChange)}
                onBlur={handleBlur}
                value={values.upload}
                className={
                  errors.upload && touched.upload ? "input-error" : null
                }
              />
              {errors.upload && touched.upload && (
                <span className="error">{errors.upload}</span>
              )}
            </Stack>

            <DialogActions>
              <div className="buttons mt-8 justify-between">
                <div className="mr-3">
                  <Button
                    value="Cancel"
                    onClick={closeHandler}
                    sx={{
                      color: "#A9A9A9",
                      backgroundColor: "white",
                    }}
                  />
                </div>

                <div className="flex flex-row">
                  <div className="mr-3">
                    <Button
                      type="submit"
                      className="mx-1"
                      value={isAdding ? "Uploading..." : "Upload"}
                    />
                  </div>

                  <div className="mr-3">
                    <Button
                      // onClick={downloadHandler}
                      href={UserUploadTemplate}
                      download="USER_UPLOAD_SAMPLE.xlsx"
                      className="mx-1"
                      value="Download Template"
                    />
                  </div>
                </div>
              </div>
            </DialogActions>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export const EditUser = ({ closeHandler, data, roles }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  const formValidationSchema = Yup.object({
    first_name: validations
      .name("First name")
      .required("First name is required"),
    last_name: validations.name("Last name").required("Last name is required"),
    email: validations.email().required("Email is required"),
    mobile: validations.mobile("Phone number"),
    bvn: validations.bvn("BVN"),
    group: validations.blank().required("User group is required"),
  });

  return (
    <Box sx={dialogContentStyles}>
      <DialogHeader title="Edit User" closeHandler={closeHandler} />

      <Formik
        initialValues={{
          first_name: data.first_name || "",
          last_name: data.last_name || "",
          email: data.email || "",
          mobile: data.mobile || "",
          bvn: data.bvn || "",
          group: data.group || "",
        }}
        validationSchema={formValidationSchema}
        onSubmit={async (values, { resetForm }) => {
          const body = {
            first_name: values.first_name,
            last_name: values.last_name,
            email: values.email,
            group: values.group,
          };
          // console.log(body);
          setIsEditing(true);
          const response = dispatch(updateUser(data.id, body));

          response.then(() => {
            setIsEditing(false);
            resetForm();
            closeHandler();
          });
          // dispatch(login(body, navigate));
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
          <form onSubmit={handleSubmit}>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{
                flexWrap: {
                  xs: "wrap",
                  md: "nowrap",
                },
              }}
            >
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
                <label htmlFor="first_name" className="second-text my-3">
                  First Name
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
              </Stack>

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
                <label htmlFor="last_name" className="second-text my-3">
                  Last Name
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
                    errors.last_name && touched.last_name ? "input-error" : null
                  }
                />
              </Stack>
            </Stack>

            <Stack direction="row" justifyContent="space-between">
              <Stack direction="column" sx={{ mx: 1 }}>
                <label htmlFor="email" className="second-text my-3">
                  Email
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
              </Stack>

              <Stack direction="column" sx={{ mx: 1 }}>
                <label htmlFor="mobile" className="second-text my-3">
                  Phone Number
                </label>
                <TextField
                  sx={dialogTextStyles}
                  id="mobile"
                  name="mobile"
                  InputProps={{ style: { height: "44px" } }}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.mobile}
                  className={
                    errors.mobile && touched.mobile ? "input-error" : null
                  }
                />
              </Stack>
            </Stack>

            <Stack direction="row" justifyContent="space-between">
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
              </Stack>

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
                <label htmlFor="group" className="second-text my-3">
                  User Group
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
                  disableshadow={true}
                  options={roles.map((role) => ({
                    value: role.id,
                    name: role.role,
                  }))}
                />
              </Stack>
            </Stack>

            <DialogActions>
              <div className="buttons mt-8">
                <div className="">
                  <Button
                    type="submit"
                    value={isEditing ? "Updating User..." : "Submit"}
                  />
                </div>
              </div>
            </DialogActions>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export const DeleteUser = ({ closeHandler, data }) => {
  const dispatch = useDispatch();
  let [isDeleting, setIsDeleting] = useState(false);

  const deleteHandler = (e) => {
    setIsDeleting(true);
    const response = dispatch(deleteUser(data?.id));
    response.then(() => {
      setIsDeleting(false);
      closeHandler(e);
    });
  };

  return (
    <div className="">
      <h2
        className="second-text my-1 text-center"
        style={{ maxWidth: "300px" }}
      >
        Are you sure you want to delete this user?
      </h2>

      <div className="buttons mt-2 justify-evenly">
        <Button
          value="Cancel"
          onClick={closeHandler}
          sx={{
            color: "#A9A9A9",
            backgroundColor: "white",
          }}
        />
        <Button
          value={!isDeleting ? "Delete" : "Deleting..."}
          disabled={isDeleting}
          onClick={deleteHandler}
          sx={{
            color: "white",
            backgroundColor: "red",
          }}
        />
      </div>
    </div>
  );
};

export const DeleteSourcingAgent = ({ closeHandler, data }) => {
  const dispatch = useDispatch();
  let [isDeleting, setIsDeleting] = useState(false);

  const deleteHandler = (e) => {
    setIsDeleting(true);
    const response = dispatch(deleteSourcingAgent(data?.id));
    response.then(() => {
      setIsDeleting(false);
      closeHandler(e);
    });
  };

  return (
    <div className="">
      <h2
        className="second-text my-1 text-center"
        style={{ maxWidth: "300px" }}
      >
        Are you sure you want to delete this sourcing agent?
      </h2>

      <div className="buttons mt-2 justify-evenly">
        <Button
          value="Cancel"
          onClick={closeHandler}
          sx={{
            color: "#A9A9A9",
            backgroundColor: "white",
          }}
        />
        <Button
          value={!isDeleting ? "Delete" : "Deleting..."}
          disabled={isDeleting}
          onClick={deleteHandler}
          sx={{
            color: "white",
            backgroundColor: "red",
          }}
        />
      </div>
    </div>
  );
};

export const UploadFarmer = ({ closeHandler }) => {
  const dispatch = useDispatch();
  const [isAdding, setIsAdding] = useState(false);
  const [uploadFile, setUploadFile] = useState(null);
  const [doneSelecting, setDoneSelecting] = useState(false);

  const fileHandler = (handleChange) => (e) => {
    setDoneSelecting(true);
    setUploadFile(e.target.files[0]);
    handleChange(e);
  };

  // console.log(roles);
  return (
    <Box sx={dialogContentStyles}>
      <DialogHeader
        title="Upload Excel File (.xls or .xlsx)"
        closeHandler={closeHandler}
      />

      <Formik
        initialValues={{
          upload: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.upload && doneSelecting) {
            errors.upload = "File is missing!";
          } else if (!/.+(\.csv|\.xlsx|\.xls)$/gi.test(values.upload) && doneSelecting) {
            errors.upload =
              "The upload must be a file of type: csv, xlsx, xls.";
          }
          return errors;
        }}
        onSubmit={async (values, { resetForm }) => {
          const body = {
            upload: uploadFile,
          };
          // console.log(body);
          setIsAdding(true);
          const response = dispatch(bulkUploadFarmers(body));

          response.then(() => {
            setIsAdding(false);
            resetForm();
            closeHandler();
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
          <form onSubmit={handleSubmit}>
            <Stack direction="column">
              <TextField
                sx={dialogTextStyles}
                id="upload"
                name="upload"
                type="file"
                InputProps={{ style: { height: "44px" } }}
                onChange={fileHandler(handleChange)}
                onBlur={handleBlur}
                value={values.upload}
                className={
                  errors.upload && touched.upload ? "input-error" : null
                }
              />
              {errors.upload && touched.upload && (
                <span className="error">{errors.upload}</span>
              )}
            </Stack>

            <DialogActions>
              <div className="buttons mt-8 justify-between">
                <div className="mr-3">
                  <Button
                    value="Cancel"
                    onClick={closeHandler}
                    sx={{
                      color: "#A9A9A9",
                      backgroundColor: "white",
                    }}
                  />
                </div>

                <div className="flex flex-row">
                  <div className="mr-3">
                    <Button
                      type="submit"
                      className="mx-1"
                      value={isAdding ? "Uploading..." : "Upload"}
                    />
                  </div>

                  <div className="mr-3">
                    <Button
                      // onClick={downloadHandler}
                      href={FarmerUploadTemplate}
                      download="FARMER_UPLOAD_SAMPLE.xlsx"
                      className="mx-1"
                      value="Download Template"
                    />
                  </div>
                </div>
              </div>
            </DialogActions>
          </form>
        )}
      </Formik>
    </Box>
  );
};
