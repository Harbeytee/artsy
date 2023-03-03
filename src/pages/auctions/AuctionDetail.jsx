import React, { useEffect, useContext } from 'react'
import './AuctionDetail.scss'
import { useParams } from 'react-router-dom'
import product from './product'
import { Context } from '../../Context/Context'

export default function AuctionDetail() {

  const { changeIndex } = useContext(Context)
  const { id } = useParams()

  const productDetail = product.auction1.find(val => val.id == id)

  useEffect(() => {
    changeIndex(3)

  }, [])

    
    //console.log(productDetail)

  return (
    <div id='auction-detail'>
       
        <div className='auction-bg' style={{backgroundImage: `url(${productDetail.img})`}}>
          <header>
            <p>Tag: Lost or Wither</p>

            <div>

              <div className='live'>LIVE</div>

              <div className='views'>295</div>

              <div className='close-live'>
                <span></span>

                <span></span>
              </div>
              
            </div>
          </header>

          <h1>Current bid : $45.00</h1>
          <div className='last-part'>
            <div className="auction-comments"></div>
            <div className="auction-hearts"></div>
            <input type="text" placeholder='Join conversation...'/>

          </div>
          
        </div>
        
    </div>
  )
}
