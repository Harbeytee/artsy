import React from 'react'
import PropTypes from 'prop-types'

export default function Coinbase({rx, onClick}) {
  return (
    <svg onClick={onClick} viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <g filter="url(#filter0_d_424_258)">
      <rect x="8" y="8" width="42" height="42" rx={rx} fill="url(#pattern1)" shapeRendering="crispEdges"/>
      </g>
      <defs>
      <filter id="filter0_d_424_258" x="0" y="0" width="58" height="58" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset/>
      <feGaussianBlur stdDeviation="4"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_424_258"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_424_258" result="shape"/>
      </filter>
      <pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
      <use xlinkHref="#image0_424_258" transform="scale(0.0025)"/>
      </pattern>
      <image id="image0_424_258" width="400" height="400" xlinkHref="data:image/png;base64,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"/>
      </defs>
    </svg>


  )
}

Coinbase.propTypes = {
  rx: PropTypes.string,
  onClick: PropTypes.func,

}
