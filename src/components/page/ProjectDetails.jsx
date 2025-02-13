import React from 'react';
import './ProjectDetails.css';
import { useParams } from 'react-router-dom';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Meta from '../Meta';
import CTAForm from '../CTAForm';

// PROJECT IMAGES
import rialtoImg1 from '../../assets/images/portfolio/rialto1.png';
import rialtoImg2 from '../../assets/images/portfolio/rialto2.png';
import rialtoImg3 from '../../assets/images/portfolio/rialto3.png';
import gladdenImg1 from '../../assets/images/portfolio/gladden1.png';
import gladdenImg2 from '../../assets/images/portfolio/gladden2.png';
import gladdenImg3 from '../../assets/images/portfolio/gladden3.png';
import monicaImg1 from '../../assets/images/portfolio/monica1.png';
import monicaImg2 from '../../assets/images/portfolio/monica2.png';
import monicaImg3 from '../../assets/images/portfolio/monica3.png';
import mammothImg1 from '../../assets/images/portfolio/mammoth-full.png';
import mammothImg2 from '../../assets/images/portfolio/mammoth2.png';
import mammothImg3 from '../../assets/images/portfolio/mammoth3.png';

function ProjectDetails() {
    const { projectId } = useParams();  // Get the projectId from the URL

    //  Replace with your actual data fetching logic
    const project = getProjectDetails(projectId);

    if (!project) {
        return <div>Project not found.</div>; //Handle 404
    }

    return (
        <div className="project-details-page page">
            <Meta
                title={`${project.title} | Groundworks Development`}
                description={project.shortDescription}  // Use project's description
                keywords={project.technologies.join(', ') + ', web development, AI integration'}
                imageURL = {project.imageUrl}
            />
            <header className="project-header">
                <h1>{project.title}</h1>
                <div className="project-header-content">
                    <div className="project-summary">
                        <p>{project.shortDescription}</p>
                        <div className="technologies project-page">
                            {project.technologies.map((tech, index) => (
                                <span className="technology" key={index}>{tech}</span>
                            ))}
                        </div>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="view-project-link">
                            View Project <FaExternalLinkAlt />
                        </a>
                    </div>
                </div>
            </header>

            <section className="project-overview">
                <h2>Project Overview</h2>
                <p>{project.overview}</p>
            </section>

            <section className="project-section">
                <div className="project-image details-page">
                    <img src={project.image1} alt={project.title} />
                </div>
                <div className="project-content">
                    <h2>Challenges</h2>
                    <p>{project.challenges}</p>
                </div>
            </section>

            <section className="project-section">
                <div className="project-image details-page">
                    <img src={project.image2}  alt={project.title} />
                </div>
                <div className="project-content">
                    <h2>Solutions</h2>
                    <p>{project.solutions}</p>
                </div>
            </section>

            <section className="project-section">
                <div className="project-image details-page">
                    <img src={project.image3} alt={project.title} />
                </div>
                <div className="project-content">
                    <h2>Results</h2>
                    <p>{project.results}</p>
                </div>
            </section>

            <CTAForm
                heading="Ready to Discuss Your Project?"
                paragraph="Contact me today for a free consultation."
                buttonHref="https://calendly.com/groundworksdevelopment/30min"
                buttonText="Schedule a Free Consultation"
            />
        </div>
    );
}

function getProjectDetails(projectId) {
    const projects = [
        {
            id: 1,
            title: 'Rialto Vacations - Modernized Booking Platform',
            shortDescription: "Transformed an outdated travel website into a sleek, high-performing booking platform.",
            slug: 'rialto-vacations',
            description:
                'Rialto Vacations, a growing vacation rental company, came to me with a classic problem: a legacy website that was clunky, difficult to manage, and failing to attract new customers. The site, built years ago with a mix of static HTML, PHP, and a dated SQL database, was slow, unscalable, and difficult to update. It was impacting the growth. I worked as a solo agent',
            mainImage: rialtoImg1,
            imageUrl: rialtoImg1,
            technologies: ['React', 'Express', 'Node.JS', 'MongoDB', 'Figma', 'Git', 'CI/CD'],
            link: 'https://rialtovacations.com',
            overview: "This project involved a complete transformation of Rialto Vacations' online presence, starting with a comprehensive redesign in Figma. The goal wasn't just to create a website, but a modern, intuitive booking platform that would attract new customers, streamline their vacation planning process, and ultimately drive sales growth. From initial wireframes to high-fidelity mockups, Figma played a central role in exploring different design concepts, refining the user interface, and ensuring a visually appealing and user-friendly experience before a single line of code was written. Once the design was finalized and approved, I transitioned to the development phase, translating the Figma designs into a fully functional and responsive website using a modern tech stack. This careful planning and design-first approach was key to the project's success. ",
            challenges: "The biggest challenge was migrating their old, disorganized codebase to a modern stack without disrupting their existing business operations. The original website had become a tangled mess of spaghetti code, making it difficult to add new features or fix bugs. Plus, the old database was slow and inefficient, causing performance issues and limiting scalability.",
            solutions: "We used a test driven approach. Overtime, we added a proper CI/CD workflow so that all features can be tested, reviewed by the client and then the team can merge it into the live code base. After the code base was built,  leveraged React for a dynamic and responsive front-end, Node.js and Express for a fast and scalable API, and MongoDB for a flexible and modern database. We also implemented a continuous integration/continuous deployment (CI/CD) pipeline using Git to automate the build, test, and deployment process.",
            results: "The results were fantastic, increased bookings. The new platform is much easier to use and manage. They have seen a 30% increase in online bookings. The updated website is SEO-friendly and provides a much better user experience, resulting in increased customer satisfaction and higher conversion rates.",
            pageDescription: "Transformed Rialto Vacations' outdated website into a modern, high-performing booking platform, resulting in a 30% increase in sales" ,
            image1: rialtoImg1,
            image2: rialtoImg2,
            image3: rialtoImg3
        },
        {
            id: 2,
            title: 'AI-Powered Scholarly Research Assistant',
            shortDescription: "Developed an AI-powered chatbot to help doctors access and understand complex scholarly research.",
            slug: 'gladden-longevity',
            description:
                'Designed and built an AI-powered chatbot that empowers medical professionals to quickly and easily access the insights they need. This chatbot answers questions and connects doctors with relevant research for living longer and has easy to access UI.',
            mainImage: gladdenImg1,
            imageUrl: gladdenImg1,
            technologies: ['React', 'Node.js', 'Python', 'AWS', 'Docker', 'Agile', 'CI/CD', 'Github'],
            link: 'https://start.gladdenlongevity.com/ai',
            overview: "This project aimed to revolutionize the way medical professionals access and interact with the ever-expanding body of scholarly research on longevity. We envisioned a system that could act as a personalized research assistant, providing doctors with quick and accurate answers to their questions, connecting them with relevant studies, and ultimately helping them stay at the forefront of medical knowledge. Our goal was to create an intuitive and user-friendly chatbot that could understand the complexities of medical terminology and deliver insights in a clear and concise manner. We also prioritized the use of robust and reliable AI technologies to ensure the accuracy and trustworthiness of the information provided by the chatbot. Ultimately, we wanted to empower doctors to make more informed decisions and provide better care for their patients by democratizing access to scientific knowledge.",
            challenges: "One of the biggest challenges was dealing with medical data and also how some data may have legal restrictions. Building a robust and reliable AI system that could accurately interpret complex medical queries and reliably retrieve relevant information from a vast and often inconsistent scholarly database was the toughest obstacle. The original database was poorly structured and lacked consistent formatting, making it difficult to extract and process the data effectively. Another major challenge was ensuring that the chatbot could handle the nuances of medical terminology and understand the context behind user queries. We also had to address ethical considerations related to data privacy and security, ensuring that sensitive patient information was protected at all times. We did this because it's important to maintain the highest levels of trust.",
            solutions: "To overcome these challenges, we used a test driven approach. Overtime, we added a proper CI/CD workflow so that all features can be tested, reviewed by the client and then the team can merge it into the live code base. After the code base was built, leveraged React for a dynamic and responsive front-end, Node.js and Python to connect to the AWS service and MongoDB for a flexible and the database. I used this because it's important and powerful. To train the chatbot, we used a combination of machine learning techniques, including natural language processing (NLP) and deep learning. We fed the chatbot a vast dataset of medical articles, textbooks, and clinical guidelines, allowing it to learn the intricacies of medical language and develop its understanding of medical concepts. We also implemented a rigorous testing and validation process to ensure the accuracy and reliability of the chatbot's responses. For data security, we adhered to strict HIPAA guidelines and implemented encryption and access controls to protect sensitive patient information.",
            results: "The resulting chatbot, the \"Scholarly Research Assistant,\" has the potential to be a power system for medical professionals, helping them stay up-to-date on the latest advances in medical research and deliver better care to their patients. The chatbot's ability to quickly and accurately answer complex medical queries has dramatically improved the time it takes for doctors to find the information they need. This tool helps connect the insights to the information to see what the data is and its applications This has allowed for improvements in the overall patient care experience and better time used at the practices. It also helps reduce the possibility of liability.",
            pageDescription: "This chatbot helps connect doctors with AI knowledge, and its revolutionizing the field!",
            image1: gladdenImg1,
            image2: gladdenImg2,
            image3: gladdenImg3
        },
        {
            id: 3,
            title: 'Monica\'s Gourmet Cookies - Delicious E-Commerce Transformation',
            shortDescription: "Developed a visually irresistible Shopify e-commerce store, boosting online cookie sales.",
            slug: 'monicas-gourmet',
            description:
                'Monica\'s Gourmet Cookies, a local bakery known for its handcrafted and mouthwatering treats, was struggling to expand its reach beyond its brick-and-mortar store. Their existing website was outdated, difficult to navigate, and lacked the visual appeal needed to showcase their delectable cookies. They needed a custom e-commerce store that would not only make it easy for customers to order online but also capture the essence of their brand and make their cookies look as irresistible online as they do in person.',
            mainImage: monicaImg1,
            imageUrl: monicaImg1,
            technologies: ['Shopify', 'HTML', 'CSS', 'JavaScript', 'Responsive Design', 'UI/UX Design', 'E-commerce Optimization'],
            link: 'https://monicasgourmet.com',
            overview: "The primary goal of this project was to create a visually stunning and user-friendly Shopify e-commerce store that would accurately represent Monica's Gourmet Cookies' brand and make it incredibly easy for customers to order their favorite cookies online. We focused on creating a design that would showcase the cookies in their best light, using high-quality photography, enticing descriptions, and a seamless navigation system. We also aimed to integrate secure payment processing and a reliable shipping system to ensure a smooth and trustworthy online shopping experience.",
            challenges: "One of the biggest challenges was capturing the essence of Monica's Gourmet Cookies' brand and translating it into a digital experience. The original site had this and many other images that did not load properly, which made customers to shop somewhere else. This meant new high quality images or just replacing it altogether. But the goal was that they could have that experience even over the store, from the smell to the cookie taste. Not only were we responsible to test the carting process for the site, but there was also making a theme that Monica loved.",
            solutions: "The site leverages the power of Shopify's flexibility and designed a completely unique theme using HTML, CSS, and JavaScript. I helped craft a visually appealing site that captures the handcrafted nature of Monica’s cookies. The color palette and the overall tone, that I collaborated with, was warm, inviting and it allowed for easy maintenance in the back end. By allowing for smooth navigation and custom photos to use the user's mind with beautiful, big size photos of cookies, the website would be great. The theme was approved after about 15 different tests with multiple users across the board that reported it was good to go",
            results: "The results have been nothing short of phenomenal. Monica's Gourmet Cookies has been able to serve more people for better results. For example, the site made it so that cookie boxes sold out in a short period of time, which was due to the excellent marketing that was applied to the theme. These changes made it good. They were successful in the testing and approval processes due to the team that worked on that project, and the website continues to bring in orders and attract cookie-lovers.",
            pageDescription: "With a new site, it really got cookie clicker to work!",
            image1: monicaImg1,
            image2: monicaImg2,
            image3: monicaImg3
        },
        {
            id: 4,
            title: 'Mammoth Beer - Thriving Shopify Brand Store',
            shortDescription: "Transformed Mammoth Beer's online presence, boosting sales and freeing up time to focus on brewing.",
            slug: 'mammoth-beer',
            description:
                'Mammoth Beer, a local craft brewery, needed a way to reach a wider audience and increase sales of their delicious beer and branded merchandise. They were struggling with an outdated Shopify store that was difficult to manage and didn\'t accurately reflect their brand identity. The website needed a new lease on life to keep the company going',
            mainImage: mammothImg1,
            imageUrl: mammothImg1,
            technologies: ['Shopify', 'HTML', 'CSS', 'JavaScript', 'Liquid', 'Responsive Design', 'UI/UX Design', 'E-commerce Optimization'],
            link: 'https://mammothbeer.com',
            overview: "The primary goal of this project was to transform Mammoth Beer's online store into a vibrant and profitable e-commerce platform that would enhance their brand, attract new customers, and drive sales of both beer and merchandise. We wanted to create a user-friendly and visually appealing online experience that accurately reflected the brewery's unique identity and made it easy for customers to browse, select, and purchase their favorite products. We also focused on streamlining the administrative aspects of running the store, so that the Mammoth Beer team could focus on brewing great beer.",
            challenges: "Mammoth Beer's existing Shopify store presented several key challenges. The website was slow and clunky to use and navigate, images werent loading and they were unable to load their current revenue. The site layout was also hard to view. Plus, the outdated design didn't accurately reflect the brewery's brand and unique character. In the world of beer the product's brand image and design are so important that has to be kept in check",
            solutions: "This meant it was a great opportunity to test new designs, color schemes, and a completely new user experience, and all that effort paid off. The core issue was that they required testing, and to create a proper testing platform we used a CI/CD method to keep the site functioning while creating a new website. We also updated the navigation and layout to help consumers, especially mobile. Overall, it wasn't too bad in terms of coding. All thanks to being with my client as a great support.",
            results: "Thanks to the power of web optimization and the testing tools we've implemented we were able to track down each step to better show users how they can click on the button. Now, new merch has sold out and the new brand has people showing up to stores. For the owner, they were more appreciative, and they also got me a beer. What's more, they are also able to keep making their great beer.",
            image1: mammothImg1,
            image2: mammothImg2,
            image3: mammothImg3
        }
    ];

    return projects.find(project => project.slug === projectId);  // Ensure projectId is an integer
}

export default ProjectDetails;