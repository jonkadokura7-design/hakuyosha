document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.js-g-menu-btn');
    const header = document.querySelector('.l-header');
    const body = document.body;

    // Mobile Menu Toggle
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            const isOpen = header.classList.toggle('is-open');
            if (isOpen) {
                body.style.overflow = 'hidden';
            } else {
                body.style.overflow = '';
            }
        });
    }

    // Close menu when clicking a link
    const navLinks = document.querySelectorAll('.l-header__nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            header.classList.remove('is-open');
            body.style.overflow = '';
        });
    });

    // Sticky Header Scroll Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('is-scrolled');
        } else {
            header.classList.remove('is-scrolled');
        }
    });

    // Scroll Animations (Intersection Observer)
    const fadeElements = document.querySelectorAll('.section-title, .service-card, .reason-card, .p-pickup__banner, .news-ticker');

    // Add initial class to fade elements
    fadeElements.forEach(el => el.classList.add('js-fade-in'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    fadeElements.forEach(el => observer.observe(el));
});
