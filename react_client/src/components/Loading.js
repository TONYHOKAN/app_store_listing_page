import React from 'react'
import PropTypes from 'prop-types'
import ReactLoading from 'react-loading'

const Loading = ({ type = 'spin', color = '#444' }) => (
  <ReactLoading type={type} color={color} height='50px' width='50px' style={{position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1, height: '50px', width: '50px'}}/>
)

Loading.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string
}

export default Loading
