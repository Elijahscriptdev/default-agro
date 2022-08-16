import React, { useState } from "react";
import { Formik, Form } from "formik";
import { object } from "yup";
import Button from "../../../components/common/Button";
import MuiButton from "@mui/material/Button";
import { IoMdClose } from "react-icons/io";

import {
  FirstText,
  SecondText,
} from "../../../components/FormikComponents/constants";
import FormikCustomSelect from "../../../components/FormikComponents/Select";
import FormikTextField from "../../../components/FormikComponents/TextField";

// import {
//   deleteCollection,
// } from "../../../redux/actions/CollectionsActions";

const Farmer = () => {
  const options = [
    { name: "farmer 1", value: "farmer" },
    { name: "farmer 2", value: "farmer" },
    { name: "Farmer 3", value: "farmer" },
    { name: "Farmer 4", value: "farmer" },
  ];

  return (
    <div>
      <SecondText value="Farmer" />

      <FormikCustomSelect
        options={options}
        name="select1"
        width="33.125vw"
        height="44px"
        backgroundColor="#F3F3F4"
      />

      <SecondText value="Crop" />

      <FormikCustomSelect
        options={options}
        name="select2"
        width="33.125vw"
        height="44px"
        backgroundColor="#F3F3F4"
      />

      <h2 className="second-text my-4">Weight</h2>
      <FormikTextField
        backgroundColor="#F3F3F4"
        width="33.125vw"
        height="44px"
        name="textfield"
      />

      <div
        className="flex flex-row align items-center justify-between"
        style={{ width: "180px" }}
      >
        <SecondText value="Amount" />
        <span
          style={{
            fontSize: "16px",
            lineHeight: "21.82px",
            fontWeight: 700,
            color: "#6C757D",
          }}
        >
          N10,000.00
        </span>
      </div>
    </div>
  );
};

const SourcingPartner = () => {
  const options = [
    { name: "Sourcing Partner 1", value: "sourcing" },
    { name: "Sourcing Partner 2", value: "sourcing" },
    { name: "Sourcing Partner 3", value: "sourcing" },
    { name: "Sourcing Partner 4", value: "sourcing" },
  ];
  return (
    <div>
      <SecondText value="Sourcing Partner" />

      <FormikCustomSelect
        options={options}
        name="select01"
        width="33.125vw"
        height="44px"
        backgroundColor="#F3F3F4"
      />

      <SecondText value="Crop" />

      <FormikCustomSelect
        options={options}
        name="select02"
        width="33.125vw"
        height="44px"
        backgroundColor="#F3F3F4"
      />

      <h2 className="second-text my-4">Weight</h2>
      <FormikTextField
        backgroundColor="#F3F3F4"
        width="33.125vw"
        height="44px"
        name="textfield0"
      />

      <div
        className="flex flex-row align items-center justify-between"
        style={{ width: "180px" }}
      >
        <SecondText value="Amount" />
        <span
          style={{
            fontSize: "16px",
            lineHeight: "21.82px",
            fontWeight: 700,
            color: "#6C757D",
          }}
        >
          N10,000.00
        </span>
      </div>
    </div>
  );
};

const styles = {
  backgroundColor: "blue",
};

export const AddNewCollection = ({ closeHandler }) => {
  const [state, setState] = useState(<Farmer />);
  const [color, setColor] = useState();
  const [colors, setColors] = useState();

  const firsthandler = () => {
    setState(<Farmer />);
    setColor(styles);
    setColors();
  };

  const secondhandler = () => {
    setState(<SourcingPartner />);
    setColors(styles);
    setColor();
  };

  const initialValues = {
    select1: "",
    select2: "",
    textfield: "",
    select01: "",
    select02: "",
    textfield0: "",
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={object({})}
        onSubmit={(values, formikHelpers) => {
          console.log(values);
          formikHelpers.resetForm();
        }}
      >
        {() => (
          <Form>
            <FirstText value="Add New Collection" />
            <div style={{ position: "absolute", top: "48px", right: "20px" }}>
              <IoMdClose className="closeicon" onClick={closeHandler} />
            </div>

            <div style={{ flexDirection: "row", display: "flex" }}>
              {/* <FormikCustomButton
                value="farmer"
                onclick={firsthandler}
                backgroundColor={color}
                sx={{ color }}
              /> */}
              <div
                className="flex flex-row items-center"
                style={{
                  width: "33.125vw",
                  height: "49px",
                  backgroundColor: "#009688",
                  marginTop: "24px",
                  borderRadius: "5px",
                }}
              >
                <div className="ml-4 mr-8">
                  <MuiButton
                    variant="contained"
                    sx={{
                      backgroundColor: "white",
                      color: "black",
                      width: "83px",
                      height: "32px",
                      fontSize: "14px",
                      fontWeight: 600,
                    }}
                    backgroundColor={color}
                    onClick={firsthandler}
                  >
                    Farmer
                  </MuiButton>
                </div>

                <MuiButton
                  variant="contained"
                  sx={{
                    backgroundColor: "white",
                    color: "black",
                    width: "200px",
                    height: "32px",
                    fontSize: "14px",
                    fontWeight: 600,
                  }}
                  backgroundColor={colors}
                  onClick={secondhandler}
                >
                  Sourcing Partner
                </MuiButton>
              </div>
            </div>

            <div>{state}</div>

            <Button
              type="submit"
              value="Submit"
              sx={{
                fontSize: "14px",
                // lineHeight: "19.1px",
                width: 73,
                height: 39,
                borderRadius: "5px",
                backgroundColor: "#009688",
                color: "white"
              }}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export const DeleteCollection = ({ closeHandler }) => {
  return (
    <div className="">
      <h2
        className="second-text my-1 text-center"
        style={{ maxWidth: "300px" }}
      >
        Are you sure you want to delete this entry?
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
          value="Delete"
          onClick={closeHandler}
          sx={{
            color: "white",
            backgroundColor: "red",
          }}
        />
      </div>
    </div>
  );
};
