import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './App.css'
import GrossingAppsListing from './GrossingAppsListing'

import SearchBar from './SearchBar'

class App extends Component {
  constructor (props) {
    super(props)
    this.searchFilter = this.searchFilter.bind(this)
    this.state = {
      page: 1,
      searchKey: ''
    }
  }

  componentWillMount () {
    const { fetchingAppStoreTopFreeApps, fetchingAppStoreTopGrossingApps, lookupAppStoreAppDetail, appDetail, topFreeAppsEntries, topGrossingAppsEntries } = this.props
    if (topFreeAppsEntries.length === 0) {
      fetchingAppStoreTopFreeApps(10).then(apps => {
        apps.forEach(app => {
          if (!appDetail[app.id]) {
            lookupAppStoreAppDetail(app.id)
          }
        })
      })
    }
    if (topGrossingAppsEntries.length === 0) {
      fetchingAppStoreTopGrossingApps(10).then(apps => {
        apps.forEach(app => {
          if (!appDetail[app.id]) {
            lookupAppStoreAppDetail(app.id)
          }
        })
      })
    }
  }

  searchFilter (value) {
    this.setState({ searchKey: value })
  }

  render () {
    const { topFreeAppsEntries, topGrossingAppsEntries } = this.props
    const filteredTopFreeApps = topFreeAppsEntries
    const filteredTopGrossingAppsEntries = topGrossingAppsEntries
    return (
      <div className="App">
        <section className="search-bar-section">
          <SearchBar searchAction={this.searchFilter}/>
        </section>
        <section className="app-listing-section">
          <GrossingAppsListing grossingApps={filteredTopFreeApps}/>
        </section>
      </div>
    )
  }
}

App.propTypes = {
  fetchingAppStoreTopFreeApps: PropTypes.func.isRequired,
  fetchingAppStoreTopGrossingApps: PropTypes.func.isRequired,
  lookupAppStoreAppDetail: PropTypes.func.isRequired,
  isFetchingAppStoreTopFreeApps: PropTypes.bool.isRequired,
  isFetchingAppStoreTopGrossingApps: PropTypes.bool.isRequired,
  isLookupAppStoreAppDetail: PropTypes.bool.isRequired,
  topFreeAppsEntries: PropTypes.array.isRequired,
  topGrossingAppsEntries: PropTypes.array.isRequired,
  appDetail: PropTypes.object.isRequired
}

export default App
