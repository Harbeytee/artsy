import React from 'react'
import { Link } from 'react-router-dom'
import '../Cart.scss'
import './ShippingDetails.scss'

export default function ShippingDetails({style={}, className=''}) {
  

  return (
    <div style={style} id='shipping-details' className={className}>
        <nav className=' hide-desktop cart-nav'>
            <Link>Home/ </Link>
            <Link>Marketplace/ </Link>
            <Link>Cart/ </Link>
            <Link>Shipping </Link>
            

        </nav>
       <form>
        <label htmlFor="email">Your email</label>
        <input type="email" name="email" placeholder='aanuoluwateenah@gmail.com'/>

        <label className='updates'><input type="checkbox" />Get updates about new drops & exclusive offers</label>

        <label htmlFor="wallet">Choose a wallet</label>
        <select name="wallet" id="wallet">
          <option value=""></option>
          <option value="algorand">Algorand</option>
          <option value="metamask">Metamask</option>
          <option value="coinbase">Coinbase</option>
        </select>

        <label htmlFor="city">City</label>
        <select name="city" id="city">
          <option value=""></option>
          <option value="texas">Texas</option>
          <option value="los angeles">Los angeles</option>
          <option value="miami">Miami</option>
        </select>

        <label htmlFor="country">Country</label>
        <select name="country" id="country">
          <option value=""></option>
          <option value="USA">USA</option>
          <option value="Australia">Australia</option>
          <option value="Canada">Canada</option>
        </select>

        <label htmlFor="postalcode">Postal code</label>
        <input type="text" name="postalcode" />

        <label htmlFor="number">Phone number</label>
        <input type="number" name="number" />

       </form>

       <div className="last-buttons">
          <Link to='/cart/payment'>Proceed to payment</Link>
          <Link to='/cart'>Go back to cart</Link>

      </div>
    </div>
  )
}
