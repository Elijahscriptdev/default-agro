import {
  Box,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import React, { useRef, useState, useMemo, useSelector } from "react";
import "./Verification.scss";
import TotalIcon from "./../../assets/TotalIcon.svg";
import PassedIcon from "./../../assets/PassedIcon.svg";
import FailedIcon from "./../../assets/FailedIcon.svg";
import EyeIcon from "./../../assets/EyeIcon.svg";
import PendingIcon from "./../../assets/PendingIcon.svg";
import CustomSearchField from "../../components/common/CustomSearchField";
import { Search as SearchIcon } from "../../components/icons/search";
import Button from "../../components/common/Button";
import Table from "../../components/Table/UserTable";
import TableControls from "../../components/Table/TableControls";

const Verification = () => {
  const [partner, setPartner] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [state, setState] = React.useState("");
  const [association, setAssociation] = React.useState("");
  const [crop, setCrop] = React.useState("");
  const queryRef = useRef(null);
  const [query, setQuery] = useState("");
  // const isLoading = useSelector((state) => state.InputReducer.loading);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(15);
  // const totalInputs = useSelector((state) => state.InputReducer.total);

  const setPrev = () => {
    if (page > 1) setPage(page - 1);
    // dispatch(getInputs(page - 1));
  };

  const setNext = () => {
    setPage(page + 1);
    // dispatch(getUsers(page + 1));
  };
  const handleLimitChange = (e) => {
    setLimit(parseInt(e.target.value));
  };

  const handleChangePartner = (event) => {
    setPartner(event.target.value);
  };
  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
  };
  const handleChangeState = (event) => {
    setState(event.target.value);
  };
  const handleChangeAssociation = (event) => {
    setAssociation(event.target.value);
  };
  const handleChangeCrop = (event) => {
    setCrop(event.target.value);
  };

  const columns = useMemo(
    () => [
      {
        Header: "Unique ID",
        accessor: "id",
      },
      {
        Header: "Partner",
        accessor: "partner",
      },
      {
        Header: "Created",
        Cell: ({ value, row }) => {
          // const { original } = row;
          // console.log(original);
          return (
            <Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography>2020-03-13</Typography>
                <Typography
                  sx={{
                    color: "#009688",
                  }}
                >
                  10:41:12
                </Typography>
              </Box>
            </Box>
          );
        },
      },
      {
        Header: "Status",
        Cell: ({ value, row }) => {
          // const { original } = row;
          // console.log(original);
          return (
            <Box
              sx={{
                fontFamily: "Nunito",
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: "14px",
                color: "rgba(20, 182, 167, 0.75)",
                background: "rgba(246, 255, 237, 0.4)",
                border: "0.6px solid rgba(20, 182, 167, 0.75)",
                borderRadius: "12px",
                padding:"5px 10px"
              }}
            >
              Passed
            </Box>
          );
        },
      },
      {
        Header: "Within State",
        Cell: ({ value, row }) => {
          // const { original } = row;
          // console.log(original);
          return (
            <Box
            sx={{
              display:"flex",
              justifyContent:"center",
              fontFamily: "Nunito",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "14px",
              color: "rgba(20, 182, 167, 0.75)",
              background: "rgba(246, 255, 237, 0.4)",
              border: "0.6px solid rgba(20, 182, 167, 0.75)",
              borderRadius: "12px",
              padding:"5px 10px"
            }}>
            True
            </Box>
          );
        },
      },
      {
        Header: "Within LGA",
        Cell: ({ value, row }) => {
          // const { original } = row;
          // console.log(original);
          return (
            <Box
            sx={{
              display:"flex",
              justifyContent:"center",
              fontFamily: "Nunito",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "14px",
              color: "rgba(249, 9, 9, 0.83);",
              background: "rgba(249, 9, 9, 0.16);",
              border: " 0.6px solid #F90909",
              borderRadius: "12px",
              padding:"5px 10px"
            }}>
            False
            </Box>
          );
        },
      },
      {
        Header: "Within Country",
        Cell: ({ value, row }) => {
          // const { original } = row;
          // console.log(original);
          return (
            <Box
            sx={{
              display:"flex",
              justifyContent:"center",
              fontFamily: "Nunito",
              fontStyle: "normal",
              fontWeight: 600,
              fontSize: "14px",
              color: "rgba(249, 9, 9, 0.83);",
              background: "rgba(249, 9, 9, 0.16);",
              border: " 0.6px solid #F90909",
              borderRadius: "12px",
              padding:"5px 10px"
            }}>
            False
            </Box>
          );
        },
      },
      {
        Header: "View",
        Cell: ({ value, row }) => {
          // const { original } = row;
          // console.log(original);
          return (
            <IconButton>
            <Box component="img" src={EyeIcon} />
            </IconButton>
          );
        },
      },
    ],
    []
  );
  const data = [
    {
      id: "27/05/2022",
      partner: "Flores peter",
      created: "Flores Peters ven",
      status: "Agent",
      state: "07042283902",
      lga: "f_peters@gmail.com",
      country: "26/05/2022",
    },
    {
      id: "27/05/2022",
      partner: "Flores peter",
      created: "Flores Peters ven",
      status: "Agent",
      state: "07042283902",
      lga: "f_peters@gmail.com",
      country: "26/05/2022",
    },
    {
      id: "27/05/2022",
      partner: "Flores peter",
      created: "Flores Peters ven",
      status: "Agent",
      state: "07042283902",
      lga: "f_peters@gmail.com",
      country: "26/05/2022",
    },
    {
      id: "27/05/2022",
      partner: "Flores peter",
      created: "Flores Peters ven",
      status: "Agent",
      state: "07042283902",
      lga: "f_peters@gmail.com",
      country: "26/05/2022",
    },
    {
      id: "27/05/2022",
      partner: "Flores peter",
      created: "Flores Peters ven",
      status: "Agent",
      state: "07042283902",
      lga: "f_peters@gmail.com",
      country: "26/05/2022",
    },
  ];

  const tableData = useMemo(() => data || [], [data]);

  return (
    <div className="verification">
      <section>
        <nav id="quick-nav">
          <span>Verification</span>
        </nav>
      </section>
      <Box className="verification-container">
        <Grid container spacing={2} className="verication-dropdowns">
          <Grid item md={2} sm={6}>
            <FormControl
              fullWidth
              sx={{
                border: "none",
              }}
            >
              <InputLabel id="demo-simple-select-label">Partner</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={partner}
                label="Partner"
                onChange={handleChangePartner}
              >
                <MenuItem value={10}>...</MenuItem>
                <MenuItem value={20}>...</MenuItem>
                <MenuItem value={20}>...</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={2} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Status</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={status}
                label="Partner"
                onChange={handleChangeStatus}
              >
                <MenuItem value={10}>...</MenuItem>
                <MenuItem value={20}>...</MenuItem>
                <MenuItem value={20}>...</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={2} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">State</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={state}
                label="Partner"
                onChange={handleChangeState}
              >
                <MenuItem value={10}>...</MenuItem>
                <MenuItem value={20}>...</MenuItem>
                <MenuItem value={30}>...</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={2} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Association</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={association}
                label="Partner"
                onChange={handleChangeAssociation}
              >
                <MenuItem value={10}>...</MenuItem>
                <MenuItem value={20}>...</MenuItem>
                <MenuItem value={30}>...</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={2} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Crop</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={crop}
                label="Partner"
                onChange={handleChangeCrop}
              >
                <MenuItem value={10}>...</MenuItem>
                <MenuItem value={20}>...</MenuItem>
                <MenuItem value={30}>...</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Grid container spacing={2} className="verification-top">
          <Grid item md={3} sm={6}>
            <Box className="top-card">
              <Box className="card-detail">
                <Typography className="detail-text">Total</Typography>
                <Box component="img" src={TotalIcon} />
              </Box>
              <Typography className="card-value">8</Typography>
            </Box>
          </Grid>
          <Grid item md={3} sm={6}>
            <Box className="top-card">
              <Box className="card-detail">
                <Typography className="detail-text">Passed</Typography>
                <Box component="img" src={PassedIcon} />
              </Box>
              <Typography className="card-value">5</Typography>
            </Box>
          </Grid>
          <Grid item md={3} sm={6}>
            <Box className="top-card">
              <Box className="card-detail">
                <Typography className="detail-text">Failed</Typography>
                <Box component="img" src={FailedIcon} />
              </Box>
              <Typography className="card-value">5</Typography>
            </Box>
          </Grid>
          <Grid item md={3} sm={6}>
            <Box className="top-card">
              <Box className="card-detail">
                <Typography className="detail-text">Pending</Typography>
                <Box component="img" src={PendingIcon} />
              </Box>
              <Typography className="card-value">5</Typography>
            </Box>
          </Grid>
        </Grid>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            flexWrap: { xs: "wrap", md: "nowrap" },
            marginBottom: "20px",
            marginTop: "20px",
          }}
        >
          <CustomSearchField
            InputProps={{
              ref: queryRef,
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="small" />
                </InputAdornment>
              ),
            }}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search customers"
            sx={{
              width: "100%",
              maxWidth: { sm: "250px" },
            }}
          />

          <Stack
            direction="row"
            spacing={2}
            sx={{
              mt: { xs: 2, md: 0 },
              mb: { xs: 2, md: 0 },
            }}
          >
            {/* <Can
              role={authenticatedUser?.my_role?.role}
              perform='user:create'
              yes={() => ( */}
            <Button
              // onClick={handleModalOpen("add-user", {
              //   roles: roles || [],
              // })}
              // href='/tenants/add-tenant'
              value="Download"
              disableElevation
            />
            {/* )}
              no={() => null}
              data={null}
            /> */}
          </Stack>
        </Stack>

        <Box>
          <Table
            columns={columns}
            data={tableData}
            // isLoading={isLoading}
          />
          <TableControls
            nextHandler={() => setNext()}
            prevHandler={() => setPrev()}
            limitHandler={(e) => handleLimitChange(e)}
            // totalRecords={totalInputs}
            page={page}
            limit={limit}
          />
        </Box>
      </Box>
    </div>
  );
};

export default Verification;
