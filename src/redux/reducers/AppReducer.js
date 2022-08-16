import {
  SET_CURRENT_DRAWER_MENU,
  GET_CURRENT_DRAWER_MENU,
  SET_STATES,
  GET_STATES,
  GET_LOCALS,
  SET_LOCALS,
} from "../types/AppActionTypes";

const initialState = {
  menuSelected: -1,
  states: {},
  localGovt: [],
};

function AppReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_CURRENT_DRAWER_MENU:
      localStorage.setItem("menuSelected", payload.menuSelected);
      return {
        ...state,
        menuSelected: payload.menuSelected,
      };

    case SET_STATES:
      // console.log(payload);
      sessionStorage.setItem("states", JSON.stringify(payload.localStates));
      return {
        ...state,
        states: payload.localStates,
      };

    case GET_STATES:
      return {
        ...state,
        states: JSON.parse(sessionStorage.getItem("states")) || {},
      };

    case SET_LOCALS:
      // console.log(payload);
      sessionStorage.setItem("localGovt", JSON.stringify(payload.localGovt));
      return {
        ...state,
        localGovt: payload.localGovt,
      };

    case GET_LOCALS:
      return {
        ...state,
        localGovt: JSON.parse(sessionStorage.getItem("localGovt")) || [],
      };

    case GET_CURRENT_DRAWER_MENU:
    default:
      return state;
  }
}

export default AppReducer;
