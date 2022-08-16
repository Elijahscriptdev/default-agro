import axiosServices, { useAxiosService } from "../../services/axiosServices";
import { notify } from "../../utils/toastNotification";
import { errorHandler } from "../../utils/actionsErrorHandler";
import { createQuery } from "../../utils/createQuery";
import { convertToFormData } from "../../utils/convertJSONToFormData";
import {
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
  ADD_USER_SUCCESS,
  ADD_USER_FAIL,
  LOADING_USERS,
  GET_FARMERS_SUCCESS,
  GET_FARMER_FAIL,
  ADD_FARMER_SUCCESS,
  ADD_FARMER_FAIL,
  LOADING_FARMER,
  GET_SOURCING_AGENTS_SUCCESS,
  GET_SOURCING_AGENTS_FAIL,
  ADD_SOURCING_AGENT_SUCCESS,
  ADD_SOURCING_AGENT_FAIL,
  LOADING_SOURCING_AGENTS,
} from "../types/UserManagementTypes";

export const getUsers =
  (queryParams = {}) =>
  async (dispatch) => {
    let page = queryParams.page || 1;
    let limit = queryParams.limit || 10;
    let query = createQuery(queryParams);
    dispatch({ type: LOADING_USERS });
    queryParams = createQuery(queryParams);
    try {
      const res = await axiosServices.get(
        `/viewusers?page=${page}&limit=${limit}&query=${query}`
      );
      dispatch({
        type: GET_USERS_SUCCESS,
        payload: res,
      });
      // console.log("first data", res?.data);
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_USERS_FAIL,
      });
      errorHandler(error, "Failed to fetch users");
      return error;
    }
  };

export const addUser = (data) => async (dispatch) => {
  // dispatch({ type: LOADING_USERS, payload: true });
  try {
    const res = await axiosServices.post(`/users`, data);

    if (res?.success && res?.result) {
      notify("User added successfully", { type: "success" });
      dispatch({
        type: ADD_USER_SUCCESS,
        payload: res.result,
      });
      return res;
      // dispatch(getUsers({ page: 1 }));
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: ADD_USER_FAIL,
    });
    errorHandler(error, "Failed to add user");
    return error;
  }
};

export const bulkUploadUsers = (data) => async (dispatch) => {
  try {
    data = convertToFormData(data);

    const res = await useAxiosService("formData").post(
      `/users/bulk-upload`,
      data,
      {}
    );

    // console.log(res);

    if (res?.success && res?.result) {
      notify("Users uploaded successfully", { type: "success" });
      dispatch(getUsers({ page: 1 }));
    }
  } catch (error) {
    console.log(error);
    errorHandler(error, "Failed to upload users");
    return error;
  }
};

export const updateUser = (userId, data) => async (dispatch) => {
  // dispatch({ type: LOADING_USERS, payload: true });
  try {
    const res = await axiosServices.patch(`/users/${userId}`, data);

    if (res?.success && res?.result) {
      notify("User Updated successfully", { type: "success" });
      return res;
    }
  } catch (error) {
    console.log(error);
    errorHandler(error, "Failed to update user");
    return error;
  }
};

export const deleteUser = (userId) => async (dispatch) => {
  try {
    const res = await axiosServices.delete(`/users/${userId}`);
    if (res) {
      notify("User deleted successfully", { type: "success" });
      dispatch(getUsers({ page: 1 }));
    }
  } catch (error) {
    console.log(error);
    errorHandler(error, "Failed to delete user");
    return error;
  }
};

export const getFarmers =
  (queryParams = {}) =>
  async (dispatch) => {
    dispatch({ type: LOADING_FARMER });
    queryParams = createQuery(queryParams);
    // console.log(queryParams);
    try {
      const res = await axiosServices.get(`/farmers${queryParams}`);

      if (res?.success && res?.result) {
        dispatch({
          type: GET_FARMERS_SUCCESS,
          payload: res?.result?.data,
        });
      } else {
        dispatch({
          type: GET_FARMER_FAIL,
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_FARMER_FAIL,
      });
      errorHandler(error);
      return error;
    }
  };

export const getSingleFarmer = async (farmerId) => {
  try {
    const res = await axiosServices.get(`/farmers/${farmerId}`);
    return res?.result;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const addFarmer = (data) => async (dispatch) => {
  try {
    const res = await axiosServices.post(`/farmers`, data);

    if (res?.success && res?.result) {
      notify("Farmer added successfully", { type: "success" });
      dispatch({
        type: ADD_FARMER_SUCCESS,
        payload: res.result,
      });
      dispatch(getFarmers({ page: 1 }));
    }
    return res;
  } catch (error) {
    console.log(error);
    dispatch({
      type: ADD_FARMER_FAIL,
    });
    errorHandler(error, "Failed to add farmer");
    return error;
  }
};

export const updateFarmer = (farmerId, data) => async (dispatch) => {
  try {
    const res = await axiosServices.patch(`/farmers/${farmerId}`, data);

    if (res?.success && res?.result) {
      notify("Farmer updated successfully", { type: "success" });
    }
    return res;
  } catch (error) {
    console.log(error);
    errorHandler(error, "Failed to update farmer");
    return error;
  }
};

export const bulkUploadFarmers = (data) => async (dispatch) => {
  try {
    data = convertToFormData(data);
    const res = await useAxiosService("formData")({
      method: "post",
      url: `/farmers/bulk-upload`,
      data,
    });

    if (res?.success && res?.result) {
      notify("Farmers uploaded successfully", { type: "success" });
      dispatch(getFarmers({ page: 1 }));
    }
  } catch (error) {
    console.log(error);
    errorHandler(error, "Failed to add farmer");
    return error;
  }
};

//
export const exportFarmerData = (data, navigate) => async (dispatch) => {
  try {
    const res = await axiosServices.post(
      `/farmers/downloads/process-farmer-details`,
      data
    );

    if (res?.success && res?.result) {
      notify("Farmers exported successfully", { type: "success" });
      navigate("/user-management/farmers/exports");
    }
  } catch (error) {
    console.log(error);
    errorHandler(error, "Failed to export farmers");
    return error;
  }
};

export const getFarmerExports = async () => {
  try {
    const res = await axiosServices.get(`/farmers/downloads`);

    if (res?.success && res?.result) {
      return res?.result?.data;
    }

    return res;
  } catch (error) {
    console.log(error);
    errorHandler(error, "Failed to fetch exports");
    return error;
  }
};

export const downloadFarmerTemplate = (data) => async (dispatch) => {
  try {
    const res = await axiosServices.get(`/templates/farmers`);

    if (res?.success && res?.result) {
    } else {
      dispatch({
        type: GET_FARMER_FAIL,
      });
    }
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_FARMER_FAIL,
    });
    errorHandler(error);
    return error;
  }
};

// SOURCING AGENTS
export const getSourcingAgents =
  (queryParams = {}) =>
  async (dispatch) => {
    dispatch({ type: LOADING_SOURCING_AGENTS });
    queryParams = createQuery(queryParams);
    try {
      const res = await axiosServices.get(`/sourcing-partners${queryParams}`);
      dispatch({
        type: GET_SOURCING_AGENTS_SUCCESS,
        payload: res?.result?.sourcing_partners,
      });

      // console.log("first", res?.result?.data);
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_SOURCING_AGENTS_FAIL,
      });
      errorHandler(error, "Failed to fetch sourcing agents");
      return error;
    }
  };

export const addSourcingAgent = (data) => async (dispatch) => {
  // dispatch({ type: LOADING_SOURCING_AGENTS, payload: true });
  try {
    const res = await axiosServices.post(`/sourcing-partners`, data);
    console.log(res);
    if (res?.success && res?.result) {
      notify("Sourcing agent added successfully", { type: "success" });
      dispatch({
        type: ADD_SOURCING_AGENT_SUCCESS,
        payload: res.result,
      });
      // dispatch(getUsers({ page: 1 }));
    }
    return res;
  } catch (error) {
    console.log(error);
    dispatch({
      type: ADD_SOURCING_AGENT_FAIL,
    });
    errorHandler(error, "Failed to add sourcing agent");
    return error;
  }
};

export const updateSourcingAgent = (userId, data) => async (dispatch) => {
  // dispatch({ type: LOADING_SOURCING_AGENTS, payload: true });
  try {
    const res = await axiosServices.patch(`/users/${userId}`, data);

    if (res?.success && res?.result) {
      notify("Sourcing agent updated successfully", { type: "success" });
      // dispatch(getUsers({ page: 1 }));
    }
  } catch (error) {
    console.log(error);
    errorHandler(error, "Failed to update sourcing agent");
    return error;
  }
};

export const deleteSourcingAgent = (userId) => async (dispatch) => {
  try {
    const res = await axiosServices.delete(`/sourcing-partners/${userId}`);
    if (res) {
      notify("Sourcing agent deleted successfully", { type: "success" });
      dispatch(getSourcingAgents({ page: 1 }));
    }
  } catch (error) {
    console.log(error);
    errorHandler(error, "Failed to delete sourcing agent");
    return error;
  }
};
