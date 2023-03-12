import React, { useState, useEffect } from 'react'
import Like from '../../../../assets/marketplace/Like'
import './HeartAnimation.scss'

export default function HeartAnimation() {
    const [heart, setHeart] = useState([])
    const [heartCounter, setHeartCounter] = useState(1)

    function letters() {
        let b =  Math.floor((Math.random() * 100 )+ 1)
        let randomAnimation = ['flowOne', 'flowTwo', 'flowThree'] //a random animation of the heart
        let randomColour = ['col1','col2', 'col3', 'col4', 'col5', 'col6',]
        let randomSecond = (Math.random() * (1.6 - 1.2) + 1.2).toFixed(1)
  
       
  
        return {b, randomAnimation ,randomSecond , randomColour}
      }
      
      
     
      useEffect(() => {
        
        const interval = setInterval(() => {
            const {randomAnimation ,randomSecond , randomColour} = letters()
            
  
            const color= randomColour[Math.floor(Math.random() * 6)]
            const  width =`${Math.floor(Math.random() * (50 - 22) + 22)}px`
            const  animation = `${randomAnimation[Math.floor(Math.random() * 3)]} ${randomSecond}s linear`
         
            const newHeart = (
              <div key={heartCounter} style={{animation: animation, width: width, display: 'block'}} className={`heart ${color} `}>
                    
                        <Like stroke='none' onClick={() => {}} />
                     
                  </div>
            )
       
            setHeart(prev => [...prev, newHeart])
            setHeartCounter(prev => prev >= 100 ? 1 : prev + 1)

         setTimeout(() => {
        
          setHeart(prev => prev.filter(item => Number(item.key) !== heartCounter ))
          },randomSecond * 900)
        
        }, 100)
          
        
      return () => {
        clearInterval(interval)
        1
      }
    
    }, [heart])
 
  return (
    <div className="hearts">
              {heart}
              </div>
  )
}
