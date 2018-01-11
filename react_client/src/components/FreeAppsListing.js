import React from 'react'
import PropTypes from 'prop-types'
import { ListGroup, ListGroupItem } from 'reactstrap'
import LazyLoad from 'react-lazyload'

import SpinLoading from './SpinLoading'
import FreeAppContainer from '../containers/FreeAppContainer'

const FreeAppsListing = (props) => {
  const { freeApps } = props
  return (
    <ListGroup>
      {freeApps.map((app, index) => {
        return (
          <ListGroupItem key={`free-app-${app.id}`}>
            {
              // offset mean component will be loaded when it's top edge is 1px from viewport
              <LazyLoad height={130} once offset={1} placeholder={<SpinLoading/>}>
                <FreeAppContainer name={app.name} imageUrl={app.image} category={app.category} isCircleImage={(index + 1) % 2 === 0} rank={index + 1} appId={app.id}/>
              </LazyLoad>
            }
          </ListGroupItem>
        )
      })}
      {freeApps.length === 0 && <span>沒有搜尋結果</span>}
    </ListGroup>
  )
}

FreeAppsListing.propTypes = {
  freeApps: PropTypes.array.isRequired
}

export default FreeAppsListing
