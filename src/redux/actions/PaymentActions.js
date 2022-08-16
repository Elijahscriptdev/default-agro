import axiosServices from '../../services/axiosServices';
import { notify } from "../../utils/toastNotification";
import { createQuery } from "../../utils/createQuery";
import { errorHandler } from "../../utils/actionsErrorHandler";

import {
  GET_TRANSACTIONS,
  GET_TRANSACTIONS_FAIL,
  GET_TRANSACTIONS_SUCCESS,
  GET_LOAN_LIST_SUCCESS,
  LOADING_LOAN_LIST,
} from "../types/PaymentTypes";

// export const addInput = (data) => async (dispatch) => {
//   try {
//     const response = await axiosServices.post("/input-types", data);
//     // console.log(response);

//     if (response?.success) {
//       notify("Input created", { type: "success" });
//     } else {
//       notify(response.message || 'An error occured', { type: "error" });
//     }
//   } catch (error) {
//     console.log(error);
//     errorHandler(error, "Failed to add input");
//     return error;
//   }
// }

export const getTransactions = (queryParams = {}) => async (dispatch) => {
  try {
    dispatch({
      type: GET_TRANSACTIONS,
    });
    
    const response = await axiosServices.get(`/transactions${createQuery(queryParams)}`);
    // // console.log(cropProfiles);
    const success = response.success;
    const transactions = response.result?.transactions;

    // console.log(transactions);
    if (success && transactions) {
      dispatch({
        type: GET_TRANSACTIONS_SUCCESS,
        payload: {
          data: transactions.data,
          total: transactions.total,
        }
      });
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_TRANSACTIONS_FAIL
    });
    errorHandler(error);
    return error;
  }
}

// export const deleteInput = (data) => async (dispatch) => {
//   try {
//     const response = await axiosServices.delete(`/input-types/${data.id}`);
//     // console.log(response);

//     if (response?.success) {
//       notify("Input deleted", { type: "success" });
//     } else {
//       notify(response.message || 'An error occured', { type: "error" });
//     }
//   } catch (error) {
//     console.log(error);
//     errorHandler(error, "Failed to delete input");
//     return error;
//   }
// }

export const getLoanList = () => async (dispatch) => {
  dispatch({ type: LOADING_LOAN_LIST, payload: true });
  console.log("page: ");
  try {
    const res = await axiosServices.get(`/payment/loan-list`);
    dispatch({
      type: GET_LOAN_LIST_SUCCESS,
      payload: res?.result?.data,
    });

    console.log("first", res.result.data);
    // toast.success("User added successfully");

    dispatch({ type: LOADING_LOAN_LIST, payload: false });
  } catch (error) {
    console.log(error);
    // dispatch({
    //   type: ADD_USER_FAIL,
    // });
    console.log("error", error);
    dispatch({ type: LOADING_LOAN_LIST, payload: false });
    notify("Something went wrong", { type: "error" });
    return error;
  }
};