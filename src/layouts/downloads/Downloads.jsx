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

import CustomSearchField from "../../components/common/CustomSearchField";
import { InputAdornment } from "@mui/material";
import DownloadIcon from "./../../assets/downloadIcon.svg"

const Downloads = () => {
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
        Header: "Status",
        Cell: ({ value, row }) => {
          // const { original } = row;
          // console.log(original);
          return (
            <Box
              sx={{
                fontFamily: "Nunito",
                fontStyle: "normal",
                fontWeight: 600,
                fontSize: "14px",
                color: "#F29B17",
                background: "rgba(242, 155, 23, 0.26)",
                border: "0.6px solid #F29B17",
                borderRadius: "12px",
                padding: "5px 10px",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                width: "74px",
              }}
            >
              Pending
            </Box>
          );
        },
      },
      {
        Header: "Date Created",
        Cell: ({ value, row }) => {
          // const { original } = row;
          // console.log(original);
          return (
            <Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography>2020-03-13</Typography>
                <Typography
                  sx={{
                    color: "#009688",
                  }}
                >
                  10:41:12
                </Typography>
              </Box>
            </Box>
          );
        },
      },
      {
        Header: "Download",
        Cell: ({ value, row }) => {
          // const { original } = row;
          // console.log(original);
          return (
            <IconButton >
              <Box component="img" src={DownloadIcon} />
            </IconButton>
          );
        },
      },
    ],
    []
  );

  const data = [
    {
    name:"Farmer Export",
    },
    {
    name:"Farmer Export",
    },
    {
    name:"Farmer Export",
    },
    {
    name:"Farmer Export",
    },
    {
    name:"Farmer Export",
    },

  ];

  const tableData = useMemo(() => data || [], [data]);

  return (
    <React.Fragment>
      <section>
        <nav id='quick-nav'>
          <span>Downloads</span>
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
          {/* <h2 className='with-spinner' style={{ fontSize: "20px" }}>
            <span>Downloads</span>
            {users.loading ? <Spinner size={20} color='primary' /> : ""}
          </h2> */}

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

export default Downloads;
