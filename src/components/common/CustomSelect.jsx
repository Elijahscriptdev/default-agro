import React, { useState } from "react";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function CustomSelect(props) {
  const {
    onChange = (e) => {},
    noneLabel,
    options = [],
    iconType,
    sx = {},
    backgroundColor = "#FFFFFF",
    ...rest
  } = props;
  const [selectValue, setSelectValue] = useState("");

  const handleChange = (event) => {
    setSelectValue(event.target.value);
    onChange(event);
  };

  let iconStyle;

  switch (true) {
    case !!iconType && iconType === "filled":
      iconStyle = {
        "& .MuiSelect-icon": {
          backgroundColor: "primary.main",
          fill: "white",
          height: "100%",
          width: props.iconwidth || "48px",
          top: 0,
          right: 0,
        },
      };
      break;

    default:
      iconStyle = {};
      break;
  }

  return (
    <FormControl
      sx={{
        borderRadius: "5px",
        minWidth: 120,
        width: props.width,
        height: props.height,
        backgroundColor: props.backgroundColor,
      }}
    >
      <Select
        value={selectValue}
        onChange={handleChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        // IconComponent="ArrowDropDownOutlined"
        sx={{
          overflow: "hidden",
          boxShadow: props.disableshadow
            ? "none"
            : "0px 5px 20px rgba(108, 117, 125, 0.15)",
          "& *": {
            border: "none",
          },
          ...iconStyle,
          ...sx,
        }}
        {...rest}
      >
        <MenuItem value="">{noneLabel || <em>None</em>}</MenuItem>
        {options.map((option, index) => {
          return (
            <MenuItem
              key={index}
              value={option.value}
              selected={option.selected}
            >
              {option.name || ""}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
