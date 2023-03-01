import React, { useState, useContext, useEffect } from 'react'
import '../Cart.scss'
import { Link } from 'react-router-dom'
//import cart from '../cart'
import xmark from '../../../assets/icons/x-mark.svg'
import ShippingDetails from './ShippingDetails'
import { Context } from '../../../Context/Context'

export default function ShoppingCart({on, turnOn, turnOff}) {
    //1145px
    const[display, setDisplay] = useState('')
    const { art, dispatch } = useContext(Context)
    const cart = art.filter(item => item.inCart == true)
    const [index, setIndex] = useState(1)
    //const [on, setOn] = useState(false)
    const changeColour = (val) => {

    return val === index? 'clicked': 'unclicked'

    }
    
    const style={
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer'
    }
    useEffect(() => {
      window.scrollTo({top: 0, left: 0,});
    
      //turnOff()
    }, [])

    useEffect(() => {
        // if (window.matchMedia('(max-width:1145px)').matches && on == true) {
        //     setDisplay('none')
        // }
        // else if(window.matchMedia('(max-width:1145px)').matches && on == false){
        //     setDisplay('block')
        // }
        // window.addEventListener('resize', () => {
        //     if (window.matchMedia('(max-width:1145px)').matches && on == true) {
        //         setDisplay('none')
        //     }
        //     else if(window.matchMedia('(max-width:1145px)').matches && on == false){
        //         setDisplay('block')
        //     }
        // })
        // if (!window.matchMedia('(max-width:1145px)').matches) {
        //     setDisplay('block')
        // }
        // window.addEventListener('resize', () => {
        //     if (!window.matchMedia('(max-width:1145px)').matches) {
        //         setDisplay('block')
        //     }
        // })
        window.matchMedia('(max-width:1145px)').matches ? on ? setDisplay('none'): setDisplay('block'): setDisplay('block')
        window.addEventListener('resize', () => {
            window.matchMedia('(max-width:1145px)').matches ? on ? setDisplay('none'): setDisplay('block'): setDisplay('block')
        })
        
    }, [on])
    

    const total = cart.map(val => val.price).reduce((prev, current) => (prev + current))
    

    const cartItems = cart.map((val, index) => (
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
                        <button onClick={() => dispatch({type:'DECREASE QUANTITY', id: val.id})} style={style}>-</button>
                        <span>{val.quantity}</span>
                        <button onClick={() => dispatch({type:'INCREASE QUANTITY', id: val.id})} style={style}>+</button>
                    </div>

                </div>

            </div>

            <div className="cart-y">
                <img onClick={() => dispatch({type:'REMOVE FROM CART', id: val.id})} src={xmark} alt="" className="remove-item" />
                <p className="cart-price">${val.price.toFixed(2)}</p>
            </div>

        </div>
    ))

  return (
    
    <div className='cart-animation' >
        <ShippingDetails id='shipping-details' turnOff={turnOff} /*className='hide-mobile'*/ style={{width: on? '100%' :'0%', height: on? '100%' :'00px',  transition: 'all 0.4s linear' ,overflow: 'hidden',  overflowY: 'hidden', whiteSpace:'nowrap'}} />
    
        <div style={{width: '100%', marginLeft: on? '2rem' : 0, display: display}} id="shopping-cart">
            

            <nav className=' hide-desktop cart-nav'>
                <Link to='/'>Home/ </Link>
                <Link to='/marketplace'>Marketplace/ </Link>
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
                        <span>{cart.length} item{cart.length > 1 && 's'}</span>

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
                

                {!on && <div className="last-buttons">
                    <Link onClick={() => turnOn()} className='blue' >Proceed to checkout</Link>
                    {/* <Link className='hide-desktop blue' to='/cart/shipping'>Proceed to checkout</Link> */}
                    {/* <Link  className='hide-desktop blue'to='shipping'>Proceed to checkout</Link> */}
                    <Link to='/marketplace'>Continue shopping</Link>

                </div> }
                
            </div>

        </div>
    </div>
     
  )
}
