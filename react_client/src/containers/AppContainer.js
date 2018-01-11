import { connect } from 'react-redux'
import {
  fetchingAppStoreTopFreeApps,
  fetchingAppStoreTopGrossingApps,
  clearAppStoreData
} from '../actions/appStore'
import App from '../components/App'

const mapStateToProps = (state) => {
  const isFetchingAppStoreTopFreeApps = state.appStore.isFetchingAppStoreTopFreeApps
  const isFetchingAppStoreTopGrossingApps = state.appStore.isFetchingAppStoreTopGrossingApps
  return {
    isFetchingAppStoreTopFreeApps,
    isFetchingAppStoreTopGrossingApps,
    topFreeAppsEntries: state.appStore.topFreeAppsEntries,
    topGrossingAppsEntries: state.appStore.topGrossingAppsEntries,
    appDetail: state.appStore.appDetail,
    isFetching: isFetchingAppStoreTopFreeApps || isFetchingAppStoreTopGrossingApps,
    topFreeAppsPage: state.appStore.topFreeAppsPage
  }
}

const AppContainer = connect(
  mapStateToProps,
  {
    fetchingAppStoreTopFreeApps,
    fetchingAppStoreTopGrossingApps,
    clearAppStoreData
  }
)(App)

export default AppContainer
