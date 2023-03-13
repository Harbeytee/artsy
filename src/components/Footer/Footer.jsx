import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
import './Footer.scss'
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
       <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp" >
        <div className='footer-top'>
          <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp" ><h4>newsletter</h4></AnimationOnScroll>

          <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp" >
            <p>Subscribe to get daily updates on new drops & exciting deals</p>
          </AnimationOnScroll>

          <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp" >
            <form>
              <input type="text" placeholder='enter your email'/>
              <button type='button'>subscribe</button>
            </form> 
          </AnimationOnScroll>
        </div>
        </AnimationOnScroll>
        <div className='footer-bottom'>
        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp" >
          <h4 className='hide-mobile'>artsy.</h4>
        </AnimationOnScroll>

          <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp" >
            <div className='hide-mobile'>
              <Link to='/'>Home</Link>
              <Link to='/marketplace'>Marketplace</Link>
              <Link to='/auctions'>Auctions</Link>
              <Link to='/drop'>Drops</Link>
            </div>
          </AnimationOnScroll>

          <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp" >
            <div className='hide-mobile'>
              <p>Blog</p>
              <p>Wallet</p>
              <p>Rates</p>
              <p>High bids</p>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUp" >
          <div className='contact'>
            <h4 className='hide-desktop'>reach us</h4>
            <div>artsystudios@gmail.com</div>
            <div>Lagos, Nigeria.</div>
          </div>
          
          </AnimationOnScroll>
        </div>
        
          <p className="foot">Artsystudios © 2022. All Rights Reserved.</p>
       
    </footer>
  )
}
