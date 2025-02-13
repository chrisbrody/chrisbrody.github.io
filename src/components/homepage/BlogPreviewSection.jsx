import React from 'react';
import { Link } from 'react-router-dom';
import './BlogPreviewSection.css';
import FadeInOnScroll from '../FadeInOnScroll';

function BlogPreviewSection() {
    const blogPosts = [
        {
            id: 1,
            title: '5 Ways AI Can Improve Your Customer Service',
            excerpt:
                'Learn how to leverage AI to enhance your customer service, from AI-powered chatbots to personalized support experiences. Boost customer satisfaction and streamline your support operations.',
            imageUrl: 'https://placehold.co/600x400/2ecc71/ffffff?text=AI+Customer+Service', // Placeholder image URL
            link: '/blog/2025/february/5-ways-ai-can-improve-your-customer-service',
        },
        {
            id: 2,
            title: 'Building a Secure E-Commerce Website with Shopify',
            excerpt:
                'Protect your customers and your business by following our security best practices for building e-commerce websites with Shopify. Learn how to prevent fraud, secure payments, and protect sensitive data.',
            imageUrl: 'https://placehold.co/600x400/e74c3c/ffffff?text=Shopify+Security', // Placeholder image URL
            link: '/blog/2025/january/building-a-fortress-security-best-practices-for-your-shopify-e-commerce-website', // Replace with the actual link to your blog post
        },
    ];

    return (
        <div className="blog-preview-section">
            <FadeInOnScroll>
                <h2>Latest from Our Blog</h2>
                <div className="blog-posts-container">
                    {blogPosts.map((post) => (
                        <div className="blog-post" key={post.id}>
                            <Link href={post.link} className="blog-post-link">
                                <img src={post.imageUrl} alt={post.title} className="blog-post-image" />
                                <div className="blog-post-content">
                                    <h3>{post.title}</h3>
                                    <p>{post.excerpt}</p>
                                    <span className="read-more">Read More →</span>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </FadeInOnScroll>
        </div>
    );
}

export default BlogPreviewSection;