import React from 'react'
import { Link } from 'react-router-dom'
import Arrow from '../../assets/home/Arrow'
export default function Upcoming() {
  return (
    <section id ='upcoming'>
      <article>
        <div className="upcoming-header">
          <h3>See Upcoming Auctions and Exhibitions</h3>
          <div className="underline"></div>
          
        </div>

        <div className="upcoming">
          <div className='card'>
            <div className='upcoming-title'>
            <span className='circle'></span>
              <h3>MONALISA REDEFINED IN STYLE.</h3>
            </div>

            <div>
              <span className='one'>01</span>
              <p className='time'>START ON : 08:00 GTS . MONDAY </p>
            </div>

          
            <p style={{color: 'white'}}>GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT 
              WITH INVESTORS AND AUCTIONEERS ACROSS 
              THE WORLD BRINGING THEIR HIGHEST AND LOWEST BIDS.
            </p>
          </div>
            

          <div className='links'>
            <Link style={{color: 'white'}}>See more</Link>
            <button>Set a reminder</button>
          </div>
        </div>
        
        <div className='slideshow'>
          <div className='progress'>
            <div className='progress-bar'></div>
          </div>
          <div className='change-slide'>
            <span style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>&lt;</span>
            <span style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>&gt;</span>
          </div>

        </div>
        
      </article>
        <table className='navigate'>
          <tr>
            <Link>
              <p>Explore marketplace</p>
              <Arrow className='arrow'/>

            </Link>

          </tr>
          <tr>
            <Link>
              <p>See auctions</p>
              <Arrow className='arrow' />

            </Link>

          </tr>
          



        </table>
    </section>
  )
}
