import React from "react";
import { Formik, Form, Field } from "formik";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import DialogActions from "@mui/material/DialogActions";

import Button from "../../../components/common/Button";
import DialogHeader from "../../../components/Modals/DialogHeader";

import {
  dialogContentStyles,
  dialogContentStyles2,
} from "../../../components/Modals/globals";

export const PendingPayments = ({ closeHandler }) => {
  return (
    <Box sx={dialogContentStyles}>
      <DialogHeader title={"Pending Payments"} closeHandler={closeHandler} />
      <div>
        <div style={{ marginBottom: "26px", marginTop: "20px" }}>
          <span
            style={{
              fontSize: "16px",
              fontWeight: 400,
              color: "#6C757D",
              marginRight: "49px",
            }}
          >
            Name:
          </span>
          <span style={{ fontSize: "16px", fontWeight: 700, color: "#6C757D" }}>
            Alatiwa Ajakaye
          </span>
        </div>

        <div>
          <span
            style={{
              fontSize: "16px",
              fontWeight: 400,
              color: "#6C757D",
              marginRight: "33.79px",
            }}
          >
            Amount:
          </span>
          <span style={{ fontSize: "16px", fontWeight: 700, color: "#6C757D" }}>
            N10,000.00
          </span>
        </div>
      </div>

      <DialogActions sx={{ p: 0 }}>
        <div className='buttons mt-8' style={{ width: "100%" }}>
          <div>
            <Button
              value='cancel'
              sx={{
                backgroundColor: "white",
                color: "#6C757D",
              }}
            />
          </div>
          <div>
            <Button
              value='Process Payments'
              sx={{
                color: "white",
              }}
            />
          </div>
        </div>
      </DialogActions>
    </Box>
  );
};

export const CollectionSettings = ({ closeHandler }) => {
  const initialValues = {
    newPrice: "",
  };
  return (
    <Box sx={dialogContentStyles}>
      <DialogHeader title={"Collection Settings"} closeHandler={closeHandler} />
      <div>
        <div
          style={{
            marginBottom: "26px",
            marginTop: "20px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: "16px",
              fontWeight: 400,
              color: "#6C757D",
              marginRight: "40px",
            }}
          >
            New price per Kg:
          </span>

          <div>
            <Formik initialValues={initialValues}>
              {() => (
                <Form>
                  <Field
                    as={TextField}
                    name='newPrice'
                    sx={{
                      width: "206px",
                      backgroundColor: "#F3F3F4",
                      borderRadius: "5px",
                    }}
                    inputProps={{ style: { height: "14px" } }}
                  />
                </Form>
              )}
            </Formik>
          </div>
        </div>

        <div>
          <span
            style={{
              fontSize: "16px",
              fontWeight: 400,
              color: "#6C757D",
              marginRight: "70px",
            }}
          >
            Current Rate:
          </span>
          <span style={{ fontSize: "16px", fontWeight: 700, color: "#6C757D" }}>
            N10,000.00
          </span>
        </div>
      </div>

      <DialogActions sx={{ p: 0 }}>
        <div className='buttons mt-8' style={{ width: "100%" }}>
          <div>
            <Button
              value='cancel'
              sx={{
                // padding: "10px 15px",
                backgroundColor: "white",
                // fontSize: "14px",
                // fontWeight: 600,
                color: "#6C757D",
                // borderRadius: "5px",
                // marginRight: "26px",
              }}
            />
          </div>
          <div>
            <Button
              value='Submit'
              sx={{
                // padding: "10px 15px",
                // backgroundColor: "#009688",
                // fontSize: "14px",
                // fontWeight: 600,
                color: "white",
                // borderRadius: "5px",
              }}
            />
          </div>
        </div>
      </DialogActions>
    </Box>
  );
};

// const styles = (theme) => ({
//   root: {
//     display: "flex",
//   },
//   toolbar: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "flex-end",
//     padding: "0 8px",
//     ...theme.mixins.toolbar,
//   },
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing.unit * 3,
//   },
//   button: {
//     marginTop: theme.spacing.unit * 3,
//     // marginBottom: theme.spacing.unit * 3,
//     marginRight: 3,
//     color: "#fff",
//   },
//   button1: {
//     color: "#000",
//   },
//   button2: {
//     color: "#fff",
//     background: "#009688",
//   },
//   searchBar: {
//     marginTop: theme.spacing.unit * 3,
//     marginBottom: theme.spacing.unit * 3,
//   },
// });

export const SendMoney = ({ closeHandler, individual, bulk }) => {
  // const initialValues = {
  //   newPrice: "",
  // };

  return (
    <Box sx={dialogContentStyles2}>
      <DialogHeader title={"Send Money"} closeHandler={closeHandler} />
      {/* <div>
        <div
          style={{
            marginBottom: "26px",
            marginTop: "20px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: "16px",
              fontWeight: 400,
              color: "#6C757D",
              marginRight: "40px",
            }}
          >
            New price per Kg:
          </span>

          <div>
            <Formik initialValues={initialValues}>
              {() => (
                <Form>
                  <Field
                    as={TextField}
                    name='newPrice'
                    sx={{
                      width: "206px",
                      backgroundColor: "#F3F3F4",
                      borderRadius: "5px",
                    }}
                    inputProps={{ style: { height: "14px" } }}
                  />
                </Form>
              )}
            </Formik>
          </div>
        </div>

        <div>
          <span
            style={{
              fontSize: "16px",
              fontWeight: 400,
              color: "#6C757D",
              marginRight: "70px",
            }}
          >
            Current Rate:
          </span>
          <span style={{ fontSize: "16px", fontWeight: 700, color: "#6C757D" }}>
            N10,000.00
          </span>
        </div>
      </div> */}

      <DialogActions sx={{ p: 0 }}>
        {/* <div className='buttons mt-8' style={{ width: "100%" }}>
          <div>
            <Button
              value='cancel'
              sx={{
                // padding: "10px 15px",
                backgroundColor: "white",
                // fontSize: "14px",
                // fontWeight: 600,
                color: "#6C757D",
                // borderRadius: "5px",
                // marginRight: "26px",
              }}
            />
          </div>
          <div>
            <Button
              value='Submit'
              sx={{
                // padding: "10px 15px",
                // backgroundColor: "#009688",
                // fontSize: "14px",
                // fontWeight: 600,
                color: "white",
                // borderRadius: "5px",
              }}
            />
          </div>
        </div> */}
        <div
          style={{
            display: "flex",
            gap: 24,
            justifyContent: "center",
            background: "#009688",
            boxShadow: "0px 5px 20px rgba(108, 117, 125, 0.15)",
            borderRadius: "5px",
            padding: "10px",
            maxWidth: "100%",
            width: "500px",
          }}
        >
          <button
            // type='primary'
            style={{
              width: "100%",
              height: "40px",
              fontSize: "14px",
              backgroundColor: "#FFFFFF !important",
              fontWeight: 600,
              color: "green",
              borderRadius: "5px",
              marginRight: "26px",
            }}
            // sx={{individual ? color: "#000" : color :"#fff" }}
            //   button1: {
            //     color: "#000",
            //   },
            //   button2: {
            //     color: "#fff",
            //     background: "#009688",
            //   },
            // className={individual ? classes.button1 : classes.button2}
            // onClick={this.handleIndividual}
          >
            Individual Transfer
          </button>
          <button
            style={{
              width: "100%",
              height: "40px",
              fontSize: "14px",
              background: "#FFFFFF !important",
              fontWeight: 600,
              color: "white",
              borderRadius: "5px",
              marginRight: "26px",
            }}
            // type='primary'
            // className={individual ? classes.button2 : classes.button1}
            // onClick={this.handleBulk}
          >
            Bulk Transfer
          </button>
        </div>
      </DialogActions>
    </Box>
  );
};
