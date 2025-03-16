window.onload = () => {
   const preloader = document.querySelector('.preloader');
   setTimeout(() => {
      preloader.style.display = 'none';
   }, 1000);
}

// Basic DOMContentLoaded function
document.addEventListener('DOMContentLoaded', function() {
   // Set the header height to window height
   const header = document.querySelector('.header');
   header.style.height = window.innerHeight + 'px';
});


// Change navbar background color on scroll
const navbar = document.querySelector('.navbar');

onscroll = () => {
   if (pageYOffset > 0) {
      navbar.style.background = 'var(--navbar-bg)';
   }
   else if (pageYOffset === 0) {
      navbar.style.background = 'none';
   }
};




const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("#nav-menu a");

const observer = new IntersectionObserver(entries => {
   entries.forEach(entry => {
      if (entry.isIntersecting) {
         navLinks.forEach(link => link.classList.remove("active"));
         document.querySelector(`a[href="#${entry.target.id}"]`).classList.add("active");
      }
   })
}, { threshold: 0.6 })

sections.forEach(section => observer.observe(section));