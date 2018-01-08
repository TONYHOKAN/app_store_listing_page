import { connect } from 'react-redux'
import { updateUserName } from '../actions/users'
import App from '../components/App'

const mapStateToProps = (state, ownProps) => {
  return {
    userName: state.users.userName
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateUserName
  }
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer
