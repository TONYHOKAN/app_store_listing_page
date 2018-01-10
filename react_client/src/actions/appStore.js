import appStoreAppsApi from '../api/appStoreAppsApi'

export const FETCHING_APP_STORE_TOP_FREE_APPS_REQUEST = 'FETCHING_APP_STORE_TOP_FREE_APPS_REQUEST'
export const FETCHING_APP_STORE_TOP_FREE_APPS_SUCCESS = 'FETCHING_APP_STORE_TOP_FREE_APPS_SUCCESS'
export const FETCHING_APP_STORE_TOP_FREE_APPS_FAILURE = 'FETCHING_APP_STORE_TOP_FREE_APPS_FAILURE'
export const FETCHING_APP_STORE_TOP_GROSSING_APPS_REQUEST = 'FETCHING_APP_STORE_TOP_GROSSING_APPS_REQUEST'
export const FETCHING_APP_STORE_TOP_GROSSING_APPS_SUCCESS = 'FETCHING_APP_STORE_TOP_GROSSING_APPS_SUCCESS'
export const FETCHING_APP_STORE_TOP_GROSSING_APPS_FAILURE = 'FETCHING_APP_STORE_TOP_GROSSING_APPS_FAILURE'

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
    } catch (error) {
      dispatch(fetchingAppStoreTopGrossingAppsFailure(error))
      throw error
    }
  }
}
