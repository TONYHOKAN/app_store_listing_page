import { createStore, applyMiddleware, compose } from 'redux'
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

  return store
}
