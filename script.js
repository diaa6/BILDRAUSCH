/* === NAV: scrolled state === */
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

/* === NAV: mobile burger === */
const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');

burger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    burger.classList.toggle('open', isOpen);
    burger.setAttribute('aria-expanded', isOpen);
    burger.setAttribute('aria-label', isOpen ? 'Menü schließen' : 'Menü öffnen');
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        burger.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
        burger.setAttribute('aria-label', 'Menü öffnen');
    });
});

/* === SCROLL REVEAL === */
const revealEls = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            entry.target.style.transitionDelay = (i % 4) * 80 + 'ms';
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
});

revealEls.forEach(el => observer.observe(el));
