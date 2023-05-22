import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails'; 
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StarIcon from '@mui/icons-material/Star';
import Rating from '@mui/material/Rating';
import './Reviews.css' 
import SingleProductReviews from '../SingleProductReviews/SingleProductReviews';


type Props = {
  children?:  JSX.Element   
}
const Reviews = ({children}:Props) => {

    const [activeFilter , setActiveFilter] =  React.useState<string>('All');

  return (
    <Accordion style={{width:'600px',boxShadow:"none" ,padding:"0" ,margin:"0"}}>
    <AccordionSummary
    
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
    <h3>Reviews</h3> 
 
    </AccordionSummary>
    <AccordionDetails style={{padding:'50px 0'}} >
          <div style={{textAlign:'left' , display:'flex' , alignItems:'center'}}>
             <Rating name="read-only" value={4} readOnly />
             <span className="reviews-stars"> <b>4.5 </b>( 2 reviews )</span>
          </div> 
          <ul className='reviews-filter'>
            <li className={activeFilter === 'All' ? 'active' : ''} onClick={e => setActiveFilter('All')}>All </li>
            <li className={activeFilter === 'five-stars' ? 'active' : ''} onClick={e => setActiveFilter('five-stars')}>5 <StarIcon sx={{ color: '#f5b235' , fontSize:'20px',marginLeft:'3px'}}  /></li>
            <li className={activeFilter === 'four-stars' ? 'active' : ''} onClick={e => setActiveFilter('four-stars')}>4 <StarIcon sx={{ color: '#f5b235', fontSize:'20px' ,marginLeft:'3px'}}/></li>
            <li className={activeFilter === 'three-stars' ? 'active' : ''} onClick={e => setActiveFilter('three-stars')}>3 <StarIcon sx={{ color: '#f5b235' , fontSize:'20px' ,marginLeft:'3px'}} /> </li>
            <li className={activeFilter === 'two-stars' ? 'active' : ''} onClick={e => setActiveFilter('two-stars')}>2 <StarIcon sx={{ color: '#f5b235' , fontSize:'20px' ,marginLeft:'3px'}}/></li>
            <li className={activeFilter === 'one-stars' ? 'active' : ''} onClick={e => setActiveFilter('one-stars')}>1<StarIcon sx={{ color: '#f5b235', fontSize:'20px',marginLeft:'3px' }}  /></li> 
        </ul>
        <SingleProductReviews img="https://placehold.co/80x80" name="patrick luis" stars={4} review="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"  date="December 10,2018" />
        <SingleProductReviews img="https://placehold.co/80x80" name="patrick luis" stars={4} review="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"  date="December 10,2018" />
        {children}
        
    </AccordionDetails>
  </Accordion> 
  )
}

export default Reviews