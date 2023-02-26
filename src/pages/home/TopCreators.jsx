import React, { useState, useEffect} from 'react'
import image1 from '../../assets/home/topcreatorsAnimation/image1.svg'
import image2 from '../../assets/home/topcreatorsAnimation/image2.svg'
import image3 from '../../assets/home/topcreatorsAnimation/image3.svg'


export default function TopCreators() {
  const [index, setIndex] = useState(0)
  
  const array = [image1, image2, image3]
  
  useEffect(() => {
    if(index == array.length) {
      setIndex(0)
    }
    else {
      const animate = setInterval(() => {
          setIndex(index + 1)
      }, 4000)
    
      return () => {
        clearInterval(animate)
      }

    }
    console.log(index)
   
  }, [index])

  function changeVisibility(val) {
      return val === index? 1 : 0
  }
  
  

  return (
    <section id='top-creators'>
          <h3>TOP CREATORS OF THE WEEK</h3>
          <p>“Everything always looked better in black and white. 
            Everything always  as if it were the first time; there's 
            always more people in a black and white photograph.
             It just makes it seem that there were more people at a gig, 
             more people at a football match, than with colour photography.
              Everything looks more exciting.”– Jack Lowden
          </p>
          <div  className="top-creators-animation">
              <img style={{opacity: changeVisibility(0)}} src={array[0]} alt="" />
              <img style={{opacity: changeVisibility(1)}} src={array[1]} alt="" />
              <img style={{opacity: changeVisibility(2)}} src={array[2]} alt="" />            
            
          </div>
          <p className='circa'>CIRCA</p>
          <p className='year'>1985</p>
    </section>
  )
}
