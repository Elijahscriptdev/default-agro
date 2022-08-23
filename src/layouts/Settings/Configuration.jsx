import React, { useMemo, useState } from "react";
import { AiOutlineDownload } from "react-icons/ai";

import Typography from "@mui/material/Typography";

import { FirstText } from "../../components/FormikComponents/constants";
import Button from "../../components/common/Button";
import Table from "../../components/Table/UserTable";
import Dialog from "../../components/Modals/Dialog";
import BreadCrumb from "../../components/common/CustomBreadCrumbs";

import { NewMessage } from "./ModalContents";
import { Box, FormControlLabel, Radio, RadioGroup, Switch } from "@mui/material";
import "./Configuration.scss"

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
        Header: "Check",
        accessor: "Check",
      },
      {
        Header: "Perform Check",
        Cell: () => {
          return (
            <Switch aria-label= 'Switch demo' />
          );
        },
      },
      {
        Header: "Fail Final Result",
        Cell: () => {
          return (
            <Box className="config-table-checks">

            <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            sx={{
              display:"flex",
              alignItems:"center"
            
            }}
          >
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
            </Box>
          );
        },
      },
   
    ],
    []
  );

  const TableData = useMemo(
    () => [
      {
        Check: "VEGETATION CHECK",
       
      },
      {
        Check: "CLOSENESS TO A BODY OF WATER",
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
