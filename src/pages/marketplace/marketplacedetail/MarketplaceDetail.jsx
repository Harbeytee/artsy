import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import artwork from '../artwork'
import { Link } from 'react-router-dom'
import './MarketplaceDetail.scss'
import Like from '../../../assets/marketplace/Like'
import eth from '../../../assets/icons/eth.svg'
import Left from '../../../assets/marketplace/left'
import Right from '../../../assets/marketplace/right'
import carousel from './carousel'
import { Context } from '../../../Context/Context'

export default function MarketplaceDetail() {
    const { changeIndex } = useContext(Context)

    useEffect(() => {
        changeIndex(2)

    }, [])
    const { id } = useParams()
    const detail = artwork.find(val => val.name == id)
    
    const style = {
       color: '#BCB7B7'
    }
   //const [position.width, setLength] = useState();
    const [position, setPosition] = useState({
        left: 0,
        width: 0
    })
    /*window.matchMedia('(max-width: 959px)').matches && */useEffect(() => {
        setPosition(prev => ({...prev, width: document.querySelector('.slider-wrapper').offsetWidth}))

    }, [])
    //setPosition(prev => ({...prev, width: document.querySelector('.slider-wrapper').offsetWidth}))
    useEffect(() => {
        //setLength(document.querySelector('.slider-wrapper').offsetWidth)
        
        //setPosition(prev => ({...prev, width: document.querySelector('.slider-wrapper').offsetWidth}))
        window.addEventListener("resize", function() {
           
            setPosition(prev => ({...prev, width: document.querySelector('.slider-wrapper').offsetWidth}))
           
        })
       


        
    }, [])

   
   /*  const sliderStyle={
        length: position.width
     }*/
    
   // const [wrapper, setWrapper] = useState('')
     const [count, setCount] = useState(0)

   const nextSlide = () => {
    if(count < carousel.length - 1 ) {
        setCount(prev => prev + 1)
        setPosition(prev => ({...prev, left: `-${(count + 1) * position.width}px`}))
    }
       
   
   }
   

   const prevSlide = () => {
    if(count >=1) {
         setCount(prev => prev - 1)
        setPosition(prev => ({...prev, left: `-${(count - 1) * position.width}px`}))
       
    }
       
    }


    
    const slide = carousel.map((val, index) => (
        <div style={{width: window.matchMedia('(max-width: 959px)').matches ? position.width: '446px'}} className="slide" key={val.id}>
            <Like className='slide-heart'/>

            
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
            <div className="slide-controls hide-desktop">
                     <Left fill={count === 0? '#616161': 'white'} style={{borderColor: count === 0? '#616161': 'white'}} className='slide-control' handleClick={prevSlide}/> 
                    <Right fill={count === carousel.length - 1? '#616161': 'white'} style={{borderColor: count === carousel.length - 1? '#616161': 'white'}} className='slide-control' handleClick={nextSlide} />

            </div>
            <div style={{left: position.left}} className="slider">
                {slide}

            </div>

        </div>
        <button className="explore">Explore all</button>
        
    </div>
  )
}