import React from 'react';
import './HeroSection.css';
import CTAButton from '../CTAButton';

function HeroSection() {
    return (
        <div className="hero-section">
            <div className="hero-content">
                <h1>Hire Me - A Expert In Web Developer & Automation</h1>
                <CTAButton href="https://calendly.com/groundworksdevelopment/30min">
                    Get a Free Consultation
                </CTAButton>
            </div>
        </div>
    );
}

export default HeroSection;