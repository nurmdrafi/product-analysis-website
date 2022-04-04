import React from 'react';
import './Home.css'
import BannerPic from '../../assets/images/watch.jpg';
import useReviews from '../../hooks/useReviews';

const Home = () => {
    const [reviews] = useReviews([])
    return (
        <div className='home'>
            <section className='container my-5'>
                <div className="banner d-md-flex justify-content-around">
                    <div className="banner-text d-flex flex-column justify-content-center">
                        <h1 className='text-black'>Time is what we want most, but what we use worst.</h1>
                        <p className='text-muted'>We are here providing reviews and analysis data about various watches with charts.</p>
                    </div>
                    <div className="banner-picture mx-auto mx-md-0">
                        <img src={BannerPic} alt="" />
                    </div>
                </div>
            </section>
            <section className='customer-reviews my-5 pt-5'>
            <h1 className="text-center">Customer Reviews</h1>
            {
                reviews.map(review => console.log(review))
            }
            </section>
        </div>
    );
};

export default Home;