import React, { useState } from 'react'
import Radio from '@mui/material/Radio';
import { Box } from '@mui/material';
import './ShipAddress.css'

const ShipAddress = () => {
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
    <div className='ship-address'>

        <div className='ship-adress-radio'>

        <Radio
            sx={{
              "&.MuiRadio-colorPrimary.Mui-checked": {
                color: "green",
              },
            }}
            checked={isSelected}
          />
          
        </div>
        <div className='ship-address-details'>
             <div className='ship-address-header'>
                    <h4>Jhon Doe (default)</h4>
                    <button>Home</button>
             </div>
             <div className='ship-address-content'>
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit. In consectetur labore nisi, quae maiores temporibus.
             </div>
             <div className='ship-address-btns'>
                   <button>Edit</button>
                   <button>Remove</button>
             </div>
        </div>
      
    </div>
    </Box>
  )
}

export default ShipAddress
