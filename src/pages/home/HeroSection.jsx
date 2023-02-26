import React from 'react'
import { useState, useEffect } from 'react'
import heromobile1 from '../../assets/home/heroMobile/img1.svg'
import heromobile2 from '../../assets/home/heroMobile/img2.svg'
import heromobile3 from '../../assets/home/heroMobile/img3.svg'
import sliderData from './sliderData'
import fadeinAnimation from '../../hooks/fadeinAnimation'

export default function HeroSection() {
 
  const [num, setNum] = useState(0)
  
  const { changeVisibility } = fadeinAnimation(3)

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
         
        <div className='hero-mobile'>
          <img style={{opacity: changeVisibility(0)}} src={heromobile1} alt="hands holding a bunch of flowers"  />
          <img style={{opacity: changeVisibility(1)}} src={heromobile2} alt="hands holding a bunch of flowers"  />
          <img style={{opacity: changeVisibility(2)}} src={heromobile3} alt="hands holding a bunch of flowers"  />
        </div>
        
          
        </div>
        
    
    </section>
  )
}
