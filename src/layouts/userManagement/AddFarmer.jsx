import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import { validations } from "../../utils/validations";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";

import CustomSelect from "../../components/common/CustomSelect";
import BreadCrumb from "../../components/common/CustomBreadCrumbs";
import Button from "../../components/common/Button";

import { addFarmer } from "../../redux/actions/UserManagementActions";
import { getLocalGovt, getStates } from "../../redux/actions/AppActions";

// import { notify } from "../../utils/toastNotification";
import { textFieldStyles } from "../../components/Modals/globals";
import { SET_LOCALS } from "../../redux/types/AppActionTypes";
import axiosServices from "../../services/axiosServices";

function AddFarmer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isAdding, setIsAdding] = useState(false);
  const [banks, setBanks] = useState([]);
  const states = useSelector((state) => state.AppReducer?.states || {});

  // const authenticatedUser = useSelector(
  //   (state) =>
  //     state.AuthReducer.userProfile ||
  //     JSON.parse(sessionStorage.getItem("user_profile"))
  // );

  const fetchBanks = useCallback(async () => {
    try {
      const bankRes = await axiosServices.get("/all/banks");
      // console.log(bankRes?.entity);
      setBanks(bankRes?.result?.banks?.data || []);
    } catch (error) {
      console.log(error);
      return error;
    }
  }, []);

  const customTextFieldStyles = {
    ...textFieldStyles,
    width: {
      ...textFieldStyles.width,
      md: "auto",
    },
  };

  const localGovts = useSelector((state) => state.AppReducer?.localGovt || []);

  const stateChangeHandler = (handleChange) => (e) => {
    console.log({ state: e.target.value });
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
    fetchBanks();
    dispatch(getStates({}));
  }, [dispatch, fetchBanks]);

  const validationSchema = Yup.object({
    first_name: validations
      .name("First name")
      .required("First name is required"),
    last_name: validations.name("Last name").required("Last name is required"),
    middle_name: validations.name("Middle name"),
    mobile: validations.mobile(),
    home_state: validations.blank().required("State is required"),
    home_address: validations.blank(),
    home_lga: validations.blank().required("Local govt is required"),
    gender: validations.blank().required("Gender is required"),
    dob: validations
      .date("Date of birth")
      .required("Date of birth is required"),
    account_no: validations.blank().when("bank", {
      is: (bank) => !bank,
      then: validations
        .blank()
        .matches(/[0-9]/g, "Invalid account number")
        .min(10, "Account number must atleast 10 digits"),
      otherwise: validations
        .blank()
        .matches(/[0-9]/g, "Invalid account number")
        .min(10, "Account number must atleast 10 digits")
        .required("Account number is required"),
    }),
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
              <Link href="/user-management/farmers" key="2" color="inherit">
                Manage Farmers
              </Link>,
              <Typography key="3" color="primary.main">
                Add Farmer
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
          <h2 className="first-text ml-1.5">Add New Farmer</h2>
          <Formik
            initialValues={{
              first_name: "",
              last_name: "",
              middle_name: "",
              mobile: "",
              home_state: "",
              home_address: "",
              home_lga: "",
              gender: "",
              dob: "",
              bank: "",
            }}
            validationSchema={validationSchema}
            onSubmit={async (values, { resetForm }) => {
              const body = {
                first_name: values.first_name,
                last_name: values.last_name,
                middle_name: values.middle_name,
                mobile: values.mobile,
                home_state: values.home_state,
                home_address: values.home_address,
                home_lga: values.home_lga,
                gender: values.gender,
                dob: values.dob,
                bank: values.bank,
              };
              // console.log(body);
              setIsAdding(true);
              const response = dispatch(addFarmer(body));

              response.then((result) => {
                setIsAdding(false);
                // console.log(result?.data);
                if (result?.data || result?.success) {
                  resetForm();
                  window.setTimeout(() => navigate('/user-management/farmers'), 1000);
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
                      sx={customTextFieldStyles}
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
                    <TextField
                      sx={customTextFieldStyles}
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
                  direction="column"
                  sx={{
                    mx: 1,
                    width: {
                      xs: "100%",
                      md: "auto",
                    },
                  }}
                >
                  <label htmlFor="middle_name" className="second-text my-3">
                    Middle Name
                  </label>
                  <TextField
                    sx={customTextFieldStyles}
                    id="middle_name"
                    name="middle_name"
                    InputProps={{ style: { height: "44px" } }}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.middle_name}
                    className={
                      errors.middle_name && touched.middle_name
                        ? "input-error"
                        : null
                    }
                  />
                  {errors.middle_name && touched.middle_name && (
                    <span className="error">{errors.middle_name}</span>
                  )}
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
                  <label htmlFor="mobile" className="second-text my-3">
                    Phone Number
                  </label>
                  <TextField
                    sx={customTextFieldStyles}
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
                  {errors.mobile && touched.mobile && (
                    <span className="error">{errors.mobile}</span>
                  )}
                </Stack>

                <Stack
                  direction="row"
                  justifyContent="space-between"
                  sx={{
                    mb: 2,
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
                    <label htmlFor="dob" className="second-text my-3">
                      Date Of Birth <small className="text-red-500">*</small>
                    </label>
                    <TextField
                      type="date"
                      sx={customTextFieldStyles}
                      id="dob"
                      name="dob"
                      InputProps={{ style: { height: "44px" } }}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.dob}
                      className={
                        errors.dob && touched.dob ? "input-error" : null
                      }
                    />
                    {errors.dob && touched.dob && (
                      <span className="error">{errors.dob}</span>
                    )}
                  </Stack>

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
                    <label htmlFor="gender" className="second-text my-3">
                      Gender <small className="text-red-500">*</small>
                    </label>
                    <CustomSelect
                      name="gender"
                      id="gender"
                      value={values.gender}
                      onChange={handleChange}
                      noneLabel={<em>Select Gender</em>}
                      iconType="filled"
                      width={{ md: "400px", xs: "100%" }}
                      height="44px"
                      sx={{ backgroundColor: "grey" }}
                      backgroundColor="#F3F3F4"
                      disableshadow="true"
                      options={[
                        {
                          value: "Male",
                          name: "Male",
                        },
                        {
                          value: "Female",
                          name: "Female",
                        },
                      ]}
                      className={
                        errors.gender && touched.gender ? "input-error" : null
                      }
                    />
                    {errors.gender && touched.gender && (
                      <span className="error">{errors.gender}</span>
                    )}
                  </Stack>
                </Stack>

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
                  <label htmlFor="bank" className="second-text my-3">
                    Bank
                  </label>
                  <CustomSelect
                    name="bank"
                    id="bank"
                    value={values.bank}
                    onChange={handleChange}
                    noneLabel={<em>Select Bank</em>}
                    iconType="filled"
                    width="100%"
                    height="44px"
                    sx={{ backgroundColor: "grey" }}
                    backgroundColor="#F3F3F4"
                    disableshadow="true"
                    options={banks.map((bank) => ({
                      name: bank.name,
                      value: bank.name,
                    }))}
                  />
                  {errors.bank && touched.bank && (
                    <span className="error">{errors.bank}</span>
                  )}
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
                  <label htmlFor="account_no" className="second-text my-3">
                    Account Number
                  </label>
                  <TextField
                    sx={customTextFieldStyles}
                    id="account_no"
                    name="account_no"
                    InputProps={{ style: { height: "44px" } }}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.account_no}
                    className={
                      errors.account_no && touched.account_no
                        ? "input-error"
                        : null
                    }
                  />
                  {errors.account_no && touched.account_no && (
                    <span className="error">{errors.account_no}</span>
                  )}
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
                  <label htmlFor="loan" className="second-text my-3">
                    Loan Amount
                  </label>
                  <TextField
                    sx={customTextFieldStyles}
                    id="loan"
                    name="loan"
                    type="number"
                    InputProps={{ style: { height: "44px" } }}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.loan}
                    className={
                      errors.loan && touched.loan ? "input-error" : null
                    }
                  />
                  {errors.loan && touched.loan && (
                    <span className="error">{errors.loan}</span>
                  )}
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
                  <label htmlFor="home_address" className="second-text my-3">
                    Home Address
                  </label>
                  <TextField
                    sx={customTextFieldStyles}
                    id="home_address"
                    name="home_address"
                    // variant="multiline"
                    InputProps={{ style: { height: "44px" } }}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.home_address}
                    className={
                      errors.home_address && touched.home_address
                        ? "input-error"
                        : null
                    }
                  />
                  {errors.home_address && touched.home_address && (
                    <span className="error">{errors.home_address}</span>
                  )}
                </Stack>

                <Stack
                  direction="row"
                  justifyContent="space-between"
                  sx={{
                    mb: 2,
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
                      },
                    }}
                  >
                    <label htmlFor="home_state" className="second-text my-3">
                      Home State <small className="text-red-500">*</small>
                    </label>
                    <CustomSelect
                      name="home_state"
                      id="home_state"
                      value={values.home_state}
                      onChange={stateChangeHandler(handleChange)}
                      noneLabel={<em>Select State</em>}
                      iconType="filled"
                      width={{ md: "400px", xs: "100%" }}
                      height="44px"
                      sx={{ backgroundColor: "grey" }}
                      backgroundColor="#F3F3F4"
                      disableshadow="true"
                      options={Object.values(states).map((eachState) => {
                        // console.log(eachState);
                        return {
                          name: eachState.name,
                          value: eachState.state_id,
                        };
                      })}
                      className={
                        errors.home_state && touched.home_state
                          ? "input-error"
                          : null
                      }
                    />
                    {errors.home_state && touched.home_state && (
                      <span className="error">{errors.home_state}</span>
                    )}
                  </Stack>

                  <Stack
                    direction="column"
                    sx={{
                      mx: 1,
                      width: "100%",
                    }}
                  >
                    <label htmlFor="home_lga" className="second-text my-3">
                      LGA <small className="text-red-500">*</small>
                    </label>
                    <CustomSelect
                      name="home_lga"
                      id="home_lga"
                      value={values.home_lga}
                      onChange={handleChange}
                      noneLabel={<em>Select LGA</em>}
                      iconType="filled"
                      width={{ md: "400px", xs: "100%" }}
                      height="44px"
                      sx={{ backgroundColor: "grey" }}
                      backgroundColor="#F3F3F4"
                      disableshadow="true"
                      options={localGovts.map((eachLga) => {
                        // console.log(eachLga);
                        return {
                          name: eachLga.local_name,
                          value: eachLga.local_id,
                        };
                      })}
                      className={
                        errors.home_lga && touched.home_lga
                          ? "input-error"
                          : null
                      }
                    />
                    {errors.home_lga && touched.home_lga && (
                      <span className="error">{errors.home_lga}</span>
                    )}
                  </Stack>
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

export default AddFarmer;
