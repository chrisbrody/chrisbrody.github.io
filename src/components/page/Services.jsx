import React from 'react';
import './Services.css';
import CTAForm from "../CTAForm";
import FadeInOnScroll from "../FadeInOnScroll";
import Meta from "../Meta"

function Services() {
    const pageTitle = "Services | GroundWorks Development";
    const pageDescription = "GroundWorks Development offers comprehensive web development and AI integration services, including custom websites, e-commerce solutions, AI-powered chatbots, data analysis, and more. Schedule a free consultation!";
    const pageKeywords = "web development services, AI integration services, custom website development, e-commerce development, Shopify development, WooCommerce development, mobile app development, AI-powered chatbots, data analysis, machine learning, SEO services, web design, website maintenance, AI consulting, voice bots, predictive analytics, GroundWorks Development";
    const pageType = "Page"

    return (
        <div className="services-page page">
            <Meta
                title={pageTitle}
                description={pageDescription}
                keywords={pageKeywords}
                pageType={pageType}
            />

            <FadeInOnScroll>
            <header className="services-header">
                <h1>Our Comprehensive Services</h1>
                <p>
                    We offer a wide range of web development and AI integration
                    services to help your business thrive in the digital age.
                </p>
            </header>
            </FadeInOnScroll>

            <FadeInOnScroll>
                <section className="service-category">
                    <h2>Web Development</h2>
                    <p>
                        We specialize in creating custom websites, e-commerce platforms, and
                        web applications tailored to your specific business needs. Our
                        services include:
                    </p>
                    <ul>
                        <li>Custom Website Design and Development</li>
                        <li>E-commerce Development (Shopify, WooCommerce)</li>
                        <li>Mobile App Development</li>
                        <li>Content Management Systems (Wordpress, Squarespace)</li>
                        <li>Search Engine Optimization (SEO)</li>
                        <li>Website Maintenance and Support</li>
                    </ul>
                </section>
            </FadeInOnScroll>

            <FadeInOnScroll>
                <section className="service-category">
                    <h2>AI Integration & Automation</h2>
                    <p>
                        Unlock the power of artificial intelligence to streamline your
                        operations, improve decision-making, and create new revenue streams.
                        Our services include:
                    </p>
                    <ul>
                        <li>AI-Powered Chatbots</li>
                        <li>Voice Bots and Virtual Assistants</li>
                        <li>Sales Automation Systems</li>
                        <li>Data Analysis and Machine Learning</li>
                        <li>Predictive Analytics</li>
                        <li>AI Consulting and Strategy</li>
                    </ul>
                </section>
            </FadeInOnScroll>

            <CTAForm // Use the reusable component
                heading="Ready to Transform Your Business?"
                paragraph="Contact me today to schedule a free consultation."
                buttonHref="https://calendly.com/groundworksdevelopment/30min"
                buttonText="Schedule a Free Consultation"
            />
        </div>
    );
}

export default Services;