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
import Divider from "@mui/material/Divider";
import Slider, { SliderThumb } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import PropTypes from 'prop-types';


const MapInsight = () => {
  const queryRef = useRef(null);
  const [query, setQuery] = useState("");
  const [profilePage, setProfilePage] = useState("editProfile");

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



function ValueLabelComponent(props) {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  value: PropTypes.number.isRequired,
};
function valuetext(value) {
  return `${value}°C`;
}

const iOSBoxShadow =
  '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

const marks = [
  {
    value: 10,
  },
  {
    value: 30,
  },
  {
    value: 40,
    label: 'March 2020',
  },
  {
    value: 50,
  },
  {
    value: 60,
  },
  {
    value: 70,
  },
  {
    value: 80,
  },
  {
    value: 90,
  },
  {
    value: 100,
  },
];

  const IOSSlider = styled(Slider)(({ theme }) => ({
    color: theme.palette.mode === 'dark' ? '#3880ff' : '#3880ff',
    height: 2,
    padding: '15px 0',
    '& .MuiSlider-thumb': {
      height: 28,
      width: 28,
      backgroundColor: '#fff',
      boxShadow: iOSBoxShadow,
      '&:focus, &:hover, &.Mui-active': {
        boxShadow:
          '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          boxShadow: iOSBoxShadow,
        },
      },
    },
    '& .MuiSlider-valueLabel': {
      fontSize: 12,
      fontWeight: 'normal',
      top: -6,
      backgroundColor: 'unset',
      color: theme.palette.text.primary,
      '&:before': {
        display: 'none',
      },
      '& *': {
        background: 'transparent',
        color: theme.palette.mode === 'dark' ? '#fff' : '#000',
      },
    },
    '& .MuiSlider-track': {
      border: 'none',
    },
    '& .MuiSlider-rail': {
      opacity: 0.5,
      backgroundColor: '#bfbfbf',
    },
    '& .MuiSlider-mark': {
      backgroundColor: '#bfbfbf',
      height: 8,
      width: 1,
      '&.MuiSlider-markActive': {
        opacity: 1,
        backgroundColor: 'currentColor',
      },
    },
  }));

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
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "60%" },
              // height: { xs: "334", md: "534px" },
            }}
            className="map-details"
          >
            <Box
              component="img"
              src={map}
              sx={{
                width: "100%",
                height: { xs: "334", md: "534px" },
              }}
            />
            <Box className="history">
              <p className="history-top">History</p>
              <IOSSlider
                aria-label="ios slider"
                defaultValue={40}
                marks={marks}
                valueLabelDisplay="off"
                getAriaValueText={valuetext}
              />
            </Box>

            <Box className="weather-forecast">
              <Box className="first-weather-container"  sx={{
              display:"flex",
              flexDirection:{xs:"column",md:"row"}
            }}>
                <Box className="forecast-today">
                  <p className="forecast-top">Weather Forecast</p>
                  <p className="forecast-date">Today, Wednesday 20-08-2020</p>
                  <p className="weather">
                    <Box component="img" src={cloud} />
                    58°C
                  </p>
                  <p
                    sx={{
                      margin: "10px 0px",
                    }}
                  >
                    Feels like 56°C
                  </p>
                  <Box className="forecast-today-details">
                    <Box className="detail">
                      <p className="detail-name">Dewpoint</p>
                      <p className="detail-value">55°</p>
                    </Box>
                    <Box className="detail">
                      <p className="detail-name">Wind</p>
                      <p className="detail-value">4mph E</p>
                    </Box>
                    <Box className="detail">
                      <p className="detail-name">Humidity</p>
                      <p className="detail-value">87%</p>
                    </Box>
                  </Box>
                </Box>

                <Divider
                  orientation="vertical"
                  sx={{
                    height:{xs:"2px",md:"100px"},
                    margin:{xs:"20px 0px",md:"0px"},
                    borderWidth: "1px"
                  }}
                />

                <Box className="forecast-hourly">
                  <p className="hourly-top">Hourly</p>
                  <Box className="forecast-hourly-container">
                    <Box className="hourly-wrapper">
                      <p className="hourly-time">5pm</p>
                      <Box component="img" src={cloud} />
                      <p className="hourly-degree">58°</p>
                      <p
                        style={{
                          display: "flex",
                          alignItem: "center",
                        }}
                        className="hourly-percent"
                      >
                        <Box component="img" src={water} />
                        100%
                      </p>
                    </Box>
                    <Box className="hourly-wrapper">
                      <p className="hourly-time">5pm</p>
                      <Box component="img" src={cloud} />
                      <p className="hourly-degree">58°</p>
                      <p
                        style={{
                          display: "flex",
                          alignItem: "center",
                        }}
                        className="hourly-percent"
                      >
                        <Box component="img" src={water} />
                        100%
                      </p>
                    </Box>
                    <Box className="hourly-wrapper">
                      <p className="hourly-time">5pm</p>
                      <Box component="img" src={cloud} />
                      <p className="hourly-degree">58°</p>
                      <p
                        style={{
                          display: "flex",
                          alignItem: "center",
                        }}
                        className="hourly-percent"
                      >
                        <Box component="img" src={water} />
                        100%
                      </p>
                    </Box>
                    <Box className="hourly-wrapper">
                      <p className="hourly-time">5pm</p>
                      <Box component="img" src={cloud} />
                      <p className="hourly-degree">58°</p>
                      <p
                        style={{
                          display: "flex",
                          alignItem: "center",
                        }}
                        className="hourly-percent"
                      >
                        <Box component="img" src={water} />
                        100%
                      </p>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box className="second-weather-container">
                <p className="second-weather-container-top">Next 7 days</p>
                <Box className="second-weather-wrapper">
                  <Box className="second-weather-detail">
                    <p className="detail-day">Thur</p>
                    <p className="detail-date">12/02</p>

                    <Box
                      sx={{
                        display: "flex",
                        alignItem: "center",
                      }}
                      className="detail-degree"
                    >
                      {" "}
                      <Box component="img" src={cloud} /> 58°
                    </Box>

                    <p
                      style={{
                        display: "flex",
                        alignItem: "center",
                      }}
                      className="detail-percent"
                    >
                      <Box component="img" src={water} />
                      100%
                    </p>
                  </Box>
                  <Box className="second-weather-detail">
                    <p className="detail-day">Fri</p>
                    <p className="detail-date">13/02</p>

                    <Box
                      sx={{
                        display: "flex",
                        alignItem: "center",
                      }}
                      className="detail-degree"
                    >
                      {" "}
                      <Box component="img" src={cloud} /> 58°
                    </Box>

                    <p
                      style={{
                        display: "flex",
                        alignItem: "center",
                      }}
                      className="detail-percent"
                    >
                      <Box component="img" src={water} />
                      100%
                    </p>
                  </Box>

                  <Box className="second-weather-detail">
                    <p className="detail-day">Sat</p>
                    <p className="detail-date">14/02</p>

                    <Box
                      sx={{
                        display: "flex",
                        alignItem: "center",
                      }}
                      className="detail-degree"
                    >
                      {" "}
                      <Box component="img" src={cloud} /> 58°
                    </Box>

                    <p
                      style={{
                        display: "flex",
                        alignItem: "center",
                      }}
                      className="detail-percent"
                    >
                      <Box component="img" src={water} />
                      100%
                    </p>
                  </Box>
                  <Box className="second-weather-detail">
                    <p className="detail-day">Sun</p>
                    <p className="detail-date">15/02</p>

                    <Box
                      sx={{
                        display: "flex",
                        alignItem: "center",
                      }}
                      className="detail-degree"
                    >
                      {" "}
                      <Box component="img" src={cloud} /> 58°
                    </Box>

                    <p
                      style={{
                        display: "flex",
                        alignItem: "center",
                      }}
                      className="detail-percent"
                    >
                      <Box component="img" src={water} />
                      100%
                    </p>
                  </Box>
                  <Box className="second-weather-detail">
                    <p className="detail-day">Mon</p>
                    <p className="detail-date">16/02</p>

                    <Box
                      sx={{
                        display: "flex",
                        alignItem: "center",
                      }}
                      className="detail-degree"
                    >
                      {" "}
                      <Box component="img" src={cloud} /> 58°
                    </Box>

                    <p
                      style={{
                        display: "flex",
                        alignItem: "center",
                      }}
                      className="detail-percent"
                    >
                      <Box component="img" src={water} />
                      100%
                    </p>
                  </Box>
                  <Box className="second-weather-detail">
                    <p className="detail-day">Tue</p>
                    <p className="detail-date">17/02</p>

                    <Box
                      sx={{
                        display: "flex",
                        alignItem: "center",
                      }}
                      className="detail-degree"
                    >
                      {" "}
                      <Box component="img" src={cloud} /> 58°
                    </Box>

                    <p
                      style={{
                        display: "flex",
                        alignItem: "center",
                      }}
                      className="detail-percent"
                    >
                      <Box component="img" src={water} />
                      100%
                    </p>
                  </Box>
                  <Box className="second-weather-detail">
                    <p className="detail-day">Wed</p>
                    <p className="detail-date">18/02</p>

                    <Box
                      sx={{
                        display: "flex",
                        alignItem: "center",
                      }}
                      className="detail-degree"
                    >
                      {" "}
                      <Box component="img" src={cloud} /> 58°
                    </Box>

                    <p
                      style={{
                        display: "flex",
                        alignItem: "center",
                      }}
                      className="detail-percent"
                    >
                      <Box component="img" src={water} />
                      100%
                    </p>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box
            className="insight-details"
            sx={{
              paddingLeft: { xs: "none", md: "30px" },
              width: { xs: "100%",md:"40%" },
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
