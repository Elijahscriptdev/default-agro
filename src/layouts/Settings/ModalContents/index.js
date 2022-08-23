import React from "react";
import {
  SecondText,
} from "../../../components/FormikComponents/constants";
import { Field, Form, Formik } from "formik";
import TextField from "@mui/material/TextField";
import Button from "../../../components/common/Button";
import DialogHeader from "../../../components/Modals/DialogHeader";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import CheckBox from "@mui/material/Checkbox";

export const RechargeSms = ({ closeHandler }) => {
  const initialValues = {
    recharge: "",
  };

  return (
    <div>
      <DialogHeader title="Recharge SMS" closeHandler={closeHandler} />
      <SecondText value="Amount" />
      {/* <IoMdClose
        onClick={closehandler}
        style={{
          position: "absolute",
          fontSize: "22px",
          color: "#009688",
          right: "22px",
          top: "48px",
        }}
      /> */}

      <Formik
        initialValues={initialValues}
        onSubmit={(values, formikHelpers) => {
          console.log(values);
          formikHelpers.resetForm();
        }}
      >
        {() => (
          <Form>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Field
                as={TextField}
                name="recharge"
                sx={{ backgroundColor: "#F3F3F4", width: "33.125vw" }}
                inputProps={{ style: { height: "20px" } }}
              />

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "32px",
                }}
              >
                <Button
                  onClick={closeHandler}
                  variant="filled"
                  value="Cancel"
                  sx={{
                    width: "73px",
                    height: "39px",
                    padding: "10px 15px",
                    backgroundColor: "white",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#6C757D",
                    borderRadius: "5px",
                    marginRight: "26px",
                  }}
                />

                <Button
                  type="submit"
                  variant="filled"
                  value="Submit"
                  sx={{
                    width: "76px",
                    height: "39px",
                    padding: "10px 15px",
                    backgroundColor: "#009688",
                    color: "white",
                    fontSize: "14px",
                    fontWeight: 600,
                    border: "1px",
                    // borderColor: "#6C757FD",
                    borderRadius: "5px",
                    boxShadow: "0px 5px 20px rgba(108, 117, 125, 0.15)",
                  }}
                />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export const TopUpWallet = ({ closeHandler }) => {
  const initialValues = {
    recharge: "",
  };

  return (
    <div>
      <DialogHeader title="Top Up" closeHandler={closeHandler} />
      <SecondText value="Amount" />
      {/* <IoMdClose
        onClick={closehandler}
        style={{
          position: "absolute",
          fontSize: "22px",
          color: "#009688",
          right: "22px",
          top: "48px",
        }}
      /> */}

      <Formik
        initialValues={initialValues}
        onSubmit={(values, formikHelpers) => {
          console.log(values);
          formikHelpers.resetForm();
        }}
      >
        {() => (
          <Form>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Field
                as={TextField}
                name="recharge"
                sx={{ backgroundColor: "#F3F3F4", width: "33.125vw" }}
                inputProps={{ style: { height: "20px" } }}
              />

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "32px",
                }}
              >
                <Button
                  onClick={closeHandler}
                  variant="filled"
                  value="Cancel"
                  sx={{
                    width: "73px",
                    height: "39px",
                    padding: "10px 15px",
                    backgroundColor: "white",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#6C757D",
                    borderRadius: "5px",
                    marginRight: "26px",
                  }}
                />

                <Button
                  type="submit"
                  variant="filled"
                  value="Submit"
                  sx={{
                    width: "76px",
                    height: "39px",
                    padding: "10px 15px",
                    backgroundColor: "#009688",
                    color: "white",
                    fontSize: "14px",
                    fontWeight: 600,
                    border: "1px",
                    // borderColor: "#6C757FD",
                    borderRadius: "5px",
                    boxShadow: "0px 5px 20px rgba(108, 117, 125, 0.15)",
                  }}
                />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export const NewMessage = ({ closeHandler }) => {
  const options = [
    { value: "imisi", key: "boss" },
    { value: "temi", key: "boy" },
    { value: "abdul", key: "smallboy" },
    { value: "kerry", key: "kerry" },
  ];

  const initialValues = {
    Message: "",
    "Type of message": "",
    date:""
  };

  return (
    <div>
      <DialogHeader title={"Compose New Message"} closeHandler={closeHandler} />
      {/* <FirstText value="" /> */}
      <SecondText value="Type of Message" />
      {/* <IoMdClose
        onClick={closehandler}
        style={{
          position: "absolute",
          fontSize: "22px",
          color: "#009688",
          right: "22px",
          top: "48px",
        }}
      /> */}

      <Formik
        initialValues={initialValues}
        onSubmit={(values, formikHelpers) => {
          console.log(values);
          formikHelpers.resetForm();
        }}
      >
        {() => (
          <Form>
            <Field
              as={Select}
              name="Type of message"
              sx={{
                width: "33.125vw",
                height: "44px",
                backgroundColor: "#F3F3F4",
                "& .MuiSelect-icon": {
                  backgroundColor: "#009688",
                  height: "100%",
                  width: "48px",
                  fill: "white",
                  top: 0,
                  right: 0,
                },
              }}
            >
              {options.map((item, index) => {
                return (
                  <MenuItem key={item.key} value={item.value}>
                    {item.value}
                  </MenuItem>
                );
              })}
            </Field>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <SecondText value="Message" />
              <Field
                as={TextField}
                name="Message"
                sx={{ width: "33.125vw", backgroundColor: "#F3F3F4" }}
                inputProps={{ style: { height: "81px" } }}
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <CheckBox sx={{ marginLeft: "-10px", borderRadius: "5px" }} />
              <span
                style={{ color: "#6C757D", fontSize: "14px", fontWeight: 400 }}
              >
                Schedule Message
              </span>
            </div>

            <SecondText value="Schedule Date" />

            <TextField
              type="date"
              sx={{ width: "18vw" }}
              inputProps={{ style: { height: "21px" } }}
              name="date"
            />

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: "32px",
              }}
            >
              <Button
                onClick={closeHandler}
                variant="filled"
                value="Cancel"
                sx={{
                  width: "73px",
                  height: "39px",
                  padding: "10px 15px",
                  backgroundColor: "white",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#6C757D",
                  borderRadius: "5px",
                  marginRight: "26px",
                }}
              />

              <Button
                type="submit"
                variant="filled"
                value="Submit"
                sx={{
                  width: "76px",
                  height: "39px",
                  padding: "10px 15px",
                  backgroundColor: "#009688",
                  color: "white",
                  fontSize: "14px",
                  fontWeight: 600,
                  border: "1px",
                  // borderColor: "#6C757FD",
                  borderRadius: "5px",
                  boxShadow: "0px 5px 20px rgba(108, 117, 125, 0.15)",
                }}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
