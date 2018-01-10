import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { compose } from 'redux'
import 'bootstrap/dist/css/bootstrap.css'
import thunk from 'redux-thunk'
import { PersistGate } from 'redux-persist/lib/integration/react'

import './index.css'
import AppContainer from './containers/AppContainer'
import registerServiceWorker from './registerServiceWorker'
import configureStore from './configureStore'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const { persistor, store } = configureStore({}, composeEnhancers, [thunk])

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <AppContainer/>
    </PersistGate>
  </Provider>,
  document.getElementById('root'))
registerServiceWorker()
