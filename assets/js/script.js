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
