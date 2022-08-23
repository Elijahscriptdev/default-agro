import React from "react";
import Button from "@mui/material/Button";

function CustomButton(props) {
  const {sx, value, ...rest} = props;
  const customSx = sx || {};
  return (
    <Button
      variant="contained"
      {...rest}
      sx={{
        fontWeight: 600,
        fontSize: "14px",
        textTransform: "capitalize",
        padding: "10px 15px",
        boxShadow: "0px 5px 20px rgba(108, 117, 125, 0.15)",
        ...customSx
      }}>{value || ''}</Button>
  );
}

export default CustomButton;
