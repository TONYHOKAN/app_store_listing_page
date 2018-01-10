import React from 'react'
import PropTypes from 'prop-types'
import RoundCornerImage from './RoundCornerImage'

const style = {
  container: {
    height: '150px',
    width: '100px',
    margin: '10px'
  },
  text: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    margin: '10px 0px'
  }
}

const GrossingApp = (props) => {
  return (
    <div style={style.container}>
      <RoundCornerImage src={props.imageUrl} alt={props.name}/>
      <div style={style.text}>{props.name}</div>
      <div style={{color: '#9d9d9d', ...style.text}}>{props.category}</div>
    </div>
  )
}

GrossingApp.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired
}

export default GrossingApp
