import React, { useEffect, useContext } from 'react'
import illustration from '../../assets/confirmed/illustration.svg'
import circleRings from '../../assets/confirmed/circleRings.svg'
import './Confirmed.scss'
import { Context } from '../../Context/Context'
import { Link } from 'react-router-dom'
import cone from '../../assets/confirmed/confetti/cone.svg'
import foldedConfetti from '../../assets/confirmed/confetti/folded-confetti.svg'
import blueBand from '../../assets/confirmed/confetti/blue-band.svg'
import unfoldedConfetti from '../../assets/confirmed/confetti/unfolded-confetti.svg'
import redBand from '../../assets/confirmed/confetti/red-band.svg'
import pinkBand from '../../assets/confirmed/confetti/pink-band.svg'


export default function Confirmed() {

  const { changeIndex } = useContext(Context)

  useEffect(() => {
    changeIndex('')
    window.scrollTo({top: 0, left: 0,});

  }, [])

  return (
    <div id='confirmed'>
        <img src={circleRings} alt=" largecircle ring" className="circle-rings" />
        <img src={illustration} alt="illustration of lady wearing a face cap resting on a fridge sized cellphone with her thumbs up there is a checkmark 
        on the screen of the cellphone 
        she's resting on" className="confirmed-illustration" />
        <h3>Hey Celestina, thank you for your purchase. </h3>
        <p>You are amazing. Cheers to being 
          <Link to='/'>ARTSY!</Link>
          <span className='confetti-animation'>
            <img src={cone} alt="" className="first-stage" />
            <img src={foldedConfetti} alt="" className="second-stage" />
            <img src={blueBand} alt="" className="third-stage" />
            <img src={unfoldedConfetti} alt="" className="sprinkles" />
            <img src={redBand} alt="" className="red-band" />
            <img src={pinkBand} alt="" className="pink-band" />
          </span>
          </p>
    </div>
  )
}
