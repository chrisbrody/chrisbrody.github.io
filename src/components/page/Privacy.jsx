import React from 'react';
import './Privacy.css';
import Meta from "../Meta";

function Privacy() {
    const pageTitle = "Privacy Policy | GroundWorks Development";
    const pageDescription = "GroundWorks Development Privacy Policy. Review our policy on data collection, usage, security, and your rights regarding your personal information. Contact us at groundworksdevelopment@gmail.com.";
    const pageKeywords = "Privacy Policy, GroundWorks Development, data privacy, personal information, data security, cookies policy, website privacy, privacy rights, GDPR compliance, CCPA compliance, groundworksdevelopment@gmail.com";
    const pageType = "Page"

    return (
        <div className="privacy-policy-page">
            <Meta
                title={pageTitle}
                description={pageDescription}
                keywords={pageKeywords}
                pageType={pageType}
            />

            <header className="privacy-policy-header">
                <h1>Privacy Policy</h1>
            </header>

            <section className="privacy-policy-section">
                <h2>1. Information We Collect</h2>
                <p>
                    We collect the following information from you when you use our
                    website:
                </p>
                <ul>
                    <li>Personal Information: Name, email address, phone number, etc.</li>
                    <li>Log Data: IP address, browser type, operating system, etc.</li>
                    <li>Cookies: We use cookies to improve your experience.</li>
                </ul>
            </section>

            <section className="privacy-policy-section">
                <h2>2. How We Use Your Information</h2>
                <p>
                    We use your information to:
                </p>
                <ul>
                    <li>Provide and improve our services.</li>
                    <li>Communicate with you.</li>
                    <li>Personalize your experience.</li>
                </ul>
            </section>

            <section className="privacy-policy-section">
                <h2>3. Data Security</h2>
                <p>
                    We take reasonable measures to protect your data from unauthorized
                    access or disclosure.
                </p>
            </section>

            <section className="privacy-policy-section">
                <h2>4. Third-Party Services</h2>
                <p>
                    We may use third-party services (e.g., Google Analytics) that have
                    their own privacy policies.
                </p>
            </section>

            <section className="privacy-policy-section">
                <h2>5. Your Rights</h2>
                <p>
                    You have the right to access, correct, or delete your personal
                    information.
                </p>
            </section>

            <section className="privacy-policy-section">
                <h2>6. Contact Us</h2>
                <p>
                    If you have any questions about this Privacy Policy, please contact us
                    at <a href="mailto:groundworksdevelopment@gmail.com">groundworksdevelopment@gmail.com</a>.
                </p>
            </section>

            <footer className="privacy-policy-footer">
                <p>
                    Last updated: January 1st, 2025
                </p>
            </footer>
        </div>
    );
}

export default Privacy;