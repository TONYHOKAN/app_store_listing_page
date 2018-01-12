import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ListGroup, ListGroupItem } from 'reactstrap'
import LazyLoad, { forceCheck } from 'react-lazyload'

import SpinLoading from './SpinLoading'
import FreeAppContainer from '../containers/FreeAppContainer'
import Fade from './Fade'

class FreeAppsListing extends Component {
  componentDidUpdate () {
    forceCheck()
  }

  render () {
    const { freeApps } = this.props
    return (
      <ListGroup>
        {freeApps.map((app, index) => {
          return (
            <ListGroupItem key={`free-app-${app.id}`}>
              {
                // offset mean component will be loaded when it's top edge is 1px from viewport
                <LazyLoad height={130} resize={true} offset={1} placeholder={<SpinLoading/>}>
                  <Fade in={true}>
                    <FreeAppContainer name={app.name} imageUrl={app.image} category={app.category} isCircleImage={(index + 1) % 2 === 0} rank={index + 1} appId={app.id}/>
                  </Fade>
                </LazyLoad>
              }
            </ListGroupItem>
          )
        })}
        {freeApps.length === 0 && <span>沒有搜尋結果</span>}
      </ListGroup>
    )
  }
}

FreeAppsListing.propTypes = {
  freeApps: PropTypes.array.isRequired
}

export default FreeAppsListing
