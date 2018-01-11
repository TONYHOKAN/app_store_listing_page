import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Navbar,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'
import InfiniteScroll from 'react-infinite-scroller'

import './App.css'
import GrossingAppsListing from './GrossingAppsListing'
import FreeAppsListing from './FreeAppsListing'
import SearchBar from './SearchBar'
import Loading from './Loading'
import { isSearchKeyMatched } from '../utils/search'

class App extends Component {
  constructor (props) {
    super(props)
    this.searchFilter = this.searchFilter.bind(this)
    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.loadMore = this.loadMore.bind(this)
    this.state = {
      searchKey: '',
      collapsed: true
    }
  }

  componentWillMount () {
    const { fetchingAppStoreTopFreeApps, fetchingAppStoreTopGrossingApps, topFreeAppsEntries, topGrossingAppsEntries } = this.props
    if (topFreeAppsEntries.length === 0) {
      fetchingAppStoreTopFreeApps(10)
    }
    if (topGrossingAppsEntries.length === 0) {
      fetchingAppStoreTopGrossingApps(10)
    }
  }

  searchFilter (value) {
    this.setState({ searchKey: value })
  }

  toggleNavbar () {
    this.setState({ collapsed: !this.state.collapsed })
  }

  loadMore () {
    const newPage = this.props.topFreeAppsPage + 1
    this.props.fetchingAppStoreTopFreeApps(10, newPage)
    this.setState({ page: newPage })
  }

  render () {
    const { topFreeAppsEntries, topGrossingAppsEntries, isFetching, clearAppStoreData, fetchingAppStoreTopFreeApps, fetchingAppStoreTopGrossingApps, topFreeAppsPage } = this.props
    const filteredTopFreeApps = this.state.searchKey === '' ? topFreeAppsEntries : topFreeAppsEntries.filter(app => isSearchKeyMatched(app, this.state.searchKey))
    const filteredTopGrossingAppsEntries = this.state.searchKey === '' ? topGrossingAppsEntries : topGrossingAppsEntries.filter(app => isSearchKeyMatched(app, this.state.searchKey))
    return (
      <div className="App" style={{ 'paddingTop': '50px' }}>
        {isFetching && <Loading/>}
        <section className="search-bar-section">
          <Navbar className="navbar fixed-top navbar-light bg-faded">
            <div className="container" style={{ width: '100%' }}>
              <div style={{ display: 'flex' }}>
                <SearchBar searchAction={this.searchFilter}/>
                <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
              </div>
              <Collapse isOpen={!this.state.collapsed} navbar>
                <Nav navbar>
                  <NavItem>
                    <NavLink href="#" onClick={() => {
                      this.toggleNavbar()
                      clearAppStoreData('topGrossingApp')
                      fetchingAppStoreTopGrossingApps(10)
                    }}>
                      清除推介應用暫存，重新搜索
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#" onClick={() => {
                      this.toggleNavbar()
                      clearAppStoreData('topFreeApp')
                      fetchingAppStoreTopFreeApps(10)
                    }}>
                      清除免費應用暫存，重新搜索
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#" onClick={() => {
                      this.toggleNavbar()
                      clearAppStoreData()
                      fetchingAppStoreTopFreeApps(10)
                      fetchingAppStoreTopGrossingApps(10)
                    }}>
                      清除所有應用暫存，重新搜索
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </div>
          </Navbar>
        </section>
        <InfiniteScroll
          pageStart={1}
          loadMore={this.loadMore}
          hasMore={!isFetching && topFreeAppsPage < 10}
          loader={<div className="loader">Loading ...</div>}
          useWindow={true}
        >
          <section className="app-listing-section">
            <GrossingAppsListing grossingApps={filteredTopGrossingAppsEntries}/>
            <FreeAppsListing freeApps={filteredTopFreeApps}/>
          </section>
        </InfiniteScroll>
      </div>
    )
  }
}

App.propTypes = {
  fetchingAppStoreTopFreeApps: PropTypes.func.isRequired,
  fetchingAppStoreTopGrossingApps: PropTypes.func.isRequired,
  isFetchingAppStoreTopFreeApps: PropTypes.bool.isRequired,
  isFetchingAppStoreTopGrossingApps: PropTypes.bool.isRequired,
  topFreeAppsEntries: PropTypes.array.isRequired,
  topGrossingAppsEntries: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  clearAppStoreData: PropTypes.func.isRequired,
  topFreeAppsPage: PropTypes.number.isRequired
}

export default App
