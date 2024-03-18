// Initialize ScrollReveal
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

// Toggle navbar and menu icon
let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuicon.onclick = () => {
   menuicon.classList.toggle('bx-x');
   navbar.classList.toggle('active');
};

// Remove toggle and navbar when link is clicked (scroll)
document.querySelectorAll('header nav a').forEach(link => {
   link.addEventListener('click', () => {
       menuicon.classList.remove('bx-x');
       navbar.classList.remove('active');
   });
});

// Scroll section active
let navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
   let fromTop = window.scrollY + 150;

   navLinks.forEach(link => {
       let section = document.querySelector(link.hash);

       if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
           link.classList.add('active');
       } else {
           link.classList.remove('active');
       }
   });
});

// Sticky navbar
window.addEventListener('scroll', () => {
   let header = document.querySelector('header');
   header.classList.toggle('stiky', window.scrollY > 100);
});

// Scroll reveal
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .project-box', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .contact form', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .process', { origin: 'right' });
