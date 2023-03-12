import React, { useState, useEffect, useContext } from 'react'
import './AuctionDetail.scss'
import { useParams } from 'react-router-dom'
import product from '../product'
import { Context } from '../../../Context/Context'
import { Link } from 'react-router-dom'
import AuctionAside from './components/AuctionAside'
import Marquee from '../Marquee/Marquee' 
import Like from '../../../assets/marketplace/Like'
export default function AuctionDetail() {

  const { changeIndex } = useContext(Context)
  const { id } = useParams()

  const productDetail = product.auction1.find(val => val.id == id)

  useEffect(() => {
    changeIndex(3)

  }, [])

    
  const list = [
    'hello',
    'hello',
    'hello'
  ]

  return (
    <div id='auction-detail'>
         <nav className='detail-head'>
          
          <Link  to='/'>Home/</Link>
          <Link to='/auctions'> Auctions/</Link>
          <span> Live bid</span>
         

        </nav>
        <div className="auction-flex">
          <div className='auction-bg' style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1)), url(${productDetail.img})`}}>
            <header>
              <p >Tag: Lost or Wither</p>

              <div className='header-2'>

                <div className='live'>LIVE</div>

                <div className='views'>295</div>

                <Link to='/auctions' className='close-live'>
                  <span></span>

                  <span></span>
                </Link>
                
              </div>
            </header>

            <h1>Current bid : $45.00</h1>
            <div className='last-part'>
              <div className="auction-comments"></div>
              <div className="auction-hearts"></div>
              {/* <input type="text" placeholder='Join conversation...'/> */}
              <p>Tag: Lost or Wither</p>
              <AuctionAside className='auction-aside2'/>
              

              
            </div>
            
          </div>
          <AuctionAside />

        </div>
        
        
    </div>
  )
}
