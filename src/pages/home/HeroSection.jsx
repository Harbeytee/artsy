import React from 'react'
import { useState, useEffect } from 'react'
import heromobile from '../../assets/home/heromobile.svg'
import sliderData from './sliderData'
export default function HeroSection() {
 
  const [num, setNum] = useState(0)
  

    if(num > sliderData.length - 1) {
      setNum(0)
    }
    else {
      useEffect(() => {
      const increaseNum = setInterval(() => {
        setNum(num + 1)
      }, 1500);
      return () => {
        clearInterval(increaseNum)
      }
    }, [num])
    }
    
 
   
    

   
  
  


    
  const images = sliderData.map((val, index) => {

    //setNum(index)

    
    
    
    return (
    <div key={val.id} className="slide-container">
      <div style={{marginLeft: index + num > sliderData.length - 1 // if index is greater than the sider length -1 image won't show the code sets it back to first image
        ? 
        `-${(num - index) * 320}px` :`-${(index + num) * 320}px`}} className="slide-images">
        {sliderData.map(item => <img src={item.img}/>)}
        
        

      </div>

    </div>)
})

  return (
    <section className='hero' >
        <h1>Photography is poetry & beautiful untold stories</h1>
        <p>Flip through more than 10,000 vintage shots, old photograghs, 
          historic images and captures seamlessly in one place. Register to get top access.
        </p>
        <div className="slide">
          {images}
         

        <img src={heromobile} alt="hands holding a bunch of flowers" className="hero-mobile" />
          
        </div>
        
    
    </section>
  )
}
