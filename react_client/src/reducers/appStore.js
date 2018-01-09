import {
  FETCHING_APP_STORE_TOP_FREE_APPS_REQUEST,
  FETCHING_APP_STORE_TOP_FREE_APPS_SUCCESS,
  FETCHING_APP_STORE_TOP_FREE_APPS_FAILURE,
  FETCHING_APP_STORE_TOP_GROSSING_APPS_REQUEST,
  FETCHING_APP_STORE_TOP_GROSSING_APPS_SUCCESS,
  FETCHING_APP_STORE_TOP_GROSSING_APPS_FAILURE
} from '../actions/appStore'

const initialState = {
  isFetchingAppStoreTopFreeApps: false,
  isFetchingAppStoreTopGrossingApps: false,
  topFreeAppsEntries: [],
  topGrossingAppsEntries: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCHING_APP_STORE_TOP_FREE_APPS_REQUEST:
      return {
        ...state,
        isFetchingAppStoreTopFreeApps: true
      }
    case FETCHING_APP_STORE_TOP_FREE_APPS_SUCCESS:
      return {
        ...state,
        isFetchingAppStoreTopFreeApps: false,
        topFreeAppsEntries: action.topFreeAppsEntries
      }
    case FETCHING_APP_STORE_TOP_FREE_APPS_FAILURE:
      return {
        ...state,
        isFetchingAppStoreTopFreeApps: false
      }
    case FETCHING_APP_STORE_TOP_GROSSING_APPS_REQUEST:
      return {
        ...state,
        isFetchingAppStoreTopGrossingApps: true
      }
    case FETCHING_APP_STORE_TOP_GROSSING_APPS_SUCCESS:
      return {
        ...state,
        isFetchingAppStoreTopGrossingApps: false,
        topGrossingAppsEntries: action.topGrossingAppsEntries
      }
    case FETCHING_APP_STORE_TOP_GROSSING_APPS_FAILURE:
      return {
        ...state,
        isFetchingAppStoreTopGrossingApps: false
      }
    default:
      return state
  }
}
