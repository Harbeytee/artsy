import React, { useEffect, useContext } from 'react'
import dropData from './dropData'
import './Drop.scss'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'
import { Context } from '../../Context/Context' 
import countDown from '../../hooks/countDown'
import { AnimationOnScroll } from 'react-animation-on-scroll'

export default function Drop() {
  const {time, showTime} = countDown()
  const { changeIndex } = useContext(Context)

  useEffect(() => {
    changeIndex(4)
    window.scrollTo({top: 0, left: 0});
    

  }, [])
 

  const changeColour = (val) => {
    if(val === 'ended') {
      return '#999EA5'
    }
    else if(val === 'live') {
      return '#3EA03B'
    }
    else if(val === 'upcoming') {
      return '#4693ED'
    }
  }

  const drops = dropData.map((item, index) => (
    <div key={index} className="drop-flex">
        <AnimationOnScroll offset='0' animateOnce={true}  animateIn='animate__fadeInLeft' className="drop-img" style={{backgroundImage: `url(${item.img})`}}>

          <div style={{backgroundColor: changeColour(item.status)}} className="drop-status ">{item.status}</div>

          <div className="drop-timer">
            {item.status === 'ended'?
            <div className='time-flex'>
              <div>
                <p>Auction ended</p>
                <p className='drop-time'>{item.ended }</p>
              </div>
              <div style={{backgroundColor: '#B8BABC'}} className="view">View</div>

            </div> 
            
            
            :
            <div className='time-flex'>
              <div>
                <p>Time remaining</p>
                <p className='drop-time'>{React.useMemo(() => showTime(time), [time])}</p>
              </div>
              <div style={{backgroundColor: '#4693ED'}} className="join">Join</div>

            </div>
            
             }

          </div>

        </AnimationOnScroll>

        <AnimationOnScroll offset='0' animateOnce={true} animateIn='animate__fadeInRight' className='drop-second'>
          <div style={{backgroundColor: changeColour(item.status)}} className="hide-mobile">{item.status}</div>
          <h4>November 21 at 11 am WAT</h4>
          <h3>{item.name}</h3>
          <p className='drop-info'>Lorem ipsum dolor sit amet consectetur. 
            Amet odio a aenean quis vitae tempus. 
            Sed nunc tempus aliquet lectus ut vulputate.
          </p>
          <p className="drop-creator">Creator: <span className='drop-blue'>{item.creator}</span></p>
          <p className="drop-link">
            {
          item.status === 'ended'&&'view' 
          ||
           item.status === 'upcoming'&&'Get notified' 
          ||
           'Join now'
           }
           </p>

        </AnimationOnScroll>
    </div>
  ))

  return (
    <div id='drop'>
      
        <nav className='hide-mobie animate__animated animate__fadeInUp'>
          <Link to='/'>Home/ </Link>
          <Link to='/auctions'>Auctions/ </Link>
          <Link>Live bid/ </Link>
          <span>Drop</span>

        </nav>
      
      
      
      <h1 className='animate__animated animate__fadeInUp'>Upcoming drops</h1>

      <p className='animate__animated animate__fadeInUp'>You may turn on notifications so that no drop will miss you.</p>

      <button className='notify animate__animated animate__fadeInUp'>Notify me</button>

      <p className='drop-down animate__animated animate__fadeInUp'>Sort by</p>

      <div className="drops">
        {drops}
      </div>

      <div style={{marginTop: 0}} className='hide-mobile see-more'>
          See more
      </div>

      <Footer />
    </div>
  )
}
