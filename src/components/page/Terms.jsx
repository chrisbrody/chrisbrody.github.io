import React from 'react';
import './Terms.css';
import Meta from "../Meta"

function Terms() {
    const pageTitle = "Terms of Service | GroundWorks Development";
    const pageDescription = "Terms of Service for GroundWorks Development. Review our terms and conditions for using our website and engaging our web development and AI integration services. Governed by New York law.";
    const pageKeywords = "Terms of Service, GroundWorks Development, website terms, service agreement, web development terms, AI integration terms, legal terms, website disclaimer, New York law";
    const pageType = "Page"

    return (
        <div className="terms-page">
            <Meta
                title={pageTitle}
                description={pageDescription}
                keywords={pageKeywords}
                pageType={pageType}
            />

            <header className="terms-header">
                <h1>Terms of Service</h1>
            </header>

            <section className="terms-section">
                <h2>1. Acceptance of Terms</h2>
                <p>
                    By using this website or engaging Groundworks Development for services, you agree to these Terms of Service. If you don't agree, please don't use our website or services.
                </p>
            </section>

            <section className="terms-section">
                <h2>2. Services We Provide</h2>
                <p>
                    Groundworks Development provides web development and AI automation/integration services. Specific project details (scope, timelines, pricing) will be outlined in separate agreements. We can modify or discontinue our services any time without notice.
                </p>
            </section>

            <section className="terms-section">
                <h2>3. Client Responsibilities</h2>
                <p>
                    To help us deliver the best results, you agree to provide timely feedback, necessary information, and access to resources as needed throughout the project.
                </p>
            </section>

            <section className="terms-section">
                <h2>4. Intellectual Property</h2>
                <p>
                    You own the code and content developed specifically for your project. We retain the right to use development methods and techniques for other clients. We retain ownership of website content.
                </p>
            </section>

            <section className="terms-section">
                <h2>5. Limitation of Liability</h2>
                <p>
                    Groundworks Development is not liable for any direct, indirect, or consequential damages resulting from the use of our services. Our liability is limited to the amount paid for the services.
                </p>
            </section>

            <section className="terms-section">
                <h2>6. Termination</h2>
                <p>
                    Either party can terminate an agreement with written notice. Upon termination, you agree to pay for all services provided up to the date of termination.
                </p>
            </section>

            <section className="terms-section">
                <h2>7. Governing Law</h2>
                <p>
                    These Terms of Service are governed by the laws of New York. Any disputes will be resolved in New York's courts.
                </p>
            </section>

            <footer className="terms-footer">
                <p>
                    Last updated: January 1st, 2025
                </p>
            </footer>
        </div>
    );
}

export default Terms;