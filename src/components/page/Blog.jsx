import React from 'react';
import './Blog.css';
import Meta from "../Meta"

function Blog() {
    const pageTitle = "Blog | GroundWorks Development";
    const pageDescription = "GroundWorks Development Blog: Stay up-to-date with the latest web development and AI news, insights, and tutorials. Learn about AI in customer service, e-commerce security, responsive design, SEO, and more.";
    const pageKeywords = "web development blog, AI blog, AI integration blog, web design blog, e-commerce security, responsive web design, SEO tips, AI customer service, Shopify security, mobile-first web design, CMS selection, GroundWorks Development blog";
    const pageType = "Page"

    const blogPosts = [
        {
            id: 1,
            title: '5 Ways AI Can Improve Your Customer Service',
            excerpt:
                'Learn how to leverage AI to enhance your customer service, from AI-powered chatbots to personalized support experiences. Boost customer satisfaction and streamline your support operations.',
            imageUrl: 'https://placehold.co/600x400/2ecc71/ffffff?text=AI+Customer+Service',
            link: '/articles/2025/february/5-ways-ai-can-improve-your-customer-service',
        },

        {
            id: 2,
            title: 'Building a Secure E-Commerce Website with Shopify',
            excerpt:
                'Protect your customers and your business by following our security best practices for building e-commerce websites with Shopify. Learn how to prevent fraud, secure payments, and protect sensitive data.',
            imageUrl: 'https://placehold.co/600x400/e74c3c/ffffff?text=Shopify+Security',
            link: '/articles/2025/january/building-a-fortress-security-best-practices-for-your-shopify-e-commerce-website',
        },
        {
            id: 3,
            title: 'Transforming Your Customer Interactions',
            excerpt:
                'Intelligent virtual assistants are revolutionizing the way businesses interact with their customers, offering a powerful solution for improving customer satisfaction, streamlining operations, and driving growth.',
            imageUrl: 'https://placehold.co/600x400/666fff/ffffff?text=Ai+Chatbots',
            link: '/articles/2025/january/ai-powered-chatbots-a-comprehensive-guide-to-transforming-your-customer-interactions',
        },
        {
            id: 4,
            title: 'The Importance of Mobile-First Web Design',
            excerpt:
                'In today\'s digital world, the majority of internet users access the web via mobile devices. Ignoring this reality can lead to a significant loss of potential customers, engagement, and revenue.',
            imageUrl: 'https://placehold.co/600x400/f39c12/ffffff?text=Mobile-First',
            link: '/articles/2024/december/the-importance-of-mobile-first-web-design',
        },
        {
            id: 5,
            title: 'How to Choose the Right CMS',
            excerpt:
                'Your CMS will be the backbone of your online presence, impacting everything from your website\'s design and functionality to your content management workflow and your ability to attract and engage your target audience.',
            imageUrl: 'https://placehold.co/600x400/3498db/ffffff?text=CMS Selection',
            link: '/articles/2024/november/finding-your-perfect-match-how-to-choose-the-right-cms-for-your-business',
        },
        {
            id: 6,
            title: 'The Ultimate Guide to Responsive Web Design',
            excerpt:
                'Create websites that look great on any device with our comprehensive guide to responsive web design. Learn the best practices for creating flexible layouts, using media queries, and optimizing images.',
            imageUrl: 'https://placehold.co/600x400/9b59b6/ffffff?text=Responsive+Design',
            link: '/articles/2024/october/the-ultimate-guide-to-responsive-web-design-crafting-seamless-experiences-across-devices',
        },
        {
            id: 7,
            title: 'A Beginner\'s Guide to Ranking Higher',
            excerpt:
                'In today\'s digital world, having a website is only half the battle. To truly succeed online, you need to make sure that your website is visible to your target audience. And that\'s where Search Engine Optimization (SEO) comes in.',
            imageUrl: 'https://placehold.co/600x400/34495e/ffffff?text=Power+Of+Seo',
            link: '/articles/2024/september/unlock-the-power-of-seo-a-beginners-guide-to-ranking-higher',
        },
    ];

    return (
        <div className="blog-page page">
            <Meta
                title={pageTitle}
                description={pageDescription}
                keywords={pageKeywords}
                pageType={pageType}
            />

            <header className="blog-header">
                <h1>Blog</h1>
                <p>Stay up-to-date with the latest news, insights, and trends in web development and AI.</p>
            </header>

            <div className="blog-posts-container">
                {blogPosts.map((post) => (
                    <div className="blog-post" key={post.id}>
                        <a href={post.link} className="blog-post-link">
                            <img src={post.imageUrl} alt={post.title} className="blog-post-image" />
                            <div className="blog-post-content">
                                <h3>{post.title}</h3>
                                <p>{post.excerpt}</p>
                                <span className="read-more">Read More →</span>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Blog;