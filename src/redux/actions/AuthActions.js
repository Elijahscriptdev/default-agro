import axios from "axios";
// import * as ReactRouter from 'react-router-dom'
import { AUTH_URL } from "../../configs/api";
import axiosServices from "../../services/axiosServices";
import { errorHandler } from "../../utils/actionsErrorHandler";
import { notify } from "../../utils/toastNotification";
// import { useQuery } from "../../utils/useQuery";
import {
  GET_PROFILE_FAIL,
  GET_PROFILE_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  LOGIN_LOADING,
} from "../types/AuthTypes";

// eslint-disable-next-line
export const getUserProfile = () => async (dispatch) => {
  try {
    const res = await axiosServices.get("/user");
    // console.log({ress: res});
    const userData = res?.result?.user;
    if (userData) {
      dispatch({
        type: GET_PROFILE_SUCCESS,
        payload: userData,
      });
    } else {
      dispatch({
        type: GET_PROFILE_FAIL,
      });
    }
  } catch (error) {
    dispatch({
      type: GET_PROFILE_FAIL,
    });
    return error;
  }
};

export const login = (data, navigate) => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_LOADING,
    });
    const res = await axios.post(`${AUTH_URL}/login`, data);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res,
    });
    // console.log("RES", res);
    notify("Login Successful", { type: "success" });

    dispatch(getUserProfile());

    // const query = useQuery();
    const redirect_to = null;
    console.log(redirect_to);
    navigate(!redirect_to ? "/dashboard" : redirect_to);
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
    });
    errorHandler(error, "Login Failed");
    // notify(, { type: "error" });
    return error;
  }
};

// LOGOUT
// eslint-disable-next-line
export const logout = (navigate) => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
  navigate("/");
};
