import React, {useContext} from 'react'
import CartHead from './components/CartHead'
import { Link, Outlet } from 'react-router-dom'
import { Context } from '../../Context/Context'
export default function Cart({turnOn, turnOff}) {
  const { cart } = useContext(Context)
  return (
    
    <div id='cart'>
        {cart.length > 0
        ?
        <>
        <CartHead turnOn={turnOn} turnOff={turnOff}/>
        
        <Outlet />
        </>
        :
          <div>nothing dey here g</div>
        }

        
    </div>
  )
}
