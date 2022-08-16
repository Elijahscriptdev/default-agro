import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForwardIos";
import MuiButton from "@mui/material/Button";
import { Box } from "@mui/material";
import ICON from "../../assets/org.svg";
import CropTable from "./CropTable";

import CustomSelect from "../../components/common/CustomSelect";
import "./styles.scss";

function Programme() {
  return (
    <React.Fragment>
      <section>
        <nav id="quick-nav">
          <span>Dashboard</span>
          <ArrowForwardIcon
            color="primary"
            sx={{
              ml: "10px",
              mr: "10px",
              fill: (theme) => theme.palette.primary.main,
            }}
          />
          <MuiButton sx={{ color: (theme) => theme.palette.primary.main }}>
            Farm Analysis
          </MuiButton>
        </nav>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <h1>Farm Analysis Dashboard</h1>
          </div>

          <div>
            <CustomSelect
              noneLabel={<em>Select State</em>}
              options={[
                { name: "State 1", value: "1" },
                { name: "State 2", value: "2" },
                { name: "State 3", value: "3" },
                { name: "State 4", value: "4" },
              ]}
              onChange={(e) => {
                console.log(e.target.value);
              }}
              sx={{
                backgroundColor: "#fff",
                outline: "none",
                "& .MuiSelect-select": {
                  p: "10px 15px",
                },
              }}
            />
          </div>
        </Box>

        <section className="wrapper">
          <div className="grid-cards">
            <div>
              <img src={ICON} alt="icon" />
              <p>Total Allocated Farmland</p>
              <h2>46,000</h2>
            </div>
            <div>
              <img src={ICON} alt="icon" />
              <p>Total Allocated Farmland</p>
              <h2>46,000</h2>
            </div>
            <div>
              <img src={ICON} alt="icon" />
              <p>Total Allocated Farmland</p>
              <h2>46,000</h2>
            </div>
            <div>
              <img src={ICON} alt="icon" />
              <p>Total Allocated Farmland</p>
              <h2>46,000</h2>
            </div>
            <div>
              <img src={ICON} alt="icon" />
              <p>Total Allocated Farmland</p>
              <h2>46,000</h2>
            </div>
          </div>
        </section>

        <section className="">
          <CropTable />
        </section>

        <section className="wrapper2">
          <div>
            <h1>Farm Analysis Dashboard</h1>
          </div>
          <div className="grid-cards2">
            <div>
              <img src={ICON} alt="icon" />
              <p>Total Allocated Farmland</p>
              <h2>46,000</h2>
            </div>
            <div>
              <img src={ICON} alt="icon" />
              <p>Total Allocated Farmland</p>
              <h2>46,000</h2>
            </div>
            <div>
              <img src={ICON} alt="icon" />
              <p>Total Allocated Farmland</p>
              <h2>46,000</h2>
            </div>
            <div>
              <img src={ICON} alt="icon" />
              <p>Total Allocated Farmland</p>
              <h2>46,000</h2>
            </div>
            <div>
              <img src={ICON} alt="icon" />
              <p>Total Allocated Farmland</p>
              <h2>46,000</h2>
            </div>
          </div>
        </section>
      </section>
    </React.Fragment>
  );
}

export default Programme;
