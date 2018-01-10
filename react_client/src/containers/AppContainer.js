import { connect } from 'react-redux'
import { fetchingAppStoreTopFreeApps } from '../actions/appStore'
import App from '../components/App'

const mapStateToProps = (state) => {
  return {
    topFreeAppsEntries: state.appStore.topFreeAppsEntries
  }
}

const mapDispatchToProps = () => {
  return {
    fetchingAppStoreTopFreeApps
  }
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer
