import React from 'react';
import './Home.css'
import BannerPic from '../../assets/images/watch.jpg';

const Home = () => {
    return (
        <div className='home'>
            <section className='container'>
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
        </div>
    );
};

export default Home;