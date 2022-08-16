import React, { useState } from "react";

import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

export default function CustomRadioGroup(props) {
  const {
    id = "",
    name = null,
    formLabel = "",
    formLabelProps = {},
    onChange = (e) => {},
    // noneLabel,
    options = [],
    // iconType,
    sx = {},
    ...rest
  } = props;

  // const handleChange = (event) => {
  //   setSelectValue(event.target.value);
  //   onChange(event);
  // };

  return (
    <FormControl>
      <FormLabel id={id} {...formLabelProps}>
        {formLabel}
      </FormLabel>
      <RadioGroup
        aria-labelledby={id}
        name={name}
        onChange={onChange}
        {...rest}
      >
        {options.map((eachRadio, index) => {
          return (
            <FormControlLabel
              key={index}
              value={eachRadio.value}
              control={<Radio />}
              label={eachRadio.name}
              {...(eachRadio.props || {})}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
}
