import React, {
  useState,
  useEffect,
  useMemo,
  // useRef,
  useCallback,
} from "react";

import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton";

import { RiDeleteBinLine as DeleteIcon } from "react-icons/ri";

import Table from "../../components/Table/UserTable";
import TableControls from "../../components/Table/TableControls";
import Button from "../../components/common/Button";
import Dialog from "../../components/Modals/Dialog";
import BreadCrumb from "../../components/common/CustomBreadCrumbs";
import { useDispatch, useSelector } from "react-redux";
import { getCollections } from "../../redux/actions/CollectionsActions";

import {
  AddNewCollection as AddCollectionModalContent,
  DeleteCollection as DeleteCollectionModalContent,
} from "./ModalContents";

// const { notify } = require("../../utils/toastNotification");

const Collections = () => {
  const dispatch = useDispatch();
  const collections = useSelector(
    (state) => state.CollectionsReducer?.collections?.data || []
  );
  const isLoading = useSelector(
    (state) => state.CollectionsReducer?.collections?.loading
  );
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(15);
  // const [query, setQuery] = useState("");

  const [dialogContent, setDialogContent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  console.log("loading", isLoading);

  // const queryRef = useRef(null);

  // onChange function for select
  const handleLimitChange = (e) => {
    setLimit(parseInt(e.target.value));
  };

  const setPrev = () => {
    if (page > 1) setPage(page - 1);
    dispatch(getCollections({ page: page - 1 }));
  };

  const setNext = () => {
    setPage({ page: page + 1 });
    // dispatch(getUsers(page + 1));
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleModalOpen = useCallback(
    (modalId, data = null) =>
      (e) => {
        switch (modalId) {
          case "add-collection":
            // console.log(data);
            setDialogContent(
              <AddCollectionModalContent closeHandler={handleModalClose} />
            );
            break;

          case "delete-collection":
            setDialogContent(
              <DeleteCollectionModalContent
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

  useEffect(() => {
    dispatch(getCollections({ page }));
  }, [dispatch, page]);

  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "Name",
      },
      {
        Header: "Type",
        accessor: "type",
      },
      {
        Header: "Crop",
        accessor: "crop",
      },
      {
        Header: "Weight",
        accessor: "weight",
      },
      {
        Header: "Date",
        accessor: "date",
      },

      {
        Header: "Delete",
        Cell: ({ value, row }) => {
          const { original } = row;
          // console.log(original);
          return (
            <IconButton
              onClick={handleModalOpen("delete-collection", original)}
            >
              <DeleteIcon />
            </IconButton>
          );
        },
      },
    ],
    [handleModalOpen]
  );

  const tableData = useMemo(() => collections, [collections]);

  return (
    <React.Fragment>
      <section>
        <nav id="quick-nav">
          <BreadCrumb
            breadcrumbs={[
              <Typography key="1" color="inherit">
                Collection
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
            flexWrap: { xs: "wrap", md: "nowrap" },
          }}
        >
          <h2 style={{ fontSize: "20px" }}>All Collections</h2>

          <Button
            onClick={handleModalOpen("add-collection")}
            value="Add New Collection"
            disableElevation
          />
        </Stack>

        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <Box>
            <Table columns={columns} data={tableData} />
            <TableControls
              nextHandler={() => setNext()}
              prevHandler={() => setPrev()}
              limitHandler={(e) => handleLimitChange(e)}
              totalPages={collections?.to}
              page={page}
              limit={limit}
            />
          </Box>
        )}
      </section>

      <Dialog open={showModal} closeHandler={handleModalClose}>
        {dialogContent}
      </Dialog>
    </React.Fragment>
  );
};

export default Collections;
