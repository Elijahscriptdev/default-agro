import axiosServices from '../../services/axiosServices';
import { notify } from "../../utils/toastNotification";
import { errorHandler } from "../../utils/actionsErrorHandler";
import { createQuery } from "../../utils/createQuery";

import {
  GET_CROP_CALENDAR,
  GET_CROP_CALENDAR_SUCCESS,
  GET_CROP_CALENDAR_FAIL,
  GET_CROP_PROFILE,
  GET_CROP_PROFILE_SUCCESS,
  GET_CROP_PROFILE_FAIL,
  GET_FARM_SEASONS,
  GET_FARM_SEASONS_SUCCESS,
  GET_FARM_SEASONS_FAIL,
  GET_ACTIVITY_CATEGORIES,
  GET_ACTIVITY_CATEGORIES_SUCCESS,
  GET_ACTIVITY_CATEGORIES_FAIL
} from '../types/ConfigurationsTypes';

export const addCropProfile = (data) => async (dispatch) => {
  try {
    // dispatch({
    //   type: GET_CROP_PROFILE,
    // });

    const response = await axiosServices.post("/config/crop-profile", data);
    // console.log(cropProfiles);
    if (response) {
      notify("Crop profile created", { type: "success" });
      dispatch(getCropProfiles());
    } else {
      notify("Failed", { type: "error" });
    }
  } catch (error) {
    // console.log(error);
    errorHandler(error);
    return error;
  }
}

export const updateCropProfile = (data) => async (dispatch) => {
  try {
    // dispatch({
    //   type: GET_CROP_PROFILE,
    // });

    const response = await axiosServices.put("/config/crop-profile", data);
    // console.log(cropProfiles);
    if (response) {
      notify("Crop profile updated", { type: "success" });
      dispatch(getCropProfiles());
    } else {
      notify("Failed to update", { type: "error" });
    }
  } catch (error) {
    // console.log(error);
    errorHandler(error);
    return error;
  }
}

export const getCropProfiles = (queryParams = {}) => async (dispatch) => {
  try {
    dispatch({
      type: GET_CROP_PROFILE,
    });

    const queryString = createQuery(queryParams);
    const cropProfiles = await axiosServices.get(`/dashboard/crop-profiles${queryString}`);
    // console.log(cropProfiles);

    if (cropProfiles) {
      dispatch({
        type: GET_CROP_PROFILE_SUCCESS,
        payload: cropProfiles
      });
    }
  } catch (error) {
    // console.log(error);
    dispatch({
      type: GET_CROP_PROFILE_FAIL
    });
    errorHandler(error);
    return error;
  }
}

export const deleteCropProfile = (cropProfileId) => async (dispatch) => {
  try {
    // console.log(cropProfileId);
    const response = await axiosServices.delete(`/config/crop-profile/${cropProfileId}`);

    if (response && response.success) {
      notify("Crop profile deleted", { type: "success" });
      dispatch(getCropProfiles());
    } else {
      notify("Failed to delete", { type: "error" });
    }
  } catch (error) {
    // console.log(error);
    errorHandler(error);
    return error;
  }
}

export const addNewCategory = (data) => async (dispatch) => {
  try {
    // dispatch({
    //   type: GET_CROP_PROFILE,
    // });

    const response = await axiosServices.post("/config/category", data);
    // console.log(cropProfiles);
    if (response) {
      notify("Crop Category created", { type: "success" });
    } else {
      notify("Failed", { type: "error" });
    }
  } catch (error) {
    // console.log(error);
    errorHandler(error);
    return error;
  }
}

export const getCropCalendar = (queryParams = {}) => async (dispatch) => {
  try {
    dispatch({
      type: GET_CROP_CALENDAR,
    });

    const queryString = createQuery(queryParams);
    const response = await axiosServices.get(`/config/activities/tasks${queryString}`);
    // console.log(response);
    const success = response.success;
    const data = response.result?.data;

    if (success && data) {
      // console.log(data);
      dispatch({
        type: GET_CROP_CALENDAR_SUCCESS,
        payload: data
      });
    } else {
      dispatch({
        type: GET_CROP_CALENDAR_FAIL
      });
      notify(response.message || 'An error occured', { type: "error" });
    }
  } catch (error) {
    // console.log(error);
    dispatch({
      type: GET_CROP_CALENDAR_FAIL
    });
    errorHandler(error);
    return error;
  }
}

export const addNewTask = (data) => async (dispatch) => {
  try {
    const response = await axiosServices.post("/config/task", data);
    // console.log(response);
    if (response) {
      notify("Task created", { type: "success" });
      dispatch(getCropCalendar());
    } else {
      notify(response.message || 'An error occured', { type: "error" });
    }
  } catch (error) {
    // console.log(error);
    errorHandler(error);
    return error;
  }
}

export const deleteTask = (payload) => async (dispatch) => {
  try {
    const response = await axiosServices.delete("/config/task", {
      data: payload
    });
    // console.log(response);

    if (response.success) {
      notify('Task deleted successfully', { type: "success" });
      dispatch(getCropCalendar());
    } else {
      notify(response.message || 'An error occured', { type: "error" });
    }
  } catch (error) {
    errorHandler(error);
    return error;
  }
}

export const getFarmSeassons = (queryParams = {}) => async (dispatch) => {
  try {
    dispatch({
      type: GET_FARM_SEASONS,
    });

    const queryString = createQuery(queryParams);
    const response = await axiosServices.get(`/config/seasons${queryString}`);
    // console.log(response);
    const success = response.success;
    const data = response.result?.data?.data;

    if (success && data) {
      dispatch({
        type: GET_FARM_SEASONS_SUCCESS,
        payload: {
          data,
          total: response.result?.data?.total
        }
      });
    } else {
      dispatch({
        type: GET_FARM_SEASONS_FAIL
      });
      notify(response.message || 'An error occured', { type: "error" });
    }
  } catch (error) {
    // console.log(error);
    dispatch({
      type: GET_FARM_SEASONS_FAIL
    });
    errorHandler(error);
    return error;
  }
}

export const addNewSeason = (data) => async (dispatch) => {
  try {
    const response = await axiosServices.post("/config/season", data);
    // console.log(response);
    if (response) {
      notify("Season created", { type: "success" });
      dispatch(getFarmSeassons());
    } else {
      notify(response.message || 'An error occured', { type: "error" });
    }
  } catch (error) {
    errorHandler(error);
    return error;
  }
}

export const toggleSeason = (data) => async (dispatch) => {
  try {
    const response = await axiosServices.put("/config/season", data);
    // console.log(response);
    if (response) {
      notify("Season updated successfully", { type: "success" });
      dispatch(getFarmSeassons());
    } else {
      notify(response.message || 'An error occured', { type: "error" });
    }
  } catch (error) {
    errorHandler(error);
    return error;
  }
}

export const getActivityCategories = (queryParams = {}) => async (dispatch) => {
  try {
    dispatch({
      type: GET_ACTIVITY_CATEGORIES,
    });

    const queryString = createQuery(queryParams);
    const response = await axiosServices.get(`/config/categories${queryString}`);
    // console.log(response);
    const success = response.success;
    const data = response.result?.data;

    if (success && data) {
      dispatch({
        type: GET_ACTIVITY_CATEGORIES_SUCCESS,
        payload: {
          data,
          total: data?.length || 0
        }
      });
    } else {
      dispatch({
        type: GET_ACTIVITY_CATEGORIES_FAIL
      });
      notify(response.message || 'An error occured', { type: "error" });
    }
  } catch (error) {
    // console.log(error);
    dispatch({
      type: GET_ACTIVITY_CATEGORIES_FAIL
    });
    errorHandler(error);
    return error;
  }
}