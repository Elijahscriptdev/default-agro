import React, { useState, useEffect, useMemo, useCallback } from "react";
import { BiEditAlt as EditIcon } from "react-icons/bi";
import { useSelector } from "react-redux";
import moment from "moment";

import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import Table from "../../components/Table/UserTable";
import TableControls from "../../components/Table/TableControls";
import StatusIndicator from "../../components/common/StatusIndicator";
import BreadCrumb from "../../components/common/CustomBreadCrumbs";
// import Dialog from "../../components/Modals/Dialog";

import { getFarmerExports } from "../../redux/actions/UserManagementActions";
import Can from "../../utils/rbac/Can";
import { Tooltip } from "@mui/material";
import Spinner from "../../components/Spinner";

function Exports() {
  // const dispatch = useDispatch();
  const [exportData, setExportData] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(15);

  // const [dialogContent, setDialogContent] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const authenticatedUser = useSelector(
    (state) =>
      state.AuthReducer.userProfile ||
      JSON.parse(sessionStorage.getItem("user_profile"))
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

  // const handleModalClose = () => {
  //   setShowModal(false);
  // };

  const fetchTableData = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await getFarmerExports({ page, limit });
      console.log(response);
      setExportData(response?.data || []);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [limit, page]);

  useEffect(() => {
    fetchTableData();
  }, [fetchTableData]);

  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Status",
        Cell: ({ value, row }) => {
          const { original } = row;
          // console.log(original);
          const selectIndicator = (data) => {
            switch (true) {
              case data.status === "Completed":
                return {
                  value: data.status,
                  type: "success",
                };

              case data.status === "Failed":
                return {
                  value: data.status,
                  type: "error",
                };

              case data.status === "Pending":
                return {
                  value: data.status,
                  type: "pending",
                };

              default:
                return null;
            }
          };
          // console.log(original);
          const indicatorProps = selectIndicator(original);
          return !indicatorProps ? (
            <span>{original.status}</span>
          ) : (
            <StatusIndicator {...indicatorProps} />
          );
        },
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
        Header: "Download KYF",
        Cell: ({ value, row }) => {
          const { original } = row;
          // console.log(original);
          return (
            <Can
              role={authenticatedUser?.my_role?.role}
              perform="farmer:export:download-kyf"
              yes={() => (
                <IconButton
                  href={`/user-management/edit-farmer/${original.id}`}
                >
                  <EditIcon />
                </IconButton>
              )}
              no={() => (
                <Tooltip
                  title={`${authenticatedUser?.my_role?.role} cannot perform this action`}
                >
                  <IconButton disabled={true}>
                    <EditIcon />
                  </IconButton>
                </Tooltip>
              )}
            />
          );
        },
      },
      {
        Header: "Download Coordinates",
        Cell: ({ value, row }) => {
          const { original } = row;
          // console.log(original);
          return (
            <Can
              role={authenticatedUser?.my_role?.role}
              perform="farmer:export:download-coordinates"
              yes={() => (
                <IconButton
                  href={`/user-management/edit-farmer/${original.id}`}
                >
                  <EditIcon />
                </IconButton>
              )}
              no={() => (
                <Tooltip
                  title={`${authenticatedUser?.my_role?.role} cannot perform this action`}
                >
                  <IconButton disabled={true}>
                    <EditIcon />
                  </IconButton>
                </Tooltip>
              )}
            />
          );
        },
      },
    ],
    [authenticatedUser?.my_role?.role]
  );

  const tableData = useMemo(() => exportData, [exportData]);
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
              <Typography key="2" color="inherit">
                Manage Farmers
              </Typography>,
              <Typography key="3" color="primary.main">
                Exports
              </Typography>,
            ]}
          />
        </nav>

        <h2 className="with-spinner" style={{ fontSize: "20px" }}>
          <span>All Exports</span>
          {isLoading ? <Spinner size={20} color="primary" /> : ""}
        </h2>

        <Box>
          <Table columns={columns} data={tableData} isLoading={isLoading} />
          <TableControls
            nextHandler={() => setNext()}
            prevHandler={() => setPrev()}
            limitHandler={(e) => handleLimitChange(e)}
            totalRecords={exportData.length}
            page={page}
            limit={limit}
          />
        </Box>
      </section>

      {/* <Dialog
        open={showModal}
        closeHandler={handleModalClose}
        PaperProps={{ sx: { maxWidth: "unset" } }}
      >
        {dialogContent}
      </Dialog> */}
    </React.Fragment>
  );
}

export default Exports;
