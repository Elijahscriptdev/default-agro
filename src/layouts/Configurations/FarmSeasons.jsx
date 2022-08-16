import React, { useMemo, useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import { IoMdPower as EndIcon } from "react-icons/io";

import Button from "../../components/common/Button";
import Table from "../../components/Table/UserTable";
import TableControls from "../../components/Table/TableControls";
import Dialog from "../../components/Modals/Dialog";
import Spinner from "../../components/Spinner";
import StatusIndicator from "../../components/common/StatusIndicator";
import BreadCrumb from "../../components/common/CustomBreadCrumbs";

import {
  getFarmSeassons,
  getCropProfiles,
} from "../../redux/actions/ConfigurationsActions";

import {
  AddSeason as AddSeasonModalContent,
  EndSeason as EndSeasonModalContent,
} from "./ModalContents";

function FarmSeasonSection() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  // const [query, setQuery] = useState("");

  const [dialogContent, setDialogContent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const crops = useSelector(
    (state) => state.ConfigReducer.cropProfiles?.data || []
  );

  const farmSeasons = useSelector(
    (state) => state.ConfigReducer.farmSeasons
  );

  // const isLoading = useSelector(
  //   (state) => state.ConfigReducer.farmSeasons?.loading || false
  // );

  // onChange function for select
  const handleLimitChange = (e) => {
    setLimit(parseInt(e.target.value));
  };

  const setPrev = () => {
    if (page > 1) {
      setPage(page - 1);
      // getFarmSeassons({ page });
    }
  };

  const setNext = () => {
    setPage(page + 1);
    // getFarmSeassons({ page });
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleModalOpen = useCallback(
    (modalId, data = null) =>
      (e) => {
        switch (modalId) {
          case "add-season":
            // console.log(data);
            setDialogContent(
              <AddSeasonModalContent
                closeHandler={handleModalClose}
                cropProfiles={crops}
              />
            );
            break;

          case "end-season":
            // console.log(data);
            setDialogContent(
              <EndSeasonModalContent
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
    [crops]
  );

  const columns = useMemo(
    () => [
      {
        Header: "Crop",
        accessor: "crop_profile.crop_name",
        Cell: ({ value, row }) => {
          const { original } = row;
          // console.log(original);
          return (
            <span>
              {original.crop_profile?.crop_name
                ? original.crop_profile.crop_name
                : "-"}
            </span>
          );
        },
      },
      {
        Header: "Season",
        accessor: "name",
      },
      {
        Header: "Status",
        Cell: ({ row }) => {
          const { original } = row;
          // console.log(original);
          const { value, type } = (() => {
            let value = '', type = '';

            switch (true) {
              // Not Started
              case !original.started:
                value = 'Not Started';
                type = 'error';
                break;

              // Started but not ended
              case !!original.started && !original.end:
                value = 'Started';
                type = 'success';
                break;

              // Ended
              case !!original.started && !!original.end:
              default:
                value = 'Ended';
                type = "pending"
                break;
            }

            return {
              value,
              type
            }
          })()
          return (
            <StatusIndicator
              value={value}
              type={type}
            />
          );
        },
      },
      {
        Header: "Started",
        accessor: "started",
        Cell: ({ value, row }) => {
          const { original } = row;
          // console.log(original);
          return <span>{original.started ? original.started : "-"}</span>;
        },
      },
      {
        Header: "Ended",
        accessor: "end",
        Cell: ({ value, row }) => {
          const { original } = row;
          // console.log(original);
          return <span>{original.end ? original.end : "-"}</span>;
        },
      },
      {
        Header: "Start/End Season",
        Cell: ({ value, row }) => {
          const { original } = row;
          // console.log(original);
          return (
            <IconButton onClick={handleModalOpen("end-season", original)} sx={{
              color: (() => {
                let color = 'inherit';

                switch (true) {
                  case !original.started:
                    color = '#52C41A'
                    break;

                  case !!original.started && !original.end:
                    color = 'inherit' // #F5222D
                    break;

                  case !!original.started && !!original.end:
                  default:
                    color = 'inherit';
                    break;
                }

                return color;
              })()
            }}>
              <EndIcon />
            </IconButton>
          );
        },
      },
    ],
    [handleModalOpen]
  );

  const tableData = useMemo(() => farmSeasons?.data, [farmSeasons]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCropProfiles());
    dispatch(getFarmSeassons({ page }));
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
              <Typography key="2" color="primary.main">
                Farm Seasons
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
            <span>All Seasons</span>
            {farmSeasons?.loading ? <Spinner size={20} color="primary" /> : ""}
          </h2>
          <Button
            onClick={handleModalOpen("add-season")}
            value="Add New Seasons"
            disableElevation
          />
        </Stack>

        <Box>
          <Table columns={columns} data={tableData} isLoading={farmSeasons?.loading} />
          <TableControls
            nextHandler={() => setNext()}
            prevHandler={() => setPrev()}
            limitHandler={(e) => handleLimitChange(e)}
            totalRecords={farmSeasons?.total}
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

export default FarmSeasonSection;
