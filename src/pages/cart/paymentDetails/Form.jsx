import React from 'react'
import Metamask from '../../../assets/paymentDetails/metamask.jsx'
//import { ReactComponent as Meta } from '../../../assets/paymentDetails/metamask.svg'
//import { ReactComponent as Coin } from '../../../assets/paymentDetails/coin.svg'
import Coinbase from '../../../assets/paymentDetails/coinbase'
import WalletConnect from '../../../assets/paymentDetails/walletconnect.jsx'
import Phantom from '../../../assets/paymentDetails/phantom.jsx'
import cross from '../../../assets/paymentDetails/cross.svg'
//import { ReactComponent as Cross } from '../../../assets/paymentDetails/cross.svg'


export default function Form() {
  return (
    <div>
    <div id='form'>

        <div className="form-head">
            <label className='select-wallet'><input type='radio' name='wallet'/>Select your wallet</label>

            <p className='hide-desktop' style={{color: '#747474'}}>Connect with one of our available wallet providers or add and connect a new wallet. </p>

            <div className="wallet-icons">
                <Metamask rx='5'/>
                <Coinbase />
                <WalletConnect  />
                <Phantom />
                

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
