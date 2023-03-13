import React, { useContext, useEffect} from 'react'
import CartHead from './components/CartHead'
import { Link, Outlet } from 'react-router-dom'
import { Context } from '../../Context/Context'
export default function Cart({turnOn, turnOff, index, changeIndex}) {
  const { art} = useContext(Context)

  useEffect(() => {
    window.scrollTo({top: 0, left: 0});
  
    
  }, [])

  return (
    
    <div id='cart'>
        {art.some(item => item.inCart == true)
        ?
        <>
        <CartHead index={index} changeIndex={changeIndex} turnOn={turnOn} turnOff={turnOff}/>
        
        <Outlet />
        </>
        :
          <div>nothing dey here g</div>
        }

        
    </div>
  )
}
