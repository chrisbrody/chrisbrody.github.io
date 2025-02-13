import React from 'react';
import './HeroSection.css';
import CTAButton from '../CTAButton';

function HeroSection() {
    return (
        <div className="hero-section">
            <div className="hero-content">
                <h1>Expert Web Development & AI Integration.</h1>
                <p>Direct Communication, Personalized Solutions, Exceptional Results.</p>
                <CTAButton href="https://calendly.com/groundworksdevelopment/30min">
                    Get a Free Consultation
                </CTAButton>
            </div>
        </div>
    );
}

export default HeroSection;