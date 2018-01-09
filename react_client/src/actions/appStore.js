import axios from 'axios'

export const FETCHING_APP_STORE_TOP_FREE_APPS_REQUEST = 'FETCHING_APP_STORE_TOP_FREE_APPS_REQUEST'
export const FETCHING_APP_STORE_TOP_FREE_APPS_SUCCESS = 'FETCHING_APP_STORE_TOP_FREE_APPS_SUCCESS'
export const FETCHING_APP_STORE_TOP_FREE_APPS_FAILURE = 'FETCHING_APP_STORE_TOP_FREE_APPS_FAILURE'

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
      let response = await axios.get(`https://itunes.apple.com/hk/rss/topfreeapplications/limit=${limit}/json`)
      dispatch(fetchingAppStoreTopFreeAppsSuccess(response.data.feed.entry))
    } catch (error) {
      dispatch(fetchingAppStoreTopFreeAppsFailure(error))
      throw error
    }
  }
}
