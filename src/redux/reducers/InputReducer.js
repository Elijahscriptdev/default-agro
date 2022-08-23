import {
  GET_INPUTS,
  GET_INPUTS_FAIL,
  GET_INPUTS_SUCCESS
} from "../types/InputTypes";

const initialState = {
  inputs: [],
  total: 0,
  loading: false,
};

// eslint-disable-next-line
export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_INPUTS:
      return {
        ...state,
        loading: true,
      };

    case GET_INPUTS_SUCCESS:
      return {
        ...state,
        inputs: payload.data,
        total: payload.total,
        loading: false,
      };

    case GET_INPUTS_FAIL:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
