/**
 * EDUNEXUS - OFFICIAL PORTAL LOGIC
 * Features: Sticky Nav, Mobile Menu, Counter, Tabs, AOS, Form Validation
 */

document.addEventListener('DOMContentLoaded', () => {

    // 1. INITIALIZE AOS (Animate On Scroll)
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: false,
        mirror: true
    });

    // 2. STICKY NAVBAR EFFECT
    const navbar = document.querySelector('#navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    });

    // 3. MOBILE MENU TOGGLE
    const menuToggle = document.querySelector('#mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Burger Animation
        menuToggle.classList.toggle('is-active');
    });

    // 4. DYNAMIC COUNTER ANIMATION
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // The lower the slower

    const runCounter = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const inc = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 1);
                } else {
                    counter.innerText = target + "+";
                }
            };
            updateCount();
        });
    };

    // Intersection Observer for Counter (Scroll panna matum run aagum)
    const statsSection = document.querySelector('#stats');
    const observer = new IntersectionObserver((entries) => {
        if(entries[0].isIntersecting) {
            runCounter();
            observer.unobserve(statsSection);
        }
    }, { threshold: 0.5 });

    observer.observe(statsSection);

    // 5. COURSE TAB SYSTEM
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');

            // Remove active classes
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked
            button.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // 6. SMOOTH SCROLL FOR LINKS
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu on click
            if(navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    // 7. CONTACT FORM SUBMISSION (MOCK)
    const contactForm = document.querySelector('.contact-form form');
    if(contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerText;
            
            btn.innerText = "Sending...";
            btn.disabled = true;

            setTimeout(() => {
                alert("Thank you! Your message has been sent to the official EduNexus team.");
                contactForm.reset();
                btn.innerText = originalText;
                btn.disabled = false;
            }, 2000);
        });
    }
});
