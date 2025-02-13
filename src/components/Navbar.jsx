import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';

import logo from '../assets/images/logo.png';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const [isMobile, setIsMobile] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        if (isMobile && isMenuOpen) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, [location.pathname]);

    const isHomePage = location.pathname === "/";
    //const shouldBeWhite = !isHomePage; // No longer needed

    return (
        <nav className={`navbar ${(!isHomePage || isScrolled) ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <div className="navbar-brand">
                    <Link to="/" onClick={closeMenu}><img src={logo} alt="Ground Workds Development Logo" /></Link>
                </div>

                <button className="navbar-toggle" onClick={toggleMenu}>
                    ☰
                </button>

                <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
                    <Link to="/portfolio" onClick={isMobile ? toggleMenu : undefined}>Portfolio</Link>
                    <Link to="/services" onClick={isMobile ? toggleMenu : undefined}>Services</Link>
                    <Link to="/blog" onClick={isMobile ? toggleMenu : undefined}>Blog</Link>
                    <Link to="/about" onClick={isMobile ? toggleMenu : undefined}>About</Link>
                    <Link to="/contact" onClick={isMobile ? toggleMenu : undefined}>Contact</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;