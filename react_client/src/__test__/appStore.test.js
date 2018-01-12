import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import {
  FETCHING_APP_STORE_TOP_FREE_APPS_REQUEST,
  FETCHING_APP_STORE_TOP_FREE_APPS_SUCCESS,
  FETCHING_APP_STORE_TOP_GROSSING_APPS_REQUEST,
  FETCHING_APP_STORE_TOP_GROSSING_APPS_SUCCESS,
  LOOKUP_APP_STORE_APP_DETAIL_REQUEST,
  LOOKUP_APP_STORE_APP_DETAIL_SUCCESS,
  fetchingAppStoreTopFreeApps,
  fetchingAppStoreTopGrossingApps,
  lookupAppStoreAppDetail
} from '../actions/appStore'
import {
  appStoreTopFreeAppsMock,
  appStoreTopGrossingAppsMock,
  appStoreAppDetailMock
} from '../mock_data/appStoreMock'

// This sets the mock adapter on the default instance
const mock = new MockAdapter(axios)
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

mock.onGet('https://itunes.apple.com/hk/rss/topfreeapplications/limit=1/json').reply(200, appStoreTopFreeAppsMock.mockResponse)
mock.onGet('https://itunes.apple.com/hk/rss/topgrossingapplications/limit=1/json').reply(200, appStoreTopGrossingAppsMock.mockResponse)
mock.onGet('https://itunes.apple.com/hk/lookup?id=310633997').reply(200, appStoreAppDetailMock.mockResponse)

describe('async actions', () => {
  it('create actions of FETCHING_APP_STORE_TOP_FREE_APPS_REQUEST and FETCHING_APP_STORE_TOP_FREE_APPS_SUCCESS when fetching app store api has been triggered and done', () => {
    axios.get('https://itunes.apple.com/hk/rss/topfreeapplications/limit=1/json')

    const expectedActions = [
      { type: FETCHING_APP_STORE_TOP_FREE_APPS_REQUEST },
      { page: 1, type: FETCHING_APP_STORE_TOP_FREE_APPS_SUCCESS, topFreeAppsEntries: appStoreTopFreeAppsMock.expectedResult }
    ]
    const store = mockStore({ appStore: { topFreeAppsEntries: [] } })

    return store.dispatch(fetchingAppStoreTopFreeApps(1)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('create actions of FETCHING_APP_STORE_TOP_GROSSING_APPS_REQUEST and FETCHING_APP_STORE_TOP_GROSSING_APPS_SUCCESS when fetching app store api has been triggered and done', () => {
    axios.get('https://itunes.apple.com/hk/rss/topgrossingapplications/limit=1/json')

    const expectedActions = [
      { type: FETCHING_APP_STORE_TOP_GROSSING_APPS_REQUEST },
      {
        type: FETCHING_APP_STORE_TOP_GROSSING_APPS_SUCCESS,
        topGrossingAppsEntries: appStoreTopGrossingAppsMock.expectedResult
      }
    ]
    const store = mockStore({ appStore: { topGrossingAppsEntries: [] } })

    return store.dispatch(fetchingAppStoreTopGrossingApps(1)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('create actions of LOOKUP_APP_STORE_APP_DETAIL_REQUEST and LOOKUP_APP_STORE_APP_DETAIL_SUCCESS when fetching app store api has been triggered and done', () => {
    axios.get('https://itunes.apple.com/hk/rss/topgrossingapplications/limit=1/json')

    const expectedActions = [
      { appId: 310633997, type: LOOKUP_APP_STORE_APP_DETAIL_REQUEST },
      { type: LOOKUP_APP_STORE_APP_DETAIL_SUCCESS, appDetail: appStoreAppDetailMock.expectedResult }
    ]
    const store = mockStore({ page: 1, appStore: { topGrossingAppsEntries: [] } })

    return store.dispatch(lookupAppStoreAppDetail(310633997)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
