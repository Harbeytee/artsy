import React, { useState } from 'react'
import '../Cart.scss'
import { Link } from 'react-router-dom'
import cartData from '../cartData'
import xmark from '../../../assets/icons/x-mark.svg'
import ShippingDetails from './ShippingDetails'

export default function ShoppingCart({on, turnOff}) {
    const [index, setIndex] = useState(1)
    //const [on, setOn] = useState(false)
    const changeColour = (val) => {

    return val === index? 'clicked': 'unclicked'

    }

    React.useEffect(() => {
        turnOff()
    
    }, [])

    const total = cartData.map(val => val.price).reduce((prev, current) => (prev + current))
    

    const cartItems = cartData.map((val, index) => (
        <div style={{marginTop: '0'}} key={index} className="cart-card">

            <div className="cart-x">
                <div style={{backgroundImage: `url(${val.img})`}} className="cart-img"></div>
                {/*<img src={val.img} alt="" className="cart-img" />*/}
                <div className="cart-details">
                    <p className='hide-desktop'>{val.type}</p>
                    <h4>{val.name}</h4>
                    <p className='cart-artist'>{val.artist}</p>
                    <p>Size: <span className="cart-size">{val.size} ft</span></p>
                    <div className="change-quantity">
                        <span>-</span>
                        <span>{val.quantity}</span>
                        <span>+</span>
                    </div>

                </div>

            </div>

            <div className="cart-y">
                <img src={xmark} alt="" className="remove-item" />
                <p className="cart-price">${val.price.toFixed(2)}</p>
            </div>

        </div>
    ))

  return (
    
    <div className='cart-animation' >
        <ShippingDetails id='shipping-details' className='hide-mobile' style={{ width: on? '100%' :'0%',  transition: 'all 0.3s linear', marginRight: on? '2rem': '0', overflow: 'hidden'}} />
    
        <div style={{width: '100%', marginLeft: on? '2rem' : 0}} id="shopping-cart">
            

            <nav className=' hide-desktop cart-nav'>
                <Link>Home/ </Link>
                <Link>Marketplace/ </Link>
                <Link>Cart </Link>
                

            </nav>
            <div className="hide-desktop">
                <span className={changeColour(1)} onClick={() => setIndex(1)}>Shop</span>
                <span className={changeColour(2)} onClick={() => setIndex(2)}>Schedule</span>
            </div>

            <div className="cart-cards">{cartItems}</div>

            <div style={{display: on? 'block' : 'grid'}} className="checkout">
                <div className="checkout-first">
                    <div>
                        <span>Products in cart :</span>
                        <span>{cartData.length} items</span>

                    </div>
                    <div>
                        <span>Shipping :</span>
                        <span>$2.50</span>

                    </div>
                    <div>
                        <span>Total : </span>
                        <span>${total.toFixed(2)}</span>

                    </div>
                    <div className='grand-total'>
                        <span>Grand total : </span>
                        <span>${(total + 2.50).toFixed(2)}</span>

                    </div>

                </div>
                

                {!on && <div  className="last-buttons">
                    <Link to='shipping'>Proceed to checkout</Link>
                    <Link to='/marketplace'>Continue shopping</Link>

                </div> }
                
            </div>

        </div>
    </div>
     
  )
}
