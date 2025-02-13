import React from 'react';
import { Helmet } from 'react-helmet-async';

function Meta({ title, description, keywords, imageURL, reviewURL, pageType }) {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={imageURL} />
            <meta property="og:url" content={reviewURL} />
            <meta property="og:type" content={pageType} />
        </Helmet>
    );
}

export default Meta;