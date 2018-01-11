import React from 'react'
import PropTypes from 'prop-types'
import { ListGroup, ListGroupItem } from 'reactstrap'

import FreeApp from './FreeApp'

const FreeAppsListing = (props) => {
  const { freeApps, appDetail } = props
  return (
    <ListGroup>
      {freeApps.map((app, index) => {
        return (
          <ListGroupItem key={`free-app-${app.id}`}>
            {appDetail[app.id] && <FreeApp name={app.name} imageUrl={app.image} category={app.category} averageUserRating={appDetail[app.id].averageUserRating} userRatingCountForCurrentVersion={appDetail[app.id].userRatingCountForCurrentVersion} isCircleImage={(index + 1) % 2 === 0} rank={index + 1}/>}
          </ListGroupItem>
        )
      })}
      {freeApps.length === 0 && <span>沒有搜尋結果</span>}
    </ListGroup>
  )
}

FreeAppsListing.propTypes = {
  freeApps: PropTypes.array.isRequired,
  appDetail: PropTypes.object.isRequired
}

export default FreeAppsListing
