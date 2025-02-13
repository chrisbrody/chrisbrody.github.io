import React from 'react';
import './CTAButton.css'; // Optional: You can move your cta-button styles to this file

function CTAButton({ children, href, className, ...props }) {
    return (
        <a
            href={href}
            className={`cta-button ${className || ''}`} // Apply default and custom classes
            target="_blank"
            rel="noopener noreferrer"
            {...props} // Pass any other props to the <a> tag
        >
            {children}
        </a>
    );
}

export default CTAButton;