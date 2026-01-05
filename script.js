// Initialize Animate On Scroll
AOS.init();

// Sticky Navbar on Scroll
window.addEventListener('scroll', function() {
    let nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
});

// Smooth Mouse Move Effect for Cards (Optional Luxury Feel)
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        let x = e.pageX - card.offsetLeft;
        let y = e.pageY - card.offsetTop;
        card.style.setProperty('--x', x + 'px');
        card.style.setProperty('--y', y + 'px');
    });
});
