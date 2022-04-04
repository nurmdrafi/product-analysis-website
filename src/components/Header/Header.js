import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <nav className='d-flex container align-items-center'>
            <CustomLink style={{color: 'black' , textDecoration: 'none'}} to="/home"><h3 className='logo'>WATCHES<br />&#38;<br />WONDERS</h3></CustomLink>
            <div className='d-flex ms-auto'>
                <CustomLink to="/home">HOME</CustomLink>
                <CustomLink to="/reviews">REVIEWS</CustomLink>
                <CustomLink to="/dashboard">DASHBOARD</CustomLink>
                <CustomLink to="/blogs">BLOGS</CustomLink>
            </div>
        </nav>
    );
};

export default Header;