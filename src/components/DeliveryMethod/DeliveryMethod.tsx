import React, { useState } from 'react'
import Radio from '@mui/material/Radio';
import { Box } from '@mui/material';
import './DeliveryMethod.css'

const DeliveryMethod = () => {

    const [isSelected, setIsSelected] = useState(false);

    const handleBoxClick = () => {
      setIsSelected(!isSelected);
    };
  return (
    <Box
    sx={{
      border: `1px solid ${isSelected ? '#888' : "#E5E5E5"}`,
      margin:0,
      padding:0,
      width:'400px'
  
    }}
    onClick={handleBoxClick}
  >
    <div className='delivery-method'>

        <div className='delivery-method'>

        <Radio
            sx={{
              "&.MuiRadio-colorPrimary.Mui-checked": {
                color: "green",
              },
            }}
            checked={isSelected}
          />
          
        </div>
        <div className='delivery-method-details'>
             <div className='delivery-method-header'>
                    <h4>standard Delivey</h4>
                    <span>7dt</span>
             </div>
             <div className='delivery-method-content'>
                     Lorem ipsum dolor sit amet consectetur.
             </div>
    
        </div>
      
    </div>
    </Box>
  )
}

export default DeliveryMethod
