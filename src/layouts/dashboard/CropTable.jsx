import React, { useMemo, useState, useCallback } from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

import { BiEditAlt as EditIcon } from "react-icons/bi";
import { RiDeleteBinLine as DeleteIcon } from "react-icons/ri";

import Table from "../../components/Table/UserTable";
import TableControls from "../../components/Table/TableControls";
import Dialog from "../../components/Modals/Dialog";
// import BreadCrumb from "../../components/common/CustomBreadCrumbs";

import { AddCropProfile as AddCropProfileModalContent } from "./ModalContents";

const { notify } = require("../../utils/toastNotification");

function CropTable() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  // const [query, setQuery] = useState("");

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

  const [dialogContent, setDialogContent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleModalOpen = useCallback((modalId, data = null) => (
    (e) => {
      switch (modalId) {
        case "add-crop-profile":
          // console.log(data);
          setDialogContent(
            <AddCropProfileModalContent
              closeHandler={handleModalClose}
              data={data}
            />
          );
          break;

        case "edit-crop-profile":
          setDialogContent(
            <AddCropProfileModalContent
              closeHandler={handleModalClose}
              data={data}
            />
          );
          break;

        default:
          setDialogContent(
            <AddCropProfileModalContent
              closeHandler={handleModalClose}
              data={data}
            />
          );
          break;
      }
      setShowModal(true);
    }
  ), []);

  const tableActionsHandler = (action) => (event) => {
    notify(action);
  };

  const columns = useMemo(
    () => [
      {
        Header: "S/N",
        accessor: "serial",
      },
      {
        Header: "Crop Name",
        accessor: "cropName",
      },
      {
        Header: "Yield Forecast (Ha)",
        accessor: "yieldForecast",
      },
      {
        Header: "Edit",
        accessor: "editUuid",
        Cell: ({ value, row }) => {
          const { original } = row;
          // console.log(original);
          return (
            <IconButton
              onClick={handleModalOpen("edit-crop-profile", original)}
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
                `Deleting Row ${original.serial} - ${original.cropName}...`
              )}
            >
              <DeleteIcon />
            </IconButton>
          );
        },
      },
    ],
    [handleModalOpen]
  );

  const tableData = useMemo(
    () => [
      {
        serial: "1",
        cropName: "Rice",
        yieldForecast: "9.00",
        editUuid: "edit_1",
        deleteUuid: "delete_1",
      },
      {
        serial: "2",
        cropName: "Rice",
        yieldForecast: "9.00",
        editUuid: "edit_2",
        deleteUuid: "delete_2",
      },
      {
        serial: "3",
        cropName: "Rice",
        yieldForecast: "9.00",
        editUuid: "edit_3",
        deleteUuid: "delete_3",
      },
      {
        serial: "4",
        cropName: "Rice",
        yieldForecast: "9.00",
        editUuid: "edit_4",
        deleteUuid: "delete_4",
      },
      {
        serial: "5",
        cropName: "Rice",
        yieldForecast: "9.00",
        editUuid: "edit_5",
        deleteUuid: "delete_5",
      },
      {
        serial: "6",
        cropName: "Rice",
        yieldForecast: "9.00",
        editUuid: "edit_6",
        deleteUuid: "delete_6",
      },
    ], []
  );

  return (
    <React.Fragment>
      <section>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <h2 style={{ fontSize: "20px" }}>Crop Planted</h2>
        </Stack>

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
      <Dialog
        open={showModal}
        closeHandler={handleModalClose}
      >
        {dialogContent}
      </Dialog>
    </React.Fragment>
  );
}

export default CropTable;
