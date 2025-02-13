import React from 'react';
import './Contact.css';
import CTAForm from "../CTAForm";
import Meta from "../Meta"

function Contact() {
    const pageTitle = "Contact | GroundWorks Development";
    const pageDescription = "Contact GroundWorks Development for web development and AI integration services. Schedule a free consultation to discuss your project. Email us at GroundWorksDevelopment@gmail.com.";
    const pageKeywords = "contact web development, contact AI integration, web development consultation, AI integration consultation, free web development consultation, free AI integration consultation, GroundWorks Development, GroundWorksDevelopment@gmail.com";
    const pageType = "Page"

    return (
        <div className="contact-page page">
            <Meta
                title={pageTitle}
                description={pageDescription}
                keywords={pageKeywords}
                pageType={pageType}
            />
            <header className="contact-header">
                <h1>Contact</h1>
                <p>
                    We'd love to hear from you! Please feel free to reach out with any
                    questions or inquiries.
                </p>
            </header>

            <section className="contact-details">
                <p>
                    <a href="mailto:groundworksdevelopment@gmail.com">GroundWorksDevelopment@gmail.com</a>
                </p>
            </section>

            <CTAForm // Use the reusable component
                heading="Schedule a Free Consultation"
                paragraph="Ready to discuss your web development or AI integration project?
                Schedule a free consultation to learn more."
                buttonHref="https://calendly.com/groundworksdevelopment/30min"
                buttonText="Schedule a Free Consultation"
            />
        </div>
    );
}

export default Contact;