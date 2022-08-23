import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import { AiOutlineEye as ViewIcon } from "react-icons/ai";

import Table from "../../components/Table/UserTable";
import Spinner from "../../components/Spinner";
import TableControls from "../../components/Table/TableControls";
import Button from "../../components/common/Button";
import Dialog from "../../components/Modals/Dialog";
import BreadCrumb from "../../components/common/CustomBreadCrumbs";
import StatusIndicator from "../../components/common/StatusIndicator";
import { TopUpWallet } from "../Settings/ModalContents";

import { getUserProfile } from "../../redux/actions/AuthActions";
import { getTransactions } from "../../redux/actions/PaymentActions";
import { useEffect } from "react";
import { Stack } from "@mui/material";
import moment from "moment";

const Transactions = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  // const [query, setQuery] = useState("");
  const [openModal, setOpenModal] = useState(false);
  // const user_profile = JSON.parse(sessionStorage.getItem("user_profile"));
  const userDetails = useSelector((state) => state.AuthReducer.userProfile);
  const wallet_balance = userDetails && userDetails?.tenant?.wallet_balance;

  const openHandler = () => {
    setOpenModal(true);
  };

  const closehandler = () => {
    setOpenModal(false);
  };

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

  const transactions = useSelector(
    (state) => state.PaymentReducer.transactions || []
  );
  const isLoading = useSelector((state) => state.PaymentReducer.loading);
  const totalRecords = useSelector((state) => state.PaymentReducer.total);

  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Type",
        accessor: "type",
      },
      {
        Header: "Amount",
        // accessor: "amount",
        Cell: ({ value, row }) => {
          const { original } = row;
          // console.log(original);
          return (
            <span>
              {parseFloat(original?.amount)
                ? `N${parseFloat(original?.amount).toFixed(2)}`
                : "-"}
            </span>
          );
        },
      },
      {
        Header: "Reference",
        accessor: "ref",
      },
      {
        Header: "Status",
        Cell: ({ value, row }) => {
          const { original } = row;
          // console.log(original);
          return (
            <StatusIndicator
              value={!original.mapped ? "Not Approved" : "Approved"}
              type={!original.mapped ? "error" : "success"}
            />
          );
        },
      },
      {
        Header: "Date",
        Cell: ({ value, row }) => {
          const { original } = row;
          // console.log(original);
          return (
            <Stack direction="column" spacing={0.2}>
              <span>{moment(original.created).format("MMMM DD, YYYY")}</span>
              {/* <Typography
                variant="span"
                fontSize="12px"
                sx={{ color: (theme) => theme.palette.primary.main }}
              >
                {moment(original.created).format("HH:mm:ss")}
              </Typography> */}
            </Stack>
          );
        },
      },
      {
        Header: "Actions",
        Cell: ({ value, row }) => {
          // const { original } = row;
          // console.log(original);
          return (
            <IconButton>
              <ViewIcon />
            </IconButton>
          );
        },
      },
    ],
    []
  );

  const tableData = useMemo(() => transactions || [], [transactions]);

  useEffect(() => {
    dispatch(getUserProfile());
    dispatch(getTransactions());
  }, [dispatch]);

  return (
    <section>
      <nav id="quick-nav">
        <BreadCrumb
          breadcrumbs={[
            <Typography key="1" color="inherit">
              Payments
            </Typography>,
            <Typography key="2" color="primary.main">
              Transactions
            </Typography>,
          ]}
        />
      </nav>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
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
            <span style={{ fontSize: "18px", fontWeight: 700, color: "white" }}>
              Available Balance
            </span>
          </div>

          <div style={{ paddingBottom: 40, paddingLeft: 29 }}>
            <span style={{ fontSize: "24px", fontWeight: 800, color: "white" }}>
              N {(wallet_balance || 0).toFixed(2)}
            </span>
          </div>
        </div>
        <div
          style={{
            marginLeft: "auto",
            marginTop: "88px",
            marginRight: "36px",
          }}
        >
          <Button
            value="Top Up Wallet"
            sx={{
              width: "140px",
              height: "32px",
              backgroundColor: "white",
              color: "#009688",
              fontSize: "14px",
              fontWeight: 600,
            }}
            onClick={openHandler}
          />
        </div>
      </div>

      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <h2 className="with-spinner" style={{ fontSize: "20px" }}>
          <span>All Payments</span>
          {isLoading ? <Spinner size={20} color="primary" /> : ""}
        </h2>

        <TableControls
          showLimit="false"
          // hideOnMobile="true"
          nextHandler={() => setNext()}
          prevHandler={() => setPrev()}
          limitHandler={(e) => handleLimitChange(e)}
          totalRecords={totalRecords}
          page={page}
          limit={limit}
        />
      </Stack>

      <Table data={tableData} columns={columns} isLoading={isLoading} />
      <TableControls
        nextHandler={() => setNext()}
        prevHandler={() => setPrev()}
        limitHandler={(e) => handleLimitChange(e)}
        totalRecords={totalRecords}
        page={page}
        limit={limit}
      />
      <Dialog open={openModal} closeHandler={closehandler}>
        <TopUpWallet closeHandler={closehandler} />
      </Dialog>
    </section>
  );
};

export default Transactions;
