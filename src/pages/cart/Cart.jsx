import React, { useContext, useEffect} from 'react'
import CartHead from './components/CartHead'
import { Link, Outlet } from 'react-router-dom'
import { Context } from '../../Context/Context'
import cartIcon from '../../assets/icons/cart-icon.svg'
export default function Cart({turnOn, turnOff, index, changeIndex2}) {
  const { art, changeIndex} = useContext(Context)


  useEffect(() => {
    window.scrollTo({top: 0, left: 0});
    changeIndex('')
    
  }, [])

  return (
    
    <div id='cart'>
        {art.some(item => item.inCart == true)
        ?
        <>
        <CartHead index={index} changeIndex={changeIndex2} turnOn={turnOn} turnOff={turnOff}/>
        
        <Outlet />
        </>
        :
          
          <div id='empty-cart'>
            <img src={cartIcon} alt="icon of an empty cart" />
            <h1>Your cart is empty</h1>
            <p>Lets go buy something</p>
            <Link to='/marketplace'>
              Shop Now
            </Link>
          </div>
        }

        
    </div>
  )
}
