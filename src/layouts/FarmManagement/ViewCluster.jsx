import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";

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

import { getSingleCluster } from "../../redux/actions/FarmManagementActions";

const { notify } = require("../../utils/toastNotification");

function ViewClusters() {
  const params = useParams();
  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(0);
  const [subclusters, setSubClusters] = useState([]);
  const [cluster, setCluster] = useState({});
  const [loading, setLoading] = useState(false);
  
  const [dialogContent, setDialogContent] = useState(null);
  const [showModal, setShowModal] = useState(false);

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
              <AddSubClusterModalContent closeHandler={handleModalClose} />
            );
            break;

          case "edit-sub-cluster":
            setDialogContent(
              <EditSubClusterModalContent
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
          const name = `${original?.agent?.first_name || ""} ${
            original?.agent?.last_name || ""
          }`.trim() || original.agent;
          console.log("name", name);
          return (
            <span>{name}</span>
          );
        },
      },
      {
        Header: "Sub-Cluster ID",
        accessor: "sub_cluster_id",
      },
      {
        Header: "Size",
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
            <IconButton onClick={handleModalOpen("edit-sub-cluster", original)}>
              <EditIcon />
            </IconButton>
          );
        },
      },
    ],
    [handleModalOpen, navigate]
  );

  // const tableData = useMemo(() => [], []);
  
  const tableData = useMemo(() => (subclusters || []).map((each, index) => {
    return {
      ...each,
      serial: index + page
    }
  }), [subclusters, page]);

  // const dispatch = useDispatch();

  useEffect(() => {
    (async (clusterId) => {
      console.log("loading cluster...");
      try {
        setLoading(true);
        const response = await getSingleCluster(clusterId);
        if (response) {
          setSubClusters(response.sub_clusters || []);
          setCluster(response);
        } else {
          notify("Failed to get subclusters", { type: "error" });
        }
      } catch (error) {
        notify(error, { type: "error" });
      } finally {
        setLoading(false);
      }
    })(params.clusterId);
  }, [params.clusterId]);

  return (
    <React.Fragment>
      <section>
        <nav id="quick-nav">
          <BreadCrumb
            breadcrumbs={[
              <Typography key="1" color="inherit">
                Farm Management
              </Typography>,
              <Link
                href="/farm-management/clusters"
                key="2"
                color="inherit"
              >
                Farm Clusters
              </Link>,
              <Typography
                key="3"
                color="primary.main"
              >
                View Cluster
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
            <span>
              {!cluster?.cluster_id
                ? "Sub Clusters"
                : `${cluster.cluster_id} Sub Clusters`}
            </span>
            {loading ? <Spinner size={20} color="primary" /> : ""}
          </h2>
        </Stack>

        <Box>
          <Table columns={columns} data={tableData} isLoading={loading} />
          <TableControls
            nextHandler={() => setNext()}
            prevHandler={() => setPrev()}
            limitHandler={(e) => handleLimitChange(e)}
            totalRecords={subclusters.length}
            limit={limit || subclusters.length}
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

export default ViewClusters;
