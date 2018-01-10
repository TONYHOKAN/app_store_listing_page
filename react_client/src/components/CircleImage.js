import React from 'react'
import PropTypes from 'prop-types'

const CircleImage = (props) => {
  return <img style={{ borderRadius: '50%' }} alt={props.alt} src={props.src}/>
}

CircleImage.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string
}

export default CircleImage
