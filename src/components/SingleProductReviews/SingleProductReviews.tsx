import React from 'react'
import Rating from '@mui/material/Rating';
import './SingleProductReviews.css'


type ProductReviewsTypes = {
  img:    string  ;
  name:   string  ;
  stars:  number  ;
  review: string  ;
  date:   string  ;
};
 

const SingleProductReviews = ({ img , name , stars ,review , date}: ProductReviewsTypes) => {
  return (
    <div className='single-product-reviews'>
       <div className='single-product-header'>
           <img src={img} alt="auth pic" />
           <div className='single-product-header-about'>
                 <h4>{name}</h4>
                 <Rating name="read-only" value={stars} readOnly />
           </div> 
       </div>
       <div className='single-product-body'>
                <p>{review}</p>
       </div>
       <div className='single-product-date'>
            <pre>{date}</pre>
       </div>
    </div>
  )
}

export default SingleProductReviews