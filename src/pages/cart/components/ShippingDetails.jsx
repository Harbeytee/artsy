import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../Cart.scss'
import './ShippingDetails.scss'
import drop from '../../../assets/marketplace/drop.webp'
import phantom2 from '../../../assets/paymentDetails/phantom2.svg'
import metamask2 from '../../../assets/paymentDetails/metamask2.svg'
import coinbase2 from '../../../assets/paymentDetails/coinbase2.svg'

//import { useNavigate } from 'react-router-dom'

export default function ShippingDetails({style={}, className='', turnOff={}}) {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
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

        <label className='updates'>
          <input type="checkbox" />Get updates about new drops & exclusive offers
        </label>

        <label htmlFor="fullName">Your full name</label>
        <input type="text" name="fullName" placeholder='Anuoluwapo Bamisaye'/>

        <div onClick={() => setOpen(!open)} style={selectStyle}>
          <img style={{transform : open? 'rotateX(0)' : 'rotateX(180deg)'}} className='svg' src={drop} />
          <label htmlFor="wallet">Choose a wallet</label>
          <input type="text" name="wallet" value={input} disabled={true}/>
          <div style={{display: open ? 'grid' : 'none'}} className="wallet-dropdown">
            <span onClick={() => setInput('Coinbase')}>
              <img src={coinbase2} alt="" />
            </span>
            
            <span onClick={() => setInput('Phantom')}>
              <img src={phantom2} alt="" />
            </span>

            <span onClick={() => setInput('Metamask')}>
              <img src={metamask2} alt="" />
            </span>
          </div>
          {/* <select name="wallet" id="wallet">
            
            <option value=""></option>
            <option value="algorand">Algorand</option>
            <option value="metamask">Metamask</option>
            <option value="coinbase">Coinbase</option>
            
          </select> */}

        </div>
        
        <div style={selectStyle}>
        <img className='svg' src={drop} />
          <label htmlFor="city">City</label>
          <select name="city" id="city">
            <option value=""></option>
            <option value="texas">Texas</option>
            <option value="los angeles">Los angeles</option>
            <option value="miami">Miami</option>
          </select>

        </div>
        
        <div className="separate">
          <div style={selectStyle}>
            <img className='svg' src={drop} />
            <label htmlFor="country">Country</label>
            <select name="country" id="country">
              <option value=""></option>
              <option value="USA">USA</option>
              <option value="Australia">Australia</option>
              <option value="Canada">Canada</option>
            </select>

          </div>

          <div style={selectStyle}>
            <label htmlFor="postalcode">Postal code</label>
            <input type="text" name="postalcode" placeholder='001001'/>
          </div>

        </div>
        
        

        

        <label htmlFor="number">Phone number</label>
        <input type="number" name="number" placeholder='0812 3456 785'/>

       </form>

       <div className="last-buttons">
          <Link className='blue' to='/cart/payment'>Proceed to payment</Link>
          <Link onClick={() => turnOff()} to='/cart'>Go back to cart</Link>

      </div>
    </div>
  )
}
