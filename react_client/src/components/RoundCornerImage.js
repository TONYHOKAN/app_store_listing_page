import React from 'react'
import PropTypes from 'prop-types'

const RoundCornerImage = (props) => {
  return <img style={{ borderRadius: '20%' }} alt={props.alt} src={props.src}/>
}

RoundCornerImage.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string
}

export default RoundCornerImage
