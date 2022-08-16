import React, {
  useState,
  useMemo,
  useRef,
  useCallback,
  useEffect,
} from "react";

import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Typography from "@mui/material/Typography";

import { Search as SearchIcon } from "../../components/icons/search";
import { RiDeleteBinLine as DeleteIcon } from "react-icons/ri";

import Table from "../../components/Table/UserTable";
import TableControls from "../../components/Table/TableControls";
import Button from "../../components/common/Button";
import Dialog from "../../components/Modals/Dialog";
import BreadCrumb from "../../components/common/CustomBreadCrumbs";
import CustomSearchField from "../../components/common/CustomSearchField";

import {
  // AddSourcingAgent as AddSourcingAgentModalContent,
  DeleteSourcingAgent as DeleteSourcingAgentModalContent,
} from "./ModalContents";
import { getSourcingAgents } from "../../redux/actions/UserManagementActions";
import { getStates } from "../../redux/actions/AppActions";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../components/Spinner";

// const { notify } = require("../../utils/toastNotification");

function SourcingAgents() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [query, setQuery] = useState("");

  const queryRef = useRef(null);

  const [dialogContent, setDialogContent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const sourcingAgents = useSelector(
    (state) => state.UserManagementReducer.sourcingAgents
  );
  // const states = useSelector((state) => state.AppReducer.states);

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

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleModalOpen = useCallback(
    (modalId, data = null) =>
      (e) => {
        switch (modalId) {
          // case "add-sourcing-agent":
          //   // console.log(data);
          //   setDialogContent(
          //     <AddSourcingAgentModalContent closeHandler={handleModalClose} />
          //   );
          //   break;

          case "delete-sourcing-agent":
            setDialogContent(
              <DeleteSourcingAgentModalContent
                closeHandler={handleModalClose}
                data={data}
              />
            );
            break;

          default:
            setDialogContent(null);
            break;
        }
        setShowModal(true);
      },
    []
  );

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
        Header: "Phone Number",
        accessor: "mobile",
      },
      {
        Header: "Account Number",
        accessor: "account_no",
      },
      {
        Header: "Bank Name",
        accessor: "bank",
      },
      {
        Header: "No of Farmers",
        accessor: "farmers",
      },
      {
        Header: "Delete",
        Cell: ({ value, row }) => {
          const { original } = row;
          // console.log(original);
          return (
            <IconButton
              onClick={handleModalOpen("delete-sourcing-agent", original)}
            >
              <DeleteIcon />
            </IconButton>
          );
        },
      },
    ],
    [handleModalOpen]
  );
  const tableData = useMemo(() => sourcingAgents?.data || [], [sourcingAgents]);

  useEffect(() => {
    const filters = { page, per_page: limit };

    if (query && query.length > 1) {
      filters.search_by_name = query;
    }

    dispatch(getSourcingAgents(filters));
    dispatch(getStates({}));
  }, [dispatch, page, limit, query]);

  return (
    <React.Fragment>
      <section>
        <nav id="quick-nav">
          <BreadCrumb
            breadcrumbs={[
              <Typography key="1" color="inherit">
                User Management
              </Typography>,
              <Typography key="2" color="primary.main">
                Manage Sourcing Agents
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
            <Button
              href="/user-management/add-sourcing-agent"
              value="Add New Sourcing Agent"
              disableElevation
            />
          </Stack>
        </Stack>

        <Stack direction="row" alignItems="center" justifyContent="space-between">
        <h2 className="with-spinner" style={{ fontSize: "20px" }}>
          <span>All Sourcing Agents</span>
          {sourcingAgents.loading ? <Spinner size={20} color="primary" /> : ""}
        </h2>

        <TableControls
          showLimit="false"
          hideOnMobile="true"
          nextHandler={() => setNext()}
          prevHandler={() => setPrev()}
          limitHandler={(e) => handleLimitChange(e)}
          totalRecords={sourcingAgents.total}
          page={page}
          limit={limit}
        />
        </Stack>
        

        
        <Box>
          <Table
            columns={columns}
            data={tableData}
            isLoading={sourcingAgents.loading}
          />
          <TableControls
            nextHandler={() => setNext()}
            prevHandler={() => setPrev()}
            limitHandler={(e) => handleLimitChange(e)}
            totalRecords={sourcingAgents.total}
            page={page}
            limit={limit}
          />
        </Box>
      </section>
      <Dialog
        open={showModal}
        closeHandler={handleModalClose}
        PaperProps={{ sx: { maxWidth: "unset" } }}
      >
        {dialogContent}
      </Dialog>
    </React.Fragment>
  );
}

export default SourcingAgents;
