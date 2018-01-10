import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore } from 'redux-persist'
import rootReducer from './reducers'

export default function configureStore (initialState = {}, composeFunction = compose, middlewares = [], ...enhancers) {
  const allEnhancers = [
    applyMiddleware(...middlewares),
    ...enhancers
  ]

  const store = createStore(
    rootReducer
    , initialState
    , composeFunction(...allEnhancers)
  )
  let persistor = persistStore(store)

  return { persistor, store }
}
