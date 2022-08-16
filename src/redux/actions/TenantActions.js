import axiosServices from '../../services/axiosServices';
import { notify } from "../../utils/toastNotification";
import { createQuery } from "../../utils/createQuery";
import { errorHandler } from "../../utils/actionsErrorHandler";

import {
  GET_TENANTS,
  GET_TENANTS_SUCCESS,
  GET_TENANTS_FAIL
} from '../types/TenantTypes';

export const addTenant = (data) => async (dispatch) => {
  try {
    const response = await axiosServices.post("/tenants", data);
    // console.log(response);

    if (response?.success) {
      notify("Tenant created", { type: "success" });
    } else {
      notify(response.message || 'An error occured', { type: "error" });
    }
  } catch (error) {
    console.log(error);
    errorHandler(error, "Failed to add tenant");
    return error;
  }
}

export const getTenants = (queryParams = {}) => async (dispatch) => {
  try {
    dispatch({
      type: GET_TENANTS,
    });
    
    const response = await axiosServices.get(`/tenants${createQuery(queryParams)}`);
    // // console.log(cropProfiles);
    const success = response.success;
    const tenants = response.result?.tenants;

    // console.log(tenants);
    if (success && tenants) {
      dispatch({
        type: GET_TENANTS_SUCCESS,
        payload: {
          data: tenants.data,
          total: tenants.total,
        }
      });
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_TENANTS_FAIL
    });
    errorHandler(error);
    return error;
  }
}

export const deleteTenant = (data) => async (dispatch) => {
  try {
    const response = await axiosServices.delete(`/tenants/${data.id}`);
    // console.log(response);

    if (response?.success) {
      notify("Tenant deleted", { type: "success" });
    } else {
      notify(response.message || 'An error occured', { type: "error" });
    }
  } catch (error) {
    console.log(error);
    errorHandler(error, "Failed to delete tenant");
    return error;
  }
}