import React, { useState, useEffect, useMemo, useRef } from "react";

import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";

import ICON from "../../../assets/org.svg";
import { Search as SearchIcon } from "../../../components/icons/search";
// import { notify } from "../../../utils/toastNotification";
import { getUsers } from "../../../redux/actions/UserManagementActions";
import { getStates } from "../../../redux/actions/AppActions";
import { useDispatch, useSelector } from "react-redux";
import { BiEditAlt as EditIcon } from "react-icons/bi";

import CustomSearchField from "../../../components/common/CustomSearchField";
import CustomSelect from "../../../components/common/CustomSelect";
import StatusIndicator from "../../../components/common/StatusIndicator";
import Table from "../../../components/Table/UserTable";
import TableControls from "../../../components/Table/TableControls";
import BreadCrumb from "../../../components/common/CustomBreadCrumbs";
import { useNavigate } from "react-router-dom";

import "./FarmAnalysis.scss";

const FarmAnalysis = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.UserManagementReducer.users);
  const isLoading = useSelector((state) => state.UserManagementReducer.loading);
  const availableStates = useSelector(
    (state) => state.AppReducer?.states || {}
  );
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(15);
  const [query, setQuery] = useState("");

  const queryRef = useRef(null);

  const handleLimitChange = (e) => {
    setLimit(parseInt(e.target.value));
  };

  const setPrev = () => {
    if (page > 1) setPage(page - 1);
    dispatch(getUsers(page - 1));
  };

  const setNext = () => {
    setPage(page + 1);
  };
  console.log("dfdfg page", page);

  useEffect(() => {
    dispatch(getUsers(page));
    dispatch(getStates());
  }, [dispatch, page]);

  const columns = useMemo(
    () => [
      {
        Header: "Farmland",
        accessor: "first_name",
      },
      {
        Header: "Verified Farmland",
        accessor: "last_name",
      },
      {
        Header: "Cultivated Farmland",
        accessor: "email",
      },
      {
        Header: "Cultivation Method",
        accessor: "group",
      },
      {
        Header: "Status",
        Cell: ({ value, row }) => {
          const { original } = row;
          // console.log(original);
          return (
            <StatusIndicator
              value={!original.completed ? "Incomplete" : "Completed"}
              type={!original.completed ? "error" : "success"}
            />
          );
        },
      },
      {
        Header: "View Tasks",
        Cell: ({ value, row }) => {
          // const { original } = row;
          // console.log(original);
          return (
            <IconButton
            // onClick={handleModalOpen('edit-user', original)}
            >
              <EditIcon />
            </IconButton>
          );
        },
      },
    ],
    []
  );

  const tableData = useMemo(() => users?.data || [], [users]);

  return (
    <React.Fragment>
      <section className="farm_analysis">
        <nav id="quick-nav">
          <BreadCrumb
            breadcrumbs={[
              <Link href="/dashboard" key="1" color="inherit">
                Dashboard
              </Link>,
              <Typography key="2" color="primary.main">
                Farm Analysis Dashboard
              </Typography>,
            ]}
          />
        </nav>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            height: "39px",
            // border: "1px solid red"
          }}
        >
          <Box>
            <TextField
              type="date"
              name=""
              id=""
              sx={{
                height: "100%",
                backgroundColor: "#FFF",
                boxShadow: "0px 5px 20px rgba(108, 117, 125, 0.15)",
              }}
              InputProps={{ style: { height: "100%" } }}
            />
          </Box>

          <Box>
            <CustomSelect
              noneLabel={<em>Select Activity</em>}
              height="100%"
              options={[]}
              sx={{ borderRadius: "5px" }}
              backgroundColor="#FFFFFF"
              onChange={(e) => console.log(e.target.value)}
            />
          </Box>
        </Box>

        <section className="wrapper">
          <div className="grid-cards">
            <div>
              <img src={ICON} alt="icon" />
              <p>Total Allocated Farmland</p>
              <h2>46,000</h2>
            </div>

            <div>
              <img src={ICON} alt="icon" />
              <p>Total Verified Farmland</p>
              <h2>46,000</h2>
            </div>

            <div>
              <img src={ICON} alt="icon" />
              <p>Total Cultivated Farmland</p>
              <h2>46,000</h2>
            </div>

            <div>
              <img src={ICON} alt="icon" />
              <p>Total Verified Clusters</p>
              <h2>46,000</h2>
            </div>

            <div>
              <img src={ICON} alt="icon" />
              <p>Total Farmland Visited</p>
              <h2>46,000</h2>
            </div>
          </div>
        </section>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            flexGrow={1}
          >
            <CustomSearchField
              InputProps={{
                ref: queryRef,
                startAdornment: (
                  <InputAdornment
                    position="start"
                    sx={{
                      pl: 1,
                    }}
                  >
                    <SearchIcon fontSize="small" />
                  </InputAdornment>
                ),
              }}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search"
              sx={{
                width: "100%",
                maxWidth: { lg: "200px" },
                // border: "none",
              }}
            />
            <Button
              variant="contained"
              color="primary"
              // startIcon={<EditIcon />}
              onClick={() => navigate("/dashboard/farm-activities")}
              sx={{
                textTransform: "capitalize",
              }}
            >
              Farm Activities
            </Button>
          </Stack>

          <div className="farmmanagementheader flex flex-row items-center overflow-x-auto">
            <h1 className="filtertext ml-5">Filter by:</h1>

            <div className="ml-5">
              <CustomSelect
                height="32px"
                noneLabel={<em>Select State</em>}
                options={Object.values(availableStates).map((eachState) => {
                  return {
                    name: eachState.name,
                    value: eachState.state_id,
                  };
                })}
                sx={{ borderRadius: "5px" }}
                backgroundColor="#FFFFFF"
                onChange={(e) => console.log(e.target.value)}
              />
            </div>

            <div className="ml-5">
              <CustomSelect
                height="32px"
                noneLabel={<em>Select Cluster</em>}
                options={[{ name: "Yaba", value: "yaba" }]}
                borderRadius="5px"
                backgroundColor="#FFFFFF"
                onChange={(e) => console.log(e.target.value)}
              />
            </div>
          </div>

          <Box sx={{ margin: "30px 0" }}>
            <Table columns={columns} data={tableData} isLoading={isLoading} />
            <TableControls
              nextHandler={() => setNext()}
              prevHandler={() => setPrev()}
              limitHandler={(e) => handleLimitChange(e)}
              totalPages={users?.to}
              page={page}
            />
          </Box>
        </Box>
      </section>
    </React.Fragment>
  );
};

export default FarmAnalysis;
