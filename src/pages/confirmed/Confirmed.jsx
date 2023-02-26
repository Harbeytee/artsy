import React from 'react'
import illustration from '../../assets/confirmed/illustration.svg'
import circleRings from '../../assets/confirmed/circleRings.svg'
import './Confirmed.scss'

export default function Confirmed() {
  return (
    <div id='confirmed'>
        <img classname='circle-rings hide-mobile' src={circleRings} alt=" largecircle ring" className="circle-rings" />
        <img src={illustration} alt="illustration of lady wearing a face cap resting on a fridge sized cellphone with her thumbs up there is a checkmark 
        on the screen of the cellphone 
        she's resting on" className="confirmed-illustration" />
        <h3>Hey Celestina, thank you for your purchase. </h3>
        <p>You are amazing. Cheers to being <span>ARTSY!</span></p>
    </div>
  )
}
