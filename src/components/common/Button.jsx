import React from "react";
import Button from "@mui/material/Button";

function CustomButton(props) {
  return (
    <Button variant="contained" {...props}>{props.value || ''}</Button>
  );
}

export default CustomButton;