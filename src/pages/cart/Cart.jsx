import React from 'react'
import CartHead from './components/CartHead'
import { Link, Outlet } from 'react-router-dom'

export default function Cart({turnOn, turnOff}) {
  return (
    
    <div id='cart'>

        

        <CartHead turnOn={turnOn} turnOff={turnOff}/>
        
        <Outlet />
    </div>
  )
}
