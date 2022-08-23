import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";

import CustomSelect from "../../../components/common/CustomSelect";
import Button from "../../../components/common/Button";
import DialogHeader from "../../../components/Modals/DialogHeader";

import {
  textFieldStyles,
  dialogContentStyles,
} from "../../../components/Modals/globals";

import {
  addCluster,
  addFarmUnit,
  addSubCluster,
  updateSubcluster,
  updateCluster,
  bulkUploadFarms,
  getClusters,
  bulkAssignFarms,
  getSubClusters,
} from "../../../redux/actions/FarmManagementActions";
import { getFarmers } from "../../../redux/actions/UserManagementActions";
import { getCropProfiles } from "../../../redux/actions/ConfigurationsActions";

import { SET_LOCALS } from "../../../redux/types/AppActionTypes";
import { getLocalGovt } from "../../../redux/actions/AppActions";
import { validations } from "../../../utils/validations";

import FarmUploadTemplate from "../../../data/downloads/USER UPLOAD SAMPLE.xlsx";
import axiosServices from "../../../services/axiosServices";
import { Chip } from "@mui/material";

export const AddCluster = ({ closeHandler, roles }) => {
  const dispatch = useDispatch();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formValidationSchema = Yup.object({
    name: validations.name("Cluster name").required("Cluster name is required"),
    manager: validations.blank().required("Select a manager"),
  });

  const [managers, setManagers] = useState([]);

  const fetchManagers = useCallback(async () => {
    try {
      const managerRes = await axiosServices.get(
        `/users?user_role=${roles["Project Manager"]}`
      );
      // console.log("1");
      setManagers(managerRes?.result?.data?.data || []);
    } catch (error) {
      console.log(error);
      return error;
    }
  }, [roles]);

  useEffect(() => {
    fetchManagers();
  }, [fetchManagers]);

  return (
    <Box sx={dialogContentStyles}>
      <DialogHeader title={"Add Cluster"} closeHandler={closeHandler} />
      <Formik
        initialValues={{
          name: "",
          manager: "",
          description: "",
        }}
        validationSchema={formValidationSchema}
        onSubmit={async (values, { resetForm }) => {
          const body = {
            name: values.name,
            manager: values.manager,
            description: values.description,
          };
          console.log(body);

          setIsSubmitting(true);
          const response = dispatch(addCluster(body));
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
              <label htmlFor="name" className="second-text mb-4 mt-6">
                Cluster Name <small className="text-red-500">*</small>
              </label>
              <TextField
                sx={textFieldStyles}
                InputProps={{ style: { height: "44px" } }}
                id="name"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                className={errors.name && touched.name ? "input-error" : null}
              />
              {errors.name && touched.name && (
                <span className="error">{errors.name}</span>
              )}
            </Stack>

            <Stack direction="column">
              <label htmlFor="manager" className="second-text my-4">
                Project Manager <small className="text-red-500">*</small>
              </label>
              <CustomSelect
                id="manager"
                name="manager"
                value={values.manager}
                onChange={handleChange}
                onBlur={handleBlur}
                noneLabel={<em>Select Manager</em>}
                iconType="filled"
                width={textFieldStyles.width}
                height="44px"
                sx={textFieldStyles}
                backgroundColor="#F3F3F4"
                disableshadow="true"
                iconwidth="48px"
                options={managers.map((eachManager) => {
                  return {
                    value: eachManager.id,
                    name: `${eachManager.first_name} ${eachManager.last_name}`,
                  };
                })}
                className={
                  errors.manager && touched.manager ? "input-error" : null
                }
              />
              {errors.manager && touched.manager && (
                <span className="error">{errors.manager}</span>
              )}
            </Stack>

            <Stack direction="column">
              <label htmlFor="description" className="second-text mb-4 mt-6">
                Cluster Description
              </label>
              <TextField
                id="description"
                name="description"
                sx={textFieldStyles}
                InputProps={{ style: { height: "44px" } }}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
                className={
                  errors.description && touched.description
                    ? "input-error"
                    : null
                }
              />
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

export const EditCluster = ({ closeHandler, data, roles }) => {
  const dispatch = useDispatch();
  const [isSubmitting, setIsSubmitting] = useState(false);
  // console.log(data);

  const formValidationSchema = Yup.object({
    name: validations.name("Cluster name").required("Cluster name is required"),
    manager: validations.blank().required("Select a manager"),
  });

  const [managers, setManagers] = useState([]);

  const fetchManagers = useCallback(async () => {
    try {
      const managerRes = await axiosServices.get(
        `/users?user_role=${roles["Project Manager"]}`
      );
      // console.log("1");
      setManagers(managerRes?.result?.data?.data || []);
    } catch (error) {
      console.log(error);
      return error;
    }
  }, [roles]);

  useEffect(() => {
    fetchManagers();
  }, [fetchManagers]);

  return (
    <Box sx={dialogContentStyles}>
      <DialogHeader title={"Edit Cluster"} closeHandler={closeHandler} />
      <Formik
        initialValues={{
          name: data.name || "",
          manager: `${data.manager?.id}` || "",
          description: data.description || "",
        }}
        validationSchema={formValidationSchema}
        onSubmit={async (values, { resetForm }) => {
          const body = {
            name: values.name,
            manager: values.manager,
            description: values.description,
          };
          console.log(body);

          setIsSubmitting(true);
          const response = dispatch(updateCluster(data.id, body));
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
              <label htmlFor="name" className="second-text mb-4 mt-6">
                Cluster Name
              </label>
              <TextField
                InputProps={{ style: { height: "44px" } }}
                placeholder="Kaduna State Cluster"
                sx={textFieldStyles}
                id="name"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                className={errors.name && touched.name ? "input-error" : null}
              />
            </Stack>

            <Stack direction="column">
              <label htmlFor="manager" className="second-text my-4">
                Project Manager
              </label>
              <CustomSelect
                name="manager"
                value={values.manager}
                onChange={handleChange}
                onBlur={handleBlur}
                noneLabel={<em>Select Manager</em>}
                iconType="filled"
                iconwidth="48px"
                height="44px"
                sx={{ backgroundColor: "grey" }}
                backgroundColor="#F3F3F4"
                disableshadow="true"
                width={{ md: "478px", xs: "100%" }}
                options={managers.map((eachManager) => {
                  return {
                    value: eachManager.id,
                    name: `${eachManager.first_name} ${eachManager.last_name}`,
                  };
                })}
                className={
                  errors.manager && touched.manager ? "input-error" : null
                }
              />
            </Stack>

            <Stack direction="column">
              <label htmlFor="description" className="second-text mb-4 mt-6">
                Cluster Description
              </label>
              <TextField
                sx={textFieldStyles}
                InputProps={{ style: { height: "44px" } }}
                placeholder="All Farmers & Agents In Kaduna State"
                id="description"
                name="description"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
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

export const AddSubCluster = ({ closeHandler, roles }) => {
  const dispatch = useDispatch();

  const [agents, setAgents] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const clusters = useSelector(
    (state) => state.FarmMangementReducer?.clusters?.data || []
  );

  const fetchAgents = useCallback(async () => {
    try {
      const agentRes = await axiosServices.get(
        `/users?user_role=${roles["Agent"]}`
      );
      // console.log(roles["Agent"]);
      setAgents(agentRes?.result?.data?.data || []);
    } catch (error) {
      console.log(error);
      return error;
    }
  }, [roles]);

  const formValidationSchema = Yup.object({
    name: validations.name("Cluster name").required("Cluster name is required"),
    cluster: validations.blank().required("Select a cluster"),
    agent: validations.blank().required("Select an agent"),
  });

  useEffect(() => {
    dispatch(getClusters({ page: 1 }));
    fetchAgents();
  }, [fetchAgents, dispatch]);

  return (
    <Box sx={dialogContentStyles}>
      <DialogHeader title={"Add Sub Cluster"} closeHandler={closeHandler} />
      <Formik
        initialValues={{
          name: "",
          agent: "",
          description: "",
          cluster: "",
        }}
        validationSchema={formValidationSchema}
        onSubmit={async (values, { resetForm }) => {
          const body = {
            name: values.name,
            agent: values.agent,
            description: values.description,
            cluster: values.cluster,
          };
          console.log(body);

          setIsSubmitting(true);
          const response = dispatch(addSubCluster(body));
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
              <label htmlFor="name" className="second-text mb-4 mt-6">
                Sub Cluster Name <small className="text-red-500">*</small>
              </label>
              <TextField
                sx={textFieldStyles}
                InputProps={{ style: { height: "44px" } }}
                id="name"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                className={errors.name && touched.name ? "input-error" : null}
              />
              {errors.name && touched.name && (
                <span className="error">{errors.name}</span>
              )}
            </Stack>

            <Stack direction="column">
              <label htmlFor="agent" className="second-text my-4">
                Agent <small className="text-red-500">*</small>
              </label>
              <CustomSelect
                id="agent"
                name="agent"
                value={values.agent}
                onChange={handleChange}
                onBlur={handleBlur}
                noneLabel={<em>Select an agent</em>}
                options={agents.map((eachAgent) => {
                  return {
                    value: eachAgent.id,
                    name: `${eachAgent.first_name} ${eachAgent.last_name}`,
                  };
                })}
                iconType="filled"
                width={textFieldStyles.width}
                disableshadow="true"
                height="44px"
                backgroundColor="#F3F3F4"
                iconwidth="48px"
                className={errors.agent && touched.agent ? "input-error" : null}
              />
              {errors.agent && touched.agent && (
                <span className="error">{errors.agent}</span>
              )}
            </Stack>

            <Stack direction="column">
              <label htmlFor="description" className="second-text mb-4 mt-6">
                Sub Cluster Description
              </label>
              <TextField
                sx={textFieldStyles}
                InputProps={{ style: { height: "44px" } }}
                id="description"
                name="description"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
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

            <Stack direction="column">
              <label htmlFor="cluster" className="second-text mb-4 mt-6">
                Cluster <small className="text-red-500">*</small>
              </label>
              <CustomSelect
                name="cluster"
                value={values.cluster}
                onChange={handleChange}
                onBlur={handleBlur}
                noneLabel={<em>Select Cluster</em>}
                options={clusters.map((eachCluster) => {
                  return {
                    value: eachCluster.id,
                    name: eachCluster.name,
                  };
                })}
                iconType="filled"
                width={textFieldStyles.width}
                height="44px"
                backgroundColor="#F3F3F4"
                iconwidth="48px"
                disableshadow="true"
                className={
                  errors.cluster && touched.cluster ? "input-error" : null
                }
              />
              {errors.cluster && touched.cluster && (
                <span className="error">{errors.cluster}</span>
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

export const EditSubCluster = ({ closeHandler, data, roles }) => {
  const dispatch = useDispatch();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formValidationSchema = Yup.object({
    name: validations.name("Cluster name").required("Cluster name is required"),
    cluster: validations.blank().required("Select a cluster"),
    agent: validations.blank().required("Select an agent"),
  });

  const [agents, setAgents] = useState([]);

  const clusters = useSelector(
    (state) => state.FarmMangementReducer?.clusters?.data || []
  );

  const fetchAgents = useCallback(async () => {
    try {
      const agentRes = await axiosServices.get(
        `/users?user_role=${roles["Agent"]}`
      );
      // console.log(roles["Agent"]);
      // console.log(clusters);
      setAgents(agentRes?.result?.data?.data || []);
    } catch (error) {
      console.log(error);
      return error;
    }
  }, [roles]);

  useEffect(() => {
    dispatch(getClusters({ page: 1 }));
    fetchAgents();
  }, [dispatch, fetchAgents]);

  return (
    <Box sx={dialogContentStyles}>
      <DialogHeader title={"Edit Sub Cluster"} closeHandler={closeHandler} />
      <Formik
        initialValues={{
          name: data.name || "",
          agent: data.agent?.id || "",
          description: data.description || "",
          cluster: data.cluster || "",
        }}
        validationSchema={formValidationSchema}
        onSubmit={async (values, { resetForm }) => {
          const body = {
            name: values.name,
            agent: values.agent,
            description: values.description,
            cluster: values.cluster,
          };
          console.log(body);

          setIsSubmitting(true);
          const response = dispatch(updateSubcluster(data.id, body));
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
              <label htmlFor="name" className="second-text mb-4 mt-6">
                Sub Cluster Name
              </label>
              <TextField
                sx={textFieldStyles}
                InputProps={{ style: { height: "44px" } }}
                id="name"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                className={errors.name && touched.name ? "input-error" : null}
              />
              {errors.name && touched.name && (
                <span className="error">{errors.name}</span>
              )}
            </Stack>

            <Stack direction="column">
              <label htmlFor="agent" className="second-text my-4">
                Agent
              </label>
              <CustomSelect
                id="agent"
                name="agent"
                value={values.agent}
                onChange={handleChange}
                onBlur={handleBlur}
                noneLabel={<em>Select an agent</em>}
                options={agents.map((eachAgent) => {
                  return {
                    value: eachAgent.id,
                    name: `${eachAgent.first_name} ${eachAgent.last_name}`,
                  };
                })}
                iconType="filled"
                width={textFieldStyles.width}
                disableshadow="true"
                height="44px"
                backgroundColor="#F3F3F4"
                iconwidth="48px"
                className={errors.agent && touched.agent ? "input-error" : null}
              />
              {errors.agent && touched.agent && (
                <span className="error">{errors.agent}</span>
              )}
            </Stack>

            <Stack direction="column">
              <label htmlFor="description" className="second-text mb-4 mt-6">
                Sub Cluster Description
              </label>
              <TextField
                sx={textFieldStyles}
                InputProps={{ style: { height: "44px" } }}
                id="description"
                name="description"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
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

            <Stack direction="column">
              <label htmlFor="cluster" className="second-text mb-4 mt-6">
                Cluster
              </label>
              <CustomSelect
                name="cluster"
                value={values.cluster}
                onChange={handleChange}
                onBlur={handleBlur}
                noneLabel={<em>Select Cluster</em>}
                options={clusters.map((eachCluster) => {
                  return {
                    value: eachCluster.id,
                    name: eachCluster.name,
                  };
                })}
                // options={[{ name: "Cluster 1", value: "1" }]}
                iconType="filled"
                width={textFieldStyles.width}
                height="44px"
                backgroundColor="#F3F3F4"
                iconwidth="48px"
                disableshadow="true"
                className={
                  errors.cluster && touched.cluster ? "input-error" : null
                }
              />
              {errors.cluster && touched.cluster && (
                <span className="error">{errors.cluster}</span>
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

export const AddFarmUnit = ({ closeHandler, states }) => {
  const dispatch = useDispatch();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const localGovts = useSelector((state) => state.AppReducer?.localGovt || []);
  const farmers = useSelector(
    (state) => state.UserManagementReducer?.farmers || {}
  );
  const cropProfiles = useSelector(
    (state) => state.ConfigReducer?.cropProfiles || {}
  );

  const stateChangeHandler = (handleChange) => (e) => {
    // console.log({ state: e.target.value });
    if (!e.target.value) {
      dispatch({
        type: SET_LOCALS,
        payload: {
          localGovt: [],
        },
      });
    } else {
      dispatch(getLocalGovt(e.target.value));
    }
    handleChange(e);
  };

  useEffect(() => {
    dispatch(getFarmers({ page: 1 }));
    dispatch(getCropProfiles());
  }, [dispatch]);

  const validationSchema = Yup.object({
    state: validations.blank().required("State is required"),
    address: validations.blank().required("Address is required"),
    community: validations.blank().required("Local govt is required"),
    crop: validations.blank().required("Crop is required"),
    farmer: validations.blank().required("Farmer is required"),
  });

  return (
    <Box sx={dialogContentStyles}>
      <DialogHeader title={"Add Farm Unit"} closeHandler={closeHandler} />
      <Formik
        initialValues={{
          state: "",
          community: "",
          address: "",
          size: 0,
          clay: 0,
          slit: 0,
          loam: 0,
          nitrogen: 0,
          phosphorus: 0,
          potassium: 0,
          crop: "",
          farmer: "",
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { resetForm }) => {
          const body = {
            state: values.state,
            community: values.community,
            address: values.address,
            size: values.size,
            crop: values.crop,
            clay: values.clay,
            slit: values.slit,
            loam: values.loam,
            nitrogen: values.nitrogen,
            phosphorus: values.phosphorus,
            potassium: values.potassium,
            farmer: values.farmer,
          };
          console.log(body);
          // dispatch(addSubCluster(body));

          setIsSubmitting(true);
          const response = dispatch(addFarmUnit(body));
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
            <Stack direction="row" alignItems="center">
              <Stack direction="column" flexGrow={1} className="mr-14">
                <label htmlFor="state" className="second-text mb-4 mt-6 ">
                  State <small className="text-red-500">*</small>
                </label>
                <CustomSelect
                  id="state"
                  name="state"
                  value={values.state}
                  onChange={stateChangeHandler(handleChange)}
                  onBlur={handleBlur}
                  noneLabel={<em>Select State</em>}
                  options={states}
                  iconType="filled"
                  width="33.125vw"
                  height="44px"
                  sx={{ backgroundColor: "grey" }}
                  backgroundColor="#F3F3F4"
                  iconwidth="48px"
                  disableshadow="true"
                  className={
                    errors.state && touched.state ? "input-error" : null
                  }
                />
                {errors.state && touched.state && (
                  <span className="error">{errors.state}</span>
                )}
              </Stack>

              <Stack direction="column" flexGrow={1}>
                <label htmlFor="community" className="second-text mb-4 mt-6">
                  LGA <small className="text-red-500">*</small>
                </label>
                <CustomSelect
                  id="community"
                  name="community"
                  value={values.community}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  noneLabel={<em>Select LGA</em>}
                  options={localGovts.map((eachLga) => ({
                    name: eachLga.local_name,
                    value: eachLga.local_id,
                  }))}
                  iconType="filled"
                  width="33.125vw"
                  height="44px"
                  sx={{ backgroundColor: "grey" }}
                  backgroundColor="#F3F3F4"
                  iconwidth="48px"
                  disableshadow="true"
                  className={
                    errors.community && touched.community ? "input-error" : null
                  }
                />
                {errors.community && touched.community && (
                  <span className="error">{errors.community}</span>
                )}
              </Stack>
            </Stack>

            <Stack direction="column">
              <label htmlFor="address" className="second-text mb-4 mt-4">
                Address <small className="text-red-500">*</small>
              </label>
              <TextField
                id="address"
                name="address"
                value={values.address}
                onChange={handleChange}
                onBlur={handleBlur}
                sx={{ backgroundColor: "#F3F3F4", width: "100%" }}
                InputProps={{ style: { height: "44px" } }}
                className={
                  errors.address && touched.address ? "input-error" : null
                }
              />
              {errors.address && touched.address && (
                <span className="error">{errors.address}</span>
              )}
            </Stack>

            <Stack direction="row" alignItems="center">
              <Stack direction="column" flexGrow={1} className="mr-14">
                <label htmlFor="clay" className="second-text mb-4 mt-4">
                  Soil Profile (Clay) %
                </label>
                <TextField
                  id="clay"
                  name="clay"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.clay}
                  type="number"
                  sx={{ backgroundColor: "#F3F3F4", width: "100%" }}
                  InputProps={{ style: { height: "44px" } }}
                  className={errors.clay && touched.clay ? "input-error" : null}
                />
                {errors.clay && touched.clay && (
                  <span className="error">{errors.clay}</span>
                )}
              </Stack>

              <Stack direction="column" flexGrow={1}>
                <label htmlFor="phosphorus" className="second-text mb-4 mt-4">
                  Phosphorus ( mg/L)
                </label>
                <TextField
                  id="phosphorus"
                  name="phosphorus"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phosphorus}
                  type="number"
                  sx={{ backgroundColor: "#F3F3F4", width: "100%" }}
                  InputProps={{ style: { height: "44px" } }}
                  className={
                    errors.phosphorus && touched.phosphorus
                      ? "input-error"
                      : null
                  }
                />
                {errors.phosphorus && touched.phosphorus && (
                  <span className="error">{errors.phosphorus}</span>
                )}
              </Stack>
            </Stack>

            <Stack direction="row" alignItems="center">
              <Stack direction="column" flexGrow={1} className="mr-14">
                <label htmlFor="loam" className="second-text mb-4 mt-4">
                  Soil Profile (Loam) %
                </label>
                <TextField
                  id="loam"
                  name="loam"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.loam}
                  type="number"
                  sx={{ backgroundColor: "#F3F3F4", width: "100%" }}
                  InputProps={{ style: { height: "44px" } }}
                  className={errors.loam && touched.loam ? "input-error" : null}
                />
                {errors.loam && touched.loam && (
                  <span className="error">{errors.loam}</span>
                )}
              </Stack>

              <Stack direction="column" flexGrow={1}>
                <label htmlFor="nitrogen" className="second-text mb-4 mt-4">
                  Nitrogen (mg/L)
                </label>
                <TextField
                  id="nitrogen"
                  name="nitrogen"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.nitrogen}
                  type="number"
                  sx={{ backgroundColor: "#F3F3F4", width: "100%" }}
                  InputProps={{ style: { height: "44px" } }}
                  className={
                    errors.nitrogen && touched.nitrogen ? "input-error" : null
                  }
                />
                {errors.nitrogen && touched.nitrogen && (
                  <span className="error">{errors.nitrogen}</span>
                )}
              </Stack>
            </Stack>

            <Stack direction="row" alignItems="center">
              <Stack direction="column" flexGrow={1} className="mr-14">
                <label htmlFor="slit" className="second-text mb-4 mt-4">
                  Soil Profile (Slit) %
                </label>
                <TextField
                  id="slit"
                  name="slit"
                  value={values.slit}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="number"
                  sx={{ backgroundColor: "#F3F3F4", width: "100%" }}
                  InputProps={{ style: { height: "44px" } }}
                  className={errors.slit && touched.slit ? "input-error" : null}
                />
                {errors.slit && touched.slit && (
                  <span className="error">{errors.slit}</span>
                )}
              </Stack>

              <Stack direction="column" flexGrow={1}>
                <label htmlFor="potassium" className="second-text mb-4 mt-4">
                  Potassium (mg/L)
                </label>
                <TextField
                  id="potassium"
                  name="potassium"
                  value={values.potassium}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="number"
                  sx={{ backgroundColor: "#F3F3F4", width: "100%" }}
                  InputProps={{ style: { height: "44px" } }}
                  className={
                    errors.potassium && touched.potassium ? "input-error" : null
                  }
                />
                {errors.potassium && touched.potassium && (
                  <span className="error">{errors.potassium}</span>
                )}
              </Stack>
            </Stack>

            <Stack direction="column">
              <label htmlFor="size" className="second-text mb-4 mt-4">
                Size (Ha)
              </label>
              <TextField
                id="size"
                name="size"
                value={values.size}
                onChange={handleChange}
                onBlur={handleBlur}
                type="number"
                sx={{ backgroundColor: "#F3F3F4", width: "100%" }}
                InputProps={{ style: { height: "44px" } }}
                className={errors.size && touched.size ? "input-error" : null}
              />
              {errors.size && touched.size && (
                <span className="error">{errors.size}</span>
              )}
            </Stack>

            <Stack direction="row" alignItems="center">
              <Stack direction="column" flexGrow={1} className="mr-14">
                <label htmlFor="crop" className="second-text mb-4 mt-4">
                  Crop <small className="text-red-500">*</small>
                </label>
                <CustomSelect
                  id="crop"
                  name="crop"
                  value={values.crop}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  noneLabel={<em>Select Crop</em>}
                  options={cropProfiles?.data.map((eachCrop) => ({
                    name: eachCrop.crop_name,
                    value: eachCrop.id,
                  }))}
                  iconType="filled"
                  width="100%"
                  height="44px"
                  sx={{ backgroundColor: "grey" }}
                  backgroundColor="#F3F3F4"
                  disableshadow="true"
                  iconwidth="48px"
                  className={errors.crop && touched.crop ? "input-error" : null}
                />
                {errors.crop && touched.crop && (
                  <span className="error">{errors.crop}</span>
                )}
              </Stack>

              <Stack direction="column" flexGrow={1}>
                <label htmlFor="farmer" className="second-text mb-4 mt-4">
                  Farmer <small className="text-red-500">*</small>
                </label>
                <CustomSelect
                  id="farmer"
                  name="farmer"
                  value={values.farmer}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  noneLabel={<em>Select Farmer</em>}
                  options={farmers?.data.map((eachFarmer) => ({
                    name: `${eachFarmer.first_name} ${eachFarmer.last_name}`,
                    value: eachFarmer.id,
                  }))}
                  iconType="filled"
                  width="100%"
                  height="44px"
                  sx={{ backgroundColor: "grey" }}
                  backgroundColor="#F3F3F4"
                  disableshadow="true"
                  iconwidth="48px"
                  className={
                    errors.farmer && touched.farmer ? "input-error" : null
                  }
                />
                {errors.farmer && touched.farmer && (
                  <span className="error">{errors.farmer}</span>
                )}
              </Stack>
            </Stack>

            <DialogActions>
              <div className="buttons mt-8">
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
            </DialogActions>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export const ViewMap = ({ closeHandler, data }) => {
  return (
    <Box sx={{ ...dialogContentStyles, minWidth: "400px" }}>
      <DialogHeader
        title={data?.farm_id || "View Map"}
        closeHandler={closeHandler}
      />
      <div>No farm points</div>
    </Box>
  );
};

export const BulkUploadFarms = ({ closeHandler }) => {
  const dispatch = useDispatch();
  let [isAdding, setIsAdding] = useState(false);
  let [uploadFile, setUploadFile] = useState(null);

  const fileHandler = (handleChange) => (e) => {
    // console.log(e.target.files[0]);
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
          if (!values.upload) {
            errors.upload = "File is missing!";
          } else if (!/.+(\.csv|\.xlsx|\.xls)$/gi.test(values.upload)) {
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
          const response = dispatch(bulkUploadFarms(body));

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
                sx={textFieldStyles}
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
                      disabled={isAdding}
                      value={isAdding ? "Uploading..." : "Upload"}
                    />
                  </div>

                  <div className="mr-3">
                    <Button
                      // onClick={downloadHandler}
                      href={FarmUploadTemplate}
                      download="FARM_UPLOAD_SAMPLE.xlsx"
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

export const BulkAssignFarms = ({ closeHandler, selections }) => {
  const dispatch = useDispatch();
  const [isAdding, setIsAdding] = useState(false);
  // console.log(roles);
  const validationSchema = Yup.object({
    sub_cluster: validations.blank().required("Sub-cluster is required"),
  });

  const subClusters = useSelector(
    (state) => state.FarmMangementReducer?.subClusters?.data || []
  );

  useEffect(() => {
    dispatch(getSubClusters({ page: 1 }));
  }, [dispatch]);

  return (
    <Box sx={dialogContentStyles}>
      <DialogHeader title="Bulk Assign" closeHandler={closeHandler} />

      <Formik
        initialValues={{
          sub_cluster: "",
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { resetForm }) => {
          const body = {
            sub_cluster: values.sub_cluster,
            farms: selections.map((each) => each.id),
          };
          // console.log(body);
          setIsAdding(true);
          const response = dispatch(bulkAssignFarms(body));

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
              <span
                className="second-text my-3"
                style={{ marginLeft: "8px", marginRight: "8px" }}
              >{`Selected Farms: ${selections.length}`}</span>
              <Stack
                direction="row"
                flexWrap="wrap"
                sx={{
                  mx: 1,
                  mb: 2,
                  width: "100%",
                  maxWidth: "400px",
                }}
              >
                {selections.map((each) => {
                  return (
                    <Chip
                      label={each.farm_id}
                      color="primary"
                      // variant="outlined"
                      size="small"
                      sx={{
                        mr: 1,
                        mb: 1,
                        "& .MuiChip-label": {
                          color: "white",
                        },
                      }}
                    />
                  );
                })}
              </Stack>

              <Stack
                direction="column"
                sx={{
                  mx: 1,
                  width: "100%",
                }}
              >
                <label htmlFor="sub_cluster" className="second-text my-3">
                  Sub Cluster <small className="text-red-500">*</small>
                </label>
                <CustomSelect
                  name="sub_cluster"
                  id="sub_cluster"
                  value={values.sub_cluster}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  noneLabel={<em>Select Sub-cluster</em>}
                  iconType="filled"
                  width={{ md: "400px", xs: "100%" }}
                  height="44px"
                  sx={{ backgroundColor: "grey" }}
                  backgroundColor="#F3F3F4"
                  disableshadow="true"
                  options={subClusters.map((each) => ({
                    value: each.id,
                    name: each.name,
                  }))}
                  className={
                    errors.sub_cluster && touched.sub_cluster
                      ? "input-error"
                      : null
                  }
                />
                {errors.sub_cluster && touched.sub_cluster && (
                  <span className="error">{errors.sub_cluster}</span>
                )}
              </Stack>
            </Stack>

            <DialogActions>
              <div className="buttons mt-8">
                <div className="">
                  <Button
                    type="submit"
                    disabled={isAdding}
                    value={isAdding ? "Assigning..." : "Submit"}
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

export const AssignFarm = ({ closeHandler, farm }) => {
  const dispatch = useDispatch();
  const [isAdding, setIsAdding] = useState(false);
  // console.log(roles);
  const validationSchema = Yup.object({
    sub_cluster: validations.blank().required("Sub-cluster is required"),
  });

  const subClusters = useSelector(
    (state) => state.FarmMangementReducer?.subClusters?.data || []
  );

  useEffect(() => {
    dispatch(getSubClusters({ page: 1 }));
  }, [dispatch]);

  return (
    <Box sx={dialogContentStyles}>
      <DialogHeader title="Assign Farm" closeHandler={closeHandler} />

      <Formik
        initialValues={{
          sub_cluster: "",
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { resetForm }) => {
          const body = {
            sub_cluster: values.sub_cluster,
            farms: [farm.id],
          };
          // console.log(body);
          setIsAdding(true);
          const response = dispatch(bulkAssignFarms(body));

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
              <Stack
                direction="column"
                sx={{
                  mx: 1,
                  width: "100%",
                }}
              >
                <label htmlFor="sub_cluster" className="second-text my-3">
                  Sub Cluster <small className="text-red-500">*</small>
                </label>
                <CustomSelect
                  name="sub_cluster"
                  id="sub_cluster"
                  value={values.sub_cluster}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  noneLabel={<em>Select Sub-cluster</em>}
                  iconType="filled"
                  width={{ md: "400px", xs: "100%" }}
                  height="44px"
                  sx={{ backgroundColor: "grey" }}
                  backgroundColor="#F3F3F4"
                  disableshadow="true"
                  options={subClusters.map((each) => ({
                    value: each.id,
                    name: each.name,
                  }))}
                  className={
                    errors.sub_cluster && touched.sub_cluster
                      ? "input-error"
                      : null
                  }
                />
                {errors.sub_cluster && touched.sub_cluster && (
                  <span className="error">{errors.sub_cluster}</span>
                )}
              </Stack>
            </Stack>

            <DialogActions>
              <div className="buttons mt-8">
                <div className="">
                  <Button
                    type="submit"
                    disabled={isAdding}
                    value={isAdding ? "Assigning..." : "Submit"}
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
