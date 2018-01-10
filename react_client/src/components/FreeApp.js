import React from 'react'
import PropTypes from 'prop-types'
import StarRatingComponent from 'react-star-rating-component'

import RoundCornerImage from './RoundCornerImage'
import CircleImage from './CircleImage'

const style = {
  text: {
    margin: '10px 0px'
  }
}

const FreeApp = (props) => {
  const { name, imageUrl, category, averageUserRating, userRatingCountForCurrentVersion, isCircleImage, rank } = props
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
        <div style={{ color: '#9d9d9d', display: 'flex' }}><StarRatingComponent starCount={5} value={averageUserRating}/>&nbsp;{`(${userRatingCountForCurrentVersion})`}</div>
      </div>
    </div>
  )
}

FreeApp.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  averageUserRating: PropTypes.number.isRequired,
  userRatingCountForCurrentVersion: PropTypes.number.isRequired,
  isCircleImage: PropTypes.bool,
  rank: PropTypes.number
}

export default FreeApp
