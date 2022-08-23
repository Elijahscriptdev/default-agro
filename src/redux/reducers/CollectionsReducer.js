import {
  GET_COLLECTIONS,
  GET_COLLECTIONS_SUCCESS,
  GET_COLLECTIONS_FAIL,
} from "../types/CollectionsTypes";

const initialState = {
  collections: {
    data: [],
    loading: false,
  },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_COLLECTIONS:
      return {
        ...state,
        collections: {
          ...state.collections,
          loading: true,
        },
      };

    case GET_COLLECTIONS_SUCCESS:
      return {
        ...state,
        collections: {
          ...state.collections,
          data: payload,
          loading: false,
        },
      };

    case GET_COLLECTIONS_FAIL:
      return {
        ...state,
        collections: {
          ...state.collections,
          loading: false,
        },
      };

    default:
      return state;
  }
}
