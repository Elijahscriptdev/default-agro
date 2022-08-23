import axiosServices from '../../services/axiosServices';
import { notify } from "../../utils/toastNotification";
import { createQuery } from "../../utils/createQuery";
import { errorHandler } from "../../utils/actionsErrorHandler";

import {
  GET_COLLECTIONS,
  GET_COLLECTIONS_SUCCESS,
  GET_COLLECTIONS_FAIL,
} from '../types/CollectionsTypes';

export const getCollections = (queryParams) => async (dispatch) => {
  try {
    dispatch({
      type: GET_COLLECTIONS,
    });

    const response = await axiosServices.get(`/collections${createQuery(queryParams)}`);
    const success = response.success;
    const data = response.result?.data?.data;

    if (success && data) {
      dispatch({
        type: GET_COLLECTIONS_SUCCESS,
        payload: data
      });
    } else {
      dispatch({
        type: GET_COLLECTIONS_FAIL
      });
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_COLLECTIONS_FAIL
    });
    return error;
  }
}

export const deleteCollection = (data) => async (dispatch) => {
  try {
    const response = await axiosServices.delete("");
    // console.log(response);
    const success = response.success;
    const data = response.result?.data;

    if (success && data) {

    } else {
      notify(response.message || 'An error occured', { type: "error" });
    }
  } catch (error) {
    errorHandler(error);
    return error;
  }
}
