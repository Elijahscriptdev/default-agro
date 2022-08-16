import {
  GET_FARMERS_SUCCESS,
  GET_FARMER_FAIL,
  LOADING_FARMER,
  GET_USERS_FAIL,
  GET_USERS_SUCCESS,
  LOADING_USERS,
  ADD_USER_SUCCESS,
  ADD_USER_FAIL,
  GET_SOURCING_AGENTS_SUCCESS,
  GET_SOURCING_AGENTS_FAIL,
  ADD_SOURCING_AGENT_SUCCESS,
  ADD_SOURCING_AGENT_FAIL,
  LOADING_SOURCING_AGENTS,
} from "../types/UserManagementTypes";

const initialState = {
  users: {
    data: [],
    total: 0,
    loading: false
  },
  farmers: {
    data: [],
    total: 0,
    loading: true
  },
  sourcingAgents: {
    data: [],
    total: 0,
    loading: true
  },
};

// eslint-disable-next-line
export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOADING_USERS:
      return {
        ...state,
        users: {
          ...state.users,
          loading: true
        }
      };

    case ADD_USER_SUCCESS:
      return {
        ...state,
        users: {
          ...state.users,
          loading: false
        }
      };

    case ADD_USER_FAIL:
      return {
        ...state,
        users: {
          ...state.users,
          loading: false
        }
      };

    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: {
          ...state.users,
          data: payload.data,
          total: payload.total,
          loading: false
        }
      };

    case GET_USERS_FAIL:
      return {
        ...state,
        users: {
          ...state.users,
          loading: false
        }
      };

    case LOADING_FARMER:
      return {
        ...state,
        farmers: {
          ...state.farmers,
          loading: true
        }
      };

    case GET_FARMERS_SUCCESS:
      return {
        ...state,
        farmers: {
          ...state.farmers,
          data: payload.data,
          total: payload.total,
          loading: false
        }
      };

    case GET_FARMER_FAIL:
      return {
        ...state,
        farmers: {
          ...state.farmers,
          loading: false
        }
      };

      case LOADING_SOURCING_AGENTS:
        return {
          ...state,
          sourcingAgents: {
            ...state.sourcingAgents,
            loading: true
          }
        };
  
      case ADD_SOURCING_AGENT_SUCCESS:
        return {
          ...state,
          sourcingAgents: {
            ...state.sourcingAgents,
            loading: false
          }
        };
  
      case ADD_SOURCING_AGENT_FAIL:
        return {
          ...state,
          sourcingAgents: {
            ...state.sourcingAgents,
            loading: false
          }
        };
  
      case GET_SOURCING_AGENTS_SUCCESS:
        return {
          ...state,
          sourcingAgents: {
            ...state.sourcingAgents,
            data: payload.data,
            total: payload.total,
            loading: false
          }
        };
  
      case GET_SOURCING_AGENTS_FAIL:
        return {
          ...state,
          sourcingAgents: {
            ...state.sourcingAgents,
            loading: false
          }
        };

    default:
      return state;
  }
}
