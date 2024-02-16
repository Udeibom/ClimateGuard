import React, {useRef} from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Layout() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    return (
        <header className='navbar'>
            <h3>ClimateGu</h3>
            <nav ref={navRef}>
                <a href="./categories/Layout.jsx">Categories</a>
                <a href="/#">Blog Posts</a>
                <a href="/#">Explore</a>
                <a href="/#" id='Subscribe'>Subscribe</a>
                <a href="/#" id='Login'>Login</a>
                <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className='nav-btn' onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}

export default Layout;
