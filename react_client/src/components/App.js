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
    this.state = {
      page: 1,
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
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  render () {
    const { topFreeAppsEntries, topGrossingAppsEntries, isFetching, clearAppStoreData } = this.props
    const filteredTopFreeApps = topFreeAppsEntries.filter(app => isSearchKeyMatched(app, this.state.searchKey))
    const filteredTopGrossingAppsEntries = topGrossingAppsEntries.filter(app => isSearchKeyMatched(app, this.state.searchKey))
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
                      clearAppStoreData()
                    }}>
                      清除暫存
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </div>
          </Navbar>
        </section>
        <section className="app-listing-section">
          <GrossingAppsListing grossingApps={filteredTopGrossingAppsEntries}/>
          <FreeAppsListing freeApps={filteredTopFreeApps}/>
        </section>
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
  clearAppStoreData: PropTypes.func.isRequired
}

export default App
