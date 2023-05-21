// Generated with util/create-component.js
import React from "react";
import Box from '@mui/material/Box';
import { ProductNameProps } from "./ProductName.types";

import "./ProductName.css";

const ProductName: React.FC<ProductNameProps> = ({details,title , reference , price ,primaryColor,secondaryColor,promotion}) => (
    <Box   className='productName' style={{color:primaryColor}}>
         <Box className='productHeader'>
               <h2>{title}</h2>
               {details?'' :<a href="#" style={{color:secondaryColor,margin:"10px"}}>See details</a>}
           
         </Box>
         <Box className='productReference'>
             <b>Ref : </b>{reference}
        </Box>
        <Box className='productPrice'>  
            {promotion ? <span className='productOnSale'>{promotion} DT</span> : ''}
            <span className={promotion ? 'linethroughPrice' : 'unitPrice'}>{price} DT</span>
        </Box>
    
        
    </Box>
);

export default ProductName;

