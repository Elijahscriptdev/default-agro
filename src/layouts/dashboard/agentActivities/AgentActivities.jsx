import React, { useState, useEffect, useMemo } from "react";

import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import "./AgentActivities.scss";

// import { notify } from "../../../utils/toastNotification";
import { getUsers } from "../../../redux/actions/UserManagementActions";
import { useDispatch, useSelector } from "react-redux";
import { BiEditAlt as EditIcon } from "react-icons/bi";
import { RiDeleteBinLine as DeleteIcon } from "react-icons/ri";

import Table from "../../../components/Table/UserTable";
import CustomSelect from "../../../components/common/CustomSelect";
import TableControls from "../../../components/Table/TableControls";
import BreadCrumb from "../../../components/common/CustomBreadCrumbs";
// import { useNavigate } from "react-router-dom";

const AgentActivities = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.UserManagementReducer.users);
  const isLoading = useSelector((state) => state.UserManagementReducer.loading);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(15);
  // const [query, setQuery] = useState("");

  // const [dialogContent, setDialogContent] = useState(null);
  // const [showModal, setShowModal] = useState(false);
  // const queryRef = useRef(null);

  const handleLimitChange = (e) => {
    setLimit(parseInt(e.target.value));
  };

  const setPrev = () => {
    if (page > 1) setPage(page - 1);
    dispatch(getUsers(page - 1));
  };

  const setNext = () => {
    setPage(page + 1);
    // dispatch(getUsers(page + 1));
  };
  // console.log("dfdfg page", page);

  // const handler = () => {
  //   notify("Hello, world!");
  // };

  // const tableActionsHandler = (action) => (event) => {
  //   notify(action);
  // };

  // const handleModalClose = () => {
  //   setShowModal(false);
  // };

  // const handleModalOpen = useCallback(
  //   (modalId, data = null) =>
  //     (e) => {
  //       switch (modalId) {
  //         case "add-user":
  //           // console.log(data);
  //           setDialogContent(
  //             <AddUserModalContent
  //               closeHandler={handleModalClose}
  //             />
  //           );
  //           break;

  //         case "edit-user":
  //           setDialogContent(
  //             <EditUserModalContent
  //               closeHandler={handleModalClose}
  //               data={data}
  //             />
  //           );
  //           break;

  //           case "delete-user":
  //             setDialogContent(
  //               <DeleteUserModalContent
  //                 closeHandler={handleModalClose}
  //                 data={data}
  //               />
  //             );
  //             break;

  //         default:
  //           setDialogContent(null);
  //           break;
  //       }
  //       setShowModal(true);
  //     },
  //   []
  // );

  useEffect(() => {
    dispatch(getUsers(page));
  }, [dispatch, page]);

  const columns = useMemo(
    () => [
      {
        Header: "First Name",
        accessor: "first_name",
      },
      {
        Header: "Last Name",
        accessor: "last_name",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Group",
        accessor: "group",
      },
      {
        Header: "Assiociation",
        accessor: "association",
      },
      {
        Header: "State",
        accessor: "state",
      },
      {
        Header: "Last Login",
        accessor: "last_login",
      },
      {
        Header: "Edit",
        Cell: ({ value, row }) => {
          const { original } = row;
          // console.log(original);
          return (
            <IconButton
            // onClick={handleModalOpen('edit-user', original)}
            >
              <EditIcon />
            </IconButton>
          );
        },
      },
      {
        Header: "Delete",
        Cell: ({ value, row }) => {
          // const { original } = row;
          // console.log(original);
          return (
            <IconButton
            // onClick={handleModalOpen('delete-user', original)}
            >
              <DeleteIcon />
            </IconButton>
          );
        },
      },
    ],
    []
  );

  const tableData = useMemo(() => users?.data || [], [users]);

  return (
    <React.Fragment>
      <section className="farm_analysis">
        <nav id="quick-nav">
          <BreadCrumb
            breadcrumbs={[
              <Link href="/dashboard" key="1" color="inherit">
                Dashboard
              </Link>,
              <Typography key="2" color="primary.main">
                Agent Activities
              </Typography>,
            ]}
          />
        </nav>

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", gap: "19px", height: "39px", }}>
            <CustomSelect
              noneLabel={<em>Select Activity</em>}
              height="100%"
              options={[]}
              sx={{ borderRadius: "5px" }}
              backgroundColor="#FFFFFF"
              onChange={(e) => console.log(e.target.value)}
            />

            <CustomSelect
              noneLabel={<em>Select Activity</em>}
              height="100%"
              options={[]}
              sx={{ borderRadius: "5px" }}
              backgroundColor="#FFFFFF"
              onChange={(e) => console.log(e.target.value)}
            />

            <CustomSelect
              noneLabel={<em>Select Activity</em>}
              height="100%"
              options={[]}
              sx={{ borderRadius: "5px" }}
              backgroundColor="#FFFFFF"
              onChange={(e) => console.log(e.target.value)}
            />
          </Box>
        </Box>

        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <Box sx={{ margin: "30px 0" }}>
            <Table columns={columns} data={tableData} />
            <TableControls
              nextHandler={() => setNext()}
              prevHandler={() => setPrev()}
              limitHandler={(e) => handleLimitChange(e)}
              totalPages={users?.to}
              page={page}
            />
          </Box>
        )}
      </section>
    </React.Fragment>
  );
};

export default AgentActivities;
