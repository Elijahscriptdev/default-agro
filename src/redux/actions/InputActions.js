import axiosServices from "../../services/axiosServices";
import { notify } from "../../utils/toastNotification";
import { createQuery } from "../../utils/createQuery";
import { errorHandler } from "../../utils/actionsErrorHandler";

import {
  GET_INPUTS,
  GET_INPUTS_SUCCESS,
  GET_INPUTS_FAIL,
} from "../types/InputTypes";

export const addInput = (data) => async (dispatch) => {
  try {
    const response = await axiosServices.post("/input-types", data);
    // console.log(response);

    if (response?.success) {
      notify("Input created", { type: "success" });
    } else {
      notify(response.message || "An error occured", { type: "error" });
    }
  } catch (error) {
    console.log(error);
    errorHandler(error, "Failed to add input");
    return error;
  }
};

export const getInputs =
  (queryParams = {}) =>
  async (dispatch) => {
    const page = 1;
    const limit = 10;
    const query = createQuery({ page, limit, ...queryParams });
    try {
      dispatch({
        type: GET_INPUTS,
      });

      const response = await axiosServices.get(
        `/viewtenants?page=${page}&limit=${limit}&query=${query}`
      );
      console.log("response", response);
      // return;
      // // console.log(cropProfiles);
      const success = response.success;
      const inputTypes = response.result?.input_types;

      // console.log(inputTypes);
      // if (success && inputTypes) {
      dispatch({
        type: GET_INPUTS_SUCCESS,
        payload: {
          data: response.data,
          total: response.totalpages,
        },
      });
      // }
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_INPUTS_FAIL,
      });
      errorHandler(error);
      return error;
    }
  };

export const deleteInput = (data) => async (dispatch) => {
  try {
    const response = await axiosServices.delete(`/input-types/${data.id}`);
    // console.log(response);

    if (response?.success) {
      notify("Input deleted", { type: "success" });
    } else {
      notify(response.message || "An error occured", { type: "error" });
    }
  } catch (error) {
    console.log(error);
    errorHandler(error, "Failed to delete input");
    return error;
  }
};
