import React from 'react'
import './PaymentMethod.css'
import { Icon } from '@iconify/react';
const PaymentMethod = () => {
  return (
    <div className='payment-method'>
       <h4>Payment Method</h4>
        <ul>
            <li><Icon icon="bi:cash-coin" className='cash-icon'/> Cash On Delivery</li>
      
        </ul>
    </div>
  )
}

export default PaymentMethod
