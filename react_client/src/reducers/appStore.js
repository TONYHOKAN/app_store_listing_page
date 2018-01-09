import {
  FETCHING_APP_STORE_TOP_FREE_APPS_REQUEST,
  FETCHING_APP_STORE_TOP_FREE_APPS_SUCCESS,
  FETCHING_APP_STORE_TOP_FREE_APPS_FAILURE
} from '../actions/appStore'

const initialState = {
  isFetchingAppStoreTopFreeApps: false,
  topFreeAppsEntries: []
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
    default:
      return state
  }
}
