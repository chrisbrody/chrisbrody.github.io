import React from 'react';
import './TestimonialsSection.css';
import FadeInOnScroll from '../FadeInOnScroll';

function TestimonialsSection() {
    const testimonials = [
        {
            id: 1,
            name: 'Lucas McNickle - Owner',
            company: 'Rialto Vacations',
            url: 'https://rialtovacations.com/',
            quote:
                'Groundworks Development was instrumental in bringing RialtoVactions.com to life. Chris Brody\'s expertise and dedication were evident from the very beginning. He built our site from the ground up, and the result is a stunning and highly functional platform that perfectly reflects our brand.',
        },
        {
            id: 2,
            name: 'Monica Cartwright',
            company: 'Monica\'s Gourmet Cookies',
            url: 'https://monicasgourmet.com/',
            quote:
                'Ordering our gourmet cookies online has never been easier, thanks to Groundworks Development! The website they created for monicasgourmet.com is seamless and user-friendly, and we\'ve seen a significant increase in online cookie sales since the launch. Our customers love the easy ordering process.',
        },
        {
            id: 3,
            name: 'Leonard Hwostow',
            company: 'Gladden Longevity',
            url: 'https://gladdenlongevity.com/',
            quote:
                'Groundworks Development\'s ability to build a sophisticated AI-powered article repository from scratch is truly impressive. This system is a game-changer for medical professionals, providing them with quick and easy access to the most relevant and critical research on longevity. We\'re excited about the positive impact this will have on healthcare.',
        },
        {
            id: 4,
            name: 'Mark Edwards',
            company: 'Mammoth Beer',
            url: 'https://www.mammothbeer.com/',
            quote:
                'Managing our online store has never been easier, thanks to Groundworks Development\'s Shopify expertise. Chris Brody built a custom Shopify website that\'s intuitive and easy to update, allowing us to focus on what we do best: brewing great beer. Their knowledge of Shopify is unmatched!',
        },
    ];

    return (
        <div className="testimonials-section">
            <FadeInOnScroll>
                <h2>What Our Clients Say</h2>
            </FadeInOnScroll>
            <FadeInOnScroll>
            <div className="testimonials-container">
                {testimonials.map((testimonial) => (
                    <div className="testimonial" key={testimonial.id}>
                        <p className="testimonial-quote">"{testimonial.quote}"</p>
                        <div className="testimonial-author">
                            <span className="testimonial-name">{testimonial.name},</span>
                            <span className="testimonial-company"><a href={testimonial.url}>{testimonial.company}</a></span>
                        </div>
                    </div>
                ))}
            </div>
            </FadeInOnScroll>
        </div>
    );
}

export default TestimonialsSection;