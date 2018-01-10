import { connect } from 'react-redux'
import {
  fetchingAppStoreTopFreeApps,
  fetchingAppStoreTopGrossingApps,
  lookupAppStoreAppDetail
} from '../actions/appStore'
import App from '../components/App'

const mapStateToProps = (state) => {
  const isFetchingAppStoreTopFreeApps = state.appStore.isFetchingAppStoreTopFreeApps
  const isFetchingAppStoreTopGrossingApps = state.appStore.isFetchingAppStoreTopGrossingApps
  const isLookupAppStoreAppDetail = state.appStore.isLookupAppStoreAppDetail
  return {
    isFetchingAppStoreTopFreeApps,
    isFetchingAppStoreTopGrossingApps,
    isLookupAppStoreAppDetail,
    topFreeAppsEntries: state.appStore.topFreeAppsEntries,
    topGrossingAppsEntries: state.appStore.topGrossingAppsEntries,
    appDetail: state.appStore.appDetail,
    isFetching: isFetchingAppStoreTopFreeApps || isFetchingAppStoreTopGrossingApps || isLookupAppStoreAppDetail
  }
}

const AppContainer = connect(
  mapStateToProps,
  {
    fetchingAppStoreTopFreeApps,
    fetchingAppStoreTopGrossingApps,
    lookupAppStoreAppDetail
  }
)(App)

export default AppContainer
