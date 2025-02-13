import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>© {new Date().getFullYear()} Groundworks Development. All rights reserved.</p>
                <div className="footer-links">
                    <Link href="/terms" rel="noopener noreferrer">Terms of Service</Link>
                    <Link href="/privacy" rel="noopener noreferrer">Privacy Policy</Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;