document.addEventListener('DOMContentLoaded', () => {
    initActiveNav();
    initNavbarScroll();
    initScrollAnimations();
});

function initActiveNav() {
    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.classList.remove('active');

        const linkPath = link.getAttribute('href');
        if (currentLocation.endsWith(linkPath) ||
            (currentLocation.endsWith('/') && linkPath === 'index.html')) {
            link.classList.add('active');
        }
    });
}

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
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.animate-on-scroll');
    fadeElements.forEach(el => {
        observer.observe(el);
    });
}
