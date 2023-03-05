import React from 'react'
import { Link } from 'react-router-dom'
import Arrow from '../../assets/home/Arrow'
import left from '../../assets/home/chevronLeft.svg'
import right from '../../assets/home/chevronRight.svg'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import "animate.css/animate.min.css";

export default function Upcoming() {
  

  return (
    <section id ='upcoming'>
      
      <article>
        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp" >
          <div className="upcoming-header">
            <h3>See Upcoming Auctions and Exhibitions</h3>
            <div className="underline"></div>
            
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInRight" >
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
              <Link to='auctions' style={{color: 'white'}}>See more</Link>
              <Link to='drop'>Set a reminder</Link>
            </div>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp" >
          <div className='slideshow'>
            <div className='progress'>
              <div className='progress-bar'></div>
            </div>
            <div className='change-slide'>
              <span style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><img src={left} /></span>
              <span style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><img src={right} /></span>
            </div>

          </div>
        </AnimationOnScroll>
        
      </article>
      
        <div className='navigate'>
        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp" >
          <div className='navigate-2'>
            <Link to='marketplace'>
              <p>Explore marketplace</p>
              <Arrow className='arrow'/>

            </Link>

          </div>
        
        
          <div className='navigate-2'>
            <Link to='auctions'>
              <p>See auctions</p>
              <Arrow className='arrow' />

            </Link>

          </div>
          </AnimationOnScroll>
          



        </div>
    </section>
  )
}
