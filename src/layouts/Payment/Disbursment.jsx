import React, { useCallback, useEffect, useMemo, useState } from "react";
// import { useSelector } from "react-redux";
import Typography from "@mui/material/Typography";

import Table from "../../components/Table/UserTable";
import Spinner from "../../components/Spinner";
import TableControls from "../../components/Table/TableControls";
import BreadCrumb from "../../components/common/CustomBreadCrumbs";
import StatusIndicator from "../../components/common/StatusIndicator";
import { useDispatch, useSelector } from "react-redux";

import axiosServices from "../../services/axiosServices";
import { Box } from "@mui/system";
import { Stack } from "@mui/material";
import Button from "../../components/common/Button";
import Dialog from "../../components/Modals/Dialog";
import {
  PendingPayments as PendingPaymentsModalContent,
  CollectionSettings as CollectionSettingsModalContent,
  // SendMoney as SendMoneyModalContent,
} from "./ModalContents";
import moment from "moment";

import { useNavigate } from "react-router-dom";
import { notify } from "../../utils/toastNotification";
import { getUserProfile } from "../../redux/actions/AuthActions";

const Disbursment = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalRecord, setTotalRecord] = useState(0);

  const [dialogContent, setDialogContent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [individual, setIndividual] = useState(true);
  const [bulk, setBulk] = useState(false);
  // const [query, setQuery] = useState("");

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const authenticatedUser = useSelector(
    (state) => state.AuthReducer.userProfile
  );

  const wallet_balance = authenticatedUser && authenticatedUser?.tenant?.wallet_balance;

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleModalOpen = useCallback(
    (modalId, data = null) =>
      (e) => {
        switch (modalId) {
          case "pending-payments":
            // console.log(data);
            setDialogContent(
              <PendingPaymentsModalContent closeHandler={handleModalClose} />
            );
            break;

          case "collection-settings":
            setDialogContent(
              <CollectionSettingsModalContent closeHandler={handleModalClose} />
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

  const getLoanList = useCallback(
    async (tenantId) => {
      setLoading(true);
      const config = {
        headers: {
          "tenant-id": tenantId,
        },
      };
      try {
        const res = await axiosServices.get(
          `/payment/loan-list?page=${page}&limit=${limit}`,
          config
        );

        if (res.result) {
          setData(res?.result[0]?.data);
          setLimit(res?.result[0]?.per_page || 15);
          setTotalRecord(res?.result[0]?.total || 0);
          setLoading(false);
        } else {
          notify("Failed to get disbursements", { type: "error" });
        }
        // console.log("res fes", res?.result[0]?.data);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    },
    [limit, page]
  );

  // console.log("data", data, "loading", loading);

  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);

  useEffect(() => {
    if (authenticatedUser?.tenant_id) {
      console.log("getting loan list");
      getLoanList(authenticatedUser?.tenant_id);
    } else {
      notify("Tenant ID missing", { type: "error" });
    }
  }, [authenticatedUser?.tenant_id, getLoanList]);

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
        Header: "Name",
        Cell: ({ value, row }) => {
          const { original } = row;
          // console.log(original);
          return (
            <span>
              {(original?.farmer?.first_name || "") +
                " " +
                (original?.farmer?.last_name || "")}
            </span>
          );
        },
      },
      {
        Header: "Type",
        accessor: "type",
      },
      {
        Header: "Amount",
        accessor: "amount",
      },
      {
        Header: "Reference",
        accessor: "ref_code",
      },
      {
        Header: "Status",
        Cell: ({ value, row }) => {
          const { original } = row;
          const selectIndicator = (data) => {
            switch (true) {
              case data.status === "successful":
                return {
                  value: data.status,
                  type: "success",
                };

              case data.status === "failed":
                return {
                  value: data.status,
                  type: "error",
                };

              case data.status === "pending":
                return {
                  value: data.status,
                  type: "pending",
                };

              default:
                return null;
            }
          };
          // console.log(original);
          const indicatorProps = selectIndicator(original);
          return !indicatorProps ? (
            <span>{original.status}</span>
          ) : (
            <StatusIndicator {...indicatorProps} />
          );
        },
      },
      {
        Header: "Date",
        Cell: ({ value, row }) => {
          const { original } = row;
          // console.log(original);
          return (
            <span>{moment(original.created_at).format("MMM, DD YYYY")}</span>
          );
        },
      },
    ],
    []
  );

  const tableData = useMemo(() => data, [data]);
  return (
    <div>
      <nav id="quick-nav">
        <BreadCrumb
          breadcrumbs={[
            <Typography key="1" color="inherit">
              Payments
            </Typography>,
            <Typography key="2" color="primary.main">
              Disbursment
            </Typography>,
          ]}
        />
      </nav>

      <Box>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            flexWrap: {
              xs: "wrap",
              md: "no-wrap",
            },
          }}
        >
          <div
            style={{
              width: "350px",
              height: "130px",
              backgroundColor: "#009688",
              borderRadius: "5px",
              marginTop: "22px",
              marginBottom: "28px",
            }}
          >
            <div style={{ paddingTop: 24, paddingBottom: 8, paddingLeft: 29 }}>
              <span
                style={{ fontSize: "18px", fontWeight: 700, color: "white" }}
              >
                Available Balance
              </span>
            </div>

            <div style={{ paddingBottom: 40, paddingLeft: 29 }}>
              <span
                style={{ fontSize: "24px", fontWeight: 800, color: "white" }}
              >
                N {(wallet_balance || 0).toFixed(2)}
              </span>
            </div>
          </div>

          <Stack direction="row" spacing={2} sx={{ my: 2 }}>
            <Button
              value="Send Money"
              sx={{ marginRight: "21px" }}
              onClick={() => navigate("/payment/send-money")}
            />
            <Button
              value="Download History"
              // onClick={handleModalOpen("collection-settings")}
            />
          </Stack>
        </Stack>
      </Box>

      <h2 className="with-spinner" style={{ fontSize: "20px" }}>
        <span>All Disbursments</span>
        {loading ? <Spinner size={20} color="primary" /> : ""}
      </h2>

      <Table data={tableData} columns={columns} isLoading={loading} />
      <TableControls
        nextHandler={() => setNext()}
        prevHandler={() => setPrev()}
        limitHandler={(e) => handleLimitChange(e)}
        page={page}
        limit={limit}
        totalRecords={totalRecord}
      />

      <Dialog
        open={showModal}
        closeHandler={handleModalClose}
        individual={individual}
        bulk={bulk}
      >
        {dialogContent}
      </Dialog>
    </div>
  );
};

export default Disbursment;
