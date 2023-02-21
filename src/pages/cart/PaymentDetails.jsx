import React from 'react'
import { Link } from 'react-router-dom'
import './Cart.scss'
import './PaymentDetails.scss'
import padlock from '../../assets/paymentDetails/padlock.svg'
import metamask from '../../assets/paymentDetails/metamask.svg'
import coinbase from '../../assets/paymentDetails/coinbase.svg'
import walletConnect from '../../assets/paymentDetails/walletconnect.svg'
import phantom from '../../assets/paymentDetails/phantom.svg'
import cross from '../../assets/paymentDetails/cross.svg'

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
        <div>
          <p>Paymment method</p>
          <div className="secure-server">
            <img src={padlock} alt="padlock icon" className="padlock" />
            Secure server
        </div>

        </div>
        

        <label className='select-wallet'><input type='radio' name='wallet'/>Select your wallet</label>

        <p>Connect with one of our available wallet providers or add and connect a new wallet. </p>

        <div className="wallet-icons">
          <img src={metamask} alt="" />
          <img src={coinbase} alt="" />
          <img src={walletConnect} alt="" />
          <img src={phantom} alt="" />
          <img src={cross} alt="" />
        </div>

        <form>
          <label htmlFor="walletType">Wallet type</label>
          <input type="text" name='walletType'/>

          <label htmlFor="key">Key</label>
          <input type="text" name='key' placeholder='Please enter your key'/>

          <label htmlFor="expiry">Expiry date</label>
          <input type="text" name='expiry'/>

          <label htmlFor="safeCode">Safe code</label>
          <input type="text" name='safeCode'/>

          <label className='wallet-details'><input type="checkbox" />
          Save my wallet details & information for future transactions
          </label>

          <button className='confirm-payment'>Confirm</button>

        </form>
    </div>
  )
}
