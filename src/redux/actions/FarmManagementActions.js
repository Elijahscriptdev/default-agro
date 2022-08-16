import axiosServices, { useAxiosService } from '../../services/axiosServices';
import { notify } from "../../utils/toastNotification";
import { createQuery } from "../../utils/createQuery";
import { errorHandler } from "../../utils/actionsErrorHandler";

import {
  GET_CLUSTERS,
  GET_CLUSTERS_SUCCESS,
  GET_CLUSTERS_FAIL,
  GET_SUB_CLUSTERS,
  GET_SUB_CLUSTERS_SUCCESS,
  GET_SUB_CLUSTERS_FAIL,
  GET_FARM_LOTS,
  GET_FARM_LOTS_SUCCESS,
  GET_FARM_LOTS_FAIL
} from '../types/FarmManagementTypes';
import { convertToFormData } from '../../utils/convertJSONToFormData';

export const getClusters = (queryParams = {}) => async (dispatch) => {
  try {
    dispatch({
      type: GET_CLUSTERS,
    });

    const response = await axiosServices.get("/clusters");
    // console.log(cropProfiles);
    const success = response.success;
    const data = response.result?.clusters;

    if (success && data) {
      dispatch({
        type: GET_CLUSTERS_SUCCESS,
        payload: data
      });
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_CLUSTERS_FAIL
    });
    errorHandler(error);
    return error;
  }
}

export const getSingleCluster = async (clusterId) => {
  try {
    const res = await axiosServices.get(`/clusters/${clusterId}`);
    return res?.result?.cluster;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const addCluster = (data) => async (dispatch) => {
  try {
    const response = await axiosServices.post("/clusters", data);
    console.log(response);
    if (response) {
      notify("Cluster created", { type: "success" });
      dispatch(getClusters({}));
    } else {
      notify(response.message || 'An error occured', { type: "error" });
    }
  } catch (error) {
    console.log(error);
    errorHandler(error, "Failed to add cluster");
    return error;
  }
}

export const updateCluster = (clusterId, data) => async (dispatch) => {
  try {
    const response = await axiosServices.patch(`/clusters/${clusterId}`, data);
    console.log(response);
    if (response) {
      notify("Cluster updated", { type: "success" });
      dispatch(getClusters({}));
    } else {
      notify(response.message || 'An error occured', { type: "error" });
    }
  } catch (error) {
    console.log(error);
    errorHandler(error, "Failed to update cluster");
    return error;
  }
}

export const addSubCluster = (data) => async (dispatch) => {
  try {
    const response = await axiosServices.post("/sub-clusters", data);
    console.log(response);
    if (response) {
      notify("Sub-Cluster created", { type: "success" });
      dispatch(getSubClusters({}));
    } else {
      notify(response.message || 'An error occured', { type: "error" });
    }
  } catch (error) {
    console.log(error);
    errorHandler(error, "Failed to add subcluster");
    return error;
  }
}

export const updateSubcluster = (subClusterId, data) => async (dispatch) => {
  try {
    const response = await axiosServices.patch(`/sub-clusters/${subClusterId}`, data);
    console.log(response);
    if (response) {
      notify("Sub-cluster updated", { type: "success" });
      dispatch(getSubClusters({}));
    } else {
      notify(response.message || 'An error occured', { type: "error" });
    }
  } catch (error) {
    console.log(error);
    errorHandler(error, "Failed to update sub-cluster");
    return error;
  }
}

export const getSubClusters = (queryParams = {}) => async (dispatch) => {
  try {
    dispatch({
      type: GET_SUB_CLUSTERS,
    });

    const queryString = createQuery(queryParams);
    const response = await axiosServices.get(`/sub-clusters${queryString}`);
    // console.log(response);
    const success = response.success;
    const data = response?.result["sub-clusters"];

    if (success && data) {
      dispatch({
        type: GET_SUB_CLUSTERS_SUCCESS,
        payload: data
      });
    } else {
      dispatch({
        type: GET_SUB_CLUSTERS_FAIL
      });
      notify(response.message || 'An error occured', { type: "error" });
    }
  } catch (error) {
    // console.log(error);
    dispatch({
      type: GET_SUB_CLUSTERS_FAIL
    });
    errorHandler(error);
    return error;
  }
}

export const getSingleSubCluster = async (subclusterId) => {
  try {
    const res = await axiosServices.get(`/sub-clusters/${subclusterId}`);
    return res?.result["sub-cluster"];
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getFarmLots = (queryParams = {}) => async (dispatch) => {
  try {
    dispatch({
      type: GET_FARM_LOTS,
    });

    const queryString = createQuery(queryParams);
    console.log(queryString);
    const response = await axiosServices.get(`/farms${queryString}`);
    // console.log(response);
    const success = response.success;
    const data = response.result?.data?.data;

    if (success && data) {
      dispatch({
        type: GET_FARM_LOTS_SUCCESS,
        payload: {
          data,
          total: response.result.data.total
        }
      });
    } else {
      dispatch({
        type: GET_FARM_LOTS_FAIL
      });
      notify(response.message || 'An error occured', { type: "error" });
    }
  } catch (error) {
    // console.log(error);
    dispatch({
      type: GET_FARM_LOTS_FAIL
    });
    errorHandler(error);
    return error;
  }
}

export const addFarmUnit = (data) => async (dispatch) => {
  try {
    const response = await axiosServices.post("/farms", data);
    console.log(response);
    if (response) {
      notify("Farm unit created", { type: "success" });
      dispatch(getFarmLots({}));
    } else {
      notify(response.message || 'An error occured', { type: "error" });
    }
  } catch (error) {
    console.log(error);
    errorHandler(error, "Failed to add farm unit");
    return error;
  }
}

export const updateFarmUnit = (farmId, data) => async (dispatch) => {
  try {
    const response = await axiosServices.patch(`/farms/${farmId}`, data);
    console.log(response);
    if (response) {
      notify("Farm updated", { type: "success" });
      dispatch(getFarmLots({}));
    } else {
      notify(response.message || 'An error occured', { type: "error" });
    }
  } catch (error) {
    console.log(error);
    errorHandler(error, "Failed to update farm");
    return error;
  }
}

export const bulkAssignFarms = (data) => async (dispatch) => {
  try {
    const response = await axiosServices.patch(`/farms/bulk/assign`, data);
    // console.log(response);
    if (response?.success) {
      notify("Farm assigned", { type: "success" });
      dispatch(getFarmLots({ page: 1 }));
    } else {
      notify(response.message || 'An error occured', { type: "error" });
    }
  } catch (error) {
    console.log(error);
    errorHandler(error, "Failed to assign farms");
    return error;
  }
}

export const bulkUploadFarms = (data) => async (dispatch) => {
  try {
    data = convertToFormData(data);
    const res = await useAxiosService("formData")({
      method: "post",
      url: `/farm/bulk-upload`,
      data,
    });

    if (res?.success && res?.result) {
      notify("Farms uploaded successfully", { type: "success" });
      dispatch(getFarmLots({ page: 1 }));
    }
  } catch (error) {
    console.log(error);
    errorHandler(error, "Failed to upload farms");
    return error;
  }
};