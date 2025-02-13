import React, { useRef, useEffect, useState } from 'react';

function FadeInOnScroll({ children, threshold = [0, 0.25, 0.5, 0.75, 1] }) {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false); // Track if the device is mobile

    useEffect(() => {
        // Check if the device is mobile (using window.innerWidth)
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
        };

        // Initial check
        handleResize();

        // Listen for window resize events to update the isMobile state
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        // Only initialize the IntersectionObserver if not on mobile
        if (!isMobile) {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setIsVisible(entry.intersectionRatio); // Set to visibility % for smooth transition
                        } else {
                            setIsVisible(0); // Fully transparent when not intersecting
                        }
                    });
                },
                {
                    threshold: threshold, // Use the threshold prop or default
                }
            );

            const currentRef = sectionRef.current;  // Capture the current value of sectionRef.current

            if (currentRef) {
                observer.observe(currentRef);
            }

            return () => {
                if (currentRef) {
                    observer.unobserve(currentRef);
                }
            };
        } else {
            // If on mobile, set isVisible to 1 (fully visible)
            setIsVisible(1);
        }
    }, [threshold, isMobile]);

    return (
        <div
            ref={sectionRef}
            style={{ opacity: isMobile ? 1 : isVisible, transition: !isMobile ? 'opacity 0.5s ease-in-out' : 'none' }}
        >
            {children}
        </div>
    );
}

export default FadeInOnScroll;