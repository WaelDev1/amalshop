import React from 'react'
import 'QuantityContainer.css'
import Counter from '../Counter'
const QuantityContainer = () => {
  return (
    <div>
        <Counter width="100" Count={0} colorButton='red' bgColorCounter='green' colorText='black'/>
  
 
    </div>
  )
}

export default QuantityContainer