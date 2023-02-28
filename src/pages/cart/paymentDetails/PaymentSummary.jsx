import React, { useContext } from 'react'
import { Context } from '../../../Context/Context'
export default function PaymentSummary() {
  const { art, dispatch } = useContext(Context)
  const cart = art.filter(item => item.inCart == true)
  const total = cart.map(val => val.price).reduce((prev, current) => (prev + current))
  return (
    <aside id='payment-summary' className='hide-mobile'>
        <h3>Payment Summary</h3>

        <div>
          <p style={{fontSize: '28px'}}>Metamask wallet : 002345KJi90pzzz3</p>
          <p style={{color: '#747474'}}>Actively linked to Yaba, Lagos Nigeria.</p>

        </div>

        <p>Expected arrival date: Between 22nd<br /> September and 26th September 20222</p>

        <div className='products-sum'>
          <div>
            <p>Products in cart : </p>
            <p>${total.toFixed(2)}</p>

          </div>
          
          <div>
            <p>Shipping : </p>
            <p>$2.50</p>

          </div>

          <div>
            <p>Total :</p>
            <p>${(total + 2.50).toFixed(2)}</p>

          </div>

        </div>
        
    </aside>
  )
}
