import React, { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
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

import { addSourcingAgent } from "../../redux/actions/UserManagementActions";
import { getStates } from "../../redux/actions/AppActions";

// import { notify } from "../../utils/toastNotification";
import { textFieldStyles } from "../../components/Modals/globals";
import axiosServices from "../../services/axiosServices";
import { BASE_URL } from "../../configs/api";

function AddSourcingAgent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isAdding, setIsAdding] = useState(false);
  const [banks, setBanks] = useState([]);

  // const authenticatedUser = useSelector(
  //   (state) =>
  //     state.AuthReducer.userProfile ||
  //     JSON.parse(sessionStorage.getItem("user_profile"))
  // );

  const fetchBanks = useCallback(async () => {
    try {
      const bankRes = await axiosServices.get(`${BASE_URL}/all/banks`);
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

  useEffect(() => {
    fetchBanks();
    dispatch(getStates({}));
  }, [dispatch, fetchBanks]);

  const validationSchema = Yup.object({
    first_name: validations
      .name("First name")
      .required("First name is required"),
    last_name: validations.name("Last name").required("Last name is required"),
    email: validations.email().required("Email is required"),
    mobile: validations.mobile().required("Phone number is required"),
    bank: validations.blank().required("Bank is required"),
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
              <Link
                href="/user-management/sourcing-agents"
                key="2"
                color="inherit"
              >
                Manage Sourcing Agents
              </Link>,
              <Typography key="3" color="primary.main">
                Add Sourcing Agent
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
          <h2 className="first-text ml-1.5">Add Sourcing Agent</h2>
          <Formik
            initialValues={{
              first_name: "",
              last_name: "",
              email: "",
              mobile: "",
              account_no: "",
              bank: "",
              farmers: 0,
            }}
            validationSchema={validationSchema}
            onSubmit={async (values, { resetForm }) => {
              const body = {
                first_name: values.first_name,
                last_name: values.last_name,
                email: values.email,
                mobile: values.mobile,
                bank: values.bank,
                bank_code: banks.find((bank) => bank.name === values.bank)
                  ?.code,
                account_no: values.account_no,
                farmers: values.farmers,
              };
              console.log(body);
              setIsAdding(true);
              const response = dispatch(addSourcingAgent(body));

              response.then((res) => {
                // console.log("submit:", res);
                setIsAdding(false);
                if (res.success || res.data) {
                  resetForm();
                  window.setTimeout(
                    () => navigate("/user-management/sourcing-agents"),
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
                      sx={customTextFieldStyles}
                      id="email"
                      name="email"
                      type="email"
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
                    <label htmlFor="mobile" className="second-text my-3">
                      Phone Number <small className="text-red-500">*</small>
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
                    <label htmlFor="bank" className="second-text my-3">
                      Bank <small className="text-red-500">*</small>
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
                      options={banks
                        .filter((bank) => !!bank.code)
                        .map((bank) => ({
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
                        // md: "auto",
                      },
                    }}
                  >
                    <label htmlFor="account_no" className="second-text my-3">
                      Account Number <small className="text-red-500">*</small>
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
                    Number of Farmers
                  </label>
                  <TextField
                    sx={customTextFieldStyles}
                    id="farmers"
                    name="farmers"
                    type="number"
                    InputProps={{ style: { height: "44px" } }}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.farmers}
                    className={
                      errors.farmers && touched.farmers ? "input-error" : null
                    }
                  />
                  {errors.farmers && touched.farmers && (
                    <span className="error">{errors.farmers}</span>
                  )}
                </Stack>

                <div className="buttons mt-8 ml-1.5">
                  <div className="">
                    <Button
                      type="submit"
                      disabled={isAdding}
                      value={isAdding ? "Adding..." : "Submit"}
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

export default AddSourcingAgent;
