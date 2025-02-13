import React from 'react';
import './App.css';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// SCROLL TOP FUNCTION
import ScrollToTop from './components/ScrollToTop';

// META DESCRIPTIONS
import Meta from "./components/Meta";

// SITEWIDE COMPONENTS
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// HOMEPAGE COMPONENTS
import HeroSection from './components/homepage/HeroSection';
import AboutUs from './components/homepage/AboutUs';
import ServicesSection from './components/homepage/ServicesSection';
import TestimonialsSection from './components/homepage/TestimonialsSection';
import BlogPreviewSection from './components/homepage/BlogPreviewSection';

// PAGE COMPONENTS
import Services from './components/page/Services';
import Portfolio from './components/page/Portfolio';
import Blog from './components/page/Blog';
import About from './components/page/About';
import Contact from './components/page/Contact';
import Terms from './components/page/Terms';
import Privacy from "./components/page/Privacy";
import NotFound from './components/page/NotFound';
import ProjectDetails from './components/page/ProjectDetails';

// BLOGS
import AiCustomerService from "./components/articles/2025/february/5-ways-ai-can-improve-your-customer-service"
import AiChatbots from "./components/articles/2025/january/ai-powered-chatbots-a-comprehensive-guide-to-transforming-your-customer-interactions"
import EcommerceSecurity from "./components/articles/2025/january/building-a-fortress-security-best-practices-for-your-shopify-e-commerce-website"
import MobileFirst from "./components/articles/2024/decemeber/the-importance-of-mobile-first-web-design"
import CMSChoice from "./components/articles/2024/november/finding-your-perfect-match-how-to-choose-the-right-cms-for-your-business"
import ResponsiveWebDesign from "./components/articles/2024/october/the-ultimate-guide-to-responsive-web-design-crafting-seamless-experiences-across-devices"
import PowerOfSeo from "./components/articles/2024/september/unlock-the-power-of-seo-a-beginners-guide-to-ranking-higher"

function App() {
  return (
      <Router basename="/">
          <ScrollToTop />
          <div className="App">
              <Navbar />
              <Routes> {/* Use Routes instead of Switch */}
                  <Route path="/" element={
                      <>
                          <Meta
                              title="Groundworks Development: AI & Web Development Experts"
                              description="Transforming businesses with AI & Expert Web Development. Contact us for a free consultation."
                              keywords="AI, web development, AI integration, web design, digital marketing"
                              imageURL=""
                              reviewURL="/"
                          />
                          <HeroSection />
                          <AboutUs />
                          <ServicesSection />
                          <TestimonialsSection />
                          <BlogPreviewSection />
                      </>
                  } />
                  <Route path="/services" element={<Services />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/privacy" element={<Privacy />} />

                  {/* Portfolio */}
                  <Route path="/portfolio/:projectId" element={<ProjectDetails />} />

                  {/*Blogs*/}
                  <Route path="/articles/2025/february/5-ways-ai-can-improve-your-customer-service" element={<AiCustomerService />} />
                  <Route path="/articles/2025/january/ai-powered-chatbots-a-comprehensive-guide-to-transforming-your-customer-interactions" element={<AiChatbots />} />
                  <Route path="/articles/2025/january/building-a-fortress-security-best-practices-for-your-shopify-e-commerce-website" element={<EcommerceSecurity />} />
                  <Route path="/articles/2024/december/the-importance-of-mobile-first-web-design" element={<MobileFirst />} />
                  <Route path="/articles/2024/november/finding-your-perfect-match-how-to-choose-the-right-cms-for-your-business" element={<CMSChoice />} />
                  <Route path="/articles/2024/october/the-ultimate-guide-to-responsive-web-design-crafting-seamless-experiences-across-devices" element={<ResponsiveWebDesign />} />
                  <Route path="/articles/2024/september/unlock-the-power-of-seo-a-beginners-guide-to-ranking-higher" element={<PowerOfSeo />} />

                  <Route path="*" element={<NotFound />} />
              </Routes>
              <Footer />
          </div>
      </Router>
  );
}

export default App;