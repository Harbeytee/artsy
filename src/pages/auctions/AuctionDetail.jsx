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

        </div>
        
    </div>
  )
}
