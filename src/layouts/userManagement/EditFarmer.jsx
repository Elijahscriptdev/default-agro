import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";

import { BiEditAlt as EditIcon } from "react-icons/bi";

import CustomSelect from "../../components/common/CustomSelect";
import StatusIndicator from "../../components/common/StatusIndicator";
import Avatar from "../../components/common/UserAvatar";
import BreadCrumb from "../../components/common/CustomBreadCrumbs";
import Button from "../../components/common/Button";
import Table from "../../components/Table/UserTable";
import { validations } from "../../utils/validations";

import axiosServices from "../../services/axiosServices";
import { notify } from "../../utils/toastNotification";
import CustomRadioGroup from "../../components/common/CustomRadioGroup";
import { updateFarmer } from "../../redux/actions/UserManagementActions";
import { getLocalGovt, getStates } from "../../redux/actions/AppActions";
import { SET_LOCALS } from "../../redux/types/AppActionTypes";
import { getSingleFarmer } from "../../redux/actions/UserManagementActions";

function EditFarmer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const params = useParams();
  let [farmer, setFarmer] = useState({});
  let [isSubmitting, setIsSubmitting] = useState(false);
  const [banks, setBanks] = useState([]);

  const dialogTextStyles = {
    backgroundColor: "#FFF",
    width: "100%",
    "& fieldset": {
      border: "0.5px solid rgba(108, 117, 125, 0.5)",
    },
  };

  const states = useSelector((state) => state.AppReducer.states);
  const localGovts = useSelector((state) => state.AppReducer?.localGovt || []);

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

  const columns = useMemo(
    () => [
      {
        Header: "Farm ID",
        accessor: "farm_id",
      },
      {
        Header: "Crop",
        accessor: "crop_name",
      },
      {
        Header: "Edit",
        Cell: ({ value, row }) => {
          const { original } = row;
          // console.log(original);
          return (
            <IconButton href={`/user-management/edit-farmer/${original.id}`}>
              <EditIcon />
            </IconButton>
          );
        },
      },
    ],
    []
  );

  const tableData = useMemo(
    () => [
      {
        farm_id: "FM-101210",
        crop_name: "OPV-MAIZE",
      },
    ],
    []
  );

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

  useEffect(() => {
    (async (farmerId) => {
      // console.log({ farmerId });
      try {
        const response = await getSingleFarmer(farmerId);
        if (response?.data) {
          // console.log(response.data);
          setFarmer(response.data);
        } else {
          notify("Failed to get farmer", { type: "error" });
        }
      } catch (error) {
        notify(error, { type: "error" });
      }
    })(params.farmerId);
    dispatch(getStates({}));
    fetchBanks();
  }, [dispatch, fetchBanks, params.farmerId]);

  const formValidationSchema = Yup.object({
    first_name: validations
      .name("First name")
      .required("First name is required"),
    last_name: validations.name("Last name").required("Last name is required"),
    middle_name: validations.name("Middle name"),
    mobile: validations.mobile("Phone number"),
    dob: validations
      .date("Date of birth")
      .required("Date of birth cannot be empty"),
    bvn: validations.bvn("BVN"),
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
    home_state: validations.blank().required("State is required"),
    home_lga: validations.blank().required("LGA is required"),
    // account_no: validations
    //   .blank()
    //   .matches(/[0-9]/gi, "Invalid Account Number")
    //   .length(10, "Account number must be 10 digits long"),
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
                Edit Farmer
              </Typography>,
            ]}
          />
        </nav>

        <Stack
          direction="row"
          px={2}
          py={3}
          alignItems="flex-start"
          sx={{
            flexWrap: {
              xs: "wrap",
              sm: "no-wrap",
            },
            backgroundColor: "#FFF",
            boxShadow: "0px 5px 20px rgba(108, 117, 125, 0.15)",
            borderRadius: "5px",
          }}
        >
          <Stack
            direction="column"
            alignItems="center"
            spacing={2}
            sx={{
              flexGrow: {
                xs: 1,
                md: 0,
              },
              mx: "auto",
              minWidth: "300px",
            }}
          >
            <Avatar
              size="140px"
              fontSize="64px"
              firstname={farmer?.first_name}
              lastname={farmer?.last_name}
              avatarUrl={!farmer?.image ? "" : farmer?.image}
              disableOutline="true"
            />
            <StatusIndicator
              value={farmer?.bvn_validate ? "BVN Verified" : "BVN Not Verified"}
              type={farmer?.bvn_validate ? "success" : "error"}
            />
            <Stack direction="row" alignItems="center">
              <span style={{ fontSize: "15px", marginRight: "10px" }}>
                Input Confirmed:
              </span>
              <StatusIndicator
                value={farmer?.input_confirmed ? "Yes" : "No"}
                type={farmer?.input_confirmed ? "success" : "error"}
              />
            </Stack>

            <Stack direction="column" alignItems="center">
              <span style={{ fontWeight: 700 }}>Farms</span>
              <Table
                columns={columns}
                data={tableData}
                tableColor="white"
                sx={{
                  boxShadow: "4px 5px 20px rgba(108, 117, 125, 0.15)",
                }}
              />
            </Stack>
          </Stack>

          <Stack
            sx={{
              ml: {
                xs: 0,
                md: 4,
              },
              flexGrow: 1,
            }}
          >
            <Formik
              enableReinitialize={true}
              initialValues={{
                first_name: farmer?.first_name || "",
                last_name: farmer?.last_name || "",
                middle_name: farmer?.middle_name || "",
                email: farmer?.email || "",
                gender: farmer?.gender || "",
                mobile: farmer?.mobile || "",
                dob: farmer?.dob || "",
                season: "",
                status: farmer?.status || 0,
                lead: farmer?.lead || false,
                programme: farmer?.programme || "",
                bank: farmer?.bank || "",
                account_no: farmer?.account_no || "",
                bvn: farmer?.bvn || "",
                home_state: farmer?.home_state || "",
                home_address: farmer?.home_address,
                home_lga: farmer?.home_lga || "",
              }}
              validationSchema={formValidationSchema}
              onSubmit={async (values, { resetForm }) => {
                const body = {
                  first_name: values.first_name,
                  last_name: values.last_name,
                  email: values.email,
                  mobile: values.mobile,
                  gender: values.gender,
                  home_state: values.home_state,
                  home_address: values.home_address,
                  home_lga: values.home_lga,
                  dob: values.dob,
                  season: values.season,
                  status: values.status,
                  lead: values.lead,
                  programme: values.programme,
                  bank: values.bank,
                  account_no: values.account_no,
                  bvn: values.bvn,
                };

                console.log(body);
                setIsSubmitting(true);
                const response = dispatch(updateFarmer(params.farmerId, body));

                response.then(() => {
                  setIsSubmitting(false);
                  resetForm();
                  window.setTimeout(
                    () => navigate("/user-management/farmers"),
                    1000
                  );
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
                  <Stack direction="row" justifyContent="space-between">
                    <Stack
                      direction="column"
                      flexGrow={1}
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
                      flexGrow={1}
                      sx={{
                        mx: 1,
                        width: "100%",
                      }}
                    >
                      <label htmlFor="last_name" className="second-text my-3">
                        Last Name <small className="text-red-500">*</small>
                      </label>
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

                  <Stack direction="row" justifyContent="space-between">
                    <Stack
                      direction="column"
                      flexGrow={1}
                      sx={{
                        mx: 1,
                        width: "100%",
                      }}
                    >
                      <label htmlFor="middle_name" className="second-text my-3">
                        Middle Name
                      </label>
                      <TextField
                        id="middle_name"
                        sx={dialogTextStyles}
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
                      flexGrow={1}
                      sx={{
                        mx: 1,
                        width: "100%",
                      }}
                    >
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
                      {errors.mobile && touched.mobile && (
                        <span className="error">{errors.mobile}</span>
                      )}
                    </Stack>
                  </Stack>

                  <Stack direction="row" justifyContent="space-between">
                    <Stack
                      direction="column"
                      flexGrow={1}
                      sx={{
                        mx: 1,
                        width: "100%",
                      }}
                    >
                      <label htmlFor="dob" className="second-text my-3">
                        Date Of Birth <small className="text-red-500">*</small>
                      </label>
                      <TextField
                        id="dob"
                        sx={dialogTextStyles}
                        name="dob"
                        type="date"
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
                      flexGrow={1}
                      sx={{
                        mx: 1,
                        width: "100%",
                      }}
                    >
                      <label htmlFor="gender" className="second-text my-3">
                        Gender
                      </label>
                      <CustomSelect
                        id="gender"
                        name="gender"
                        noneLabel={<em>Select Gender</em>}
                        options={[
                          { name: "Male", value: "Male" },
                          { name: "Female", value: "Female" },
                        ]}
                        value={values.gender}
                        iconType="filled"
                        width="100%"
                        height="44px"
                        sx={dialogTextStyles}
                        backgroundColor="#F3F3F4"
                        disableshadow="true"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.gender && touched.gender && (
                        <span className="error">{errors.gender}</span>
                      )}
                    </Stack>
                  </Stack>

                  <Stack direction="row" justifyContent="space-between">
                    <Stack
                      direction="column"
                      flexGrow={1}
                      sx={{
                        mx: 1,
                        width: "100%",
                      }}
                    >
                      <label htmlFor="season" className="second-text my-3">
                        Season
                      </label>
                      <TextField
                        id="season"
                        sx={dialogTextStyles}
                        name="season"
                        InputProps={{ style: { height: "44px" } }}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.season}
                        className={
                          errors.season && touched.season ? "input-error" : null
                        }
                      />
                      {errors.season && touched.season && (
                        <span className="error">{errors.season}</span>
                      )}
                    </Stack>

                    <Stack
                      direction="column"
                      flexGrow={1}
                      sx={{
                        mx: 1,
                        width: "100%",
                      }}
                    >
                      <label htmlFor="programme" className="second-text my-3">
                        Programme
                      </label>
                      <TextField
                        id="programme"
                        sx={dialogTextStyles}
                        name="programme"
                        InputProps={{ style: { height: "44px" } }}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.programme}
                        className={
                          errors.programme && touched.programme
                            ? "input-error"
                            : null
                        }
                      />
                      {errors.programme && touched.programme && (
                        <span className="error">{errors.programme}</span>
                      )}
                    </Stack>
                  </Stack>

                  <Stack direction="row" justifyContent="space-between">
                    <Stack
                      direction="column"
                      flexGrow={1}
                      sx={{
                        mx: 1,
                        width: "100%",
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
                        sx={dialogTextStyles}
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
                      flexGrow={1}
                      sx={{
                        mx: 1,
                        width: "100%",
                      }}
                    >
                      <label htmlFor="account_no" className="second-text my-3">
                        Account Number
                      </label>
                      <TextField
                        id="account_no"
                        sx={dialogTextStyles}
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

                  <Stack direction="row" justifyContent="space-between">
                    <Stack
                      direction="column"
                      flexGrow={1}
                      sx={{
                        mx: 1,
                        width: "100%",
                      }}
                    >
                      <label htmlFor="bvn" className="second-text my-3">
                        BVN
                      </label>
                      <TextField
                        id="bvn"
                        sx={dialogTextStyles}
                        name="bvn"
                        InputProps={{ style: { height: "44px" } }}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.bvn}
                        className={
                          errors.bvn && touched.bvn ? "input-error" : null
                        }
                      />
                      {errors.bvn && touched.bvn && (
                        <span className="error">{errors.bvn}</span>
                      )}
                    </Stack>

                    <Stack
                      direction="column"
                      flexGrow={1}
                      sx={{
                        mx: 1,
                        width: "100%",
                      }}
                    >
                      <CustomRadioGroup
                        row
                        name="status"
                        id="status"
                        formLabel="Status"
                        formLabelProps={{
                          htmlFor: "status",
                          className: "second-text my-3",
                        }}
                        options={[
                          { name: "Active", value: 1, props: { sx: {} } },
                          {
                            name: "Inactive",
                            value: 0,
                            props: { sx: {} },
                          },
                        ]}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.status}
                      />
                    </Stack>
                  </Stack>

                  <Stack
                    direction="column"
                    flexGrow={1}
                    sx={{
                      mx: 1,
                      width: "100%",
                    }}
                  >
                    <CustomRadioGroup
                      row
                      name="lead"
                      id="lead"
                      formLabel="Lead"
                      formLabelProps={{
                        htmlFor: "lead",
                        className: "second-text my-3",
                      }}
                      options={[
                        { name: "Yes", value: true, props: { sx: {} } },
                        { name: "No", value: false, props: { sx: {} } },
                      ]}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.lead}
                    />
                  </Stack>

                  <h2
                    style={{
                      fontSize: "20px",
                      fontWeight: 700,
                      margin: "2.5rem 8px 5px",
                    }}
                  >
                    Other Information
                  </h2>

                  <Stack direction="row" justifyContent="space-between">
                    <Stack
                      direction="column"
                      flexGrow={1}
                      sx={{
                        mx: 1,
                        width: "100%",
                      }}
                    >
                      <label htmlFor="loan" className="second-text my-3">
                        Loan Amount
                      </label>
                      <TextField
                        id="loan"
                        sx={dialogTextStyles}
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
                  </Stack>

                  <Stack direction="row" justifyContent="space-between">
                    <Stack
                      direction="column"
                      flexGrow={1}
                      sx={{
                        mx: 1,
                        width: "100%",
                      }}
                    >
                      <label htmlFor="home_state" className="second-text my-3">
                        State <small className="text-red-500">*</small>
                      </label>
                      <CustomSelect
                        id="home_state"
                        name="home_state"
                        noneLabel={<em>Select State</em>}
                        options={Object.values(states).map((eachState) => ({
                          name: eachState.name,
                          value: eachState.state_id,
                        }))}
                        iconType="filled"
                        width="100%"
                        height="44px"
                        sx={dialogTextStyles}
                        backgroundColor="#F3F3F4"
                        disableshadow="true"
                        onChange={stateChangeHandler(handleChange)}
                        onBlur={handleBlur}
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
                      flexGrow={1}
                      sx={{
                        mx: 1,
                        width: "100%",
                      }}
                    >
                      <label htmlFor="home_lga" className="second-text my-3">
                        L.G.A <small className="text-red-500">*</small>
                      </label>
                      <CustomSelect
                        id="home_lga"
                        name="home_lga"
                        noneLabel={<em>Select LGA</em>}
                        options={localGovts.map((eachLga) => ({
                          name: eachLga.local_name,
                          value: eachLga.local_id,
                        }))}
                        iconType="filled"
                        width="100%"
                        height="44px"
                        sx={dialogTextStyles}
                        backgroundColor="#F3F3F4"
                        disableshadow="true"
                        onChange={handleChange}
                        onBlur={handleBlur}
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

                  <Stack direction="row" justifyContent="space-between">
                    <Stack
                      direction="column"
                      flexGrow={1}
                      sx={{
                        mx: 1,
                        width: "100%",
                      }}
                    >
                      <label
                        htmlFor="home_address"
                        className="second-text my-3"
                      >
                        Home Address
                      </label>
                      <TextField
                        id="home_address"
                        sx={dialogTextStyles}
                        name="home_address"
                        multiline={true}
                        InputProps={{ style: { height: "64px" } }}
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
                  </Stack>

                  <div className="buttons mt-8">
                    <div className="mx-1.5">
                      <Button
                        type="submit"
                        value={isSubmitting ? "Updating Farmer..." : "Submit"}
                        disabled={
                          Object.keys(farmer).length === 0 || isSubmitting
                        }
                      />
                    </div>
                  </div>
                </form>
              )}
            </Formik>
          </Stack>
        </Stack>
      </section>
    </React.Fragment>
  );
}

export default EditFarmer;
