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
} from "../types/FarmManagementTypes";

const initialState = {
  clusters: {
    data: [],
    loading: false,
  },
  subClusters: {
    data: [],
    loading: false,
  },
  farmLots: {
    data: [],
    total: 0,
    loading: false,
  }
  // farmSeasons: {
  //   data: [],
  //   loading: false,
  // },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_CLUSTERS:
      return {
        ...state,
        clusters: {
          ...state.clusters,
          loading: true,
        },
      };

    case GET_CLUSTERS_SUCCESS:
      return {
        ...state,
        clusters: {
          ...state.clusters,
          data: payload,
          loading: false,
        },
      };

    case GET_CLUSTERS_FAIL:
      return {
        ...state,
        clusters: {
          ...state.clusters,
          loading: false,
        },
      };

    case GET_SUB_CLUSTERS:
      return {
        ...state,
        subClusters: {
          ...state.subClusters,
          loading: true,
        },
      };

    case GET_SUB_CLUSTERS_SUCCESS:
      return {
        ...state,
        subClusters: {
          ...state.subClusters,
          data: payload,
          loading: false,
        },
      };

    case GET_SUB_CLUSTERS_FAIL:
      return {
        ...state,
        subClusters: {
          ...state.subClusters,
          loading: false,
        },
      };

    case GET_FARM_LOTS:
      return {
        ...state,
        farmLots: {
          ...state.farmLots,
          loading: true,
        },
      };

    case GET_FARM_LOTS_SUCCESS:
      return {
        ...state,
        farmLots: {
          ...state.farmLots,
          data: payload.data,
          total: payload.total,
          loading: false,
        },
      };

    case GET_FARM_LOTS_FAIL:
      return {
        ...state,
        farmLots: {
          ...state.farmLots,
          loading: false,
        },
      };

    default:
      return state;
  }
}
