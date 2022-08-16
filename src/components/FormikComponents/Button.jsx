import React from "react";
import Button from "@mui/material/Button";
import { Formik, Field, Form } from "formik";
import { object, string } from "yup";

export default function FormikCustomButton(props) {
  const { value, sx, name, onclick, variant } = props;

  const customSx = sx;

  const initialValues = {
    button: "",
  };

  const validationSchema = object({
    button: string().required("required"),
  });

  return (
    <div>
      <Formik initialValues={initialValues} validationSchema={validationSchema}>
        {() => (
          <Form>
            <Field
              as={Button}
              name={name}
              sx={{ ...customSx }}
              variant={variant || null}
              onClick={onclick}
            >
              {value}
            </Field>
          </Form>
        )}
      </Formik>
    </div>
  );
}
