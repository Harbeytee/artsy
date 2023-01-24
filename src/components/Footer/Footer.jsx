import React from 'react'
import './Footer.scss'
export default function Footer() {
  return (
    <footer>
        <div className='footer-top'>
          <h4>newsletter</h4>
          <p>Subscribe to get daily updates on new drops & exciting deals</p>
          <form>
            <input type="text" placeholder='enter your email'/>
            <button type='button'>subscribe</button>
          </form> 

        </div>
        <div className='footer-bottom'>
          <h4 className='hide-mobile'>artsy.</h4>
          <div className='hide-mobile'>
            <p>Home</p>
            <p>Marketplace</p>
            <p>Auctions</p>
            <p>Drops</p>
          </div>
          <div className='hide-mobile'>
            <p>Blog</p>
            <p>Wallet</p>
            <p>Rates</p>
            <p>High bids</p>
          </div>
          <div className='contact'>
            <h4 className='hide-desktop'>reach us</h4>
            <div>artsystudios@gmail.com</div>
            <div>Lagos, Nigeria.</div>
          </div>

        </div>
        <p className="foot">Artsystudios © 2022. All Rights Reserved.</p>
    </footer>
  )
}
