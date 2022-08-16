import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Field } from "formik";

const FormikCustomSelect = (props) => {
  const { options, name, width, backgroundColor, height } = props;

  return (
    <div>
      <div style={{ borderRadius: "12px" }}>
        <Field
          as={Select}
          name={name}
          sx={{
            width: { width },
            backgroundColor: { backgroundColor },
            height: { height },
            overFlow: "hidden",
            "& .MuiSelect-icon": {
              backgroundColor: "#009688",
              fill: "white",
              height: "100%",
              width: "48px",
              top: 0,
              right: 0,
              // borderRadius:"10px"
            },
          }}
        >
          {options.map((option, index) => {
            return (
              <MenuItem key={option.value} value={option.value}>
                {option.name}
              </MenuItem>
            );
          })}
        </Field>
      </div>
    </div>
  );
};

export default FormikCustomSelect;
