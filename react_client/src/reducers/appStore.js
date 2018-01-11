import {
  FETCHING_APP_STORE_TOP_FREE_APPS_REQUEST,
  FETCHING_APP_STORE_TOP_FREE_APPS_SUCCESS,
  FETCHING_APP_STORE_TOP_FREE_APPS_FAILURE,
  FETCHING_APP_STORE_TOP_GROSSING_APPS_REQUEST,
  FETCHING_APP_STORE_TOP_GROSSING_APPS_SUCCESS,
  FETCHING_APP_STORE_TOP_GROSSING_APPS_FAILURE,
  LOOKUP_APP_STORE_APP_DETAIL_REQUEST,
  LOOKUP_APP_STORE_APP_DETAIL_SUCCESS,
  LOOKUP_APP_STORE_APP_DETAIL_FAILURE,
  CLEAR_APP_STORE_DATA
} from '../actions/appStore'

const initialState = {
  isFetchingAppStoreTopFreeApps: false,
  isFetchingAppStoreTopGrossingApps: false,
  lookupAppStoreAppDetailHash: {},
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

    case LOOKUP_APP_STORE_APP_DETAIL_REQUEST: {
      let cloneObjectOfLookupAppStoreAppDetailHash = Object.assign({}, state.lookupAppStoreAppDetailHash)
      cloneObjectOfLookupAppStoreAppDetailHash[action.appId] = 1
      return {
        ...state,
        lookupAppStoreAppDetailHash: cloneObjectOfLookupAppStoreAppDetailHash
      }
    }
    case LOOKUP_APP_STORE_APP_DETAIL_SUCCESS: {
      let cloneObjectOfAppDetail = Object.assign({}, state.appDetail)
      let cloneObjectOfLookupAppStoreAppDetailHash = Object.assign({}, state.lookupAppStoreAppDetailHash)
      delete cloneObjectOfLookupAppStoreAppDetailHash[action.appDetail.id]
      cloneObjectOfAppDetail[action.appDetail.id] = action.appDetail
      return {
        ...state,
        lookupAppStoreAppDetailHash: cloneObjectOfLookupAppStoreAppDetailHash,
        appDetail: cloneObjectOfAppDetail
      }
    }
    case LOOKUP_APP_STORE_APP_DETAIL_FAILURE: {
      let cloneObjectOfLookupAppStoreAppDetailHash = Object.assign({}, state.lookupAppStoreAppDetailHash)
      delete cloneObjectOfLookupAppStoreAppDetailHash[action.appId]
      return {
        ...state,
        lookupAppStoreAppDetailHash: cloneObjectOfLookupAppStoreAppDetailHash
      }
    }
    case CLEAR_APP_STORE_DATA: {
      if (action.appType === 'topFreeApp') {
        return {
          ...state,
          topFreeAppsEntries: [],
          appDetail: {}
        }
      } else if (action.appType === 'topGrossingApp') {
        return {
          ...state,
          topGrossingAppsEntries: []
        }
      } else {
        return initialState
      }
    }
    default:
      return state
  }
}
