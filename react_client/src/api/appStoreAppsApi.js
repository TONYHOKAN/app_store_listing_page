import axios from 'axios'
import AppStoreApp from './models/AppStoreApp'
import AppStoreAppDetail from './models/AppStoreAppDetail'

export default {
  getTopFreeApps: async (limit) => {
    try {
      let response = await axios.get(`https://itunes.apple.com/hk/rss/topfreeapplications/limit=${limit}/json`)
      // if limit is 1, entry will be object instead of array
      return Array.isArray(response.data.feed.entry) ? response.data.feed.entry.map(app => new AppStoreApp(app)) : [new AppStoreApp(response.data.feed.entry)]
    } catch (error) {
      throw error
    }
  },
  getTopGrossingApps: async (limit) => {
    try {
      let response = await axios.get(`https://itunes.apple.com/hk/rss/topgrossingapplications/limit=${limit}/json`)
      // if limit is 1, entry will be object instead of array
      return Array.isArray(response.data.feed.entry) ? response.data.feed.entry.map(app => new AppStoreApp(app)) : [new AppStoreApp(response.data.feed.entry)]
    } catch (error) {
      throw error
    }
  },
  lookupAppDetail: async (appId) => {
    try {
      let response = await axios.get(`https://itunes.apple.com/hk/lookup?id=${appId}`)
      return new AppStoreAppDetail(response.data.results[0])
    } catch (error) {
      throw error
    }
  }
}
