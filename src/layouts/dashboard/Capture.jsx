import React, { useState, useEffect, useMemo, useRef } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForwardIos";
import MuiButton from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";

import { Search as SearchIcon } from "../../components/icons/search";

import { BiEditAlt as EditIcon } from "react-icons/bi";
import { RiDeleteBinLine as DeleteIcon } from "react-icons/ri";

import Table from "../../components/Table/UserTable";
import TableControls from "../../components/Table/TableControls";
import CustomSearchField from "../../components/common/CustomSearchField";
import Button from "../../components/common/Button";
import BreadCrumb from "../../components/common/CustomBreadCrumbs";

import { defaultCrops } from "../../data/Crops";
const { notify } = require("../../utils/toastNotification");

function Users() {
  const [crops, setCrops] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [query, setQuery] = useState("");

  const queryRef = useRef(null);

  // onChange function for select
  const handleLimitChange = (e) => {
    setLimit(parseInt(e.target.value));
  };

  const setPrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const setNext = () => {
    setPage(page + 1);
  };

  const handler = () => {
    notify("Hello, world!");
  };

  const tableActionsHandler = (action) => (event) => {
    notify(action);
  };

  useEffect(() => {
    setTimeout(() => {
      setCrops(defaultCrops);
    }, 5000);
  }, [crops]);

  const columns = useMemo(
    () => [
      {
        Header: "First Name",
        accessor: "first_name",
      },
      {
        Header: "Last Name",
        accessor: "last_name",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Group",
        accessor: "group",
      },
      {
        Header: "Assiociation",
        accessor: "association",
      },
      {
        Header: "State",
        accessor: "state",
      },
      {
        Header: "Last Login",
        accessor: "last_login",
      },
      {
        Header: "Edit",
        accessor: "editUuid",
        Cell: ({ value, row }) => {
          const { original } = row;
          // console.log(original);
          return (
            <IconButton
              onClick={tableActionsHandler(
                `Editing Row ${original.id} - ${original.task}...`
              )}
            >
              <EditIcon />
            </IconButton>
          );
        },
      },
      {
        Header: "Delete",
        accessor: "deleteUuid",
        Cell: ({ value, row }) => {
          const { original } = row;
          // console.log(original);
          return (
            <IconButton
              onClick={tableActionsHandler(
                `Deleting Row ${original.id} - ${original.task}...`
              )}
            >
              <DeleteIcon />
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
        id: 1,
        first_name: "John",
        last_name: "Doe",
        email: "chimdi@gmail.com",
        group: "Admin",
        association: "Association",
        state: "State",
        last_login: "Last Login",
      },
      {
        id: 2,
        first_name: "John",
        last_name: "Doe",
        email: "james@gmailcom",
        group: "Admin",
        association: "Association",
        state: "State",
        last_login: "Last Login",
      },
      {
        id: 1,
        first_name: "John",
        last_name: "Doe",
        email: "chimdi@gmail.com",
        group: "Admin",
        association: "Association",
        state: "State",
        last_login: "Last Login",
      },
      {
        id: 2,
        first_name: "John",
        last_name: "Doe",
        email: "james@gmailcom",
        group: "Admin",
        association: "Association",
        state: "State",
        last_login: "Last Login",
      },
      {
        id: 1,
        first_name: "John",
        last_name: "Doe",
        email: "chimdi@gmail.com",
        group: "Admin",
        association: "Association",
        state: "State",
        last_login: "Last Login",
      },
      {
        id: 2,
        first_name: "John",
        last_name: "Doe",
        email: "james@gmailcom",
        group: "Admin",
        association: "Association",
        state: "State",
        last_login: "Last Login",
      },
    ],
    []
  );

  return (
    <React.Fragment>
      <section>
        <nav id="quick-nav">
          <BreadCrumb
            breadcrumbs={[
              <Typography key="1" color="inherit">
                Dashboard
              </Typography>,
              <Typography key="2" color="primary.main">
                Capture
              </Typography>,
            ]}
          />
        </nav>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            flexWrap: { xs: "wrap", md: "nowrap" },
          }}
        >
          <CustomSearchField
            // fullWidth
            // inputProps={{  }}
            InputProps={{
              ref: queryRef,
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="small" />
                </InputAdornment>
              ),
            }}
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
            <Button
              onClick={handler}
              value="Create New User"
              disableElevation
            />
            <Button onClick={handler} value="Upload Users" disableElevation />
          </Stack>
        </Stack>

        <h2 style={{ fontSize: "20px" }}>All Users</h2>
        <Box>
          <Table columns={columns} data={tableData} />
          <TableControls
            nextHandler={() => setNext()}
            prevHandler={() => setPrev()}
            limitHandler={(e) => handleLimitChange(e)}
            totalpages={2}
            page={page}
          />
        </Box>
      </section>
    </React.Fragment>
  );
}

export default Users;
