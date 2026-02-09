

// Initialize Lucide Icons
lucide.createIcons();

// DOM Elements
const navbarContainer = document.getElementById('navbar-container');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const mobileLinks = document.querySelectorAll('.mobile-link');
const body = document.body;

let isMenuOpen = false;

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbarContainer.classList.remove('w-full', 'bg-transparent');
        navbarContainer.classList.add(
            'bg-void/80', 
            'backdrop-blur-xl', 
            'border', 
            'border-white/10', 
            'shadow-[0_0_20px_rgba(0,0,0,0.5)]', 
            'w-full', 
            'max-w-5xl'
        );
    } else {
        navbarContainer.classList.add('w-full', 'bg-transparent');
        navbarContainer.classList.remove(
            'bg-void/80', 
            'backdrop-blur-xl', 
            'border', 
            'border-white/10', 
            'shadow-[0_0_20px_rgba(0,0,0,0.5)]', 
            'max-w-5xl'
        );
    }
});

// Mobile Menu Toggle
mobileMenuBtn.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    toggleMenu();
});

// Close menu when a link is clicked
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        isMenuOpen = false;
        toggleMenu();
    });
});

function toggleMenu() {
    if (isMenuOpen) {
        // Show Menu
        mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
        mobileMenu.classList.add('opacity-100', 'pointer-events-auto');
        
        // Change Icon to X
        menuIcon.setAttribute('data-lucide', 'x');
        
        // Lock Scroll
        body.classList.add('menu-open');
    } else {
        // Hide Menu
        mobileMenu.classList.remove('opacity-100', 'pointer-events-auto');
        mobileMenu.classList.add('opacity-0', 'pointer-events-none');
        
        // Change Icon to Menu
        menuIcon.setAttribute('data-lucide', 'menu');
        
        // Unlock Scroll
        body.classList.remove('menu-open');
    }
    // Re-render icons after attribute change
    lucide.createIcons();
}

// Scroll Animation Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); 
        }
    });
}, observerOptions);

document.querySelectorAll('.scroll-anim').forEach((el) => {
    observer.observe(el);
});
