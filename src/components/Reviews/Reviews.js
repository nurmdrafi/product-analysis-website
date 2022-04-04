import React from 'react';
import useReviews from '../../hooks/useReviews';
import ReviewDetails from '../ReviewDetails/ReviewDetails';
import './Reviews.css'

const Reviews = () => {
    const [reviews] = useReviews([]);
    return (
        <div className='container reviews'>
            <h2 className='text-center mb-2'>What our customer say! </h2>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5'>
            {
                reviews.map(review => <ReviewDetails key={review.id} data={review}></ReviewDetails>)
            }
            </div>
            
        </div>
    );
};

export default Reviews;