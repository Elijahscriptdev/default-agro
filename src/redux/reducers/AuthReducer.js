// import { notify } from "../../utils/toastNotification";
import {
  GET_PROFILE_FAIL,
  GET_PROFILE_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  LOGIN_LOADING,
} from "../types/AuthTypes";

// console.log(JSON.parse(sessionStorage.getItem("usr_profile") || '{}'));
const initialState = {
  access_token: localStorage.getItem("access_token"),
  isLoading: false,
  userProfile: JSON.parse(sessionStorage.getItem("user_profile") || '{}'),
  profileDataLoading: false
};

// eslint-disable-next-line
export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case GET_PROFILE_SUCCESS:
      sessionStorage.setItem("user_profile", JSON.stringify(payload));
      return {
        ...state,
        userProfile: payload,
        profileDataLoading: false,
      };

    case GET_PROFILE_FAIL:
      return {
        ...state,
        userProfile: {},
        profileDataLoading: false,
      };

    case LOGIN_SUCCESS:
      localStorage.setItem("access_token", payload.data?.token);
      return {
        ...state,
        ...payload,
        isLoading: false,
      };

    case LOGOUT:
    case LOGIN_FAIL:
      localStorage.removeItem("access_token");
      sessionStorage.removeItem("user_profile");
      return {
        ...state,
        access_token: null,
        userProfile: {},
        isLoading: false,
      };

    default:
      return state;
  }
}
