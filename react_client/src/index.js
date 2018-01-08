import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { compose } from 'redux'
import 'bootstrap/dist/css/bootstrap.css'
import thunk from 'redux-thunk'

import './index.css'
import AppContainer from './containers/AppContainer'
import registerServiceWorker from './registerServiceWorker'
import configureStore from './configureStore'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = configureStore({}, composeEnhancers, [thunk])

ReactDOM.render(
  <Provider store={store}>
    <AppContainer/>
  </Provider>,
  document.getElementById('root'))
registerServiceWorker()
