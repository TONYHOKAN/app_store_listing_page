import { combineReducers } from 'redux'

import appStore from './appStore'

const rootReducer = combineReducers({
  appStore: appStore
})

export default rootReducer
