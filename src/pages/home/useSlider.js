import { useState } from 'react'
import upcoming from '../../assets/home/upcoming.svg'

export default function useSlider() {
    const [count, setCount] = useState(0)
    const arrowStyle = {
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center', 
        padding: '1.3rem',
      }
      const src = [
        {
          img: upcoming,
          color: 'rgba(128, 128, 128, 0.3)',
        },
        {
          img:'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg',
          color: 'rgba(165, 42, 42, 0.5)',
        },
        {
          img: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          color: 'rgba(63, 63, 2, 0.5)',
          //color: 'rgba(136, 136, 14, 0.5)'
        },
        {
          img: 'https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          color: 'rgba(20, 77, 20, 0.5)'
        },
        { 
          img: 'https://images.pexels.com/photos/8135112/pexels-photo-8135112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          color: 'rgba(133, 90, 10, 0.5)'
        },
        {
          img: 'https://images.pexels.com/photos/12148587/pexels-photo-12148587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          color: 'rgba(107, 20, 107, 0.5)'
        },
        
      ]
    
      const nextSlide = () => {
        if(count < src.length - 1 ) {
            setCount(prev => prev + 1)
            //setPosition(prev => ({...prev, left: `-${(count + 1) * position.width}px`}))
        }
        
           
       
       }
       
    
       const prevSlide = () => {
        if(count >=1) {
             setCount(prev => prev - 1)
            //setPosition(prev => ({...prev, left: `-${(count - 1) * position.width}px`}))
           
        }
           
        }
        

  return {prevSlide, nextSlide, src, arrowStyle, count}
}
