import React, {
  useState,
  useEffect,
  useMemo,
  // useRef,
  useCallback,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
// import Tooltip from "@mui/material/Tooltip";

import { BiEditAlt as EditIcon } from "react-icons/bi";
import { AiOutlineEye as ViewIcon } from "react-icons/ai";

import Table from "../../components/Table/UserTable";
import TableControls from "../../components/Table/TableControls";
import BreadCrumb from "../../components/common/CustomBreadCrumbs";
import Button from "../../components/common/Button";
import Spinner from "../../components/Spinner";

import {
  AddCluster as AddClusterModalContent,
  EditCluster as EditClusterModalContent,
} from "./ModalContents";
import Dialog from "../../components/Modals/Dialog";

import { getClusters } from "../../redux/actions/FarmManagementActions";
import { Typography } from "@mui/material";
import axiosServices from "../../services/axiosServices";
import Can from "../../utils/rbac/Can";

function ManageClusters() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [roles, setRoles] = useState({});
  // const [query, setQuery] = useState("");

  // const queryRef = useRef(null);

  const authenticatedUser = useSelector(
    (state) =>
      state.AuthReducer.userProfile ||
      JSON.parse(sessionStorage.getItem("user_profile"))
  );

  const clusters = useSelector(
    (state) => state.FarmMangementReducer.clusters?.data
  );

  const isLoading = useSelector(
    (state) => state.FarmMangementReducer.clusters?.loading || false
  );

  const [dialogContent, setDialogContent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleModalOpen = useCallback(
    (modalId, data = null) =>
      (e) => {
        switch (modalId) {
          case "add-cluster":
            // console.log(data);
            setDialogContent(
              <AddClusterModalContent
                closeHandler={handleModalClose}
                roles={roles}
              />
            );
            break;

          case "edit-cluster":
            setDialogContent(
              <EditClusterModalContent
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
        Header: "Manager",
        Cell: ({ value, row }) => {
          const { original } = row;
          return (
            <span>{`${original.manager?.first_name} ${original.manager?.last_name}`}</span>
          );
        },
      },
      {
        Header: "Cluster ID",
        accessor: "cluster_id",
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
                navigate(`/farm-management/clusters/${original.id}`);
                // tableActionsHandler(`Viewing Cluster: ${original.cluster_id}...`);
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
              perform="farm-management:cluster:edit"
              yes={() => (
                <IconButton onClick={handleModalOpen("edit-cluster", original)}>
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

  const tableData = useMemo(() => (clusters || []).map((each, index) => {
    return {
      ...each,
      serial: index + page
    }
  }), [clusters, page]);

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
    dispatch(getClusters());
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
                Farm Clusters
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
            <span>All Clusters</span>
            {isLoading ? <Spinner size={20} color="primary" /> : ""}
          </h2>

          <Stack direction="row" spacing={2}>
            <Can
              role={authenticatedUser?.my_role?.role}
              perform="farm-management:cluster:create"
              yes={() => (
                <Button
                  onClick={handleModalOpen("add-cluster")}
                  value="Add New Cluster"
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
            totalRecords={clusters.length}
            limit={clusters.length || limit}
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

export default ManageClusters;
