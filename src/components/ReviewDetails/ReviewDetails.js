import React from 'react';
import './ReviewDetails.css'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const ReviewDetails = ({data}) => {
    const {name, picture, description, rating} = data;
    console.log(picture)
    return (
        <div className='col review-details'>
            <img src={picture} alt="" />
            <p className='fw-bold mt-2'>{name}</p>
            <p><FaQuoteLeft />  {description}  <FaQuoteRight/></p>
            <p>Ratings: {rating}</p>
        </div>
    );
};

export default ReviewDetails;