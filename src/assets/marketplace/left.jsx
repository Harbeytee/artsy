import React from 'react'

export default function left({handleClick, className, style={}, fill="#616161"}) {
  return (
    <svg style={style} className={className} onClick={handleClick} width="15" height="26" viewBox="0 0 15 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.339233 13.5015L12.5109 25.1171C12.714 25.311 12.9838 25.4192 13.2644 25.4192C13.5449 25.4192 13.8148 25.311 14.0179 25.1171L14.031 25.104C14.1298 25.01 14.2084 24.8968 14.2622 24.7714C14.3159 24.646 14.3437 24.5109 14.3437 24.3744C14.3437 24.238 14.3159 24.1029 14.2622 23.9775C14.2084 23.8521 14.1298 23.7389 14.031 23.6449L2.56913 12.7074L14.031 1.77429C14.1298 1.68029 14.2084 1.56714 14.2622 1.44172C14.3159 1.31631 14.3437 1.18125 14.3437 1.04476C14.3437 0.908277 14.3159 0.773219 14.2622 0.647803C14.2084 0.522387 14.1298 0.409235 14.031 0.315231L14.0179 0.302105C13.8148 0.108195 13.5449 2.03848e-05 13.2644 2.03848e-05C12.9838 2.03848e-05 12.714 0.108195 12.5109 0.302105L0.339233 11.9177C0.232188 12.0199 0.146969 12.1427 0.0887411 12.2789C0.0305131 12.415 0.000488281 12.5615 0.000488281 12.7096C0.000488281 12.8577 0.0305131 13.0042 0.0887411 13.1404C0.146969 13.2765 0.232188 13.3993 0.339233 13.5015Z" fill={fill}/>
    </svg>


  )
}
