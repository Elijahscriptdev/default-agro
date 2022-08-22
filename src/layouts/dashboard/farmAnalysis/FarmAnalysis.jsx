import React, { useRef, useState } from "react";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import "./FarmAnalysis.scss";
import map from "../../../assets/map.jpg";
import cloud from "../../../assets/cloud.png";
import water from "../../../assets/water.png";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Button from "../../../components/common/Button";

const MapInsight = () => {
  const queryRef = useRef(null);
  const [query, setQuery] = useState("");
  const [profilePage, setProfilePage] = useState("editProfile");

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

        <Stack
          direction="row"
          spacing={2}
          sx={{
            backgroundColor: (theme) => theme.palette.primary.main,
            p: 1,
            width: "100%",
          }}
        >
          <Button
            value="Map View"
            sx={{
              backgroundColor: profilePage == "editProfile" ? "white" : null,
              color: profilePage == "editProfile" ? "black" : null,
            }}
            onClick={() => setProfilePage("editProfile")}
          />
          <Button
            value="Spectral View"
            sx={{
              backgroundColor: profilePage == "changePassword" ? "white" : null,
              color: profilePage == "changePassword" ? "black" : null,
            }}
            onClick={() => setProfilePage("changePassword")}
          />
        </Stack>

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
            }}
            className="map-details"
          >
            <Box
              component="img"
              src={map}
              sx={{
                width: "100%",
                height: { sm: "334", md: "534px" },
              }}
            />
            <Box className="history">
              <p className="history-top">History</p>
            </Box>

            <Box className="weather-forecast">
              <Box className="forcast-today">
                <p className="forcast-top">Weather Forecast</p>
                <p className="forcast-date">Today, Wednesday 20-08-2020</p>
                <p className="weather">
                  <Box component="img" src={cloud} />
                  58°C
                </p>
                <p>Feels like 56°C</p>
                <Box>
                  <Box>
                    <p>Dewpoint</p>
                    <p>55°</p>
                  </Box>
                  <Box>
                    <p>Wind</p>
                    <p>4mph E</p>
                  </Box>
                  <Box>
                    <p>Humidity</p>
                    <p>87%</p>
                  </Box>
                </Box>
              </Box>

              <Box className="forecast-hourly">
                <p>Hourly</p>
                <Box>
                  <p>5pm</p>
                  <Box component="img" src={cloud} />
                  <p>58°</p>
                  <p>
                    <Box component="img" src={water} />
                    100%
                  </p>
                </Box>
                <Box>
                  <p>5pm</p>
                  <Box component="img" src={cloud} />
                  <p>58°</p>
                  <p>
                    <Box component="img" src={water} />
                    100%
                  </p>
                </Box>
                <Box>
                  <p>5pm</p>
                  <Box component="img" src={cloud} />
                  <p>58°</p>
                  <p>
                    <Box component="img" src={water} />
                    100%
                  </p>
                </Box>
                <Box>
                  <p>5pm</p>
                  <Box component="img" src={cloud} />
                  <p>58°</p>
                  <p>
                    <Box component="img" src={water} />
                    100%
                  </p>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box
            className="insight-details"
            sx={{
              paddingLeft: { sm: "none", md: "30px" },
              width: { sm: "40%" },
            }}
          >
            <Box className="select-layer">
              <p className="select-top">Select Layer</p>
              <FormGroup
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2,1fr)",
                }}
              >
                <FormControlLabel control={<Checkbox />} label="NDVI" />
                <FormControlLabel control={<Checkbox />} label="Vegetation" />
                <FormControlLabel control={<Checkbox />} label="Water" />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Non-Vegetation"
                />
              </FormGroup>
            </Box>
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

            <Box
              sx={{ width: "100%", typography: "body1" }}
              className="insight-switch"
            >
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
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default MapInsight;
