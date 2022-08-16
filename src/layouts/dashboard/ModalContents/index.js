import React from "react";

import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import Switch from "@mui/material/Switch";
import Box from "@mui/material/Box";

import Button from "../../../components/common/Button";
import DialogHeader from "../../../components/Modals/DialogHeader";

import { 
  textFieldStyles,
  dialogContentStyles,
} from "../../../components/Modals/globals";

export const AddCropProfile = ({ closeHandler }) => {
  return (
    <Box sx={dialogContentStyles}>
      <DialogHeader title={"Add Crop Profile"} closeHandler={closeHandler} />

      <h2 className="second-text my-2">Crop Name</h2>
      <TextField
        sx={textFieldStyles}
        InputProps={{ style: { height: "44px" } }}
      />

      <h2 className="second-text my-2">Yield Forecast (Tonnes Per Ha)</h2>

      <TextField
        sx={textFieldStyles}
        InputProps={{ style: { height: "44px" } }}
      />

      <h2 className="second-text mt-2">Start Season</h2>
      <div className="switch">
        <Switch />
      </div>

      <h2 className="second-text my-1.5"> Season Name</h2>

      <TextField
        sx={textFieldStyles}
        InputProps={{ style: { height: "44px" } }}
      />

      <DialogActions>
        <div className="buttons mt-8 ">
          <div className="">
            <Button
              value="Cancel "
              sx={{
                fontSize: "14px",
                lineHeight: "19.1px",
                width: 73,
                height: 39,
                color: "#A9A9A9",
                backgroundColor: "white",
                borderRadius: "5px",
              }}
            />
          </div>
          <div className="mx-6">
            <Button
              value="Submit"
              sx={{
                fontSize: "14px",
                lineHeight: "19.1px",
                width: 73,
                height: 39,
                borderRadius: "5px",
              }}
            />
          </div>
        </div>
      </DialogActions>
    </Box>
  );
};
