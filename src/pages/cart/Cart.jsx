import React, { useContext, useEffect} from 'react'
import CartHead from './components/CartHead'
import { Link, Outlet } from 'react-router-dom'
import { Context } from '../../Context/Context'
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
          <div>nothing dey here g</div>
        }

        
    </div>
  )
}
