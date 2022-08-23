import React, { useState, useCallback, useMemo } from "react";
import { useSelector } from "react-redux";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import { BiEditAlt as EditIcon } from "react-icons/bi";
import { RiDeleteBinLine as DeleteIcon } from "react-icons/ri";

import Button from "../../components/common/Button";
import Dialog from "../../components/Modals/Dialog";
import Spinner from "../../components/Spinner";
import BreadCrumb from "../../components/common/CustomBreadCrumbs";
import Table from "../../components/Table/TableWithCheck";
import TableControls from "../../components/Table/TableControls";

import {
  PendingPayments as PendingPaymentsModalContent,
  CollectionSettings as CollectionSettingsModalContent,
} from "./ModalContents";

const Collections = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  // const [query, setQuery] = useState("");

  const [dialogContent, setDialogContent] = useState(null);
  const [showModal, setShowModal] = useState(false);

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
          case "pending-payments":
            // console.log(data);
            setDialogContent(
              <PendingPaymentsModalContent closeHandler={handleModalClose} />
            );
            break;

          case "collection-settings":
            setDialogContent(
              <CollectionSettingsModalContent closeHandler={handleModalClose} />
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

  const collections = useSelector(
    (state) => state.ConfigReducer.collections?.data || []
  );

  const isLoading = useSelector(
    (state) => state.ConfigReducer.cropCalendar?.loading || false
  );

  const columns = useMemo(
    () => [
      {
        Header: "Category",
        accessor: "category.category",
      },
      {
        Header: "Task",
        accessor: "task",
      },
      {
        Header: "Crop Profile",
        accessor: "crop_profile.crop_name",
      },
      {
        Header: "Expected Done Date",
        accessor: "due_date",
      },
      {
        Header: "Weight On Yield",
        accessor: "crop_profile.yield",
      },
      {
        Header: "Edit",
        Cell: ({ value, row }) => {
          // const { original } = row;
          // console.log(original);
          return (
            <IconButton>
              <EditIcon />
            </IconButton>
          );
        },
      },
      {
        Header: "Delete",
        Cell: ({ value, row }) => {
          const { original } = row;
          // console.log(original);
          return (
            <IconButton onClick={handleModalOpen("delete-activity", original)}>
              <DeleteIcon />
            </IconButton>
          );
        },
      },
    ],
    [handleModalOpen]
  );

  const tableData = useMemo(() => collections || [], [collections]);

  return (
    <React.Fragment>
      <section>
        <nav id="quick-nav">
          <BreadCrumb
            breadcrumbs={[
              <Typography key="1" color="inherit">
                Payments
              </Typography>,
              <Typography key="2" color="primary.main">
                Collections
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
              md: "no-wrap"
            },
          }}
        >
          <h2 className="with-spinner" style={{ fontSize: "20px" }}>
            <span>All Collections</span>
            {isLoading ? <Spinner size={20} color="primary" /> : ""}
          </h2>

          <Stack direction="row" spacing={2} sx={{
            mb: {
              xs: 2,
              md: 0
            },
          }}>
            <Button
              value="Process Pending Payments"
              sx={{ marginRight: "21px" }}
              onClick={handleModalOpen("pending-payments")}
            />
            <Button
              value="Settings"
              onClick={handleModalOpen("collection-settings")}
            />
          </Stack>
        </Stack>

        <Box>
          <Table columns={columns} data={tableData} />
          <TableControls
            nextHandler={() => setNext()}
            prevHandler={() => setPrev()}
            limitHandler={(e) => handleLimitChange(e)}
            totalpages={2}
            page={page}
            limit={limit}
          />
        </Box>
      </section>

      <Dialog open={showModal} closeHandler={handleModalClose}>
        {dialogContent}
      </Dialog>
    </React.Fragment>
  );
};

export default Collections;
