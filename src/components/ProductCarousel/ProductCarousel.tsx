import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Icon } from '@iconify/react';
import './ProductCarousel.css'
import CartIcon from '../CartIcon';
import { Link } from 'react-router-dom';

const ProductCarousel = () => {

    const CustomStyle ={
        backgroundColor:"transparent" 
    }
    
  return (
    <div className='product-carousel'>
                     <div className='product-carousel-icons'>
                        <div className='links'>
                             <Link to={"/"}>
                                 <Icon icon="uiw:left" className='order-icon'/>
                             </Link>
                        </div>
                        <div className='icons'>
                             <Icon icon="mdi:heart" className='heart-icon'/>
                             <CartIcon count={3} bgstyle={CustomStyle} secColor={"black"}/>
                        </div>
                       
                    </div>      
       <Carousel showThumbs={false} swipeable={true} showArrows={false} showStatus={false}>
                <div>
                    <img src="https://placehold.co/150x150" />

                </div>
                <div>
                    <img src="https://placehold.co/150x150" />
                
                </div>
                <div>
                    <img src="https://placehold.co/150x150" />
            
                </div>
            </Carousel>
    </div>
  )
}

export default ProductCarousel
