import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Arrow from '../../assets/home/Arrow'
import Left from '../../assets/marketplace/left.jsx'
import Right from '../../assets/marketplace/right.jsx'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import upcoming from '../../assets/home/upcoming.svg'
import "animate.css/animate.min.css";

export default function Upcoming() {
  const [count, setCount] = useState(0)
  const arrowStyle = {
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center', 
    padding: '1.3rem',
  }
  const src = [
    {
      img: upcoming,
      color: 'rgba(128, 128, 128, 0.3)',
    },
    {
      img:'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg',
      color: 'rgba(165, 42, 42, 0.3)',
    },
    {
      img: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      color: 'rgba(136, 136, 14, 0.3)'
    },
    {
      img: 'https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      color: 'rgba(20, 77, 20, 0.3)'
    },
    { 
      img: 'https://images.pexels.com/photos/8135112/pexels-photo-8135112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      color: 'rgba(133, 90, 10, 0.3)'
    },
    {
      img: 'https://images.pexels.com/photos/12148587/pexels-photo-12148587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      color: 'rgba(107, 20, 107, 0.3)'
    },
    
  ]

  const nextSlide = () => {
    if(count < src.length - 1 ) {
        setCount(prev => prev + 1)
        //setPosition(prev => ({...prev, left: `-${(count + 1) * position.width}px`}))
    }
    
       
   
   }
   

   const prevSlide = () => {
    if(count >=1) {
         setCount(prev => prev - 1)
        //setPosition(prev => ({...prev, left: `-${(count - 1) * position.width}px`}))
       
    }
       
    }
    useEffect(() => {
      console.log(count)
    }, [count])

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
          <div style={{backgroundImage: `linear-gradient(115deg, ${src[count].color}, ${src[count].color}), url(${src[count].img})`, /*backgroundColor: src[count].color*/}} className="upcoming">
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
