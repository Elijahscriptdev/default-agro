import React, { useRef, useState } from "react";
import {
  Box,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import "./MapInsight.scss";
import CustomSearchField from "../../../components/common/CustomSearchField";
import { Search as SearchIcon } from "../../../components/icons/search";
import map from "../../../assets/map.jpg";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Button from "../../../components/common/Button";

const MapInsight = () => {
  const [partner, setPartner] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [state, setState] = React.useState("");
  const [association, setAssociation] = React.useState("");
  const [crop, setCrop] = React.useState("");
  const queryRef = useRef(null);
  const [query, setQuery] = useState("");

  const handleChangePartner = (event) => {
    setPartner(event.target.value);
  };
  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
  };
  const handleChangeState = (event) => {
    setState(event.target.value);
  };
  const handleChangeAssociation = (event) => {
    setAssociation(event.target.value);
  };
  const handleChangeCrop = (event) => {
    setCrop(event.target.value);
  };

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="mapping">
      <section>
        <nav id="quick-nav">
          <span>Mapping insights</span>
        </nav>
      </section>

      <Box className="mapping-container">
        <p className="unique-id">Unique ID: CAN/123/456</p>
        <Grid container spacing={2} className="mapping-dropdowns">
          <Grid item md={2} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Partner</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={partner}
                label="Partner"
                onChange={handleChangePartner}
              >
                <MenuItem value={10}>...</MenuItem>
                <MenuItem value={20}>...</MenuItem>
                <MenuItem value={20}>...</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={2} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Status</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={status}
                label="Partner"
                onChange={handleChangeStatus}
              >
                <MenuItem value={10}>...</MenuItem>
                <MenuItem value={20}>...</MenuItem>
                <MenuItem value={20}>...</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={2} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">State</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={state}
                label="Partner"
                onChange={handleChangeState}
              >
                <MenuItem value={10}>...</MenuItem>
                <MenuItem value={20}>...</MenuItem>
                <MenuItem value={30}>...</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={2} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Association</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={association}
                label="Partner"
                onChange={handleChangeAssociation}
              >
                <MenuItem value={10}>...</MenuItem>
                <MenuItem value={20}>...</MenuItem>
                <MenuItem value={30}>...</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={2} sm={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Crop</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={crop}
                label="Partner"
                onChange={handleChangeCrop}
              >
                <MenuItem value={10}>...</MenuItem>
                <MenuItem value={20}>...</MenuItem>
                <MenuItem value={30}>...</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <CustomSearchField
          InputProps={{
            ref: queryRef,
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon fontSize="small" />
              </InputAdornment>
            ),
          }}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search customers"
          sx={{
            width: "100%",
            maxWidth: { sm: "350px" },
          }}
        />

        <Box
          className="insight-container"
          sx={{
            display: "flex",
            flexDirection: { sm: "column", md: "row" },
          }}
        >
         <Box  
          sx={{
              width: { sm: "100%", md: "60%" },
              // height: { sm: "334", md: "534px" },
            }} >
            <Box component="img" src={map} 
             sx={{
              width: "100%",
              height: { sm: "334", md: "534px" },
            }}  />
          </Box>

          <Box
            className="insight-details"
            sx={{
              paddingLeft: { sm: "none", md: "30px" },
              width: { sm: "40%" },
            }}
          >
            <Box className="result-wrapper">
              <p className="result">Overall Results:</p>
              <p className="result-status">Failed</p>
            </Box>

            <Box className="action-wrapper">
              <p className="action-top">Actions</p>
              <Box className="action-details">
                <p className="details-name">Vegetation Check:</p>
                <div className="details-status">Passed</div>
              </Box>
              <Box className="action-details">
                <p className="details-name">Within Country:</p>
                <div className="details-status">Passed</div>
              </Box>
              <Box className="action-details">
                <p className="details-name">Within State:</p>
                <div className="details-status fail">Failed</div>
              </Box>
              <Box className="action-details">
                <p className="details-name">Within LGA:</p>
                <div className="details-status fail">Failed</div>
              </Box>
              <Box className="action-details">
                <p className="details-name">Overlay Check:</p>
                <div className="details-status fail">Failed</div>
              </Box>
            </Box>

            <Box sx={{ width: "100%", typography: "body1" }} className="insight-switch">
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                  >
                    <Tab label="User Details" value="1" />
                    <Tab label="Returned Info" value="2" />
                  </TabList>
                </Box>
                <TabPanel value="1">
                  <Box className="user-wrapper">
                    <Box className="user-details">
                      <p className="details-name">State:</p>
                      <p className="details-name">Abuja</p>
                    </Box>
                    <Box className="user-details">
                      <p className="details-name">LGA:</p>
                      <p className="details-name">Abuja, Municipal</p>
                    </Box>
                    <Box className="user-details">
                      <p className="details-name">Address:</p>
                      <p className="details-name">Abuja, Municipal</p>
                    </Box>
                    <Box className="user-details">
                      <p className="details-name">Size:</p>
                      <p className="details-name">5.37Ha</p>
                    </Box>
                   
                  </Box>
                </TabPanel>
                <TabPanel value="2">
                <Box className="user-wrapper">
                    <Box className="user-details">
                      <p className="details-name">_-_</p>
                      <p className="details-name">_-_</p>
                    </Box>
                    <Box className="user-details">
                      <p className="details-name">_-_</p>
                      <p className="details-name">_-_</p>
                    </Box>
                    <Box className="user-details">
                      <p className="details-name">_-_</p>
                      <p className="details-name">_-_</p>
                    </Box>
                    <Box className="user-details">
                      <p className="details-name">_-_</p>
                      <p className="details-name">_-_</p>
                    </Box>
                   
                  </Box>
                </TabPanel>
              </TabContext>
            </Box>
            <Button
              // onClick={handleModalOpen("add-user", {
              //   roles: roles || [],
              // })}
              href="/dashboard/farm-analysis"
              value="Analyze Farm"
              disableElevation
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default MapInsight;
