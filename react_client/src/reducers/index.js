import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import appStore from './appStore'

const appStorePersistConfig = {
  key: 'appStore',
  storage: storage
}

const rootReducer = combineReducers({
  appStore: persistReducer(appStorePersistConfig, appStore)
})

export default rootReducer
