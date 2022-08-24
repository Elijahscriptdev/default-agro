import moment from "moment";
import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
} from "react";
import { useDispatch, useSelector } from "react-redux";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import { RiDeleteBinLine as DeleteIcon } from "react-icons/ri";
import { BiEditAlt as EditIcon } from "react-icons/bi";
import Table from "../../components/Table/UserTable";
import TableControls from "../../components/Table/TableControls";
import Button from "../../components/common/Button";
import Spinner from "../../components/Spinner";
import Dialog from "../../components/Modals/Dialog";

import { Search as SearchIcon } from "../../components/icons/search";

import { getInputs } from "../../redux/actions/InputActions";

import {
  AddInput as AddInputModalContent,
  DeleteInput as DeleteInputModalContent,
} from "./ModalContents";
import CustomSearchField from "../../components/common/CustomSearchField";
import { InputAdornment } from "@mui/material";

const InputTracking = () => {
  const dispatch = useDispatch();
  const inputs = useSelector((state) => state.InputReducer.inputs);
  const isLoading = useSelector((state) => state.InputReducer.loading);
  const totalInputs = useSelector((state) => state.InputReducer.total);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(15);

  const queryRef = useRef(null);
  const [query, setQuery] = useState("");

  const [dialogContent, setDialogContent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleModalOpen = useCallback(
    (modalId, data = null) =>
      (e) => {
        switch (modalId) {
          case "add-input":
            // console.log(data);
            setDialogContent(
              <AddInputModalContent closeHandler={handleModalClose} />
            );
            break;

          case "delete-input":
            setDialogContent(
              <DeleteInputModalContent
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

  // onChange function for select
  const handleLimitChange = (e) => {
    setLimit(parseInt(e.target.value));
  };

  const setPrev = () => {
    if (page > 1) setPage(page - 1);
    // dispatch(getInputs(page - 1));
  };

  const setNext = () => {
    setPage(page + 1);
    // dispatch(getUsers(page + 1));
  };

  useEffect(() => {
    dispatch(getInputs({ page }));
  }, [dispatch, page]);

  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Description",
        accessor: "description",
      },
      {
        Header: "Tenants",
        accessor: "tenant_id",
      },
      {
        Header: "Edit",
        Cell: ({ value, row }) => {
          const { original } = row;
          // console.log(original);
          return (
            <IconButton href={`/tenants/edit-tenant/${original.id}`}>
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
            <IconButton>
              <DeleteIcon onClick={handleModalOpen("delete-input", original)} />
            </IconButton>
          );
        },
      },
    ],
    [handleModalOpen]
  );

  const tableData = useMemo(() => inputs || [], [inputs]);

  return (
    <React.Fragment>
      <section>
        <nav id='quick-nav'>
          <span>Input Tracking</span>
        </nav>

        {/* <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            flexWrap: { xs: "wrap", md: "nowrap" },
          }}
        >
          <h2 className="with-spinner" style={{ fontSize: "20px" }}>
            <span>Input</span>
            {isLoading ? <Spinner size={20} color="primary" /> : null}
          </h2>

          <Button
            value="Add Input Type"
            disableElevation
            onClick={handleModalOpen("add-input")}
          />
        </Stack> */}

        <Box
          sx={{
            padding: "20px 40px",
            background: "#FFFFFF",
            borderRadius: "10px",
          }}
        >
          <h2 className='with-spinner' style={{ fontSize: "20px" }}>
            <span>All Tenants</span>
            {/* {users.loading ? <Spinner size={20} color='primary' /> : ""} */}
          </h2>

          <Stack
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            sx={{
              flexWrap: { xs: "wrap", md: "nowrap" },
              marginBottom: "20px",
            }}
          >
            <CustomSearchField
              InputProps={{
                ref: queryRef,
                startAdornment: (
                  <InputAdornment position='start'>
                    <SearchIcon fontSize='small' />
                  </InputAdornment>
                ),
              }}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder='Search customers'
              sx={{
                width: "100%",
                maxWidth: { sm: "250px" },
              }}
            />

            <Stack
              direction='row'
              spacing={2}
              sx={{
                mt: { xs: 2, md: 0 },
                mb: { xs: 2, md: 0 },
              }}
            >
              {/* <Can
              role={authenticatedUser?.my_role?.role}
              perform='user:create'
              yes={() => ( */}
              <Button
                // onClick={handleModalOpen("add-user", {
                //   roles: roles || [],
                // })}
                href='/tenants/add-tenant'
                value='Create New Tenant'
                disableElevation
              />
              {/* )}
              no={() => null}
              data={null}
            /> */}
            </Stack>
          </Stack>

          <Box>
            <Table columns={columns} data={tableData} isLoading={isLoading} />
            <TableControls
              nextHandler={() => setNext()}
              prevHandler={() => setPrev()}
              limitHandler={(e) => handleLimitChange(e)}
              totalRecords={totalInputs}
              page={page}
              limit={limit}
            />
          </Box>
        </Box>
      </section>

      <Dialog open={showModal} closeHandler={handleModalClose}>
        {dialogContent}
      </Dialog>
    </React.Fragment>
  );
};

export default InputTracking;
