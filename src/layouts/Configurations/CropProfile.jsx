import React, { useMemo, useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import { BiEditAlt as EditIcon } from "react-icons/bi";
import { RiDeleteBinLine as DeleteIcon } from "react-icons/ri";

import Table from "../../components/Table/UserTable";
import TableControls from "../../components/Table/TableControls";
import Button from "../../components/common/Button";
import Dialog from "../../components/Modals/Dialog";
import Spinner from "../../components/Spinner";
import BreadCrumb from "../../components/common/CustomBreadCrumbs";

import {
  AddCropProfile as AddCropProfileModalContent,
  EditCropProfile as EditCropProfileModalContent,
  DeleteCropProfile as DeleteCropProfileModalContent,
} from "./ModalContents";

import { getCropProfiles } from "../../redux/actions/ConfigurationsActions";

function CropProfileSection() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  // const [query, setQuery] = useState("");

  const [dialogContent, setDialogContent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const cropProfiles = useSelector(
    (state) => state.ConfigReducer.cropProfiles?.data
  );

  const isLoading = useSelector(
    (state) => state.ConfigReducer.cropProfiles?.loading || false
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

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleModalOpen = useCallback(
    (modalId, data = null) =>
      (e) => {
        switch (modalId) {
          case "add-crop-profile":
            // console.log(data);
            setDialogContent(
              <AddCropProfileModalContent closeHandler={handleModalClose} />
            );
            break;

          case "edit-crop-profile":
            setDialogContent(
              <EditCropProfileModalContent
                closeHandler={handleModalClose}
                data={data}
              />
            );
            break;

          case "delete-crop-profile":
            setDialogContent(
              <DeleteCropProfileModalContent
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
        Header: "S/N",
        accessor: "id",
      },
      {
        Header: "Crop Name",
        accessor: "crop_name",
      },
      {
        Header: "Yield Forecast (Ha)",
        accessor: "yield",
      },
      {
        Header: "Edit",
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
        Cell: ({ value, row }) => {
          const { original } = row;
          // console.log(original);
          return (
            <IconButton
              onClick={handleModalOpen('delete-crop-profile', original)}
            >
              <DeleteIcon />
            </IconButton>
          );
        },
      },
    ],
    [handleModalOpen]
  );

  const tableData = useMemo(() => cropProfiles || [], [cropProfiles]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCropProfiles());
  }, [dispatch]);

  return (
    <React.Fragment>
      <section>
        <nav id="quick-nav">
          <BreadCrumb
            breadcrumbs={[
              <Typography key="1" color="inherit">
                Configurations
              </Typography>,
              <Typography key="2" color="primary.main">
                Crop Profile
              </Typography>,
            ]}
          />
        </nav>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <h2 className="with-spinner" style={{ fontSize: "20px" }}>
            <span>Crop Profiles</span>
            {isLoading ? <Spinner size={20} color="primary" /> : ""}
          </h2>
          <Button
            onClick={handleModalOpen("add-crop-profile")}
            value="Add Crop Profile"
            disableElevation
          />
        </Stack>

        <Box>
          <Table columns={columns} data={tableData} isLoading={isLoading} />
          <TableControls
            nextHandler={() => setNext()}
            prevHandler={() => setPrev()}
            limitHandler={(e) => handleLimitChange(e)}
            totalRecords={cropProfiles.length}
            limit={cropProfiles.length || limit}
            page={page}
          />
        </Box>
      </section>
      <Dialog open={showModal} closeHandler={handleModalClose}>
        {dialogContent}
      </Dialog>
    </React.Fragment>
  );
}

export default CropProfileSection;
