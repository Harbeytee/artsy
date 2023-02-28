import React, { useContext, useEffect} from 'react'
import CartHead from './components/CartHead'
import { Link, Outlet } from 'react-router-dom'
import { Context } from '../../Context/Context'
export default function Cart({turnOn, turnOff}) {
  const { art} = useContext(Context)

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  
    
  }, [])

  console.log(art)
  return (
    
    <div id='cart'>
        {art.some(item => item.inCart == true)
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
