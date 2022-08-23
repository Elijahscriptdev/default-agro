import {
  GET_TENANTS,
  GET_TENANTS_FAIL,
  GET_TENANTS_SUCCESS
} from "../types/TenantTypes";

const initialState = {
  tenants: [],
  total: 0,
  loading: false,
};

// eslint-disable-next-line
export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_TENANTS:
      return {
        ...state,
        loading: true,
      };

    case GET_TENANTS_SUCCESS:
      return {
        ...state,
        tenants: payload.data,
        total: payload.total,
        loading: false,
      };

    case GET_TENANTS_FAIL:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
