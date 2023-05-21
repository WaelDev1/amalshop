import React from 'react'
import './OrderSummary.css'
const OrderSummary = () => {
  return (
    <div className='order-summary'>
        <h4>Order Summary</h4>
        <ul>
            <li>Items (2) <span>238 DT</span></li>
            <li>Shipping <span>8 DT</span></li>
            <li>Discount <span>10 DT</span></li>
            <li  className='total-price'>Total Price <span>357 DT</span></li>
        </ul>
    </div>
  )
}

export default OrderSummary
