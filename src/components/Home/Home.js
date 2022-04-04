import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div>
            <section className='container-fluid p-0'>
                <div className="banner">
                    <div className="banner-text d-flex flex-column justify-content-center">
                        <h1 className='text-white'>Time is what we want most, <br /> but what we use worst.</h1>
                        <p className='text-white'>We are here providing reviews and analysis data about various watches with charts.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;