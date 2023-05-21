import React from 'react'
import './OrderDetailsBox.css'
import { Icon } from '@iconify/react';

const OrderDetailsBox = () => {
  return (
    <div className='order-details-box'>
       <div className='order-details'>
              <div className='order-details-img'>
                   <img src="https://placehold.co/120x120"/>
                   <Icon icon="mdi:heart" className='heart-icon'/>
              </div>
              <div className='order-details-list'>
                 <ul>
                    <li className='p-name'>Sweat</li>
                    <li className='p-size'>Size: XS</li>
                    <li className='p-qnt'>Quantity: 1</li>
                    <li className='p-price'>119 DT</li>
                 </ul>
              </div>
       </div>
       <div className='total-price'>
              <p>Total Price <span>119 DT</span></p>
       </div>
    </div>
  )
}

export default OrderDetailsBox
