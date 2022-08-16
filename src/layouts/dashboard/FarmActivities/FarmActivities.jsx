import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";

import { BiEditAlt as EditIcon } from "react-icons/bi";

import BreadCrumb from "../../../components/common/CustomBreadCrumbs";
import CustomSelect from "../../../components/common/CustomSelect";
import Table from "../../../components/Table/UserTable";
import TableControls from "../../../components/Table/TableControls";
import StatusIndicator from "../../../components/common/StatusIndicator";

import { getUsers } from "../../../redux/actions/UserManagementActions";
import { getStates } from "../../../redux/actions/AppActions";

// import "./FarmActivities.scss";

const FarmActivities = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(15);
  // const [query, setQuery] = useState("");

  // const queryRef = useRef(null);

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

  const users = useSelector((state) => state.UserManagementReducer.users);
  const isLoading = useSelector((state) => state.UserManagementReducer.loading);
  const availableStates = useSelector(
    (state) => state.AppReducer?.states || {}
  );

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
      <section className="farm_activities">
        <nav id="quick-nav">
          <BreadCrumb
            breadcrumbs={[
              <Link
                href="/dashboard"
                key="1"
                color="inherit"
              >
                Dashboard
              </Link>,
              <Typography key="2" color="primary.main">
                Farm Activities
              </Typography>,
            ]}
          />
        </nav>

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
            alignItem="center"
            flexGrow={1}
          >
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
                noneLabel={<em>State</em>}
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
                noneLabel={<em>Crop Seaseon</em>}
                options={[{ name: "Yaba", value: "yaba" }]}
                borderRadius="5px"
                backgroundColor="#FFFFFF"
                onChange={(e) => console.log(e.target.value)}
              />
            </div>

            <div className="ml-5">
              <CustomSelect
                height="32px"
                noneLabel={<em>Cluster</em>}
                options={[{ name: "Yaba", value: "yaba" }]}
                borderRadius="5px"
                backgroundColor="#FFFFFF"
                onChange={(e) => console.log(e.target.value)}
              />
            </div>

            <div className="ml-5">
              <CustomSelect
                height="32px"
                noneLabel={<em>Sub Cluster</em>}
                options={[{ name: "Yaba", value: "yaba" }]}
                borderRadius="5px"
                backgroundColor="#FFFFFF"
                onChange={(e) => console.log(e.target.value)}
              />
            </div>
          </div>

          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <Box sx={{ margin: "30px 0" }}>
              <Table columns={columns} data={tableData} />
              <TableControls
                nextHandler={() => setNext()}
                prevHandler={() => setPrev()}
                limitHandler={(e) => handleLimitChange(e)}
                totalRecords={users?.total}
                limit={limit}
                page={page}
              />
            </Box>
          )}
        </Box>
      </section>
    </React.Fragment>
  );
};

export default FarmActivities;
