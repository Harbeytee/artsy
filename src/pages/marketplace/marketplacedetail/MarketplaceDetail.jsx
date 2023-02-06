import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import artwork from '../artwork'
import { Link } from 'react-router-dom'
import './MarketplaceDetail.scss'
import Like from '../../../assets/marketplace/Like'
import eth from '../../../assets/icons/eth.svg'
import Left from '../../../assets/marketplace/left'
import Right from '../../../assets/marketplace/right'
import carousel from './carousel'

export default function MarketplaceDetail() {
    const { id } = useParams()
    const detail = artwork.find(val => val.id == id)
    console.log(detail)
    const style = {
       color: '#BCB7B7'
    }
   const [sLength, setLength] = useState();
    const [position, setPosition] = useState({
        left: 0,
        width: 0
    })
    useEffect(() => {

        setLength(document.querySelector('.slider-wrapper').offsetWidth)
        console.log(sLength)
        setPosition(prev => ({...prev, width: sLength}))
        
    }, [sLength])

   
     const sliderStyle={
        length: sLength
     }
    
   // const [wrapper, setWrapper] = useState('')
     const [count, setCount] = useState(0)

   const nextSlide = () => {
        setCount(prev => prev + 1)

        if(count == carousel.length) {
            
            setCount(0)
            

            
        

        }
        else {
            setPosition(prev => ({...prev, left: `-${count * sLength}px`}))
            console.log('working fine')
        }
   
   }

   const prevSlide = () => {
        console.log('prev slide')
        console.log(count)
        setCount(prev => prev - 1)
        if(count < 0) {
            setCount(carousel.length - 1)
            
            
            
        

        }
        else {
            setPosition(prev => ({...prev, left: `-${count * sLength}px`}))
            console.log('working fine')
            
        }

    }

   useEffect(() => {
        console.log(position.left)
        console.log(count)
   }, [position.left])

    
    const slide = carousel.map((val, index) => (
        <div style={{width: position.width}} className="slide" key={val.id}>
            
            
            <div style={{backgroundImage: `url(${val.img})`}} className='slide-img' >
                
            
            </div>
            <div className="slide-info">
                <div>{val.name}</div>
                <div className='slide-price'><img src={eth} alt="" />{val.price}</div>
            </div>

        </div>
       
    ))

  return (
    <div id='marketplace-detail'>
        <nav className='detail-header'>
          
          <Link style={style} to='/'>Home/</Link>
          <Link style={style} to='/marketplace'> Marketplace/</Link>
          <Link style={style} to='/marketplace'> Editorials/</Link>
          <span> {detail.name}</span>
         

        </nav>
        
        <div className="detail-card">
            <div className="detail-deets">
                <div style={{backgroundImage: `url(${detail.img})`}} className="detail-img"></div>
                <div className='detail-info hide-desktop'>
                    <p>{detail.name}</p>
                    <p>$ {detail.price}</p>
                </div>

            </div>
            
            <div className='detail-second'>
                <div className="detail-card-head ">
                    <p className="detail-name">{detail.name}</p>
                    <span className="detail-price"> <img src={eth} alt="" /> {detail.price / 50}</span>

                </div>
                <div>
                    <p className="creator">Creator: <span className="creator-name">Ali Dawa</span></p> 
                    <p>Made in Italy</p>
                    <p>Total views: 1.7K views</p>
                    <div className='cart-controls'>
                        <span>-</span>
                        <span>1</span>
                        <span>+</span>
                    </div>
                    <div className="detail-btn">
                        <button className='add-to-cart'>Add to cart</button>
                        <button className='like'><Like /></button>
                    </div>
                </div>
                <div className='detail-dropdown'>Description</div>
                <div className='detail-dropdown'>Listings</div>
                <div className='detail-dropdown'>Status</div>
            </div>

        </div>
        <p className='more'>More from this collection</p>
        <div className="detail-nav"> 
            <div>Explore more from this collection</div>
            <div>
                <span>
                    <Left className='chevron'/>
                </span>
                <span>
                    <Right className='chevron'/>
                </span>
            </div>
        </div>
        <div className='slider-wrapper'>
            <div className="slide-controls">
                    <Left fill='white' className='slide-control' handleClick={prevSlide}/>
                    <Right fill='white' className='slide-control' handleClick={nextSlide} />

                </div>
            <div style={{left: position.left}} className="slider">
                {slide}

            </div>

        </div>
        
    </div>
  )
}
