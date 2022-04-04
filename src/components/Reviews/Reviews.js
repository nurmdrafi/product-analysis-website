import React from 'react';
import useReviews from '../../hooks/useReviews';
import ReviewDetails from '../ReviewDetails/ReviewDetails';

const Reviews = () => {
    const [reviews] = useReviews([])
    return (
        <div>
            <h2 className='text-center mb-2'>What our customer say! </h2>
            <div className='d-flex flex-column align-items-center'>
            {
                reviews.map(review => <ReviewDetails key={review.id} data={review}></ReviewDetails>)
            }
            </div>
            
        </div>
    );
};

export default Reviews;