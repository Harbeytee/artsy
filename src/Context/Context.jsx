import React, { createContext, useState, useEffect, useReducer } from 'react'

const Context = createContext()
import data from '../pages/marketplace/artwork'
import contextHooks from './contextHooks'



export default function Provider(props) {
  const artwork = JSON.parse(localStorage.getItem('artwork')) || data
  const [index, setIndex] = useState(1)
  const [msg, setMsg] = useState({message: '', color: ''})
  const [displayMessage, setDisplayMessage] = useState(false)

  const [art, dispatch] = useReducer(contextHooks, artwork)
  
  useEffect(() => {
    const timeout = setTimeout(() => {
        setDisplayMessage(false)
    }, 1000);
  
    return () => {
      clearTimeout(timeout)
    }
  }, [msg, displayMessage])

  useEffect(() => {
      localStorage.setItem('artwork', JSON.stringify(art))

  }, [art])

  

  function changeIndex(val) {
    setIndex(val)
  }


  function changeMessage(m) {
      setMsg(m)
      setDisplayMessage(true)
  }
  


  return (

    <Context.Provider value={{index, changeIndex, art, msg, changeMessage, displayMessage, dispatch}}>
      {props.children}
    </Context.Provider>
  )
}

export { Context }