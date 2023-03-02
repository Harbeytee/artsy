import React from 'react'
import { Link } from 'react-router-dom'
import '../Cart.scss'
import './PaymentDetails.scss'
import padlock from '../../../assets/paymentDetails/padlock.svg'
import Form from './Form'
import PaymentSummary from './PaymentSummary'

export default function PaymentDetails({changeIndex}) {
  React.useEffect(() => {
    changeIndex(3)
  }, [])
  return (
    <div id='payment-details'>
      
        <nav className='hide-desktop cart-nav'>
            <Link>Home/ </Link>
            <Link>Marketplace/ </Link>
            <Link>Cart/ </Link>
            <Link>Shipping/ </Link>
            <Link>Payment </Link>
            

        </nav>
        <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '3.5rem'}}>
          <h3 className='hide-mobile payment-method'>Payment method</h3>
          <div className="secure-server">
            <img src={padlock} alt="padlock icon" className="padlock" />
            Secure server
          </div>

        </div>
        
        <div className="form-flex">
          <Form />
          <PaymentSummary />

        </div>
        

        

        
    </div>
  )
}
