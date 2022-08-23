import React from "react";
import TextField from "@mui/material/TextField";
import { Field } from "formik";

const FormikTextField = (props) => {
  const { backgroundColor, width, height, name } = props;
  return (
    <div>
      <Field
        as={TextField}
        name={name}
        sx={{
          backgroundColor: { backgroundColor },
          width: { width },
          height: { height },
        }}
        InputProps={{ style: { height: "44px" } }}
      />
    </div>
  );
};

export default FormikTextField;
