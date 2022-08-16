import {
  GET_TRANSACTIONS,
  GET_TRANSACTIONS_FAIL,
  GET_TRANSACTIONS_SUCCESS
} from "../types/PaymentTypes";

const initialState = {
  transactions: [],
  total: 0,
  loading: false,
};

// eslint-disable-next-line
export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_TRANSACTIONS:
      return {
        ...state,
        loading: true,
      };

    case GET_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        transactions: payload.data,
        total: payload.total,
        loading: false,
      };

    case GET_TRANSACTIONS_FAIL:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
