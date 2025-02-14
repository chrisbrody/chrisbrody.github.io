import React from 'react';
import { Link } from 'react-router-dom';

import rialtoImg1 from '../../assets/images/portfolio/rialto1.png';
import gladdenImg1 from '../../assets/images/portfolio/gladden1.png';

function ProjectsSection() {
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
        }
    ];

    return (
        <div className="projects-section marginBot-50">
            <header className="portfolio-header">
                <h1>Recent Projects</h1>
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


export default ProjectsSection;