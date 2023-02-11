import React from 'react'
import dropData from './dropData'
import './Drop.scss'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'

export default function Drop() {
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
        <div className="drop-img" style={{backgroundImage: `url(${item.img})`}}>
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
                <p className='drop-time'>{item.timeRemaining}</p>
              </div>
              <div style={{backgroundColor: '#4693ED'}} className="join">Join</div>

            </div>
            
             }

          </div>

        </div>

        <div className='drop-second'>
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

        </div>
    </div>
  ))

  return (
    <div id='drop'>
      <nav className='hide-mobile'>
        <Link>Home/ </Link>
        <Link> Auctions/ </Link>
        <Link> Live bid/ </Link>
        <span> Drop</span>

      </nav>

      <h1>Upcoming drops</h1>

      <p>You may turn on notifications so that no drop will miss you.</p>

      <button className='notify'>Notify me</button>

      <p className='drop-down '>Sort by</p>

      <div className="drops">
        {drops}
      </div>
      <Footer />
    </div>
  )
}
