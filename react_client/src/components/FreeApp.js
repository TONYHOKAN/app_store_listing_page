import React, { Component } from 'react'
import PropTypes from 'prop-types'
import StarRatingComponent from 'react-star-rating-component'

import RoundCornerImage from './RoundCornerImage'
import CircleImage from './CircleImage'
import SpinLoading from './SpinLoading'

const style = {
  text: {
    margin: '10px 0px'
  }
}

class FreeApp extends Component {
  constructor (props) {
    super(props)
    this.state = {
      waitingFetchingComplete: true
    }
  }

  componentWillMount () {
    const { appId, appDetail, lookupAppStoreAppDetail } = this.props
    if (!appDetail[appId]) {
      lookupAppStoreAppDetail(appId)
    } else {
      this.setState({ waitingFetchingComplete: false })
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({ waitingFetchingComplete: nextProps.isFetching })
  }

  render () {
    const { appId, name, imageUrl, category, appDetail, isCircleImage, rank } = this.props
    if (this.state.waitingFetchingComplete) {
      return <SpinLoading/>
    }
    const averageUserRating = appDetail[appId].averageUserRating
    const userRatingCountForCurrentVersion = appDetail[appId].userRatingCountForCurrentVersion
    return (
      <div style={{ width: '100%', display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ margin: '10px', fontSize: '3rem', color: '#9d9d9d' }}>
          {rank}
        </div>
        <div style={{ margin: '10px' }}>
          {isCircleImage ? <CircleImage src={imageUrl} alt={name}/> : <RoundCornerImage src={imageUrl} alt={name}/>}
        </div>
        <div style={{ margin: '10px' }}>
          <div style={style.text}>{name}</div>
          <div style={{ color: '#9d9d9d', ...style.text }}>{category}</div>
          <div style={{ color: '#9d9d9d', display: 'flex' }}>
            <StarRatingComponent name={`start-${appId}`} starCount={5} value={averageUserRating} editing={false}/>&nbsp;{`(${userRatingCountForCurrentVersion})`}
          </div>
        </div>
      </div>
    )
  }
}

FreeApp.propTypes = {
  appId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  isCircleImage: PropTypes.bool,
  rank: PropTypes.number,
  isFetching: PropTypes.bool.isRequired,
  appDetail: PropTypes.object.isRequired,
  lookupAppStoreAppDetail: PropTypes.func.isRequired
}

export default FreeApp
