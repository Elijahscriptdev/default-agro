import {
  GET_CURRENT_DRAWER_MENU,
  SET_CURRENT_DRAWER_MENU,
  GET_STATES,
  SET_STATES,
  // GET_LOCALS,
  SET_LOCALS,
} from "../types/AppActionTypes";
import axiosServices from "../../services/axiosServices";
// import { notify } from "../../utils/toastNotification";
import { createQuery } from "../../utils/createQuery";

export const setCurrentDrawerMenu = (index) => (dispatch) => {
  dispatch({
    type: SET_CURRENT_DRAWER_MENU,
    payload: {
      menuSelected: index,
    },
  });
};

export const getCurrentDrawerMenu = () => (dispatch) => {
  dispatch({
    type: GET_CURRENT_DRAWER_MENU,
  });
};

export const getStates =
  (queryParams = {}) =>
  async (dispatch) => {
    // console.log(localStorage.getItem('states'));
    if (!sessionStorage.getItem("states")) {
      try {
        const response = await axiosServices.get(
          `/all/states${createQuery(queryParams)}`
        );
        // console.log(response && response.success);
        if (response && response.success) {
          const objectifiedStates = {};

          if (response.result?.states) {
            response.result.states.forEach((state) => {
              objectifiedStates[state.state_id] = state;
            });
          }

          dispatch({
            type: SET_STATES,
            payload: {
              states: response.result?.states,
              localStates: objectifiedStates,
            },
          });
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      dispatch({
        type: GET_STATES,
      });
    }
  };

export const getRoles = async (options = {}, setRoles) => {
  try {
    const response = await axiosServices.get(`/all/roles`);

    if (response?.result?.roles) {
      const retValue = options?.filterByAuthority
        ? response.result.roles.filter((role) => {
            return options?.authUser?.my_role?.role !== "Admin"
              ? ["Project Manager", "Agent"].includes(role.role)
              : true;
          })
        : response.result.roles;
      setRoles(retValue);
    }
  } catch (error) {
    console.log(error);
    return;
  }
};

export const getLocalGovt = (stateId) => async (dispatch) => {
  // console.log(localStorage.getItem('states'));
  try {
    const response = await axiosServices.get(`/all/states/${stateId}/locals`);
    // console.log(response && response.success);
    if (response && response.success) {
      dispatch({
        type: SET_LOCALS,
        payload: {
          localGovt: response.result?.locals,
        },
      });
    }
  } catch (error) {
    console.log(error);
  }
};
