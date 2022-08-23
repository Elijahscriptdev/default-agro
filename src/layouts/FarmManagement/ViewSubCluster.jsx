import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useParams } from "react-router-dom";

import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MuiButton from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

// import { AiOutlineEye as ViewIcon } from "react-icons/ai";
import { RiMore2Fill as ActionMenuIcon } from "react-icons/ri";

import BreadCrumb from "../../components/common/CustomBreadCrumbs";
import Spinner from "../../components/Spinner";
import Table from "../../components/Table/UserTable";
import TableControls from "../../components/Table/TableControls";

import {
  AddSubCluster as AddSubClusterModalContent,
  EditSubCluster as EditSubClusterModalContent,
  ViewMap as ViewMapModalContent,
} from "./ModalContents";
import Dialog from "../../components/Modals/Dialog";

import { getSingleSubCluster } from "../../redux/actions/FarmManagementActions";

const { notify } = require("../../utils/toastNotification");

function ActionMenu(props) {
  const { handleModalOpen } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const mapViewHandler = (e) => {
    handleClose(e);
    handleModalOpen("view-map", props.data)(e);
  };

  return (
    <div>
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <ActionMenuIcon />
      </IconButton>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          "& .MuiMenu-paper": {
            borderRadius: "15px",
            boxShadow: "0px 5px 20px rgba(108, 117, 125, 0.4)",
          },
        }}
      >
        <MenuItem onClick={handleClose}>
          <MuiButton
            href={`/farm-management/edit-farm-unit/${props.data?.id}`}
            sx={{
              p: 0,
              m: 0,
              textTransform: "capitalize",
              color: "inherit",
              fontSize: "inherit",
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
          >
            View Farm Unit
          </MuiButton>
        </MenuItem>
        <MenuItem onClick={mapViewHandler}>View Map</MenuItem>
      </Menu>
    </div>
  );
}

function ViewSubClusters() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  // const [query, setQuery] = useState("");

  const params = useParams();

  const [farms, setFarms] = useState([]);
  const [subCluster, setSubCluster] = useState({});
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

          case "view-map":
            setDialogContent(
              <ViewMapModalContent
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
        Header: "Lot ID",
        accessor: "id",
      },
      {
        Header: "Size",
        accessor: "size",
      },
      {
        Header: "Crop",
        Cell: ({ value, row }) => {
          const { original } = row;
          return (
            <span>{`${original.crop}`}</span>
          );
        },
      },
      {
        Header: "Farmer",
        accessor: "farmer",
      },
      {
        Header: "Actions",
        Cell: ({ value, row }) => {
          const { original } = row;
          // console.log(original);
          return (
            <ActionMenu
              data={original}
              handleModalOpen={handleModalOpen}
              handleModalClose={handleModalClose}
            />
          );
        },
      },
    ],
    [handleModalOpen]
  );

  const tableData = useMemo(() => (farms || []).map((each, index) => {
    return {
      ...each,
      serial: index + page
    }
  }), [farms, page]);

  // const tableData = useMemo(() => subClusters || [], [subClusters]);

  useEffect(() => {
    (async (subclusterId) => {
      console.log("loading sub-cluster...");
      try {
        setLoading(true);
        const response = await getSingleSubCluster(subclusterId);
        if (response) {
          setFarms(response.farms);
          setSubCluster(response);
        } else {
          notify("Failed to get farm lots", { type: "error" });
        }
      } catch (error) {
        notify(error, { type: "error" });
      } finally {
        setLoading(false);
      }
    })(params.subClusterId);
  }, [params.subClusterId]);

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
                underline="hover"
                key="2"
                color="inherit"
                href="/farm-management/sub-clusters"
              >
                Manage Sub Clusters
              </Link>,
              <Typography key="3" color="primary.main">
                View Lots
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
              {!subCluster?.sub_cluster_id
                ? "Farm Lots"
                : `${subCluster.sub_cluster_id} Farm Lots`}
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
            totalRecords={farms.length}
            limit={limit || farms.length}
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

export default ViewSubClusters;
