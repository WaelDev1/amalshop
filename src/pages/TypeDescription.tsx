import React, { useState } from 'react'
import ProductCarousel from '../components/ProductCarousel/ProductCarousel'
import ProductName from '../components/ProductName'
import Colors from '../components/Colors'
import SizesPicker from '../components/SizesPicker2/SizesPicker'
import Description from '../components/Description'
import Reviews from '../components/Reviews/Reviews'
import Button from '@mui/material/Button';
import Counter from '../components/Counter' 
import './TypeDescription.css'
const TypeDescription = () => {
 
  
  return (
    <div className='type-description-page'>
        <ProductCarousel />
        <ProductName
         details={true} 
           title="product title here" 
           reference="205/245/15"
            price={180}
            primaryColor="black"
            secondaryColor="black"
            promotion={119}
            />

<SizesPicker />
    <Colors title="Colors:" colors={['Black','White','Ligntblue','Beige','Red']} oneClick={true} secColor="black"/>
   

 <Description desc={<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, cupiditate?</p>} title={<h3>Description</h3>}  />
   <Reviews children={
   <Button variant="contained" color="success" style={{width:"250px",margin:"10px auto",display:'block'}} >Write Review</Button>}/>
    <div style={{display:"flex" , position:"fixed",width:"100%",bottom:"0",background:"white",zIndex:"99999"}}>
         <Counter Count={1}/>
         <Button variant="contained" color="success" style={{width:"250px",margin:"10px auto",display:'block'}}>add to cart </Button>
    </div>
  
 
    </div>
  )
}

export default TypeDescription
