/**
 * Main JavaScript File
 * Handles interactions for the WAS Insurance website
 */

document.addEventListener('DOMContentLoaded', () => {
    initActiveNav();
    initNavbarScroll();
    initScrollAnimations();
});

/**
 * Automatically highlights the active navigation link based on the current URL
 */
function initActiveNav() {
    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        // Remove active class from all
        link.classList.remove('active');

        // Check if link matches current path (handling root path / as well)
        const linkPath = link.getAttribute('href');
        if (currentLocation.endsWith(linkPath) ||
            (currentLocation.endsWith('/') && linkPath === 'index.html')) {
            link.classList.add('active');
        }
    });
}

/**
 * Adds styles to navbar on scroll
 */
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });
}

/**
 * Triggers fade-in animations on scroll using Intersection Observer
 */
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    // Target elements that should animate on scroll

    const fadeElements = document.querySelectorAll('.animate-on-scroll');
    fadeElements.forEach(el => {
        observer.observe(el);
    });
}
