import React, {
  useState,
  useEffect,
  useMemo,
  useRef,
  useCallback,
} from "react";
import { BiEditAlt as EditIcon } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
// import CsvDownloader from "react-csv-downloader";
import { useNavigate } from "react-router-dom";

import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";

import { Search as SearchIcon } from "../../components/icons/search";

import Table from "../../components/Table/UserTable";
import TableControls from "../../components/Table/TableControls";
import CustomSearchField from "../../components/common/CustomSearchField";
import CustomSelect from "../../components/common/CustomSelect";
import StatusIndicator from "../../components/common/StatusIndicator";
import BreadCrumb from "../../components/common/CustomBreadCrumbs";
import Button from "../../components/common/Button";
import Dialog from "../../components/Modals/Dialog";

import {
  getFarmers,
  exportFarmerData,
} from "../../redux/actions/UserManagementActions";
import { SET_LOCALS } from "../../redux/types/AppActionTypes";
import { getLocalGovt, getStates } from "../../redux/actions/AppActions";
import Can from "../../utils/rbac/Can";
import { UploadFarmer as UploadFarmerModalContent } from "./ModalContents";
// import { Tooltip } from "@mui/material";

// const { notify } = require("../../utils/toastNotification");

function Farmers() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const farmers = useSelector((state) => state.UserManagementReducer.farmers);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(15);
  const [query, setQuery] = useState("");

  const [status, setStatus] = useState("");
  const [state, setState] = useState("");
  const [lga, setLga] = useState("");
  const [season, setSeason] = useState("");

  const [dialogContent, setDialogContent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const authenticatedUser = useSelector(
    (state) =>
      state.AuthReducer.userProfile ||
      JSON.parse(sessionStorage.getItem("user_profile"))
  );

  const availableStates = useSelector(
    (state) => state.AppReducer?.states || {}
  );

  const localGovts = useSelector((state) => state.AppReducer?.localGovt || []);

  const stateChangeHandler = (e) => {
    console.log({ state: e.target.value });
    if (!e.target.value) {
      setLga("");
      setState("");
      dispatch({
        type: SET_LOCALS,
        payload: {
          localGovt: [],
        },
      });
    } else {
      setState(e.target.value);
      dispatch(getLocalGovt(e.target.value));
    }
  };

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

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleModalOpen = useCallback(
    (modalId, data = null) =>
      (e) => {
        switch (modalId) {
          case "upload-farmers":
            // console.log(data);
            setDialogContent(
              <UploadFarmerModalContent closeHandler={handleModalClose} />
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

  const handleExport = (e) => {
    // e.preventDefault();
    const data = {
      tenant: authenticatedUser?.tenant?.id,
      tenant_id: authenticatedUser?.tenant?.tenant_id,
    };
    dispatch(exportFarmerData(data, navigate));
  };

  useEffect(() => {
    const body = {
      page,
      per_page: limit,
      search_farmer_by_name: query,
    };

    if (state !== "") {
      body.state = state;
    } else {
      delete body.state;
    }

    if (status !== "") {
      body.status = status;
    } else {
      delete body.status;
    }

    if (lga !== "") {
      body.lga = lga;
    } else {
      delete body.lga;
    }

    if (season !== "") {
      body.season = season;
    } else {
      delete body.season;
    }

    dispatch(getFarmers(body));
    dispatch(getStates());
  }, [dispatch, page, limit, status, state, lga, season, query]);

  const columns = useMemo(
    () => [
      {
        Header: "Surname",
        accessor: "last_name",
      },
      {
        Header: "Other Names",
        Cell: ({ value, row }) => {
          const { original } = row;
          // console.log(original);
          return (
            <span style={{ textTransform: "capitalize" }}>{`${
              original.first_name
            } ${original?.middle_name?.charAt(0).toUpperCase()}.`}</span>
          );
        },
      },
      {
        Header: "Mobile",
        accessor: "mobile",
      },
      {
        Header: "Status",
        Cell: ({ value, row }) => {
          const { original } = row;
          // console.log(original);
          return (
            <StatusIndicator
              value={original.status ? "Farm Added" : "Farm Not Added"}
              type={original.status ? "success" : "error"}
            />
          );
        },
      },
      {
        Header: "State",
        accessor: "state.name",
      },
      {
        Header: "LGA",
        accessor: "lga.local_name",
      },
      {
        Header: "Date Created",
        accessor: "date_created",
        Cell: ({ value, row }) => {
          const { original } = row;
          // console.log(original);
          return (
            <Stack direction="column" spacing={0.2}>
              <span>{moment(original.date_created).format("YYYY-MM-DD")}</span>
              <Typography
                variant="span"
                fontSize="12px"
                sx={{ color: (theme) => theme.palette.primary.main }}
              >
                {moment(original.date_created).format("HH:mm:ss")}
              </Typography>
            </Stack>
          );
        },
      },
      {
        Header: "Edit",
        Cell: ({ value, row }) => {
          const { original } = row;
          // console.log(original);
          return (
            <Can
              role={authenticatedUser?.my_role?.role}
              perform="farmer:edit"
              yes={() => (
                <IconButton
                  href={`/user-management/edit-farmer/${original.id}`}
                >
                  <EditIcon />
                </IconButton>
              )}
              no={() => (
                null
                // <Tooltip
                //   title={`${authenticatedUser?.my_role?.role} cannot perform this action`}
                // >
                //   <IconButton>
                //     <EditIcon />
                //   </IconButton>
                // </Tooltip>
              )}
            />
          );
        },
      },
    ],
    [authenticatedUser?.my_role?.role]
  );

  const tableData = useMemo(() => farmers.data || [], [farmers]);
  // const csvData = tableData;

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
                Manage Farmers
              </Typography>,
            ]}
          />
        </nav>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            flexWrap: { xs: "wrap", lg: "nowrap" },
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
            placeholder="Search"
            sx={{
              width: "100%",
              maxWidth: { sm: "300px" },
            }}
          />

          <Stack
            direction="row"
            spacing={2}
            sx={{
              mt: { xs: 2, lg: 0 },
              mb: { xs: 2, lg: 0 },
            }}
          >
            <Can
              role={authenticatedUser?.my_role?.role}
              perform="farmer:create"
              yes={() => (
                <Button
                  href="/user-management/add-farmer"
                  // onClick={handler}
                  value="Add New Farmer"
                  disableElevation
                />
              )}
              no={() => null}
              data={null}
            />
            <Can
              role={authenticatedUser?.my_role?.role}
              perform="farmers:upload"
              yes={() => (
                <Button
                  onClick={handleModalOpen("upload-farmers")}
                  value="Upload Farmers"
                  disableElevation
                />
              )}
              no={() => null}
              data={null}
            />

            {/* <Can
              role={authenticatedUser?.my_role?.role}
              perform="farmers:bulk-edit"
              yes={() => (
                <Button
                  onClick={handler}
                  disabled={true}
                  value="Bulk Edit Farmer"
                  disableElevation
                />
              )}
              no={() => null}
              data={null}
            /> */}
          </Stack>
        </Stack>

        <div className="farmmanagementheader flex flex-row items-stretch overflow-x-auto">
          <div style={{ flexGrow: 1 }}>
            <span className="filtertext mr-2 ml-2">Filter by:</span>

            <Stack direction="row" alignItems="center" flexWrap="wrap">
              <div className="mr-2 ml-2 component-wrapper">
                <CustomSelect
                  width="100%"
                  height="32px"
                  borderRadius="5px"
                  backgroundColor="#FFFFFF"
                  noneLabel={<em>Status</em>}
                  options={[
                    { name: "Farm Added", value: 1 },
                    { name: "Farm Not Added", value: 0 },
                  ]}
                  onChange={(e) => setStatus(e.target.value)}
                />
              </div>

              <div className="mr-2 ml-2 component-wrapper">
                <CustomSelect
                  width="100%"
                  height="32px"
                  noneLabel={<em>State</em>}
                  options={Object.values(availableStates).map((eachState) => {
                    // console.log(eachState);
                    return {
                      name: eachState.name,
                      value: eachState.state_id,
                    };
                  })}
                  sx={{ borderRadius: "5px" }}
                  backgroundColor="#FFFFFF"
                  onChange={stateChangeHandler}
                />
              </div>

              <div className="mr-2 ml-2 component-wrapper">
                <CustomSelect
                  width="100%"
                  height="32px"
                  noneLabel={<em>LGA</em>}
                  options={localGovts.map((eachLga) => {
                    // console.log(eachLga);
                    return {
                      name: eachLga.local_name,
                      value: eachLga.local_id,
                    };
                  })}
                  borderRadius="5px"
                  backgroundColor="#FFFFFF"
                  onChange={(e) => setLga(e.target.value)}
                />
              </div>

              <div className="mr-2 ml-2 component-wrapper">
                <CustomSelect
                  width="100%"
                  height="32px"
                  noneLabel={<em>Season</em>}
                  options={[
                    { name: "Rainy Season", value: "Rainy" },
                    { name: "Dry Season", value: "Dry" },
                    { name: "Harmattan", value: "harmattan" },
                  ]}
                  borderRadius="5px"
                  backgroundColor="#FFFFFF"
                  onChange={(e) => setSeason(e.target.value)}
                />
              </div>
            </Stack>
          </div>

          {!authenticatedUser.tenant || !authenticatedUser.tenant_id ? null : (
            <div
              className="flex mr-2 ml-2 component-wrapper"
              style={{ justifyContent: "flex-end", alignItems: "flex-end" }}
            >
              <Button
                value="Export data"
                disableElevation
                onClick={handleExport}
                sx={{
                  color: (theme) => theme.palette.primary.main,
                  backgroundColor: "white",
                  height: "32px",
                }}
              />
              {/* <CsvDownloader
              datas={csvData}
              filename="FARMER_EXPORTED_DATA"
              extension=".csv"
              // separator=";"
              disabled={csvData.length === 0}
            >
              <Button
                value="Export data"
                disableElevation
                disabled={csvData.length === 0}
                sx={{
                  color: (theme) => theme.palette.primary.main,
                  backgroundColor: "white",
                  height: "32px",
                }}
              />
            </CsvDownloader> */}
            </div>
          )}
        </div>

        <Box>
          <Table
            columns={columns}
            data={tableData}
            isLoading={farmers.loading}
          />
          <TableControls
            nextHandler={() => setNext()}
            prevHandler={() => setPrev()}
            limitHandler={(e) => handleLimitChange(e)}
            totalRecords={farmers.total}
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

export default Farmers;
