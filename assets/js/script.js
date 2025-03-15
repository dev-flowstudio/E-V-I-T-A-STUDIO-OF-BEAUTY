// Basic DOMContentLoaded function
document.addEventListener('DOMContentLoaded', function() {
   const preloader = document.querySelector('.preloader');
   setTimeout(() => {
      preloader.style.display = 'none';
   }, 1000);
   
   // Set the header height to window height
   const header = document.querySelector('.header');
   header.style.height = window.innerHeight + 'px';
});


// Change navbar background color on scroll
var navbar = document.querySelector('.navbar');

onscroll = () => {
   if (pageYOffset > 0) {
      navbar.style.background = 'var(--navbar-bg)';
   }
   else if (pageYOffset === 0) {
      navbar.style.background = 'none';
   }
};




var sections = document.querySelectorAll("section");
var navLinks = document.querySelectorAll("#nav-menu a");

var observer = new IntersectionObserver(entries => {
   entries.forEach(entry => {
      if (entry.isIntersecting) {
         navLinks.forEach(link => link.classList.remove("active"));
         document.querySelector(`a[href="#${entry.target.id}"]`).classList.add("active");
      }
   })
}, { threshold: 0.6 })

sections.forEach(section => observer.observe(section));