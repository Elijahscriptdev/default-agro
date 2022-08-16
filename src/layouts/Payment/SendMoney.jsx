import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import axiosServices from "../../services/axiosServices";
import Box from "@mui/material/Box";
import { Chip, Link, Stack } from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";
// import { Formik } from "formik";
// import * as Yup from "yup";
// import { validations } from "../../utils/validations";
// import Can, { check } from "../../utils/rbac/Can";
import TextField from "@mui/material/TextField";
import BreadCrumb from "../../components/common/CustomBreadCrumbs";
import Button from "../../components/common/Button";
import { textFieldStyles } from "../../components/Modals/globals";
// import SelectSearch from "react-select-search";
// import Autocomplete from "@mui/material/Autocomplete";
import { MenuItem } from "@mui/material";
import { getFarmers } from "../../redux/actions/UserManagementActions";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import BulkSelectFarmer from "./ModalContents/BulkSelectFarmer";
import Spinner from "../../components/Spinner";

const SendMoney = () => {
  // const userDetails = useSelector ((state) => state.AuthReducer);
  const dispatch = useDispatch();
  const [individual, setIndividual] = useState(true);
  const [bulk, setBulk] = useState(false);
  // const [data, setData] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  // const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const farmers = useSelector((state) => state.UserManagementReducer.farmers);
  const [page] = useState(1);
  const [limit] = useState(150000000000);
  const [query] = useState("");

  const [status] = useState("");
  const [state] = useState("");
  const [lga] = useState("");
  const [season] = useState("");

  const initialSinglePayload = {
    amount: "",
    farmerId: "",
    narration: "",
    destinationAccountNumber: "",
    destinationBankCode: "",
    bankCode: "",
    bank: "",
    tenantId: "",
    userId: "",
  };
  const [singlePaymentPayload, setSinglePaymentPayload] =
    useState(initialSinglePayload);

  const [bulkAmount, setBulkAmount] = useState("");
  const [bulkNarration, setBulkNarration] = useState("");
  const [row, setRow] = useState([]);

  const handleIndividual = () => {
    setIndividual(true);
    setBulk(false);
  };

  const handleBulk = () => {
    setBulk(true);
    setIndividual(false);
  };

  const dialogTextStyles = {
    ...textFieldStyles,
    width: {
      ...textFieldStyles.width,
      md: "auto",
    },
  };

  const user_profile = JSON.parse(sessionStorage.getItem("user_profile"));
  // console.log("user_profile", user_profile);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      ...singlePaymentPayload,
      bank_code: singlePaymentPayload.bankCode,
      destinationBankCode: singlePaymentPayload.bankCode,
      farmer_id: singlePaymentPayload.farmerId,
      tenant_id: user_profile.tenant_id,
      user_id: user_profile.id,
    };

    try {
      setIsAdding(true);
      const res = await axiosServices.post(`/payment/loan-disbursement`, body);
      toast.success("Disbursement Successful");
      console.log(res);
      navigate("/payment/disbursments");
      setSinglePaymentPayload(initialSinglePayload);
    } catch (error) {
      console.log(error.response.data.error);
      toast.error(error.response.data.error);
      return error;
    } finally {
      setIsAdding(false);
    }
  };

  const handleBulkSubmit = async (e) => {
    e.preventDefault();

    const newData =
      row &&
      row.map((item) => {
        return {
          farmer_id: item.id,
          account_no: item.account_no,
          bank: item.bank,
          amount: bulkAmount,
          reference:
            "tr-" +
            Math.random().toString(36).substring(7) +
            new Date().valueOf(),
          narration: bulkNarration,
          destinationBankCode: item.bank_code,
          destinationAccountNumber: item.account_no,
          currency: "NGN",
          first_name: item.first_name + " " + item.last_name,
        };
      });

    const body = {
      title: "Loan Disbursment",
      narration: bulkNarration,
      tenant_id: user_profile.tenant_id,
      user_id: user_profile.id,
      transactionList: newData,
    };

    try {
      setIsAdding(true);
      const res = await axiosServices.post(
        `/payment/bulk-loan-disbursement`,
        body
      );
      toast.success("Disbursement Successful");
      console.log(res);
      navigate("/payment/disbursments");
    } catch (error) {
      console.log(error.response.data.error);
      toast.error(error.response.data.error);
      return error;
    } finally {
      setIsAdding(false);
    }
  };

  useEffect(() => {
    const filters = {
      page,
      per_page: limit,
      search_farmer_by_name: query,
    };

    if (state !== "") {
      filters.state = state;
    } else {
      delete filters.state;
    }

    if (status !== "") {
      filters.status = status;
    } else {
      delete filters.status;
    }

    if (lga !== "") {
      filters.lga = lga;
    } else {
      delete filters.lga;
    }

    if (season !== "") {
      filters.season = season;
    } else {
      delete filters.season;
    }

    dispatch(getFarmers(filters));
  }, [dispatch, page, limit, status, state, lga, season, query]);

  return (
    <div>
      <nav id="quick-nav">
        <BreadCrumb
          breadcrumbs={[
            <Typography key="1" color="inherit">
              Payments
            </Typography>,
            <Link href="/payment/disbursments" key="2" color="inherit">
              Disbursment
            </Link>,
            <Typography key="3" color="primary.main">
              Send Money
            </Typography>,
          ]}
        />
      </nav>
      <Box>
        <Box
          sx={{
            display: "flex",
            gap: 50,
            background: "#009688",
            boxShadow: "0px 5px 20px rgba(108, 117, 125, 0.15)",
            borderRadius: "5px",
            padding: "20px",
            width: "100%",
            textAlign: "center",
          }}
        >
          <div
            onClick={handleIndividual}
            style={{
              color: "black",
              background: "white",
              width: "100%",
              cursor: "pointer",
              padding: "10px",
            }}
          >
            Individual Transfer
          </div>
          <div
            onClick={handleBulk}
            style={{
              color: "black",
              background: "white",
              width: "100%",
              cursor: "pointer",
              padding: "10px",
            }}
          >
            Bulk Transfer
          </div>
        </Box>

        <Box>
          {individual && (
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
              <h3 className="first-text ml-1.5">Send Money</h3>

              <form
                style={{ width: "100%", border: "1px solid transparent" }}
                onSubmit={handleSubmit}
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
                    <label htmlFor="farmer_id" className="second-text my-3">
                      Farmer <small className="text-red-500">*</small>
                    </label>
                    <TextField
                      id="farmer_id"
                      sx={dialogTextStyles}
                      name="farmer_id"
                      select
                      required
                      InputProps={{ style: { height: "44px" } }}
                      onChange={(e) => {
                        setSinglePaymentPayload((state) => ({
                          ...state,
                          farmerId: e.target.value,
                        }));
                        farmers?.data.forEach((farmer) => {
                          if (farmer.id === e.target.value) {
                            setSinglePaymentPayload((state) => ({
                              ...state,
                              bank: farmer.bank ? farmer.bank : "",
                              destinationAccountNumber: farmer.account_no
                                ? farmer.account_no
                                : "",
                              bankCode: farmer.bank_code
                                ? farmer.bank_code
                                : "",
                            }));
                          }
                        });
                      }}
                      value={singlePaymentPayload.farmerId}
                    >
                      {farmers.loading && (
                        <div className="flex flex-row items-center justify-center">
                          <Spinner size={20} color="secondary" />
                        </div>
                      )}
                      {farmers?.data &&
                        farmers?.data.map((option) => (
                          <MenuItem key={option.id} value={option.id}>
                            {option.first_name + " " + option.last_name}
                          </MenuItem>
                        ))}
                    </TextField>
                  </Stack>

                  <Stack
                    direction="column"
                    sx={{
                      mx: 1,
                      width: "100%",
                    }}
                  >
                    <label htmlFor="bank" className="second-text my-3">
                      Bank Name <small className="text-red-500">*</small>
                    </label>
                    <TextField
                      sx={dialogTextStyles}
                      id="bank"
                      name="bank"
                      required
                      InputProps={{ style: { height: "44px" } }}
                      value={singlePaymentPayload.bank}
                    />
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
                    <label
                      htmlFor="destinationAccountNumber"
                      className="second-text my-3"
                    >
                      Account Number <small className="text-red-500">*</small>
                    </label>
                    <TextField
                      sx={dialogTextStyles}
                      id="destinationAccountNumber"
                      name="destinationAccountNumber"
                      required
                      InputProps={{ style: { height: "44px" } }}
                      value={singlePaymentPayload.destinationAccountNumber}
                    />
                  </Stack>

                  <Stack
                    direction="column"
                    sx={{
                      mx: 1,
                      width: "100%",
                    }}
                  >
                    <label htmlFor="amount" className="second-text my-3">
                      Recipient Amount <small className="text-red-500">*</small>
                    </label>
                    <TextField
                      sx={dialogTextStyles}
                      id="amount"
                      name="amount"
                      required
                      InputProps={{ style: { height: "44px" } }}
                      onChange={(e) =>
                        setSinglePaymentPayload({
                          ...singlePaymentPayload,
                          amount: e.target.value,
                        })
                      }
                      value={singlePaymentPayload.amount}
                    />
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
                      width: {
                        xs: "100%",
                      },
                    }}
                  >
                    <label htmlFor="narration" className="second-text my-3">
                      Payment Description
                      <small className="text-red-500">*</small>
                    </label>
                    <TextField
                      type="textarea"
                      sx={dialogTextStyles}
                      id="narration"
                      name="narration"
                      InputProps={{ style: { height: "44px" } }}
                      onChange={(e) =>
                        setSinglePaymentPayload({
                          ...singlePaymentPayload,
                          narration: e.target.value,
                        })
                      }
                      value={singlePaymentPayload.narration}
                    />
                  </Stack>
                </Stack>

                <div className="buttons mt-8 ml-1.5">
                  <div className="">
                    <Button
                      type="submit"
                      disabled={isAdding || farmers.loading}
                      value={isAdding ? "Adding..." : "Submit"}
                      // onClick={handleSubmit}
                    />
                  </div>
                </div>
              </form>
            </Stack>
          )}

          {bulk && (
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
              <h3 className="first-text ml-1.5">Send Money</h3>

              <form
                style={{ width: "100%", border: "1px solid transparent" }}
                onSubmit={handleBulkSubmit}
              >
                <Stack
                  direction="column"
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
                    <label htmlFor="amount" className="second-text my-3">
                      Recipient Amount
                      <small className="text-red-500">*</small>
                    </label>
                    <TextField
                      sx={dialogTextStyles}
                      id="bulkAmount"
                      name="bulkAmount"
                      InputProps={{ style: { height: "44px" } }}
                      onChange={(e) => setBulkAmount(e.target.value)}
                      value={bulkAmount}
                      required
                    />
                  </Stack>

                  <Stack
                    direction="column"
                    sx={{
                      mx: 1,
                      width: {
                        xs: "100%",
                      },
                    }}
                  >
                    <label htmlFor="narration" className="second-text my-3">
                      Payment Description
                      <small className="text-red-500">*</small>
                    </label>
                    <TextField
                      type="textarea"
                      sx={dialogTextStyles}
                      id="bulkNarration"
                      name="bulkNarration"
                      InputProps={{ style: { height: "44px" } }}
                      onChange={(e) => setBulkNarration(e.target.value)}
                      value={bulkNarration}
                      required
                    />
                  </Stack>
                </Stack>

                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    marginTop: "30px",
                  }}
                >
                  <label>Add Recipient</label>
                  <BulkSelectFarmer setRow={setRow} />
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    marginTop: "10px",
                    backgroundColor: "#F3F3F4",
                    borderRadius: "5px",
                    padding: "10px",
                    minHeight: "50px",
                    maxHeight: "150px",
                    width: "100%",
                    flexWrap: "wrap",
                    overflowY: "scroll",
                  }}
                >
                  {row &&
                    row.map((item, index) => {
                      return (
                        <Chip
                          key={index}
                          label={item.first_name}
                          color="primary"
                          sx={{
                            "& .MuiChip-label": {
                              color: "white",
                            },
                          }}
                        />
                      );
                    })}
                </div>

                <div className="buttons mt-8 ml-1.5">
                  <div className="">
                    <Button
                      type="submit"
                      disabled={isAdding}
                      // onClick={(e) => handleBulkSubmit(e)}
                      value={isAdding ? "Adding..." : "Submit"}
                    />
                  </div>
                </div>
              </form>
            </Stack>
          )}
        </Box>
      </Box>
    </div>
  );
};

export default SendMoney;

// const top100Films = [
//   { title: "The Shawshank Redemption", year: 1994 },
//   { title: "The Godfather", year: 1972 },
//   { title: "The Godfather: Part II", year: 1974 },
//   { title: "The Dark Knight", year: 2008 },
//   { title: "12 Angry Men", year: 1957 },
//   { title: "Schindler's List", year: 1993 },
//   { title: "Pulp Fiction", year: 1994 },
// ];

// const currencies = [
//   {
//     value: "USD",
//     label: "$",
//   },
//   {
//     value: "EUR",
//     label: "€",
//   },
//   {
//     value: "BTC",
//     label: "฿",
//   },
//   {
//     value: "JPY",
//     label: "¥",
//   },
// ];

// const transactionList = [
//   {
//     value: "1",
//     first_name: "John",
//   },
//   {
//     value: "2",
//     first_name: "Jane",
//   },
// ];

/* <SelectSearch
    options={[]}
    defaultValue='15997'
    // onChange={(e) => {
    //   setFarmer_id(e.value);
    //   // setFarmerName(e.label);
    // }}
    getOptions={(query) => {
      return new Promise((resolve, reject) => {
        fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`
        )
          .then((response) => response.json())
          .then(({ drinks }) => {
            resolve(
              drinks.map(({ idDrink, strDrink }) => ({
                value: idDrink,
                name: strDrink,
              }))
            );
          })
          .catch(reject);
      });
    }}
    search
    placeholder='Your favorite drink'
  />
  <Stack spacing={2} sx={{ width: 300 }}>
    <Autocomplete
      id='free-solo-demo'
      freeSolo
      options={top100Films.map((option) => option.title)}
      renderInput={(params) => (
        <TextField {...params} label='freeSolo' />
      )}
    />
    <Autocomplete
      freeSolo
      id='free-solo-2-demo'
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        console.log("event", event.target.value);
        // farmers.map((farmer) => {
        //   if (farmer.id === e.target.value) {
        //     setBank(farmer.bank);
        //     setDestinationAccountNumber(farmer.account_no);
        //     setBankCode(farmer.bank_code);
        //   }
        // });
      }}
      // isOptionEqualToValue={(option, value) =>
      //   option.value === value.value
      // }
      disableClearable
      options={
        farmers &&
        farmers.map(
          (option) =>
            option.first_name + " " + option.last_name
        )
      }
      renderInput={(params) => (
        <TextField
          {...params}
          label='Search input'
          InputProps={{
            ...params.InputProps,
            type: "search",
          }}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
      )}
    />
  </Stack> */
