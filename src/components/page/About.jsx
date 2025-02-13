import React from 'react';
import './About.css';
import FadeInOnScroll from '../FadeInOnScroll';
import CTAForm from '../CTAForm';
import Meta from '../Meta'

import profileImage from '../../assets/images/brody.jpg'

function AboutUs() {
    const pageTitle = "About | GroundWorks Development";
    const pageDescription = "Learn about GroundWorks Development, a web development and AI integration company founded in 2024. We provide innovative, results-driven solutions for every business. Contact founder Chris Brody for a free consultation.";
    const pageKeywords = "GroundWorks Development, web development company, AI integration company, Chris Brody, web development services, AI integration services, custom web development, custom AI solutions, about GroundWorks Development, founder Chris Brody, results-driven web development, innovative AI integration";
    const pageType = "Page"

    return (
        <div className="about-page page">
            <Meta
                title={pageTitle}
                description={pageDescription}
                keywords={pageKeywords}
                pageType={pageType}
            />
            <header className="about-header">
                <h1>About</h1>
            </header>

            <FadeInOnScroll>
                <section className="company-story">
                    <p>
                        Groundworks Development was founded in 2024 with a clear mission: to
                        provide innovative and results-driven web development and AI
                        integration services that are accessible to every business.
                    </p>
                    <p>
                        As the founder, I have a background in Computer Science and a passion for
                        building elegant solutions that solve real-world problems. I recognized
                        the transformative potential of AI early on and set out to create a
                        company where technology empowers, rather than overwhelms.
                    </p>
                </section>
            </FadeInOnScroll>

            <section className="our-team">
                <h2>About Chris Brody</h2>
                <div className="team-member">
                    <img src={profileImage} alt="Chris" className="team-member-image"/>
                    <p className="team-member-bio">
                        <span className="team-member-title">Founder & Lead Developer</span>
                        I am passionate about crafting exceptional web experiences and
                        integrating the power of AI to solve business challenges. With a
                        focus on collaboration, I provide customized, results-oriented
                        solutions that empower your business to thrive in today's dynamic
                        digital landscape.
                    </p>
                </div>
            </section>

            <CTAForm // Use the reusable component
                heading="Ready to Transform Your Business?"
                paragraph="Contact me today to schedule a free consultation."
                buttonHref="https://calendly.com/groundworksdevelopment/30min"
                buttonText="Schedule a Free Consultation"
            />
        </div>
    );
}

export default AboutUs;