import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>© {new Date().getFullYear()} Groundworks Development. All rights reserved.</p>
                <div className="footer-links">
                    <a href="/terms" rel="noopener noreferrer">Terms of Service</a>
                    <a href="/privacy" rel="noopener noreferrer">Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;