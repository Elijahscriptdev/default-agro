import React from "react";
import TextField from "@mui/material/TextField";

const CustomSearchField = (props) => {
  const { sx = {}, placeholder = "", value="", ...rest } = props;
  return (
    <TextField
      // defaultValue={props.value || ""}
      placeholder={placeholder}
      sx={{
        p: 0,
        border: "1px solid rgba(0, 150, 136, 0.2)",
        borderRadius: "5px",
        backgroundColor: "#FFF",
        "& *": {
          borderColor: "transparent",
        },
        "& input": {
          padding: "10px",
        },
        ...sx,
      }}
      value={value}
      {...rest}
    />
  );
};

export default CustomSearchField;
