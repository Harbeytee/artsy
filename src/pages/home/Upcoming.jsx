import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Arrow from '../../assets/home/Arrow'
import Left from '../../assets/marketplace/left.jsx'
import Right from '../../assets/marketplace/right.jsx'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import useSlider from './useSlider'
import "animate.css/animate.min.css";

export default function Upcoming() {
  const {prevSlide, nextSlide, src, arrowStyle, count} = useSlider()
  
  const bg = {
    backgroundImage: `linear-gradient(115deg, ${src[count].color}, 
      ${src[count].color}), url(${src[count].img})`,
    animation: 'fadeIn 0.3s ease-in-out'/*backgroundColor: src[count].color*/}

  const upcoming = src.map((item, index) => (
    <AnimationOnScroll key={index} animateOnce={true} animateIn="animate__fadeInRight" >
          <div style={{...bg, display: index == count ? 'block' : 'none'}} className="upcoming">
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
  ))
  return (
    <section id ='upcoming'>
      
      <article>
        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp" >
          <div className="upcoming-header">
            <h3>See Upcoming Auctions and Exhibitions</h3>
            <div className="underline"></div>
            
          </div>
        </AnimationOnScroll>

        {upcoming}

        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp" >
          <div className='slideshow'>
            <div className='progress'>
              <div style={{marginLeft: `${(count) * ( 100 / 6 )}%`}} className='progress-bar'></div>
            </div>
            <div className='change-slide'>
              <span onClick={() => prevSlide()} style={arrowStyle}><Left  fill='white'/></span>
              <span onClick={() => nextSlide()} style={arrowStyle}><Right fill='white'/></span>
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
