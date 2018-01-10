import {
  FETCHING_APP_STORE_TOP_FREE_APPS_REQUEST,
  FETCHING_APP_STORE_TOP_FREE_APPS_SUCCESS,
  FETCHING_APP_STORE_TOP_FREE_APPS_FAILURE,
  FETCHING_APP_STORE_TOP_GROSSING_APPS_REQUEST,
  FETCHING_APP_STORE_TOP_GROSSING_APPS_SUCCESS,
  FETCHING_APP_STORE_TOP_GROSSING_APPS_FAILURE,
  LOOKUP_APP_STORE_APP_DETAIL_REQUEST,
  LOOKUP_APP_STORE_APP_DETAIL_SUCCESS,
  LOOKUP_APP_STORE_APP_DETAIL_FAILURE
} from '../actions/appStore'

const initialState = {
  isFetchingAppStoreTopFreeApps: false,
  isFetchingAppStoreTopGrossingApps: false,
  isLookupAppStoreAppDetail: false,
  topFreeAppsEntries: [],
  topGrossingAppsEntries: [],
  appDetail: {}
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

    case LOOKUP_APP_STORE_APP_DETAIL_REQUEST:
      return {
        ...state,
        isLookupAppStoreAppDetail: true
      }
    case LOOKUP_APP_STORE_APP_DETAIL_SUCCESS:
      let cloneObjectOfAppDetail = Object.assign({}, state.appDetail)
      cloneObjectOfAppDetail[action.appDetail.id] = action.appDetail
      return {
        ...state,
        isLookupAppStoreAppDetail: false,
        appDetail: cloneObjectOfAppDetail
      }
    case LOOKUP_APP_STORE_APP_DETAIL_FAILURE:
      return {
        ...state,
        isLookupAppStoreAppDetail: false
      }
    default:
      return state
  }
}
