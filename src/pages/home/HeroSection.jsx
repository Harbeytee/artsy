import React from 'react'
import heromobile from '../../assets/home/heromobile.svg'
export default function HeroSection() {
  return (
    <section className='hero'>
        <h1>Photography is poetry & beautiful untold stories</h1>
        <p>Flip through more than 10,000 vintage shots, old photograghs, 
          historic images and captures seamlessly in one place. Register to get top access.
        </p>
        <div className="slide">
        <img src={heromobile} alt="hands holding a bunch of flowers" className="hero-mobile" />
          
        </div>
        
    
    </section>
  )
}
