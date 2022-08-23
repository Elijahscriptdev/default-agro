import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Button from "../../components/common/Button";

import { BiEditAlt as EditIcon } from "react-icons/bi";
import { AiOutlineEye as ViewIcon } from "react-icons/ai";

import Spinner from "../../components/Spinner";
import Table from "../../components/Table/UserTable";
import TableControls from "../../components/Table/TableControls";
import BreadCrumb from "../../components/common/CustomBreadCrumbs";

import {
  AddSubCluster as AddSubClusterModalContent,
  EditSubCluster as EditSubClusterModalContent,
} from "./ModalContents";
import Dialog from "../../components/Modals/Dialog";

import { getSubClusters } from "../../redux/actions/FarmManagementActions";
import axiosServices from "../../services/axiosServices";
import Can from "../../utils/rbac/Can";
// import { Tooltip } from "@mui/material";

function ManageSubClusters() {
  const navigate = useNavigate();

  const subClusters = useSelector(
    (state) => state.FarmMangementReducer.subClusters?.data
  );

  const isLoading = useSelector(
    (state) => state.FarmMangementReducer.subClusters?.loading || false
  );

  const authenticatedUser = useSelector(
    (state) =>
      state.AuthReducer.userProfile ||
      JSON.parse(sessionStorage.getItem("user_profile"))
  );

  const [dialogContent, setDialogContent] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(subClusters.length);
  const [roles, setRoles] = useState({});

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleModalOpen = useCallback(
    (modalId, data = null) =>
      (e) => {
        switch (modalId) {
          case "add-sub-cluster":
            // console.log(data);
            setDialogContent(
              <AddSubClusterModalContent
                closeHandler={handleModalClose}
                roles={roles}
              />
            );
            break;

          case "edit-sub-cluster":
            setDialogContent(
              <EditSubClusterModalContent
                closeHandler={handleModalClose}
                data={data}
                roles={roles}
              />
            );
            break;

          default:
            setDialogContent(null);
            break;
        }
        setShowModal(true);
      },
    [roles]
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

  const columns = useMemo(
    () => [
      {
        Header: "S/N",
        accessor: "serial",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Description",
        accessor: "description",
      },
      {
        Header: "Agent",
        Cell: ({ value, row }) => {
          const { original } = row;
          return (
            <span>{`${original.agent?.first_name} ${original.agent?.last_name}`}</span>
          );
        },
      },
      {
        Header: "Cluster ID",
        accessor: "cluster",
      },
      {
        Header: "Cluster Size",
        Cell: ({ value, row }) => {
          const { original } = row;
          return (
            <span>
              {!original.farms_sum_size ? "-" : `${original.farms_sum_size}`}
            </span>
          );
        },
      },
      {
        Header: "View",
        Cell: ({ value, row }) => {
          const { original } = row;
          // console.log(original);
          return (
            <IconButton
              onClick={() => {
                navigate(`/farm-management/sub-clusters/${original.id}`);
              }}
            >
              <ViewIcon />
            </IconButton>
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
              perform="farm-management:sub-cluster:edit"
              yes={() => (
                <IconButton
                  onClick={handleModalOpen("edit-sub-cluster", original)}
                >
                  <EditIcon />
                </IconButton>
              )}
              no={() => (
                null
                // <Tooltip
                //   title={`${authenticatedUser?.my_role?.role} cannot perform this action`}
                // >
                //   <IconButton>
                //     <EditIcon />
                //   </IconButton>
                // </Tooltip>
              )}
            />
          );
        },
      },
    ],
    [authenticatedUser?.my_role?.role, handleModalOpen, navigate]
  );

  const tableData = useMemo(() => (subClusters || []).map((each, index) => {
    return {
      ...each,
      serial: index + page
    }
  }), [subClusters, page]);

  const fetchRoles = useCallback(async () => {
    try {
      // console.log("fetching roles");
      const res = await axiosServices.get("/all/roles");
      if (res?.result?.roles) {
        setRoles((state) => {
          const r = {};

          res?.result?.roles.forEach((role) => {
            r[role.role] = role.id;
          });

          return r;
        });
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchRoles();
    dispatch(getSubClusters());
  }, [dispatch, fetchRoles]);

  return (
    <React.Fragment>
      <section>
        <nav id="quick-nav">
          <BreadCrumb
            breadcrumbs={[
              <Typography key="1" color="inherit">
                Farm Management
              </Typography>,
              <Typography key="2" color="primary.main">
                Manage Sub Clusters
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
            <span>All Sub Clusters</span>
            {isLoading ? <Spinner size={20} color="primary" /> : ""}
          </h2>
          <Stack direction="row">
            <Can
              role={authenticatedUser?.my_role?.role}
              perform="farm-management:sub-cluster:create"
              yes={() => (
                <Button
                  onClick={handleModalOpen("add-sub-cluster")}
                  value="Add New Sub-Cluster"
                  disableElevation
                />
              )}
              no={() => null}
            />
          </Stack>
        </Stack>

        <Box>
          <Table columns={columns} data={tableData} isLoading={isLoading} />
          <TableControls
            nextHandler={() => setNext()}
            prevHandler={() => setPrev()}
            limitHandler={(e) => handleLimitChange(e)}
            totalRecords={subClusters.length}
            limit={subClusters.length || limit}
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

export default ManageSubClusters;
