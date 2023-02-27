import React from 'react'

export default function right({handleClick, className, style={}, fill="#616161"}) {
  return (
    <svg style={style} className={className} onClick={handleClick} width="15" height="26" viewBox="0 0 15 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.0045 11.9177L1.83288 0.302084C1.62979 0.108173 1.35997 0 1.07939 0C0.798805 0 0.528989 0.108173 0.325899 0.302084L0.312794 0.315209C0.213999 0.409213 0.13533 0.522364 0.0815735 0.64778C0.0278158 0.773196 9.34601e-05 0.908255 9.34601e-05 1.04474C9.34601e-05 1.18122 0.0278158 1.31628 0.0815735 1.4417C0.13533 1.56712 0.213999 1.68027 0.312794 1.77427L11.7746 12.7118L0.312794 23.6449C0.213999 23.7389 0.13533 23.8521 0.0815735 23.9775C0.0278158 24.1029 9.34601e-05 24.2379 9.34601e-05 24.3744C9.34601e-05 24.5109 0.0278158 24.646 0.0815735 24.7714C0.13533 24.8968 0.213999 25.01 0.312794 25.104L0.325899 25.1171C0.528989 25.311 0.798805 25.4192 1.07939 25.4192C1.35997 25.4192 1.62979 25.311 1.83288 25.1171L14.0045 13.5015C14.1116 13.3993 14.1968 13.2765 14.255 13.1403C14.3132 13.0042 14.3433 12.8577 14.3433 12.7096C14.3433 12.5615 14.3132 12.415 14.255 12.2788C14.1968 12.1427 14.1116 12.0199 14.0045 11.9177Z" fill={fill}/>
    </svg>

  )
}