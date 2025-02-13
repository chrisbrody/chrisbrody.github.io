import React from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom';
import Meta from "../Meta"

function NotFound() {
    const pageTitle = "404 - Page Not Found | GroundWorks Development";
    const pageDescription = "";
    const pageKeywords = "";
    const pageType = "Page"

    return (
        <div className="not-found-page">
            <Meta
                title={pageTitle}
                description={pageDescription}
                keywords={pageKeywords}
                pageType={pageType}
            />

            <header className="not-found-header">
                <h1>404 - Page Not Found</h1>
            </header>

            <section className="not-found-content">
                <p>
                    Oops! It seems like the page you're looking for doesn't exist.
                </p>
                <p>
                    You can return to the <Link to="/">homepage</Link> or contact us if
                    you need assistance.
                </p>
            </section>
        </div>
    );
}

export default NotFound;