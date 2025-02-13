import React from 'react';
import './CTAForm.css';
import CTAButton from './CTAButton';

function CallToActionSection({ heading, paragraph, buttonHref, buttonText }) {
    return (
        <section className="call-to-action">
            <h2>{heading}</h2>
            <p>{paragraph}</p>
            <CTAButton href={buttonHref}>{buttonText}</CTAButton>
        </section>
    );
}

export default CallToActionSection;