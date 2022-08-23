import {
  GET_CROP_CALENDAR,
  GET_CROP_CALENDAR_SUCCESS,
  GET_CROP_CALENDAR_FAIL,
  GET_CROP_PROFILE,
  GET_CROP_PROFILE_SUCCESS,
  GET_CROP_PROFILE_FAIL,
  GET_FARM_SEASONS,
  GET_FARM_SEASONS_SUCCESS,
  GET_FARM_SEASONS_FAIL,
  GET_ACTIVITY_CATEGORIES,
  GET_ACTIVITY_CATEGORIES_SUCCESS,
  GET_ACTIVITY_CATEGORIES_FAIL
} from "../types/ConfigurationsTypes";

const initialState = {
  cropProfiles: {
    data: [],
    total: 0,
    loading: false,
  },
  cropCalendar: {
    data: [],
    total: 0,
    loading: false,
  },
  farmSeasons: {
    data: [],
    total: 0,
    loading: false,
  },
  activityCategories: {
    data: [],
    total: 0,
    loading: []
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_CROP_PROFILE:
      return {
        ...state,
        cropProfiles: {
          ...state.cropProfiles,
          loading: true,
        },
      };

    case GET_CROP_PROFILE_SUCCESS:
      return {
        ...state,
        cropProfiles: {
          ...state.cropProfiles,
          data: payload,
          loading: false,
        },
      };

    case GET_CROP_PROFILE_FAIL:
      return {
        ...state,
        cropProfiles: {
          ...state.cropProfiles,
          loading: false,
        },
      };

    case GET_CROP_CALENDAR:
      return {
        ...state,
        cropCalendar: {
          ...state.cropCalendar,
          loading: true,
        },
      };

    case GET_CROP_CALENDAR_SUCCESS:
      return {
        ...state,
        cropCalendar: {
          ...state.cropCalendar,
          data: payload.data,
          total: payload.total,
          loading: false,
        },
      };

    case GET_CROP_CALENDAR_FAIL:
      return {
        ...state,
        cropCalendar: {
          ...state.cropCalendar,
          loading: false,
        },
      };

    case GET_FARM_SEASONS:
      return {
        ...state,
        farmSeasons: {
          ...state.farmSeasons,
          loading: true,
        },
      };

    case GET_FARM_SEASONS_SUCCESS:
      return {
        ...state,
        farmSeasons: {
          ...state.farmSeasons,
          data: payload.data,
          total: payload.total,
          loading: false,
        },
      };

    case GET_FARM_SEASONS_FAIL:
      return {
        ...state,
        farmSeasons: {
          ...state.farmSeasons,
          loading: false,
        },
      };

      case GET_ACTIVITY_CATEGORIES:
        return {
          ...state,
          activityCategories: {
            ...state.activityCategories,
            loading: true,
          },
        };
  
      case GET_ACTIVITY_CATEGORIES_SUCCESS:
        return {
          ...state,
          activityCategories: {
            ...state.activityCategories,
            data: payload.data,
            total: payload.total,
            loading: false,
          },
        };
  
      case GET_ACTIVITY_CATEGORIES_FAIL:
        return {
          ...state,
          activityCategories: {
            ...state.activityCategories,
            loading: false,
          },
        };

    default:
      return state;
  }
}
