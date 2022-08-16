import React, { useMemo, useState } from "react";
import { AiOutlineDownload } from "react-icons/ai";

import Typography from "@mui/material/Typography";

import { FirstText } from "../../components/FormikComponents/constants";
import Button from "../../components/common/Button";
import Table from "../../components/Table/UserTable";
import Dialog from "../../components/Modals/Dialog";
import BreadCrumb from "../../components/common/CustomBreadCrumbs";

import { NewMessage } from "./ModalContents";

const Configuration = () => {
  const [openModal, setOpenModal] = useState(false);

  const openHandler = () => {
    setOpenModal(true);
  };

  const closehandler = () => {
    setOpenModal(false);
  };

  const columns = useMemo(
    () => [
      {
        Header: "BatchID",
        accessor: "BatchID",
      },
      {
        Header: "Date Sent",
        Cell: () => {
          return (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{ fontSize: "14px", fontWeight: 600, color: "#6C757D" }}
              >
                2020-03-13
              </span>
              <span
                style={{ color: "#009688", fontSize: "12px", fontWeight: 600 }}
              >
                10:41:12
              </span>
            </div>
          );
        },
      },
      {
        Header: "Status",
        Cell: () => {
          return (
            <div
              style={{
                width: "48px",
                height: "26px",
                borderRadius: "12px",
                borderColor: "#B7EB8F",
                borderWidth: "1px",
                backgroundColor: "#F6FFED",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{ fontSize: "12px", fontWeight: 600, color: "#52C41A" }}
              >
                Sent
              </span>
            </div>
          );
        },
      },
      {
        Header: "Total SMS Sent",
        accessor: "Total SMS Sent",
      },
      {
        Header: "Successful",
        accessor: "Successful",
      },
      {
        Header: "Failed",
        accessor: "Failed",
      },
      {
        Header: "Cost",
        accessor: "Cost",
      },
      {
        Header: "Download",
        Cell: () => {
          return (
            <AiOutlineDownload style={{ fontSize: "25px", color: "#6C757D" }} />
          );
        },
      },
    ],
    []
  );

  const TableData = useMemo(
    () => [
      {
        BatchID: 60,
        "Total SMS Sent": 1,
        Successful: 1,
        Failed: 1,
        Cost: "$4.00",
      },
      {
        BatchID: 60,
        "Total SMS Sent": 1,
        Successful: 1,
        Failed: 1,
        Cost: "$4.00",
      },
      {
        BatchID: 60,
        "Total SMS Sent": 1,
        Successful: 1,
        Failed: 1,
        Cost: "$4.00",
      },
      {
        BatchID: 60,
        "Total SMS Sent": 1,
        Successful: 1,
        Failed: 1,
        Cost: "$4.00",
      },
      {
        BatchID: 60,
        "Total SMS Sent": 1,
        Successful: 1,
        Failed: 1,
        Cost: "$4.00",
      },
    ],
    []
  );

  return (
    <div>
      <nav id="quick-nav">
        <BreadCrumb
          breadcrumbs={[
            <Typography key="1" color="inherit">
              Communication
            </Typography>,
            <Typography key="2" color="primary.main">
              Configuration
            </Typography>,
          ]}
        />
      </nav>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "24px",
          alignItems: "center",
        }}
      >
        <FirstText value="Sent Configuration" />
        <Button
          value="Send New Message"
          onClick={openHandler}
          sx={{
            width: "180px",
            height: "39px",
            fontSize: "14px",
            fontWeight: 600,
          }}
        />
      </div>

      <Table columns={columns} data={TableData} />

      <Dialog open={openModal} closeHandler={closehandler}>
        <NewMessage closeHandler={closehandler} />
      </Dialog>
    </div>
  );
};

export default Configuration;
