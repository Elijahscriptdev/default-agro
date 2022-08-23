import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Formik } from "formik";

import * as Yup from "yup";
import { validations } from "../../../utils/validations";

import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import Switch from "@mui/material/Switch";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Checkbox from "@mui/material/Checkbox";

import Button from "../../../components/common/Button";
import CustomSelect from "../../../components/common/CustomSelect";
import DialogHeader from "../../../components/Modals/DialogHeader";

import {
  textFieldStyles,
  dialogContentStyles,
} from "../../../components/Modals/globals";

import {
  addCropProfile,
  updateCropProfile,
  deleteCropProfile,
  addNewCategory,
  addNewTask,
  addNewSeason,
  deleteTask,
  toggleSeason,
  // deleteTask,
} from "../../../redux/actions/ConfigurationsActions";

export const AddCropProfile = ({ closeHandler }) => {
  const dispatch = useDispatch();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validationSchema = Yup.object({
    crop_name: validations.name("Crop name").required("Crop name is required"),
    yield: validations.number("Yield").required("Yield is required"),
    start_season: Yup.boolean(),
    season_name: validations.name("Season name").when("start_season", {
      is: true,
      then: validations.blank().required("Season name is required"),
      // otherwise:
    }),
  });

  return (
    <Box sx={dialogContentStyles}>
      <DialogHeader title={"Add Crop Profile"} closeHandler={closeHandler} />

      <Formik
        initialValues={{
          crop_name: "",
          yield: 0,
          start_season: false,
          season_name: "",
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { resetForm }) => {
          const body = {
            crop_name: values.crop_name,
            yield: values.yield,
            start_season: values.start_season,
            // season_name: values.season_name,
          };

          if (values.start_season === true) {
            body.season_name = values.season_name;
          }
          // console.log(body);
          setIsSubmitting(true);
          const response = dispatch(addCropProfile(body));
          response.then(() => {
            setIsSubmitting(false);
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
              <label htmlFor="crop_name" className="second-text my-3">
                Crop Name <small className="text-red-500">*</small>
              </label>
              <TextField
                sx={textFieldStyles}
                id="crop_name"
                name="crop_name"
                InputProps={{ style: { height: "44px" } }}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.crop_name}
                className={
                  errors.crop_name && touched.crop_name ? "input-error" : null
                }
              />
              {errors.crop_name && touched.crop_name && (
                <span className="error">{errors.crop_name}</span>
              )}
            </Stack>

            <Stack direction="column">
              <label htmlFor="yield" className="second-text my-3">
                Yield Forecast (Tonnes Per Ha){" "}
                <small className="text-red-500">*</small>
              </label>
              <TextField
                sx={textFieldStyles}
                id="yield"
                name="yield"
                InputProps={{ style: { height: "44px" } }}
                type="number"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.yield}
                className={errors.yield && touched.yield ? "input-error" : null}
              />
              {errors.yield && touched.yield && (
                <span className="error">{errors.yield}</span>
              )}
            </Stack>

            <Stack direction="column">
              <label htmlFor="start_season" className="second-text mt-2">
                Start Season
              </label>
              <div className="switch">
                <Switch
                  id="start_season"
                  name="start_season"
                  checked={values.start_season}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
            </Stack>

            <Stack direction="column">
              <label htmlFor="season_name" className="second-text my-1.5">
                Season Name
              </label>
              <TextField
                sx={textFieldStyles}
                id="season_name"
                name="season_name"
                InputProps={{ style: { height: "44px" } }}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.season_name}
                className={
                  errors.season_name && touched.season_name
                    ? "input-error"
                    : null
                }
              />
              {errors.season_name && touched.season_name && (
                <span className="error">{errors.season_name}</span>
              )}
            </Stack>

            <DialogActions>
              <div className="buttons mt-8">
                <div className="">
                  <Button
                    value="Cancel"
                    onClick={closeHandler}
                    sx={{
                      fontSize: "14px",
                      color: "#A9A9A9",
                      backgroundColor: "white",
                      borderRadius: "5px",
                    }}
                  />
                </div>
                <div className="mx-6">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    value={isSubmitting ? "Adding..." : "Submit"}
                    sx={{
                      fontSize: "14px",
                      borderRadius: "5px",
                    }}
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

export const EditCropProfile = ({ closeHandler, data }) => {
  const dispatch = useDispatch();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validationSchema = Yup.object({
    crop_name: validations.name("Crop name").required("Crop name is required"),
    yield: validations.number("Yield").required("Yield is required"),
  });

  return (
    <Box sx={dialogContentStyles}>
      <DialogHeader title="Edit Crop Profile" closeHandler={closeHandler} />

      <Formik
        initialValues={{
          crop_name: data.crop_name || "",
          yield: data.yield || 0,
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { resetForm }) => {
          const body = {
            crop_id: data.id,
            crop_name: values.crop_name,
            yield: values.yield,
          };
          // console.log(body);
          setIsSubmitting(true);
          const response = dispatch(updateCropProfile(body));
          response.then(() => {
            setIsSubmitting(false);
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
              <label htmlFor="crop_name" className="second-text my-3">
                Crop Name
              </label>
              <TextField
                sx={textFieldStyles}
                id="crop_name"
                name="crop_name"
                InputProps={{ style: { height: "44px" } }}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.crop_name}
                className={
                  errors.crop_name && touched.crop_name ? "input-error" : null
                }
              />
              {errors.crop_name && touched.crop_name && (
                <span className="error">{errors.crop_name}</span>
              )}
            </Stack>

            <Stack direction="column">
              <label htmlFor="yield" className="second-text my-3">
                Yield Forecast (Tonnes Per Ha)
              </label>
              <TextField
                sx={textFieldStyles}
                id="yield"
                name="yield"
                InputProps={{ style: { height: "44px" } }}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.yield}
                className={errors.yield && touched.yield ? "input-error" : null}
              />
              {errors.yield && touched.yield && (
                <span className="error">{errors.yield}</span>
              )}
            </Stack>

            <DialogActions>
              <div className="buttons mt-8">
                <div className="">
                  <Button
                    value="Cancel"
                    onClick={closeHandler}
                    sx={{
                      fontSize: "14px",
                      color: "#A9A9A9",
                      backgroundColor: "white",
                      borderRadius: "5px",
                    }}
                  />
                </div>
                <div className="mx-6">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    value={isSubmitting ? "Updating..." : "Submit"}
                    sx={{
                      fontSize: "14px",
                      borderRadius: "5px",
                    }}
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

export const DeleteCropProfile = ({ closeHandler, data }) => {
  const dispatch = useDispatch();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const deleteHandler = (e) => {
    setIsSubmitting(true);
    const response = dispatch(deleteCropProfile(data?.id));
    response.then(() => {
      setIsSubmitting(false);
      closeHandler(e);
    });
  };

  return (
    <div className="">
      <h2
        className="second-text my-1 text-center"
        style={{ maxWidth: "300px" }}
      >
        Are you sure you wanna delete this crop profile?
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
          value={isSubmitting ? "Deleting..." : "Delete"}
          onClick={deleteHandler}
          disabled={isSubmitting}
          sx={{
            color: "white",
            backgroundColor: "red",
          }}
        />
      </div>
    </div>
  );
};

export const AddCategory = ({
  closeHandler,
  cropProfiles = [],
  activityCategories = [],
}) => {
  const dispatch = useDispatch();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validationSchema = Yup.object({
    category_name: validations
      .name("Category name")
      .required("Category name is required"),
    crop_profile_id: validations.blank().required("Crop profile is required"),
  });

  return (
    <Box sx={dialogContentStyles}>
      <DialogHeader title={"Add Category"} closeHandler={closeHandler} />
      <Formik
        initialValues={{
          category_name: "",
          crop_profile_id: "",
          // task: ""
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { resetForm }) => {
          const categoryBody = {
            category_name: values.category_name,
            crop_profile_id: values.crop_profile_id,
          };

          // const taskBody = {
          //   task: values.task,
          //   crop_profile_id: values.crop_profile_id,
          // };

          setIsSubmitting(true);
          const response1 = dispatch(addNewCategory(categoryBody));
          // const response2 = dispatch(addNewTask(taskBody));
          response1.then(() => {
            setIsSubmitting(false);
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
              <label htmlFor="category_name" className="second-text mb-4 mt-6">
                Category Name <small className="text-red-500">*</small>
              </label>
              <TextField
                sx={textFieldStyles}
                id="category_name"
                name="category_name"
                InputProps={{ style: { height: "44px" } }}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.category_name}
                className={
                  errors.category_name && touched.category_name
                    ? "input-error"
                    : null
                }
              />
              {errors.category_name && touched.category_name && (
                <span className="error">{errors.category_name}</span>
              )}
            </Stack>

            <Stack direction="column">
              <label htmlFor="crop_profile_id" className="second-text my-4">
                Crop Profile <small className="text-red-500">*</small>
              </label>
              <CustomSelect
                id="crop_profile_id"
                name="crop_profile_id"
                onChange={handleChange}
                onBlur={handleBlur}
                noneLabel={<em>Select Crop</em>}
                options={cropProfiles.map((item) => ({
                  name: item.crop_name,
                  value: item.id,
                }))}
                iconType="filled"
                width={{ md: "478px", xs: "100%" }}
                height="44px"
                sx={{ backgroundColor: "grey" }}
                backgroundColor="#F3F3F4"
                disableshadow="true"
                value={values.crop_profile_id}
                className={
                  errors.crop_profile_id && touched.crop_profile_id
                    ? "input-error"
                    : null
                }
              />
              {errors.crop_profile_id && touched.crop_profile_id && (
                <span className="error">{errors.crop_profile_id}</span>
              )}
            </Stack>

            {/* <Stack direction="column">
              <label htmlFor="task" className="second-text mt-4 mb-3">
                Tasks
              </label>
              <CustomSelect
                id="task"
                name="task"
                onChange={handleChange}
                onBlur={handleBlur}
                noneLabel={<em>Select Task</em>}
                options={[]}
                iconType="filled"
                width={{ md: "478px", xs: "100%" }}
                height="44px"
                sx={{ backgroundColor: "grey" }}
                backgroundColor="#F3F3F4"
                disableshadow="true"
              />
              {errors.task && touched.task && (
                <span className="error">{errors.task}</span>
              )}
            </Stack> */}

            <div className="buttons mt-8">
              <div className="">
                <Button
                  value="Cancel"
                  onClick={closeHandler}
                  sx={{
                    fontSize: "14px",
                    color: "#A9A9A9",
                    backgroundColor: "white",
                    borderRadius: "5px",
                  }}
                />
              </div>
              <div className="mx-6">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  value={isSubmitting ? "Adding..." : "Submit"}
                  sx={{
                    fontSize: "14px",
                    borderRadius: "5px",
                  }}
                />
              </div>
            </div>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export const EditCategory = ({ closeHandler, data }) => {
  // const dispatch = useDispatch()
  // const [isSubmitting, setIsSubmitting] = useState(false);

  const validationSchema = Yup.object({
    category: validations
      .name("Category name")
      .required("Category name is required"),
  });

  return (
    <Box sx={dialogContentStyles}>
      <DialogHeader title={"Edit Category"} closeHandler={closeHandler} />

      <Formik
        initialValues={{
          category: data.category || "",
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { resetForm }) => {
          const body = {
            category: values.category,
          };
          console.log(body);

          // setIsSubmitting(true);
          // const response = dispatch(editCategory(body));
          // response
          //   .then(() => {
          //     setIsSubmitting(false);
          //     resetForm();
          //     closeHandler();
          //   })
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
              <label htmlFor="category" className="second-text mb-4 mt-6">
                Category Name
              </label>
              <TextField
                id="category"
                name="category"
                sx={textFieldStyles}
                InputProps={{ style: { height: "44px" } }}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.category}
                className={
                  errors.category && touched.category ? "input-error" : null
                }
              />
              {errors.category && touched.category && (
                <span className="error">{errors.category}</span>
              )}
            </Stack>

            <Stack direction="column">
              <label htmlFor="crop_profile_id" className="second-text my-3">
                Crop Profile
              </label>
              <CustomSelect
                id="crop_profile_id"
                name="crop_profile_id"
                noneLabel={<em>Select Crop</em>}
                iconType="filled"
                width={{ md: "478px", xs: "100%" }}
                height="44px"
                sx={{ backgroundColor: "grey" }}
                backgroundColor="#F3F3F4"
                disableshadow="true"
              />
              {errors.crop_profile_id && touched.crop_profile_id && (
                <span className="error">{errors.crop_profile_id}</span>
              )}
            </Stack>

            <div className="buttons mt-8">
              <div className="">
                <Button
                  value="Cancel"
                  onClick={closeHandler}
                  sx={{
                    fontSize: "14px",
                    color: "#A9A9A9",
                    backgroundColor: "white",
                    borderRadius: "5px",
                  }}
                />
              </div>
              <div className="mx-6">
                <Button
                  type="submit"
                  // disabled={isSubmitting}
                  value="Submit"
                  sx={{
                    fontSize: "14px",
                    borderRadius: "5px",
                  }}
                />
              </div>
            </div>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export const DeleteCategory = ({ closeHandler }) => {
  // const dispatch = useDispatch()
  const [isSubmitting] = useState(false);

  const deleteHandler = (e) => {
    // setIsSubmitting(true);
    // const response = dispatch(deleteCategory(data?.id));
    // response
    //   .then(() => {
    //     setIsSubmitting(false);
    closeHandler(e);
    //   })
  };

  return (
    <div className="">
      <h2
        className="second-text my-1 text-center"
        style={{ maxWidth: "300px" }}
      >
        Are you sure you wanna delete this category?
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
          value={isSubmitting ? "Deleting..." : "Delete"}
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

export const AddTask = ({
  closeHandler,
  cropProfiles = [],
  activityCategories = [],
}) => {
  const dispatch = useDispatch();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validationSchema = Yup.object({
    task: validations.name("Task name").required("Task name is required"),
    due_date: validations
      .date("Expected date")
      .required("Expected date is required"),
    category_id: validations.blank().required("Category is required"),
  });

  return (
    <Box sx={dialogContentStyles}>
      <DialogHeader title={"Add task"} closeHandler={closeHandler} />

      <Formik
        initialValues={{
          crop_name: "",
          category_id: "",
          due_date: "",
          task: "",
          identity: false,
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { resetForm }) => {
          const body = {
            category_id: values.category_id,
            due_date: values.due_date,
            task: values.task,
            identity: values.identity,
          };
          console.log(body);
          setIsSubmitting(true);
          const response = dispatch(addNewTask(body));
          response.then(() => {
            setIsSubmitting(false);
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
              <label htmlFor="crop_name" className="second-text mt-4 mb-3">
                Crop Profile
              </label>
              <CustomSelect
                id="crop_name"
                name="crop_name"
                noneLabel={<em>Select Crop</em>}
                options={cropProfiles.map((item) => ({
                  name: item.crop_name,
                  value: item.id,
                }))}
                value={values.crop_name}
                onChange={handleChange}
                onBlur={handleBlur}
                iconType="filled"
                width={{ md: "478px", xs: "100%" }}
                height="44px"
                sx={{ backgroundColor: "grey" }}
                backgroundColor="#F3F3F4"
                disableshadow="true"
              />
              {errors.crop_name && touched.crop_name && (
                <span className="error">{errors.crop_name}</span>
              )}
            </Stack>

            <Stack direction="column">
              <label htmlFor="category_id" className="second-text mt-4 mb-3">
                Category Name
              </label>
              <CustomSelect
                noneLabel={<em>Select Category</em>}
                id="category_id"
                name="category_id"
                value={values.category_id}
                onChange={handleChange}
                onBlur={handleBlur}
                options={activityCategories.map((activity) => ({
                  name: activity.category,
                  value: activity.id,
                }))}
                iconType="filled"
                width={{ md: "478px", xs: "100%" }}
                height="44px"
                sx={{ backgroundColor: "grey" }}
                backgroundColor="#F3F3F4"
                disableshadow="true"
                className={
                  errors.category_id && touched.category_id
                    ? "input-error"
                    : null
                }
              />
              {errors.category_id && touched.category_id && (
                <span className="error">{errors.category_id}</span>
              )}
            </Stack>

            <Stack direction="column">
              <label htmlFor="task" className="second-text mt-4 mb-3">
                Task Name
              </label>
              <TextField
                sx={textFieldStyles}
                id="task"
                name="task"
                InputProps={{ style: { height: "44px" } }}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.task}
                className={errors.task && touched.task ? "input-error" : null}
              />
              {errors.task && touched.task && (
                <span className="error">{errors.task}</span>
              )}
            </Stack>

            <Stack direction="column">
              <label htmlFor="due_date" className="second-text mt-4 mb-3">
                Expected Date
              </label>
              <TextField
                type="date"
                id="due_date"
                name="due_date"
                sx={textFieldStyles}
                InputProps={{ style: { height: "44px" } }}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.due_date}
                className={
                  errors.due_date && touched.due_date ? "input-error" : null
                }
              />
              {errors.due_date && touched.due_date && (
                <span className="error">{errors.due_date}</span>
              )}
            </Stack>

            <Stack direction="row" spacing={0.8} alignItems="center">
              <Checkbox
                id="check"
                name="identity"
                value={values.identity}
                onChange={handleChange}
              />
              <label htmlFor="check" className="text-sm">
                Schedule Message
              </label>
            </Stack>

            <div className="buttons mb-7 mt-2">
              <div className="">
                <Button
                  value="Cancel"
                  onClick={closeHandler}
                  sx={{
                    fontSize: "14px",
                    color: "#A9A9A9",
                    backgroundColor: "white",
                    borderRadius: "5px",
                  }}
                />
              </div>
              <div className="mx-6">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  value={isSubmitting ? "Adding Task..." : "Submit"}
                  sx={{
                    fontSize: "14px",
                    borderRadius: "5px",
                  }}
                />
              </div>
            </div>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export const DeleteActivity = ({ closeHandler, data }) => {
  const dispatch = useDispatch();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const deleteHandler = (e) => {
    setIsSubmitting(true);
    const response = dispatch(deleteTask({ task_id: data.id }));
    response.then(() => {
      setIsSubmitting(false);
      closeHandler(e);
    });
  };

  return (
    <div className="">
      <h2
        className="second-text my-1 text-center"
        style={{ maxWidth: "300px" }}
      >
        Are you sure you wanna delete this activity?
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
          value={isSubmitting ? "Deleting..." : "Delete"}
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

export const AddSeason = ({ closeHandler, cropProfiles = [] }) => {
  const dispatch = useDispatch();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formValidationSchema = Yup.object({
    season_name: validations.name("Season name").required("Season name is required"),
    crop_profile_id: validations.blank().required("Crop is required")
  })
  return (
    <Box sx={dialogContentStyles}>
      <DialogHeader title={"Add Farm Season"} closeHandler={closeHandler} />

      <Formik
        initialValues={{
          crop_profile_id: "",
          season_name: "",
        }}
        validationSchema={formValidationSchema}
        onSubmit={async (values, { resetForm }) => {
          // console.log(cropProfiles);
          const body = {
            crop_profile_id: values.crop_profile_id,
            season_name: values.season_name,
          };
          // console.log(body);
          setIsSubmitting(true);
          const response = dispatch(addNewSeason(body));
          response.then(() => {
            setIsSubmitting(false);
            resetForm();
            closeHandler();
          });
          // resetForm();
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
              <label htmlFor="season_name" className="second-text my-3">
                Season Name <small className="text-red-500">*</small>
              </label>
              <TextField
                sx={textFieldStyles}
                id="season_name"
                name="season_name"
                InputProps={{ style: { height: "44px" } }}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.season_name}
                className={
                  errors.season_name && touched.season_name
                    ? "input-error"
                    : null
                }
              />
              {errors.season_name && touched.season_name && (
                <span className="error">{errors.season_name}</span>
              )}
            </Stack>

            <Stack direction="column">
              <label htmlFor="crop_profile_id" className="second-text my-3">
                Crop Type <small className="text-red-500">*</small>
              </label>
              <CustomSelect
                noneLabel={<em>Select Crop</em>}
                id="crop_profile_id"
                name="crop_profile_id"
                options={cropProfiles.map((item) => ({
                  name: item.crop_name,
                  value: item.id,
                }))}
                value={values.crop_profile_id}
                onChange={handleChange}
                onBlur={handleBlur}
                iconType="filled"
                width={{ md: "478px", xs: "100%" }}
                height="44px"
                sx={{ backgroundColor: "grey" }}
                backgroundColor="#F3F3F4"
                disableshadow="true"
                className={
                  errors.crop_profile_id && touched.crop_profile_id
                    ? "input-error"
                    : null
                }
              />
              {errors.crop_profile_id && touched.crop_profile_id && (
                <span className="error">{errors.crop_profile_id}</span>
              )}
            </Stack>

            <div className="buttons mt-7">
              <div className="">
                <Button
                  value="Cancel"
                  onClick={closeHandler}
                  sx={{
                    fontSize: "14px",
                    color: "#A9A9A9",
                    backgroundColor: "white",
                  }}
                />
              </div>
              <div className="mx-3">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  value={isSubmitting ? "Adding Season..." : "Submit"}
                  sx={{ fontSize: "14px" }}
                />
              </div>
            </div>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export const EndSeason = ({ closeHandler, data }) => {
  const dispatch = useDispatch();
  const buttonValue = data.started ? "End Season" : "Start Season";
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleHandler = (e) => {
    setIsSubmitting(true);
    const response = dispatch(
      toggleSeason({
        season_id: data?.id,
      })
    );
    response.then(() => {
      setIsSubmitting(false);
      closeHandler(e);
    });
  };

  return (
    <div className="">
      <h2
        className="second-text my-1 text-center"
        style={{ maxWidth: "300px" }}
      >
        {`Are you sure you want to ${
          data.started ? "end" : "start"
        } this season?`}
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
          value={isSubmitting ? "Updating..." : buttonValue}
          onClick={toggleHandler}
          sx={{
            color: "white",
            backgroundColor: "red",
          }}
        />
      </div>
    </div>
  );
};
