import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react';
import OrderDetailsId from '../components/OrderDetailsId/OrderDetails';
import './OrderHistory.css'
import OrderSummary from '../components/OrderSummary/OrderSummary';
import OrderShippingIformation from '../components/OrderShippingInformation/OrderShippingIformation';
import PaymentMethod from '../components/PaymentMethod/PaymentMethod';
import OrderDetailsBox from '../components/OrderDetailsBox/OrderDetailsBox';
const OrderHistory = () => {
  return (
    <div className='order-history'>
        <div className='order-history-links'>
            <Link to={"/profilePage"}><Icon icon="mingcute:left-line" className='arrow-icon'/> Order Details</Link>
        </div>
        <OrderDetailsId />
        <p>Purchase Date: <b>Jan 18,2021</b></p>
        <OrderDetailsBox />
        <OrderDetailsBox />
        <OrderSummary />
        <OrderShippingIformation />
        <PaymentMethod />
    </div>
  )
}

export default OrderHistory
