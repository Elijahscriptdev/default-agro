import {
  GET_DASHBOARD_DETAILS,
  DASHBOARD_DETAILS_SUCCESS,
  DASHBOARD_DETAILS_FAIL
} from "../types/DashboardTypes";

const initialState = {
  dashboardData: {
    total_acreage: '-',
    number_of_farmers: '-',
    lots: []
  },
  loading: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_DASHBOARD_DETAILS:
      return {
        ...state,
        ...payload,
        loading: true,
      };

    case DASHBOARD_DETAILS_SUCCESS:
      return {
        ...state,
        ...payload,
        loading: false
      };

    case DASHBOARD_DETAILS_FAIL:
      return {
        ...state,
        ...payload,
        loading: false,
      };

    default:
      return state;
  }
}
