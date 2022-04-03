import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <nav className='d-flex container align-items-center'>
            <CustomLink style={{color: 'black' , textDecoration: 'none'}} to="/home"><h2>website name</h2></CustomLink>
            <div className='d-flex ms-auto'>
                <CustomLink to="/home">HOME</CustomLink>
                <CustomLink to="/reviews">REVIEWS</CustomLink>
                <CustomLink to="/dashboard">DASHBOARD</CustomLink>
                <CustomLink to="/blogs">BLOGS</CustomLink>
                <CustomLink to="/about">ABOUT</CustomLink>
            </div>
        </nav>
    );
};

export default Header;