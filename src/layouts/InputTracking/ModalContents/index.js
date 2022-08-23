import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
// import { object } from "yup";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";

import Button from "../../../components/common/Button";
import DialogHeader from "../../../components/Modals/DialogHeader";
import CustomSelect from "../../../components/common/CustomSelect";

import {
  dialogContentStyles,
  textFieldStyles,
} from "../../../components/Modals/globals";

import { addInput, deleteInput } from "../../../redux/actions/InputActions";

export const AddInput = ({ closeHandler }) => {
  const dispatch = useDispatch();
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <Box sx={dialogContentStyles}>
      <DialogHeader title={"Add Input Type"} closeHandler={closeHandler} />

      <Formik
        initialValues={{
          input_type: "",
          association: "",
          quantity: 1,
          season_name: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.input_type) {
            errors.input_type = "Name is required";
          } else if (!/[A-Za-z0-9]{2,}/gi.test(values.name)) {
            errors.input_type =
              "Name must be alphabets and greater than 2 characters";
          }

          if (!values.association) {
            errors.association = "Association is required";
          }

          if (!values.expected_qty) {
            errors.expected_qty = "Quantity is required";
          } else if (values.expected_qty && values.expected_qty < 1) {
            errors.expected_qty = "Quantity must be more than 0";
          }
          return errors;
        }}
        onSubmit={async (values, { resetForm }) => {
          const body = {
            input_type: values.input_type,
            association: values.association,
            expected_qty: values.quantity,
            season_name: values.season_name,
          };

          // console.log(body);
          setIsSubmitting(true);
          const response = dispatch(addInput(body));
          response.then(() => {
            setIsSubmitting(false);
            resetForm();
            closeHandler();
          });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Stack direction="column">
              <label htmlFor="input_type" className="second-text my-3">
                Name
              </label>
              <TextField
                sx={textFieldStyles}
                id="input_type"
                name="input_type"
                InputProps={{ style: { height: "44px" } }}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.input_type}
                className={
                  errors.input_type && touched.input_type ? "input-error" : null
                }
              />
              {errors.input_type && touched.input_type && (
                <span className="error">{errors.input_type}</span>
              )}
            </Stack>

            <Stack direction="column">
              <label htmlFor="association" className="second-text my-3">
                Association
              </label>
              <CustomSelect
                id="association"
                name="association"
                value={values.association}
                onChange={handleChange}
                onBlur={handleBlur}
                noneLabel={<em>Select Association</em>}
                iconType="filled"
                width={textFieldStyles.width}
                height="44px"
                sx={textFieldStyles}
                backgroundColor="#F3F3F4"
                disableshadow="true"
                iconwidth="48px"
                options={[
                  {
                    name: "Cassava Farms Limited",
                    value: "Cassava Farms Limited",
                  },
                ]}
                className={
                  errors.association && touched.association
                    ? "input-error"
                    : null
                }
              />
              {errors.association && touched.association && (
                <span className="error">{errors.association}</span>
              )}
            </Stack>

            <Stack direction="column">
              <label htmlFor="expected_qty" className="second-text my-3">
                Expected Quantity
              </label>
              <TextField
                sx={textFieldStyles}
                id="expected_qty"
                name="expected_qty"
                type="number"
                InputProps={{ style: { height: "44px" } }}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.expected_qty}
                min="1"
                className={
                  errors.expected_qty && touched.expected_qty
                    ? "input-error"
                    : null
                }
              />
              {errors.expected_qty && touched.expected_qty && (
                <span className="error">{errors.expected_qty}</span>
              )}
            </Stack>

            <DialogActions>
              <div className="buttons mt-8">
                <div className="">
                  <Button
                    value="Cancel"
                    onClick={closeHandler}
                    sx={{
                      fontSize: "14px",
                      color: "#A9A9A9",
                      backgroundColor: "white",
                      borderRadius: "5px",
                    }}
                  />
                </div>
                <div className="mx-6">
                  <Button
                    type="submit"
                    value={isSubmitting ? "Adding..." : "Submit"}
                    sx={{
                      fontSize: "14px",
                      borderRadius: "5px",
                    }}
                  />
                </div>
              </div>
            </DialogActions>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export const DeleteInput = ({ closeHandler, data }) => {
  const dispatch = useDispatch();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const deleteHandler = (e) => {
    setIsSubmitting(true);
    const response = dispatch(deleteInput(data?.id));
    response.then(() => {
      setIsSubmitting(false);
      closeHandler(e);
    });
  };

  return (
    <div className="">
      <h2
        className="second-text my-1 text-center"
        style={{ maxWidth: "300px" }}
      >
        Are you sure you wanna delete this input?
      </h2>

      <div className="buttons mt-2 justify-evenly">
        <Button
          value="Cancel"
          onClick={closeHandler}
          sx={{
            color: "#A9A9A9",
            backgroundColor: "white",
          }}
        />
        <Button
          value={isSubmitting ? "Deleting..." : "Delete"}
          onClick={(e) => console.log('delete')}
          sx={{
            color: "white",
            backgroundColor: "red",
          }}
        />
      </div>
    </div>
  );
};
