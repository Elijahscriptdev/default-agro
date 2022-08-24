import { Box, Divider, Grid, Typography } from "@mui/material";
import BreadCrumb from "../../components/common/CustomBreadCrumbs";
import React from "react";
import "./ViewMore.scss";
import map from "./../../assets/map.jpg";
import Button from "../../components/common/Button"

const VegetationCheckDetails = () => {
  return (
    <div className="verification-list">
      <section>
        <nav id="quick-nav">
          <BreadCrumb
            breadcrumbs={[
              <Typography key="1" color="inherit">
                Vegetation Check
              </Typography>,
              <Typography key="2" color="primary.main">
                Verification Details
              </Typography>,
            ]}
          />
        </nav>
      </section>
      <Box className="verification-list-container">
        <Box className="container-title">Unique ID: 7</Box>

        <Grid container className="container-detail-one">
          <Grid sm={12} md={6} className="detail-map">
            <Box component="img" src={map} />
            <Box className="cta-btn" sx={{
                display:"flex",
                marginTop:"20px",
                justifyContent:"space-between",
            }}
            
            >
                <Button
                  value="Accept"
                  sx={{
                    width: "200px",
                    height: "39px",
                    fontSize: "14px",
                    fontWeight: 600,
                  }}
                />

                <Button
                  value="Reject"
                  sx={{
                    width: "200px",
                    height: "39px",
                    fontSize: "14px",
                    fontWeight: 600,
                    background: "#FFFFFF",
                    border: "1px solid rgba(249, 9, 9, 0.83)",
                    color: "rgba(249, 9, 9, 0.83)",
                  }}
                />
              </Box>
          </Grid>
          <Grid sm={12} md={6}>
            <Box
              className="provided-info"
              sx={{
                paddingLeft: { sm: "none", md: "50px" },
              }}
            >
              <Typography className="provided-info-title">
                User Provided Info
              </Typography>
              <Box className="provided-detail">
                <p>Partner: </p> <p>Association 2</p>{" "}
              </Box>
              <Box className="provided-detail">
                <p>Crop: </p> <p> Yam</p>{" "}
              </Box>
              <Box className="provided-detail">
                <p>Co-ordinates: </p> <p>Association 2</p>{" "}
              </Box>
              <Box className="provided-detail">
                <p>Country: </p> <p> Nigeria</p>{" "}
              </Box>
              <Box className="provided-detail">
                <p>City: </p> <p>Oyo</p>{" "}
              </Box>
              <Box className="provided-detail">
                <p>State: </p> <p> Bodija</p>{" "}
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider />

        <Grid container className="action_information">
          <Grid item sm={12} md={6} className="actions">
            <p className="action-title"> Actions </p>
            <Box className="action-details">
              <p>Vegetation Check: </p> <Box className="status">True</Box>
            </Box>
            <Box className="action-details">
              <p>Within Country: </p> <Box className="status">True</Box>
            </Box>
            <Box className="action-details">
              <p>Within State: </p> <Box className="status fail">False</Box>
            </Box>
            <Box className="action-details">
              <p>Within LGA: </p> <Box className="status fail">False</Box>
            </Box>
          </Grid>
          <Grid item sm={12} md={6} className="informations"  sx={{
                paddingLeft: { sm: "none", md: "50px" },
              }}>
            <p className="information-title"> Returned Information </p>
            <Box className="provided-detail">
              <p>Country: </p> <p> Nigeria</p>{" "}
            </Box>
            <Box className="provided-detail">
              <p>City: </p> <p> Oyo</p>{" "}
            </Box>
            <Box className="provided-detail">
              <p>State: </p> <p> Bodija</p>{" "}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default VegetationCheckDetails;
