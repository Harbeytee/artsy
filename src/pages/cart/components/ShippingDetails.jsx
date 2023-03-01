import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../Cart.scss'
import './ShippingDetails.scss'
import {ReactComponent as Drop} from '../../../assets/marketplace/drop.svg'

//import { useNavigate } from 'react-router-dom'

export default function ShippingDetails({style={}, className='', turnOff={}}) {
  const nav = useNavigate()
  const selectStyle={
    display: 'flex',
   flexDirection: 'column',
   position: 'relative'
  }

  // useEffect(() => {
  //   window.matchMedia('(min-width:760px)').matches && nav('/cart')
  //   window.addEventListener('resize', () => {
  //     window.matchMedia('(min-width:760px)').matches && nav('/cart')
  //   })
  // }, [])

  return (
    <div style={style} id='shipping-details' className={className}>
        <nav className=' hide-desktop cart-nav'>
            <Link to='/'>Home/ </Link>
            <Link to='/marketplace'>Marketplace/ </Link>
            <Link to='/cart'>Cart/ </Link>
            <Link>Shipping </Link>
            

        </nav>
       <form>
        <label htmlFor="email">Your email</label>
        <input type="email" name="email" placeholder='aanuoluwateenah@gmail.com'/>

        <label className='updates'><input type="checkbox" />Get updates about new drops & exclusive offers</label>

        <div style={selectStyle}>
          <Drop />
          <label htmlFor="wallet">Choose a wallet</label>
          <select name="wallet" id="wallet">
            
            <option value=""></option>
            <option value="algorand">Algorand</option>
            <option value="metamask">Metamask</option>
            <option value="coinbase">Coinbase</option>
            
          </select>

        </div>
        
        <div style={selectStyle}>
          <Drop />
          <label htmlFor="city">City</label>
          <select name="city" id="city">
            <option value=""></option>
            <option value="texas">Texas</option>
            <option value="los angeles">Los angeles</option>
            <option value="miami">Miami</option>
          </select>

        </div>
        
        <div style={selectStyle}>
          <Drop />
          <label htmlFor="country">Country</label>
          <select name="country" id="country">
            <option value=""></option>
            <option value="USA">USA</option>
            <option value="Australia">Australia</option>
            <option value="Canada">Canada</option>
          </select>

        </div>
        

        <label htmlFor="postalcode">Postal code</label>
        <input type="text" name="postalcode" />

        <label htmlFor="number">Phone number</label>
        <input type="number" name="number" />

       </form>

       <div className="last-buttons">
          <Link className='blue' to='/cart/payment'>Proceed to payment</Link>
          <Link onClick={() => turnOff()} to='/cart'>Go back to cart</Link>

      </div>
    </div>
  )
}
