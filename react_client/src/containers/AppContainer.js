import { connect } from 'react-redux'
import {
  fetchingAppStoreTopFreeApps,
  fetchingAppStoreTopGrossingApps,
  lookupAppStoreAppDetail
} from '../actions/appStore'
import App from '../components/App'

const mapStateToProps = (state) => {
  return {
    isFetchingAppStoreTopFreeApps: state.appStore.isFetchingAppStoreTopFreeApps,
    isFetchingAppStoreTopGrossingApps: state.appStore.isFetchingAppStoreTopGrossingApps,
    isLookupAppStoreAppDetail: state.appStore.isLookupAppStoreAppDetail,
    topFreeAppsEntries: state.appStore.topFreeAppsEntries,
    topGrossingAppsEntries: state.appStore.topGrossingAppsEntries,
    appDetail: state.appStore.appDetail
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
