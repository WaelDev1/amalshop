import React from 'react'
import { Icon } from '@iconify/react';
import './OrderDetailsId.css'

const OrderDetailsId = () => {
  return (
    <div className='order-details-id'>
       <div className='icon-wrapper'>
           <Icon icon="fluent-mdl2:shop" className='order-icon'/>
       </div>
       <div className='order-details'>
           <h3>Order ID #0012345</h3>
           <span>2 items</span><Icon icon="tabler:point-filled" className='point-icon' /><span>On Delivery</span>
       </div> 
    </div>
  )
}

export default OrderDetailsId
