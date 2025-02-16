import React from 'react';
import './AboutUs.css';
import FadeInOnScroll from '../FadeInOnScroll';
import profileImage from "../../assets/images/brody.jpg"; // Import the reusable component

function AboutUs() {
    return (
        <FadeInOnScroll>
            <div className="about-us-container">
                <div className="about-us-text">
                    <section className="our-team">
                        <h2>About Chris Brody</h2>
                        <div className="team-member">
                            <img src={profileImage} alt="Chris" className="team-member-image"/>
                            <p className="team-member-bio">
                                I founded my web development and AI integration service in 2017 to make innovative
                                technology accessible to businesses of all sizes.

                                <br/>
                                <br/>

                                As a self-taught full-stack developer with a background in Computer Science, I
                                specialize in building user-friendly web solutions and integrating AI to solve
                                real-world business challenges. For five years, I led a coding school in New York and
                                San Francisco, mentoring hundreds of students and guiding them through building and
                                managing websites on platforms like WordPress, Shopify, and Squarespace.

                                <br/>
                                <br/>

                                Today, I work with a diverse range of clients, delivering cutting-edge web solutions
                                while empowering them to take control of their digital presence. Whether you’re looking
                                to build a website or integrate AI tools, I’m here to turn your vision into reality.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </FadeInOnScroll>
    );
}

export default AboutUs;