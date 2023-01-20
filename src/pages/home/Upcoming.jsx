import React from 'react'
import { Link } from 'react-router-dom'
export default function Upcoming() {
  return (
    <section id ='upcoming'>
      <article>
        <div className="upcoming-header">
          <h3>See Upcoming Auctions and Exhibitions</h3>
          <div className="underline"></div>
          
        </div>

        <div className="upcoming">

          <div className='upcoming-title'>
            <span></span>
            <h3>MONALISA REDEFINED IN STYLE.</h3>
          </div>

          <div>
            <span className='one'>01</span>
            <span className='time'>Start on : 08:00 GTS . Monday </span>
          </div>

          <p style={{color: 'white'}}>GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT 
            WITH INVESTORS AND AUCTIONEERS ACROSS 
            THE WORLD BRINGING THEIR HIGHEST AND LOWEST BIDS.
          </p>

          <div>
            <Link style={{color: 'white', textDecoration: 'none'}}>See more</Link>
            <button>Set a reminder</button>
          </div>

        </div>
        
      </article>
        <div>

        </div>
    </section>
  )
}
