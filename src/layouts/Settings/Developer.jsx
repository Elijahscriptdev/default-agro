import React, { useState, useMemo } from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

import { RiDeleteBinLine as DeleteIcon } from "react-icons/ri";
import Table from "../../components/Table/UserTable";
import TableControls from "../../components/Table/TableControls";
import Spinner from "../../components/Spinner";
import Button from "../../components/common/Button";
import Dialog from "../../components/Modals/Dialog";
import BreadCrumb from "../../components/common/CustomBreadCrumbs";
import { RechargeSms } from "./ModalContents";
import "./styles.scss";

const Developer = () => {
  return (
    <React.Fragment>
      <section>
        <nav id='quick-nav'>
          <BreadCrumb
            breadcrumbs={[
              <Typography key='1' color='inherit'>
                Settings
              </Typography>,
              <Typography key='2' color='primary.main'>
                Developer
              </Typography>,
            ]}
          />
        </nav>

        <Box className='section__wrapper'>
          <h2>API Keys</h2>
          <Box
            className='section__wrapper__content'
            sx={{
              flexWrap: { xs: "wrap", md: "nowrap" },
            }}
          >
            <Box className='section__wrapper__content__item'>
              <input
                type='password'
                placeholder='****************************************'
              />
              <Box className='cta-btn'>
                <Button
                  value='Generate a new key'
                  sx={{
                    width: "200px",
                    height: "39px",
                    fontSize: "14px",
                    fontWeight: 600,
                  }}
                />

                <Button
                  value='Delete Key'
                  sx={{
                    width: "200px",
                    height: "39px",
                    fontSize: "14px",
                    fontWeight: 600,
                  }}
                />
              </Box>
            </Box>
            <Button
              value='Add New Schedule'
              sx={{
                width: "200px",
                height: "39px",
                fontSize: "14px",
                fontWeight: 600,
              }}
            />
          </Box>

          <h2>Webhook URL</h2>
          <Box className='section2'>
            <Box className='form-wrap'>
              <label>Enter Webhook URL</label>
              <input type='password' placeholder='' />
            </Box>
            <Box className='cta-btn'>
              <Button
                value='Test Connection'
                sx={{
                  width: "200px",
                  height: "39px",
                  fontSize: "14px",
                  fontWeight: 600,
                }}
              />

              <Button
                value='Save'
                sx={{
                  width: "200px",
                  height: "39px",
                  fontSize: "14px",
                  fontWeight: 600,
                }}
              />
            </Box>
          </Box>
        </Box>
      </section>
    </React.Fragment>
  );
};

export default Developer;
