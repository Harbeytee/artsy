import React, { useState } from 'react'
import '../Cart.scss'
import './CartHead.scss'
import { Link } from 'react-router-dom'
export default function CartHead({turnOn, turnOff, index, changeIndex}) {
    //const [index, setIndex] = useState(1)
    const changeStyle = (val) => {
        return val === index? 'active': 'inactive';
    }
    
    const changeLine = () => {
        if(index === 1) {
            return '-5%'
        }
        else if(index === 2) {
            return '48%'
        }
        else {
            return '102%'
        }

    }


    // React.useEffect(() => {
    //     console.log(index)
    // }, [index])
  return (
   <>
    <div id='cart-head' className="hide-mobile">
        
       
            <Link to='/cart' className={changeStyle(1)} onClick={() => {changeIndex(1), turnOff()}}>Shopping cart</Link>
            <Link to='/cart' className={changeStyle(2)} onClick={() => {  changeIndex(2), turnOn()}}>Shipping details</Link>
            <Link to='/cart/payment' className={changeStyle(3)} onClick={() => changeIndex(3)}>Payment details</Link>

        

        
        
        
    </div>
    <div className="underline-body" style={{backgroundPosition: changeLine()}}>
        {/* <div className="underline"></div> */}

    </div>
    
    </>
  )
}
