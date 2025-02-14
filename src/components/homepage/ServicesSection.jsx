import React from 'react';
import './ServicesSection.css';
import FadeInOnScroll from '../FadeInOnScroll';
import { FaRobot, FaGlobe } from 'react-icons/fa';
import CTAButton from "../CTAButton"; // Added FaGlobe

function ServicesSection() {
    const services = [
        {
            id: 1,
            title: 'Web Development',
            description:
                'Creating and revitalizing websites tailored to your business needs. We offer everything from custom design and development to SEO, marketing, and sales growth solutions.',
            icon: <FaGlobe />, // Globe Icon (representing the web)
        },
        {
            id: 2,
            title: 'AI Integration & Automation',
            description:
                'Empowering your business with intelligent AI solutions. We build chatbots, voice bots, and sales automation systems to streamline processes, improve decision-making, and unlock new opportunities.',
            icon: <FaRobot />, // Robot Icon
        },
    ];

    return (
        <div className="services-section">
            <FadeInOnScroll>
                <h2>Our Key Services</h2>

                <div className="services-container">
                    {services.map((service) => (
                        <div className="service" key={service.id}>
                            <h3>{service.icon} {service.title}</h3>

                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </FadeInOnScroll>

            <div className="marginTop-50 marginBot-50">
                <CTAButton href="https://calendly.com/groundworksdevelopment/30min">
                    Schedule a Free Consultation
                </CTAButton>
            </div>
        </div>
    );
}

export default ServicesSection;