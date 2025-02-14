import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';
import Meta from "../Meta"

import rialtoImg1 from '../../assets/images/portfolio/rialto1.png';
import gladdenImg1 from '../../assets/images/portfolio/gladden1.png';
import monicaImg1 from '../../assets/images/portfolio/monica-full.jpg';
import mammothImg1 from '../../assets/images/portfolio/mammoth-full.png';
import mercuryImg1 from '../../assets/images/portfolio/mercury1.png';
import stellisImg1 from '../../assets/images/portfolio/stellis1.png';
import stratisImg1 from '../../assets/images/portfolio/stratis1.png';

function Portfolio() {
    const pageTitle = "Portfolio | GroundWorks Development";
    const pageDescription = "View our web development and AI integration portfolio. We build custom websites, e-commerce stores, and AI-powered solutions for businesses. See examples of our work with React, Node.js, Shopify, and more.";
    const pageKeywords = "web development portfolio, AI integration, custom website development, e-commerce development, React development, Node.js development, Shopify development, AI-powered solutions, web design, software development, frontend development, backend development";
    const pageType = "Page"

    const projects = [
        {
            id: 1,
            title: 'Rialto Vacations',
            slug: 'rialto-vacations',
            description:
                'Redesigned and redeveloped a custom travel website with a seamless booking experience and stunning visuals. Drove a 30% increase in online bookings within the first month.',
            imageUrl: rialtoImg1,
            technologies: ['React', 'Express', 'Node.JS', 'MongoDB', 'Figma', 'Git', 'CI/CD'],
            link: './portfolio/rialto-vacations',
        },
        {
            id: 2,
            title: 'Gladden Longevity',
            slug: 'gladden-longevity',
            description:
                'Developed a sophisticated AI-powered repository to help medical professionals quickly and easily find relevant research on longevity.',
            imageUrl: gladdenImg1,
            technologies: ['React', 'Node.js', 'Python', 'AWS', 'Docker', 'Agile', 'CI/CD', 'Github'],
            link: 'https://start.gladdenlongevity.com/ai',
        },
        {
            id: 3,
            title: 'Stellis Health',
            shortDescription: "Developed a custom employee directory and improved website performance for a leading healthcare provider.",
            slug: 'stellis-health',
            description:
                'Developed a custom employee directory and improved website performance for a leading healthcare provider.',
            imageUrl: stellisImg1,
            technologies: ['WordPress', 'PHP', 'HTML', 'CSS', 'JavaScript'],
            link: 'https://stellishealth.com/',
        },
        {
            id: 4,
            title: 'Stratis Industries',
            shortDescription: "Ongoing website management and updates for a custom manufacturing company.",
            slug: 'stratis-industries',
            description:
                'Providing ongoing website maintenance, updates, and content creation for Stratis Industries, a custom manufacturing company specializing in 3D laminated casegoods, wall panels, and fixture components.',
            imageUrl: stratisImg1,
            technologies: ['WordPress', 'PHP', 'HTML', 'CSS', 'JavaScript'],
            link: 'https://stratisindustries.com/',
        },
        {
            id: 5,
            title: 'Ship Mercury',
            shortDescription: "Developed the front-end for Ship Mercury's shipping department, streamlining labeling and tracking.",
            slug: 'ship-mercury',
            description:
                'As part of a team of four developers and a project manager, I was responsible for building out the front-end for Ship Mercury\'s shipping department. This involved creating a user-friendly interface for generating shipping labels, tracking deliveries, and managing shipping information. The goal was to streamline their shipping operations and improve efficiency.',
            imageUrl: mercuryImg1,
            technologies: ['React', 'JavaScript', 'HTML', 'CSS'],
            link: 'https://shipmercury.com/',
        },
        {
            id: 6,
            title: 'Monica\'s Gourmet Cookies',
            slug: 'monicas-gourmet',
            description:
                'Designed and developed a custom e-commerce store to help Monica sell her delicious cookies online. Integrated secure payment processing and a user-friendly ordering system.',
            imageUrl: monicaImg1,
            technologies: ['Shopify', 'HTML', 'CSS', 'JavaScript', 'Responsive Design', 'UI/UX Design', 'E-commerce Optimization'],
            link: 'https://monicasgourmet.com',
        },
        {
            id: 7,
            title: 'Mammoth Tap',
            slug: 'mammoth-beer',
            description:
                'Enhanced the shopify design to allow for great shopability and sales of swag',
            imageUrl: mammothImg1,
            technologies: ['Shopify', 'HTML', 'CSS', 'JavaScript', 'Liquid', 'Responsive Design', 'UI/UX Design', 'E-commerce Optimization'],
            link: 'https://mammothbeer.com',
        }
    ];

    return (
        <div className="portfolio-page page">
            <Meta
                title={pageTitle}
                description={pageDescription}
                keywords={pageKeywords}
                pageType={pageType}
            />
            <header className="portfolio-header">
                <h1>Portfolio</h1>
                <p>
                    A selection of our recent web development and AI integration projects.
                </p>
            </header>

            <div className="projects-container">
                {projects.map((project) => (
                    <div className="project" key={project.id}>
                        <Link to={`/portfolio/${project.slug}`} className="project-link">
                            <img src={project.imageUrl} alt={project.title} className="project-image"/>
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="technologies">
                                    {project.technologies.map((tech, index) => (
                                        <span className="technology" key={index}>{tech}</span>
                                    ))}
                                </div>
                                <span className="view-project">View Project →</span>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;