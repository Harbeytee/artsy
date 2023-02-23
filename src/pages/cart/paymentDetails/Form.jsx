import React from 'react'
import metamask from '../../../assets/paymentDetails/metamask.svg'
import coinbase from '../../../assets/paymentDetails/coinbase.svg'
import walletConnect from '../../../assets/paymentDetails/walletconnect.svg'
import phantom from '../../../assets/paymentDetails/phantom.svg'
import cross from '../../../assets/paymentDetails/cross.svg'


export default function Form() {
  return (
    <div>
    <div id='form'>

        <div className="form-head">
            <label className='select-wallet'><input type='radio' checked name='wallet'/>Select your wallet</label>

            <p className='hide-desktop' style={{color: '#747474'}}>Connect with one of our available wallet providers or add and connect a new wallet. </p>

            <div className="wallet-icons">
            <img src={metamask} alt="" />
            <img src={coinbase} alt="" />
            <img src={walletConnect} alt="" />
            <img src={phantom} alt="" />
            <img src={cross} alt="" />
            </div>

        </div>

        <p className='hide-mobile' style={{color: '#747474'}}>Connect with one of our available wallet providers or add and connect a new wallet. </p>

        
          

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

            

          </form>

     
        </div>
        <button className='confirm-payment'>Confirm</button>
    </div>
  )
}
