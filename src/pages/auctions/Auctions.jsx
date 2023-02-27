import React, { useEffect, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import product from './product'
import './Auctions.scss'
import Like from '../../assets/marketplace/Like'
import { Context } from '../../Context/Context' 


export default function Auctions() {
  const [time, setTime] = useState(24015)
  const { changeIndex } = useContext(Context)

  useEffect(() => {
    changeIndex(3)

  }, [])

    function showTime(val) {
      let hours = Math.floor(val / 3600)
      let minutes = Math.floor((val % 3600) / 60)
      let seconds = val % 60

      return `${hours}hr : ${minutes}mins : ${seconds}s`

      //return minutes
      //24015const seconds = val 

    }
    
    
  useEffect(() => {
    if(time <= 0) {
      setTime(24015)
    }
    else {
          const timeout = setInterval(() => {
            setTime(prev => prev - 1)
        }, 1000)
        //console.log(time)
        return () => {
          clearInterval(timeout)
        }

    }
    
    
  }, [time])
  

  const auction1 = product.auction1.map((item, index) => (
    <Link to={`${item.id}`} key={index} className='auction1-img' style={{backgroundImage: `url(${item.img})`}}>
      <div className="timer">{showTime(time)}</div>

    </Link>
  ))
  const auction2 = product.auction2.map((item, index) => (
    <div key={index}>
      

      <div className="auction2-card">
      <Like className='heart'/>
        <div  className='auction2-img' style={{backgroundImage: `url(${item.img})`}}>
            
        </div>
        
        <div className="auction2-info">
          <span className='auction2-name'>{item.name}</span>
          <span className='hide-desktop'>{item.highestBid}</span>
        </div>

      </div>

      <p className="auction2-creator">Creator: <span>{item.creator}</span></p>
      <p className="auction2-date">Date: <span>{item.date}</span></p>
      <p className="highest-bid hide-mobile">Highest bid: <span>{item.highestBid}</span></p>

      <div id='current-bid'>
        <div className='current-bid'>
          <p>Current bid</p>
          <span>{item.currentBid}</span>
        </div>
        <button>Place bid</button>

      </div>
      
      

    </div>
    
  ))
  return (
    <div id='auctions'>
      <nav>
        <Link to='/'>Home/ </Link>
        <span>Auctions</span>
      </nav>

      <h2>Here's an overview of products actively on auction, explore!</h2>

      <div>
        <div className="auction1">
          {auction1}
        </div>
        <div className="circles">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        

      </div>
      

      <h2>Top bids from popular creators </h2>

      <div className="auction2">
        {auction2}
      </div>
      
    
    </div>
    

  )
}
