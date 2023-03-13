import React, { useEffect, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import product from './product'
import './Auctions.scss'
import Like from '../../assets/marketplace/Like'
import { Context } from '../../Context/Context' 
import countDown from '../../hooks/countDown'

export default function Auctions() {
  const {time, showTime} =countDown()
  const { changeIndex } = useContext(Context)
  const [fill, setFill] = useState(false)
  const [secondAuction, setSecondAuction] = useState(product.auction2)
  useEffect(() => {
    changeIndex(3)
    window.scrollTo({top: 0, left: 0});

  }, [])
  
   
    function changeFill(id) {
      setSecondAuction(prev => prev.map(item => (item.id == id? {...item, isLiked: !item.isLiked} : item)))
    }
    
  
  

  const auction1 = product.auction1.map((item, index) => (
    <Link className='auction-img-container' to={`${item.id}`} key={index}>
        <div /*style={{width: '100px', height: '100%', backgroundColor: 'red', position: 'absolute', zIndex: '2'}}*/ className="auction-shadow"></div>
        <div className='auction1-img' style={{backgroundImage: `url(${item.img})`}}>
          <div className="timer">{React.useMemo(() => showTime(time), [time])}</div>

        </div>
    </Link>
    
  ))
  const auction2 = secondAuction.map(item => (
    <div key={item.id}>
      

      <div className="auction2-card">
      <Like className='heart' stroke={item.isLiked? 'none' : '#333333'} fill={item.isLiked? 'red' : 'none'} onClick={() => changeFill(item.id)}/>
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
