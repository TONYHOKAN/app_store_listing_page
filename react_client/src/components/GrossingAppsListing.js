import React from 'react'
import PropTypes from 'prop-types'
import GrossingApp from './GrossingApp'

const style = {
  height: '250px',
  display: 'flex',
  overflowX: 'scroll'
}

const GrossingAppsListing = (props) => {
  return (
    <div style={{textAlign: 'left', padding: '10px', border: '1px solid #ccc'}}>
      <div style={{marginLeft: '10px', fontSize: '3rem'}} >推介</div>
      <div style={style}>
        {props.grossingApps.map(app => <GrossingApp key={`grossing-app-${app.id}`} name={app.name} imageUrl={app.image} category={app.category}/>)}
      </div>
    </div>
  )
}

GrossingAppsListing.propTypes = {
  grossingApps: PropTypes.array.isRequired
}

export default GrossingAppsListing
