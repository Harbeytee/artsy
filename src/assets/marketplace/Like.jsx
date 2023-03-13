import React from 'react'
import PropTypes from 'prop-types'

export default function Like({fill, className, stroke, onClick}) {
  return (
    <svg style={{cursor: 'pointer'}} onClick={onClick} className={className} viewBox="0 0 37 32" fill={fill} xmlns="http://www.w3.org/2000/svg">
        <path d="M11.075 2C6.06313 2 2 6.01736 2 10.9728C2 19.9456 12.725 28.1027 18.5 30C24.275 28.1027 35 19.9456 35 10.9728C35 6.01736 30.9369 2 25.925 2C22.856 2 20.1417 3.50662 18.5 5.81262C17.6632 4.63409 16.5515 3.67228 15.259 3.00861C13.9665 2.34495 12.5314 1.99898 11.075 2Z" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      {/* <path d="M19.575 0C17.226 0 14.9715 1.10354 13.5 2.84741C12.0285 1.10354 9.774 0 7.425 0C3.267 0 0 3.297 0 7.49319C0 12.6431 4.59 16.8392 11.5425 23.2153L13.5 25L15.4575 23.2016C22.41 16.8392 27 12.6431 27 7.49319C27 3.297 23.733 0 19.575 0ZM13.635 21.1853L13.5 21.3215L13.365 21.1853C6.939 15.3133 2.7 11.4305 2.7 7.49319C2.7 4.76839 4.725 2.7248 7.425 2.7248C9.504 2.7248 11.529 4.07357 12.2445 5.94005H14.769C15.471 4.07357 17.496 2.7248 19.575 2.7248C22.275 2.7248 24.3 4.76839 24.3 7.49319C24.3 11.4305 20.061 15.3133 13.635 21.1853Z" fill={pathFill}/> */}
    </svg>

  )
}

Like.defaultProp = {
  fill: 'none',
  stroke: '#333333'
}

Like.propTypes = {
  fill: PropTypes.string,
  className: PropTypes.string,
  stroke: PropTypes.string,
  onClick: PropTypes.func,

}
// {/*27 25 <svg width="37" height="32" viewBox="0 0 37 32" fill="none" xmlns="http://www.w3.org/2000/svg"> */}
// {/* <path d="M11.075 2C6.06313 2 2 6.01736 2 10.9728C2 19.9456 12.725 28.1027 18.5 30C24.275 28.1027 35 19.9456 35 10.9728C35 6.01736 30.9369 2 25.925 2C22.856 2 20.1417 3.50662 18.5 5.81262C17.6632 4.63409 16.5515 3.67228 15.259 3.00861C13.9665 2.34495 12.5314 1.99898 11.075 2Z" stroke="#333333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/> */}
// // </svg>

