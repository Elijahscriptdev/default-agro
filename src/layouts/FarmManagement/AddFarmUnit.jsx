import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";

import CustomSelect from "../../components/common/CustomSelect";
import BreadCrumb from "../../components/common/CustomBreadCrumbs";
import Button from "../../components/common/Button";
import { validations } from "../../utils/validations";

import { addFarmUnit } from "../../redux/actions/FarmManagementActions";
import { getLocalGovt, getStates } from "../../redux/actions/AppActions";

import { getFarmers } from "../../redux/actions/UserManagementActions";
import { getCropProfiles } from "../../redux/actions/ConfigurationsActions";
import { SET_LOCALS } from "../../redux/types/AppActionTypes";
import { textFieldStyles } from "../../components/Modals/globals";

function AddFarmUnit() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const params = useParams();
  const states = useSelector((state) => state.AppReducer?.states);
  const authenticatedUser = useSelector(
    (state) =>
      state.AuthReducer?.userProfile ||
      JSON.parse(sessionStorage.getItem("user_profile"))
  );

  const customTextFieldStyles = {
    ...textFieldStyles,
    width: {
      ...textFieldStyles.width,
      md: "auto",
    },
  };

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

  const validationSchema = Yup.object({
    state: validations.blank().required("State is required").matches(/\d+/g),
    address: validations.blank().required("Address is required"),
    community: validations.blank().required("Local govt is required"),
    crop: validations.blank().required("Crop is required").matches(/\d+/g),
    farmer: validations.blank().required("Farmer is required"),
  });

  useEffect(() => {
    dispatch(getStates({}));
    dispatch(getFarmers({ page: 1 }));
    dispatch(getCropProfiles());
  }, [authenticatedUser, dispatch, params.farmId]);

  return (
    <React.Fragment>
      <section>
        <nav id="quick-nav">
          <BreadCrumb
            breadcrumbs={[
              <Typography key="1" color="inherit">
                Farm Management
              </Typography>,
              <Link href="/farm-management/farm-lots" key="2" color="inherit">
                Farm Units
              </Link>,
              <Typography key="3" color="primary.main">
                Add Farm Unit
              </Typography>,
            ]}
          />
        </nav>

        <Stack
          direction="column"
          px={2}
          py={3}
          sx={{
            backgroundColor: "#FFF",
            boxShadow: "0px 5px 20px rgba(108, 117, 125, 0.15)",
            borderRadius: "5px",
          }}
        >
          <h2 style={{ fontSize: "20px", marginLeft: "10px" }}>
            Add Farm Unit
          </h2>

          <Stack
            sx={{
              flexGrow: 1,
            }}
          >
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

                setIsSubmitting(true);
                const response = dispatch(addFarmUnit(body));
                response.then((result) => {
                  setIsSubmitting(false);
                  if (result?.data || result?.success) {
                    resetForm();
                    window.setTimeout(
                      () => navigate("/farm-management/farm-lots"),
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
                  className="flex flex-col"
                  style={{ flexGrow: 1 }}
                >
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
                        width: "100%",
                      }}
                    >
                      <label htmlFor="state" className="second-text mb-4 mt-5">
                        State <small className="text-red-500">*</small>
                      </label>
                      <CustomSelect
                        id="state"
                        name="state"
                        value={values.state}
                        onChange={stateChangeHandler(handleChange)}
                        onBlur={handleBlur}
                        noneLabel={<em>Select State</em>}
                        options={Object.values(states).map((eachState) => ({
                          name: eachState.name,
                          value: eachState.state_id,
                        }))}
                        iconType="filled"
                        width={{ xs: "100%" }}
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

                    <Stack
                      direction="column"
                      sx={{
                        mx: 1,
                        width: "100%",
                      }}
                    >
                      <label
                        htmlFor="community"
                        className="second-text mb-4 mt-5"
                      >
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
                        width={{ xs: "100%" }}
                        height="44px"
                        sx={{ backgroundColor: "grey" }}
                        backgroundColor="#F3F3F4"
                        iconwidth="48px"
                        disableshadow="true"
                        className={
                          errors.community && touched.community
                            ? "input-error"
                            : null
                        }
                      />
                      {errors.community && touched.community && (
                        <span className="error">{errors.community}</span>
                      )}
                    </Stack>
                  </Stack>

                  <Stack
                    direction="column"
                    sx={{
                      mx: 1,
                    }}
                  >
                    <label htmlFor="address" className="second-text mb-4 mt-4">
                      Address <small className="text-red-500">*</small>
                    </label>
                    <TextField
                      id="address"
                      name="address"
                      value={values.address}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      sx={customTextFieldStyles}
                      InputProps={{ style: { height: "44px" } }}
                      className={
                        errors.address && touched.address ? "input-error" : null
                      }
                    />
                    {errors.address && touched.address && (
                      <span className="error">{errors.address}</span>
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
                        width: "100%",
                      }}
                    >
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
                        sx={customTextFieldStyles}
                        InputProps={{ style: { height: "44px" } }}
                        className={
                          errors.clay && touched.clay ? "input-error" : null
                        }
                      />
                      {errors.clay && touched.clay && (
                        <span className="error">{errors.clay}</span>
                      )}
                    </Stack>

                    <Stack
                      direction="column"
                      sx={{
                        mx: 1,
                        width: "100%",
                      }}
                    >
                      <label
                        htmlFor="phosphorus"
                        className="second-text mb-4 mt-4"
                      >
                        Phosphorus ( mg/L)
                      </label>
                      <TextField
                        id="phosphorus"
                        name="phosphorus"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phosphorus}
                        type="number"
                        sx={customTextFieldStyles}
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
                        sx={customTextFieldStyles}
                        InputProps={{ style: { height: "44px" } }}
                        className={
                          errors.loam && touched.loam ? "input-error" : null
                        }
                      />
                      {errors.loam && touched.loam && (
                        <span className="error">{errors.loam}</span>
                      )}
                    </Stack>

                    <Stack
                      direction="column"
                      sx={{
                        mx: 1,
                        width: "100%",
                      }}
                    >
                      <label
                        htmlFor="nitrogen"
                        className="second-text mb-4 mt-4"
                      >
                        Nitrogen (mg/L)
                      </label>
                      <TextField
                        id="nitrogen"
                        name="nitrogen"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.nitrogen}
                        type="number"
                        sx={customTextFieldStyles}
                        InputProps={{ style: { height: "44px" } }}
                        className={
                          errors.nitrogen && touched.nitrogen
                            ? "input-error"
                            : null
                        }
                      />
                      {errors.nitrogen && touched.nitrogen && (
                        <span className="error">{errors.nitrogen}</span>
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
                        sx={customTextFieldStyles}
                        InputProps={{ style: { height: "44px" } }}
                        className={
                          errors.slit && touched.slit ? "input-error" : null
                        }
                      />
                      {errors.slit && touched.slit && (
                        <span className="error">{errors.slit}</span>
                      )}
                    </Stack>

                    <Stack
                      direction="column"
                      sx={{
                        mx: 1,
                        width: "100%",
                      }}
                    >
                      <label
                        htmlFor="potassium"
                        className="second-text mb-4 mt-4"
                      >
                        Potassium (mg/L)
                      </label>
                      <TextField
                        id="potassium"
                        name="potassium"
                        value={values.potassium}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="number"
                        sx={customTextFieldStyles}
                        InputProps={{ style: { height: "44px" } }}
                        className={
                          errors.potassium && touched.potassium
                            ? "input-error"
                            : null
                        }
                      />
                      {errors.potassium && touched.potassium && (
                        <span className="error">{errors.potassium}</span>
                      )}
                    </Stack>
                  </Stack>

                  <Stack
                    direction="column"
                    sx={{
                      mx: 1,
                    }}
                  >
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
                      sx={customTextFieldStyles}
                      InputProps={{ style: { height: "44px" } }}
                      className={
                        errors.size && touched.size ? "input-error" : null
                      }
                    />
                    {errors.size && touched.size && (
                      <span className="error">{errors.size}</span>
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
                        width: "100%",
                      }}
                    >
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
                        width="auto"
                        height="44px"
                        sx={{ backgroundColor: "grey" }}
                        backgroundColor="#F3F3F4"
                        disableshadow="true"
                        iconwidth="48px"
                        className={
                          errors.crop && touched.crop ? "input-error" : null
                        }
                      />
                      {errors.crop && touched.crop && (
                        <span className="error">{errors.crop}</span>
                      )}
                    </Stack>

                    <Stack
                      direction="column"
                      sx={{
                        mx: 1,
                        width: "100%",
                      }}
                    >
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
                        width="auto"
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
          </Stack>
        </Stack>
      </section>
    </React.Fragment>
  );
}

export default AddFarmUnit;
