import React, { useState, useEffect } from 'react'

export default function fadeinAnimation(val) {

    const [index, setIndex] = useState(0)

  
  useEffect(() => {
    if(index == val) {
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
  
  return { changeVisibility }
}
