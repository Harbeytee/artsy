import React from 'react'
import { Link } from 'react-router-dom'
import './Cart.scss'
import './PaymentDetails.scss'

export default function PaymentDetails() {
  return (
    <div id='payment-details'>
        <nav className='hide-desktop cart-nav'>
            <Link>Home/ </Link>
            <Link>Marketplace/ </Link>
            <Link>Cart/ </Link>
            <Link>Shipping/ </Link>
            <Link>Payment </Link>
            

        </nav>
        PaymentDetails
    </div>
  )
}
