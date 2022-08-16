import React, {
  useState,
  useEffect,
  useMemo,
  useRef,
  useCallback,
} from "react";

import { useSelector, useDispatch } from "react-redux";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MuiButton from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { Search as SearchIcon } from "../../components/icons/search";
import { RiMore2Fill as ActionMenuIcon } from "react-icons/ri";

import CustomSearchField from "../../components/common/CustomSearchField";
import TableControls from "../../components/Table/TableControls";
import CustomSelect from "../../components/common/CustomSelect";
import Button from "../../components/common/Button";
import StatusIndicator from "../../components/common/StatusIndicator";
import TableWithCheck from "../../components/Table/TableWithCheck";
import Dialog from "../../components/Modals/Dialog";
import BreadCrumb from "../../components/common/CustomBreadCrumbs";
// import Spinner from "../../components/Spinner";

import InputAdornment from "@mui/material/InputAdornment";
import {
  // AddFarmUnit as AddFarmUnitModalContent,
  ViewMap as ViewMapModalContent,
  AssignFarm as AssignFarmModalContent,
  BulkAssignFarms as BulkAssignFarmsModalContent,
} from "./ModalContents";

import { SET_LOCALS } from "../../redux/types/AppActionTypes";
import { getFarmLots } from "../../redux/actions/FarmManagementActions";
import { getStates, getLocalGovt } from "../../redux/actions/AppActions";
import Can from "../../utils/rbac/Can";
import { notify } from "../../utils/toastNotification";

function ActionMenu(props) {
  const { handleModalOpen } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const mapViewHandler = (e) => {
    handleClose(e);
    handleModalOpen("view-map", props.data)(e);
  };

  const assignFarmHandler = (e) => {
    handleClose(e);
    handleModalOpen("assign-farm", props.data)(e);
  };

  return (
    <div>
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <ActionMenuIcon />
      </IconButton>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          "& .MuiMenu-paper": {
            borderRadius: "15px",
            boxShadow: "0px 5px 20px rgba(108, 117, 125, 0.4)",
          },
        }}
      >
        <MenuItem onClick={handleClose}>
          <MuiButton
            href={`/farm-management/edit-farm-unit/${props.data?.id}`}
            sx={{
              p: 0,
              m: 0,
              textTransform: "capitalize",
              color: "inherit",
              fontSize: "inherit",
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
          >
            View Farm Unit
          </MuiButton>
        </MenuItem>
        <MenuItem onClick={mapViewHandler}>View Map</MenuItem>
        <Can
          role={props.role}
          perform="farm-management:farm:bulk-assign"
          yes={() => (
            <MenuItem onClick={assignFarmHandler}>Assign Farm</MenuItem>
          )}
          no={() => null}
        />
      </Menu>
    </div>
  );
}

function ManageFarmLots() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(15);

  // Filters
  const queryRef = useRef(null);
  const [query, setQuery] = useState("");
  const [mapped, setMapped] = useState("");
  const [state, setState] = useState("");
  const [lga, setLga] = useState("");
  const [clientName, setClientName] = useState("");

  const availableStates = useSelector(
    (state) => state.AppReducer?.states || {}
  );
  const localGovts = useSelector((state) => state.AppReducer?.localGovt || []);

  // Page data
  const farmLots = useSelector((state) => state.FarmMangementReducer?.farmLots);

  const [dialogContent, setDialogContent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [selectedRows, setSelectedRows] = useState([]);

  const authenticatedUser = useSelector(
    (state) =>
      state.AuthReducer.userProfile ||
      JSON.parse(sessionStorage.getItem("user_profile"))
  );

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

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleModalOpen = useCallback(
    (modalId, data = null) =>
      (e) => {
        switch (modalId) {
          // case "add-farm-unit":
          //   setDialogContent(
          //     <AddFarmUnitModalContent
          //       closeHandler={handleModalClose}
          //       states={Object.values(availableStates).map((eachState) => ({
          //         name: eachState.name,
          //         value: eachState.state_id,
          //       }))}
          //     />
          //   );
          //   break;

          case "view-map":
            setDialogContent(
              <ViewMapModalContent
                closeHandler={handleModalClose}
                data={data}
              />
            );
            break;

          case "assign-farm":
            setDialogContent(
              <AssignFarmModalContent
                closeHandler={handleModalClose}
                farm={data}
              />
            );
            break;

          case "bulk-assign-farms":
            setDialogContent(
              <BulkAssignFarmsModalContent
                closeHandler={handleModalClose}
                selections={data}
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

  const handleBulkAssign = (e) => {
    if (selectedRows.length > 0) {
      handleModalOpen("bulk-assign-farms", selectedRows)(e);
    } else {
      notify("Please select at least one row", { type: "info" });
    }
    console.log(selectedRows);
  };

  useEffect(() => {
    const filters = {
      page,
      search: query,
    };

    if (clientName !== "") {
      filters.client_name = clientName;
    } else {
      delete filters.client_name;
    }

    if (mapped !== "") {
      filters.mapped = mapped;
    } else {
      delete filters.mapped;
    }

    if (state) {
      filters.state = state;
    } else {
      delete filters.state;
    }

    if (lga) {
      filters.community = lga;
    } else {
      delete filters.community;
    }

    dispatch(getFarmLots(filters));
    dispatch(getStates());
  }, [clientName, dispatch, mapped, page, state, lga, query]);

  const columns = useMemo(
    () => [
      {
        Header: "Lots ID",
        accessor: "farm_id",
      },
      {
        Header: "Farmer",
        accessor: "farmer_name",
        // Cell: ({ value, row }) => {
        //   const { original } = row;
        //   // console.log(original);
        //   return (
        //     <span>
        //       {original.farmer
        //         ? `${original.farmer.first_name} ${original.farmer.last_name}`
        //         : "-"}
        //     </span>
        //   );
        // },
      },
      {
        Header: "Crop",
        accessor: "crop",
      },
      {
        Header: "State",
        accessor: "state",
        // Cell: ({ value, row }) => {
        //   const { original } = row;
        //   const stateId = original?.lga?.state_id;
        //   // console.log(availableStates[stateId]);

        //   return <span>{availableStates[stateId]?.name || "-"}</span>;
        // },
      },
      {
        Header: "LGA",
        accessor: "lga",
      },
      {
        Header: "Mapped",
        Cell: ({ value, row }) => {
          const { original } = row;
          // console.log(original);
          return (
            <StatusIndicator
              value={!original.mapped ? "Not Mapped" : "Mapped"}
              type={!original.mapped ? "error" : "success"}
            />
          );
        },
      },
      {
        Header: "Client Name",
        accessor: "last_login",
      },
      {
        Header: "Sub Cluster",
        Cell: ({ value, row }) => {
          const { original } = row;
          // console.log(original);
          return <span>{original.sub_cluster || "-"}</span>;
        },
      },
      {
        Header: "Actions",
        Cell: ({ value, row }) => {
          const { original } = row;
          // console.log(original);
          return (
            <ActionMenu
              data={original}
              role={authenticatedUser?.my_role?.role}
              handleModalOpen={handleModalOpen}
              handleModalClose={handleModalClose}
            />
          );
        },
      },
    ],
    [authenticatedUser?.my_role?.role, handleModalOpen]
  );

  const tableData = useMemo(
    () =>
      farmLots.data?.map((each) => {
        // console.log(lot);
        return {
          id: each.id,
          address: each.address.replace(/,/g, "."),
          clay: each.clay,
          cluster: each.cluster,
          community: each.community,
          created: each.created,
          crop: each.crop,
          farm_id: each.farm_id,
          farmer_id: each.farmer?.id,
          farmer_name: `${each.farmer?.first_name} ${each.farmer?.middle_name} ${each.farmer?.last_name}`,
          mapped: each.farmer?.mapped,
          state: availableStates[each.state.state_id]?.name,
          lga: each.lga?.local_name,
          loam: each.loam,
          nitrogen: each.nitrogen,
          phosphorus: each.phosphorus,
          potassium: each.potassium,
          size: each.size,
          slit: each.slit,
          status: each.status,
          sub_cluster: each.sub_cluster?.name,
          tenant: each.tenant,
          tenant_id: each.tenant_id,
        };
      }) || [],
    [availableStates, farmLots.data]
  );

  // console.log(csvData);
  return (
    <React.Fragment>
      <section>
        <nav id="quick-nav">
          <BreadCrumb
            breadcrumbs={[
              <Typography key="1" color="inherit">
                Farm Management
              </Typography>,
              <Typography key="2" color="primary.main">
                Farm Units
              </Typography>,
            ]}
          />
        </nav>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            flexWrap: {
              xs: "wrap",
              md: "no-wrap",
            },
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
              maxWidth: { sm: "250px" },
            }}
          />

          <Stack direction="row" spacing={2} sx={{ my: 2 }}>
            <Can
              role={authenticatedUser?.my_role?.role}
              perform="farm-management:farm:create"
              yes={() => (
                <Button
                  href="/farm-management/add-farm-unit"
                  // onClick={handleModalOpen("add-farm-unit")}
                  value="Add New Unit"
                  disableElevation
                />
              )}
              no={() => null}
            />
            <Can
              role={authenticatedUser?.my_role?.role}
              perform="farm-management:farm:bulk-assign"
              yes={() => (
                <Button
                  value="Bulk Assign"
                  onClick={handleBulkAssign}
                  disableElevation
                  disabled={selectedRows.length === 0}
                />
              )}
              no={() => null}
            />
          </Stack>
        </Stack>

        {/* {isLoading ? <Spinner size={20} color="primary" /> : null} */}
        {selectedRows.length > 0 && (
          <div
            style={{ marginBottom: "-25px" }}
          >{`${selectedRows.length} selected farms`}</div>
        )}
        <div
          className="farmmanagementheader flex flex-row items-end space-between overflow-x-auto"
          style={{ justifyContent: "space-between" }}
        >
          <div style={{ flexGrow: 1 }}>
            <span className="filtertext mr-2 ml-2">Filter by:</span>

            <Stack direction="row" alignItems="center" flexWrap="wrap">
              <div className="mr-2 ml-2 component-wrapper">
                <CustomSelect
                  width="100%"
                  height="32px"
                  borderRadius="5px"
                  backgroundColor="#FFFFFF"
                  noneLabel={<em>All</em>}
                  options={[
                    { name: "Mapped", value: 1 },
                    { name: "Not Mapped", value: 0 },
                  ]}
                  onChange={(e) => setMapped(e.target.value)}
                />
              </div>

              <div className="mr-2 ml-2 component-wrapper">
                <CustomSelect
                  width="100%"
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
                  onChange={stateChangeHandler}
                />
              </div>

              <div className="mr-2 ml-2 component-wrapper">
                <CustomSelect
                  width="100%"
                  height="32px"
                  noneLabel={<em>All L.G.A</em>}
                  options={localGovts.map((eachLga) => {
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
                  noneLabel={<em>Client Name</em>}
                  options={[{ name: "Abc Client", value: "abc client" }]}
                  borderRadius="5px"
                  backgroundColor="#FFFFFF"
                  onChange={(e) => setClientName(e.target.value)}
                />
              </div>
            </Stack>
          </div>
        </div>

        <Box>
          {/* <div>
            {JSON.stringify(selectedRows)}
          </div> */}
          <TableWithCheck
            columns={columns}
            data={tableData}
            isLoading={farmLots.loading}
            setSelectedRows={setSelectedRows}
          />
          <TableControls
            nextHandler={() => setNext()}
            prevHandler={() => setPrev()}
            limitHandler={(e) => handleLimitChange(e)}
            page={page}
            totalRecords={farmLots.total}
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

export default ManageFarmLots;
