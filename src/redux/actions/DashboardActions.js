import axiosServices from "../../services/axiosServices";
import { errorHandler } from "../../utils/actionsErrorHandler";

import {
  GET_DASHBOARD_DETAILS,
  DASHBOARD_DETAILS_FAIL,
  DASHBOARD_DETAILS_SUCCESS,
  // DASHBOARD_DETAILS_LOADING
} from "../types/DashboardTypes";

export const getDashboardDetails = () => async (dispatch) => {
  return;
  try {
    dispatch({
      type: GET_DASHBOARD_DETAILS,
    });

    const dashboardDetails = await axiosServices.get("/dashboard");
    // console.log(dashboardDetails);
    if (dashboardDetails) {
      dispatch({
        type: DASHBOARD_DETAILS_SUCCESS,
        payload: {
          dashboardData: dashboardDetails,
        },
      });
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: DASHBOARD_DETAILS_FAIL,
    });
    errorHandler(error, "Error in fetching dashboard details");
    return error;
  }
};
