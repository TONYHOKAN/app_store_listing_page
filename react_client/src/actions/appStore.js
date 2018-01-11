import appStoreAppsApi from '../api/appStoreAppsApi'

export const FETCHING_APP_STORE_TOP_FREE_APPS_REQUEST = 'FETCHING_APP_STORE_TOP_FREE_APPS_REQUEST'
export const FETCHING_APP_STORE_TOP_FREE_APPS_SUCCESS = 'FETCHING_APP_STORE_TOP_FREE_APPS_SUCCESS'
export const FETCHING_APP_STORE_TOP_FREE_APPS_FAILURE = 'FETCHING_APP_STORE_TOP_FREE_APPS_FAILURE'
export const FETCHING_APP_STORE_TOP_GROSSING_APPS_REQUEST = 'FETCHING_APP_STORE_TOP_GROSSING_APPS_REQUEST'
export const FETCHING_APP_STORE_TOP_GROSSING_APPS_SUCCESS = 'FETCHING_APP_STORE_TOP_GROSSING_APPS_SUCCESS'
export const FETCHING_APP_STORE_TOP_GROSSING_APPS_FAILURE = 'FETCHING_APP_STORE_TOP_GROSSING_APPS_FAILURE'
export const LOOKUP_APP_STORE_APP_DETAIL_REQUEST = 'LOOKUP_APP_STORE_APP_DETAIL_REQUEST'
export const LOOKUP_APP_STORE_APP_DETAIL_SUCCESS = 'LOOKUP_APP_STORE_APP_DETAIL_SUCCESS'
export const LOOKUP_APP_STORE_APP_DETAIL_FAILURE = 'LOOKUP_APP_STORE_APP_DETAIL_FAILURE'
export const CLEAR_APP_STORE_DATA = 'CLEAR_APP_STORE_DATA'

export const fetchingAppStoreTopFreeAppsRequest = () => ({
  type: FETCHING_APP_STORE_TOP_FREE_APPS_REQUEST
})

export const fetchingAppStoreTopFreeAppsSuccess = (topFreeAppsEntries) => ({
  type: FETCHING_APP_STORE_TOP_FREE_APPS_SUCCESS,
  topFreeAppsEntries
})

export const fetchingAppStoreTopFreeAppsFailure = (error) => ({
  type: FETCHING_APP_STORE_TOP_FREE_APPS_FAILURE,
  error
})

export const fetchingAppStoreTopFreeApps = (limit) => {
  return async function (dispatch) {
    dispatch(fetchingAppStoreTopFreeAppsRequest())
    try {
      let apps = await appStoreAppsApi.getTopFreeApps(limit)
      dispatch(fetchingAppStoreTopFreeAppsSuccess(apps))
      return apps
    } catch (error) {
      dispatch(fetchingAppStoreTopFreeAppsFailure(error))
      throw error
    }
  }
}

export const fetchingAppStoreTopGrossingAppsRequest = () => ({
  type: FETCHING_APP_STORE_TOP_GROSSING_APPS_REQUEST
})

export const fetchingAppStoreTopGrossingAppsSuccess = (topGrossingAppsEntries) => ({
  type: FETCHING_APP_STORE_TOP_GROSSING_APPS_SUCCESS,
  topGrossingAppsEntries
})

export const fetchingAppStoreTopGrossingAppsFailure = (error) => ({
  type: FETCHING_APP_STORE_TOP_GROSSING_APPS_FAILURE,
  error
})

export const fetchingAppStoreTopGrossingApps = (limit) => {
  return async function (dispatch) {
    dispatch(fetchingAppStoreTopGrossingAppsRequest())
    try {
      let apps = await appStoreAppsApi.getTopGrossingApps(limit)
      dispatch(fetchingAppStoreTopGrossingAppsSuccess(apps))
      return apps
    } catch (error) {
      dispatch(fetchingAppStoreTopGrossingAppsFailure(error))
      throw error
    }
  }
}

export const lookupAppStoreAppDetailRequest = (appId) => ({
  type: LOOKUP_APP_STORE_APP_DETAIL_REQUEST,
  appId
})

export const lookupAppStoreAppDetailSuccess = (appDetail) => ({
  type: LOOKUP_APP_STORE_APP_DETAIL_SUCCESS,
  appDetail
})

export const lookupAppStoreAppDetailFailure = (error, appId) => ({
  type: LOOKUP_APP_STORE_APP_DETAIL_FAILURE,
  error,
  appId
})

export const lookupAppStoreAppDetail = (appId) => {
  return async function (dispatch) {
    dispatch(lookupAppStoreAppDetailRequest(appId))
    try {
      let appDetail = await appStoreAppsApi.lookupAppDetail(appId)
      dispatch(lookupAppStoreAppDetailSuccess(appDetail))
    } catch (error) {
      dispatch(lookupAppStoreAppDetailFailure(error, appId))
      throw error
    }
  }
}

export const clearAppStoreData = () => ({
  type: CLEAR_APP_STORE_DATA
})
