import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import { BiEditAlt as EditIcon } from "react-icons/bi";
import { RiDeleteBinLine as DeleteIcon } from "react-icons/ri";

import Table from "../../components/Table/UserTable";
import TableControls from "../../components/Table/TableControls";
import Dialog from "../../components/Modals/Dialog";
import Spinner from "../../components/Spinner";
import BreadCrumb from "../../components/common/CustomBreadCrumbs";

import {
  EditCategory as EditCategoryModalContent,
  DeleteCategory as DeleteCategoryModalContent,
} from "./ModalContents";

import { getActivityCategories } from "../../redux/actions/ConfigurationsActions";
// const { notify } = require("../../utils/toastNotification");

function ManageCropCategories() {
  const dispatch = useDispatch();
  // Table States
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  // const [query, setQuery] = useState("");

  // Modal States
  const [dialogContent, setDialogContent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const activityCategories = useSelector(
    (state) => state.ConfigReducer.activityCategories
  );

  const handleModalOpen = useCallback(
    (modalId, data = null) =>
      (e) => {
        switch (modalId) {
          case "edit-category":
            setDialogContent(
              <EditCategoryModalContent
                closeHandler={handleModalClose}
                data={data}
              />
            );
            break;

          case "delete-category":
            setDialogContent(
              <DeleteCategoryModalContent
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

  const handleModalClose = () => {
    setShowModal(false);
  };

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

  const columns = useMemo(
    () => [
      {
        Header: "S/N",
        accessor: "id",
      },
      {
        Header: "Crop Profile",
        accessor: "crop_profile.crop_name",
      },
      {
        Header: "Category Name",
        accessor: "category",
      },
      {
        Header: "Edit",
        Cell: ({ value, row }) => {
          const { original } = row;
          // console.log(original);
          return (
            <IconButton onClick={handleModalOpen("edit-category", original)}>
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
            <IconButton onClick={handleModalOpen("delete-category", original)}>
              <DeleteIcon />
            </IconButton>
          );
        },
      },
    ],
    [handleModalOpen]
  );

  const tableData = useMemo(() => activityCategories?.data, [activityCategories]);

  useEffect(() => {
    dispatch(getActivityCategories({ page }));
  }, [dispatch, page]);

  return (
    <React.Fragment>
      <section>
        <nav id="quick-nav">
          <BreadCrumb
            breadcrumbs={[
              <Typography key="1" color="inherit">
                Configurations
              </Typography>,
              <Link
                href="/configurations/crop-calendar"
                key="2"
                color="inherit"
              >
                Crop calendar
              </Link>,
              <Typography key="3" color="primary.main">
                Manage Categories
              </Typography>,
            ]}
          />
        </nav>

        <h2 className="with-spinner" style={{ fontSize: "20px" }}>
          <span>All Categories</span>
          {activityCategories?.loading ? <Spinner size={20} color="primary" /> : ""}
        </h2>
        <Box>
          <Table columns={columns} data={tableData} isLoading={activityCategories?.loading} />
          <TableControls
            nextHandler={() => setNext()}
            prevHandler={() => setPrev()}
            limitHandler={(e) => handleLimitChange(e)}
            totalRecords={activityCategories?.total}
            limit={limit}
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

export default ManageCropCategories;
