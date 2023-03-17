import React, { useState, useEffect} from 'react'
import image1 from '../../assets/home/topcreatorsAnimation/image1.webp'
import image2 from '../../assets/home/topcreatorsAnimation/image2.webp'
import image3 from '../../assets/home/topcreatorsAnimation/image3.webp'
import fadeinAnimation from '../../hooks/fadeinAnimation'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import "animate.css/animate.min.css";
export default function TopCreators() {
  
  const { changeVisibility } = fadeinAnimation(3)

  return (
    <section id='top-creators'>
      
      <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp" >
        <h3>TOP CREATORS OF THE WEEK</h3>
      </AnimationOnScroll> 
      
      <div className='top-right'>
        <div className="top-info hide-desktop">
          <span>Editorials</span>
          <span className='top-circle'></span>
          <span>Fashion</span>
          <span className='top-circle'></span>
          <span>Life</span>
        </div>

          <div className='top-bar hide-mobile'>
            <div className="track"></div>
          </div>

          <div className='top-column hide-mobile'>
            <span>Editorials</span>
            <span>Fashion</span>
            <span>Lifestyle</span>
            <span>Blueprint</span>

        </div>

      </div>
          <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp" >
          <p>“Everything always looked better in black and white. 
            Everything always  as if it were the first time; there's 
            always more people in a black and white photograph.
             It just makes it seem that there were more people at a gig, 
             more people at a football match, than with colour photography.
              Everything looks more exciting.”– Jack Lowden
          </p>
          </AnimationOnScroll>

          {/* <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInRight" > */}
            <div  className="top-creators-animation">
                <img style={{opacity: changeVisibility(0)}} src={image1} alt="" />
                <img style={{opacity: changeVisibility(1)}} src={image2} alt="" />
                <img style={{opacity: changeVisibility(2)}} src={image3} alt="" />            
              
            </div>
          {/* </AnimationOnScroll> */}
          <p className='circa'>CIRCA</p>
          <p className='year'>1985</p>
          
    </section>
    
  )
}
