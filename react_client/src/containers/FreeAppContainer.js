import { connect } from 'react-redux'
import {
  lookupAppStoreAppDetail
} from '../actions/appStore'
import FreeApp from '../components/FreeApp'

const mapStateToProps = (state, ownProps) => {
  return {
    isFetching: !!state.appStore.lookupAppStoreAppDetailHash[ownProps.appId],
    appDetail: state.appStore.appDetail
  }
}

const FreeAppContainer = connect(
  mapStateToProps,
  {
    lookupAppStoreAppDetail
  }
)(FreeApp)

export default FreeAppContainer
