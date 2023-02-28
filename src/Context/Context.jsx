import React, { createContext, useState, useEffect } from 'react'

const Context = createContext()
import artwork from '../pages/marketplace/artwork'
import useIncreaseDecrease from './useIncreaseDecrease'
import contextHooks from './contextHooks'
import useAddRemove from './useAddRemove'
export default function Provider(props) {
  const { add, remove, cart} = useAddRemove()
  const {increaseQuantity, decreaseQuantity, art} = useIncreaseDecrease(artwork)
  const [index, setIndex] = useState(1)
  const [msg, setMsg] = useState({message: '', color: ''})
  const [displayMessage, setDisplayMessage] = useState(false)
  
  useEffect(() => {
    const timeout = setTimeout(() => {
        setDisplayMessage(false)
    }, 1000);
  
    return () => {
      clearTimeout(timeout)
    }
  }, [msg, displayMessage])
  

  function changeIndex(val) {
    setIndex(val)
  }


  function changeMessage(m) {
      setMsg(m)
      setDisplayMessage(true)
  }
  


  return (

    <Context.Provider value={{index, changeIndex, increaseQuantity, decreaseQuantity, art, add, remove, cart, msg, changeMessage, displayMessage}}>
      {props.children}
    </Context.Provider>
  )
}

export { Context }