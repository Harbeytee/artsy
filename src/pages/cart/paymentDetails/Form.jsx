import React, { useState, useEffect, useRef } from 'react'
import Metamask from '../../../assets/paymentDetails/metamask.jsx'
import Coinbase from '../../../assets/paymentDetails/coinbase'
import WalletConnect from '../../../assets/paymentDetails/walletconnect.jsx'
import Phantom from '../../../assets/paymentDetails/phantom.jsx'
import cross from '../../../assets/paymentDetails/cross.svg'
import { Link } from 'react-router-dom'



export default function Form() {
    const [rx, setRx] = useState('20')
    const [wallet, setWallet] = useState(<Metamask rx='5'/>)
    const inputRef = useRef('')
    const [value, setValue] = useState('')
  useEffect(() => {
    window.matchMedia('(min-width: 760px)').matches ? setRx('5') : setRx('20')
    window.addEventListener('resize', () => {
      window.matchMedia('(min-width: (760px)').matches ? setRx('5') : setRx('20')
    })

  }, [])
  

  const column = {
    display: 'flex',
    flexDirection: 'column'
  }

  const changeWallet = (val) => {
      if (val === 'metamask') {
        setWallet(<Metamask rx='5'/>)
      }
      else if(val === 'coinbase') {
        setWallet(<Coinbase rx='5'/>)
      }
      else if(val === 'walletconnect') {
        setWallet(<WalletConnect rx='5'/>)
      }
      else {
        setWallet(<Phantom rx='5'/>)
      }
  }

  function formatString2(e) {
    var inputChar = String.fromCharCode(e.keyCode);
    var code = e.keyCode;
    var allowedKeys = [8];
    if (allowedKeys.indexOf(code) !== -1) {
      return;
    }
  
    e.target.value = e.target.value.replace(
      /^([1-9]\/|[2-9])$/g, '0$1/' // 3 > 03/
    ).replace(
      /^(0[1-9]|1[0-2])$/g, '$1/' // 11 > 11/
    ).replace(
      /^([0-1])([3-9])$/g, '0$1/$2' // 13 > 01/3
    ).replace(
      /^(0?[1-9]|1[0-2])([0-9]{2})$/g, '$1/$2' // 141 > 01/41
    ).replace(
      /^([0]+)\/|[0]+$/g, '0' // 0/ > 0 and 00 > 0
    ).replace(
      /[^\d\/]|^[\/]*$/g, '' // To allow only digits and `/`
    ).replace(
      /\/\//g, '/' // Prevent entering more than 1 `/`
    );
  }



  return (
    <div>
    <div id='form'>

        <div className="form-head">
            <label className='select-wallet'><input type='radio' defaultChecked={true} name='wallet'/>Select your wallet</label>

            <p className='mobile' style={{color: '#747474'}}>Connect with one of our available wallet providers or add and connect a new wallet. </p>

            <div className="wallet-icons">
                <Metamask onClick={() => changeWallet('metamask')} rx={rx}/>
                <Coinbase onClick={() => changeWallet('coinbase')} rx={rx}/>
                <WalletConnect  onClick={() => changeWallet('walletconnect')} rx={rx}/>
                <Phantom onClick={() => changeWallet('phantom')} rx={rx}/>
                
                
                <img className='hide-desktop' src={cross} alt="" />
            </div>
            

        </div>

        <p className='desktop' style={{color: '#747474', fontSize: '24px', width: '461px', textAlign:'jusify', marginBottom: '1rem'}}>
          Connect with one of our available wallet providers or add and connect a new wallet. 
        </p>

        
      
        
          <form>
            <label htmlFor="walletType">Wallet type</label>
            <input type="text" name='walletType'/>

            <label htmlFor="key">Key</label>
            <input type="text" name='key' placeholder='Please enter your key'/>
            <div className='payment-flex'>
              <div style={column}>
                <label htmlFor="expiry">Expiry date</label>
                <input maxLength={5} ref={inputRef} onKeyUp={(e) => formatString2(e)} type="text" name='expiry' placeholder='MM/YY'/>
              </div>

              <div className='wallet-box' style={column}>
                
                <label htmlFor="cvv">CVV</label>
                <input type="password" minLength='3' maxLength='3' name='cvv' placeholder='***' autoComplete='on'/>
                {wallet}
              </div>
            </div>
            

            

            <label className='wallet-details'><input type="checkbox" />
            Save my wallet details & information for future transactions
            </label>

            

          </form>

     
        </div>
        <Link to='/confirmed' className='confirm-payment'>Confirm</Link>
    </div>
  )
}
