import React, {
  useState,
  useEffect,
  useMemo,
  useRef,
  useCallback,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";

import { Search as SearchIcon } from "../../components/icons/search";

import { BiEditAlt as EditIcon } from "react-icons/bi";
import { RiDeleteBinLine as DeleteIcon } from "react-icons/ri";

import Table from "../../components/Table/UserTable";
import TableControls from "../../components/Table/TableControls";
import CustomSearchField from "../../components/common/CustomSearchField";
import BreadCrumb from "../../components/common/CustomBreadCrumbs";
import Button from "../../components/common/Button";
import Dialog from "../../components/Modals/Dialog";
import Spinner from "../../components/Spinner";

import Can from "../../utils/rbac/Can";

import { getUsers } from "../../redux/actions/UserManagementActions";

import {
  AddNewUser as AddUserModalContent,
  EditUser as EditUserModalContent,
  DeleteUser as DeleteUserModalContent,
  UploadUsers as UploadUsersModalContent,
} from "./ModalContents";
import { getRoles, getStates } from "../../redux/actions/AppActions";
// import { Tooltip } from "@mui/material";

function Users() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(15);
  const [query, setQuery] = useState("");
  const [roles, setRoles] = useState({});

  const [dialogContent, setDialogContent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const queryRef = useRef(null);

  const authenticatedUser = useSelector(
    (state) =>
      state.AuthReducer.userProfile ||
      JSON.parse(sessionStorage.getItem("user_profile"))
  );
  const users = useSelector((state) => state.UserManagementReducer.users);
  const states = useSelector((state) => state.AppReducer.states);

  console.log("u§sers", users);

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

  const setFormattedRoles = (data) => {
    const formattedRoles = {};
    data.forEach((role) => {
      formattedRoles[role.id] = role.role;
    });
    setRoles(formattedRoles);
  };

  const handleModalOpen = useCallback(
    (modalId, data = null) =>
      (e) => {
        switch (modalId) {
          case "add-user":
            // console.log(data);
            setDialogContent(
              <AddUserModalContent
                closeHandler={handleModalClose}
                roles={data?.roles}
              />
            );
            break;

          case "upload-users":
            setDialogContent(
              <UploadUsersModalContent closeHandler={handleModalClose} />
            );
            break;

          case "edit-user":
            setDialogContent(
              <EditUserModalContent
                closeHandler={handleModalClose}
                data={data?.data}
                roles={data?.roles}
              />
            );
            break;

          case "delete-user":
            setDialogContent(
              <DeleteUserModalContent
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
        Cell: ({ value, row }) => {
          const { original } = row;
          const getRoleName = (roleId) => {
            if (/\d+/g.test(`${roleId}`)) {
              return roles[roleId] || "-";
            }

            return roleId;
          };
          return <span>{getRoleName(original.group)}</span>;
        },
      },
      {
        Header: "Association",
        accessor: "association",
        Cell: ({ value, row }) => {
          const { original } = row;
          return <span>{original.association || "-"}</span>;
        },
      },
      {
        Header: "State",
        accessor: "state",
        Cell: ({ value, row }) => {
          const { original } = row;
          return <span>{original.state || "-"}</span>;
        },
      },
      {
        Header: "Last Login",
        accessor: "last_login",
        Cell: ({ value, row }) => {
          const { original } = row;
          return original.last_login ? (
            <Stack direction='column' spacing={0.2}>
              <span>{moment(original.last_login).format("YYYY-MM-DD")}</span>
              <Typography
                variant='span'
                fontSize='12px'
                sx={{ color: (theme) => theme.palette.primary.main }}
              >
                {moment(original.last_login).format("HH:mm:ss")}
              </Typography>
            </Stack>
          ) : (
            <span>{original.last_login || "-"}</span>
          );
        },
      },
      {
        Header: "Edit",
        Cell: ({ value, row }) => {
          const { original } = row;
          // console.log(original);
          return (
            <Can
              role={authenticatedUser?.my_role?.role}
              perform='user:edit'
              yes={() => (
                <IconButton href={`/user-management/edit-user/${original.id}`}>
                  <EditIcon />
                </IconButton>
              )}
              no={() => null}
              // no={() => (
              //   <Tooltip title={`${authenticatedUser?.my_role?.role} cannot perform this action`}>
              //     <IconButton>
              //       <EditIcon />
              //     </IconButton>
              //   </Tooltip>
              // )}
            />
          );
        },
      },
      {
        Header: "Delete",
        Cell: ({ value, row }) => {
          const { original } = row;
          // console.log(original);
          return (
            <Can
              role={authenticatedUser?.my_role?.role}
              perform='user:delete'
              yes={() => (
                <IconButton onClick={handleModalOpen("delete-user", original)}>
                  <DeleteIcon />
                </IconButton>
              )}
              no={() => null}
              // no={() => (
              //   <Tooltip title={`${authenticatedUser?.my_role?.role} cannot perform this action`}>
              //     <IconButton>
              //       <DeleteIcon/>
              //     </IconButton>
              //   </Tooltip>
              // )}
            />
          );
        },
      },
    ],
    [authenticatedUser?.my_role?.role, handleModalOpen, roles]
  );

  const tableData = useMemo(
    () =>
      users?.data.map((user) => {
        return {
          ...user,
          state: states[user.state]?.name,
        };
      }) || [],
    [users, states]
  );

  // const tableData = [];

  useEffect(() => {
    const filters = { page, per_page: limit };

    if (query && query.length > 1) {
      filters.search_by_name = query;
    }

    dispatch(getUsers(filters));
    dispatch(getStates({}));
    getRoles({}, setFormattedRoles);
  }, [dispatch, page, limit, query]);

  return (
    <React.Fragment>
      <section>
        <nav id='quick-nav'>
          <BreadCrumb
            breadcrumbs={[
              <Typography key='1' color='inherit'>
                User Management
              </Typography>,
              <Typography key='2' color='primary.main'>
                Manage Users
              </Typography>,
            ]}
          />
        </nav>

        <Box
          sx={{
            padding: "20px 40px",
            background: "#FFFFFF",
            borderRadius: "10px",
          }}
        >
          <h2 className='with-spinner' style={{ fontSize: "20px" }}>
            <span>All Users</span>
            {users.loading ? <Spinner size={20} color='primary' /> : ""}
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
                href='/user-management/add-user'
                value='Create New User'
                disableElevation
              />
              {/* )}
              no={() => null}
              data={null}
            /> */}

              {/* <Can
              role={authenticatedUser?.my_role?.role}
              perform='users:upload'
              yes={() => ( */}
              <Button
                onClick={handleModalOpen("upload-users")}
                value='Upload Users'
                disableElevation
              />
              {/* )}
              no={() => null}
              data={null}
            /> */}
            </Stack>
          </Stack>

          <Box>
            <Table
              columns={columns}
              data={tableData}
              isLoading={users.loading}
            />
            <TableControls
              nextHandler={() => setNext()}
              prevHandler={() => setPrev()}
              limitHandler={(e) => handleLimitChange(e)}
              totalRecords={users?.total}
              page={page}
              limit={limit}
            />
          </Box>
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

export default Users;
