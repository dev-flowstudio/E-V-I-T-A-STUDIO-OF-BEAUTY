window.onload = () => {
   const preloader = document.querySelector('.preloader');
   setTimeout(() => {
      preloader.style.display = 'none';
   }, 1000);
   
   // Set the header height to window height
   const header = document.querySelector('.header');
   header.style.height = window.innerHeight + 'px';
}

// Basic DOMContentLoaded function
document.addEventListener('DOMContentLoaded', function() {});


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




// const sections = document.querySelectorAll("section");
// const navLinks = document.querySelectorAll("#nav-menu a");

// const observer = new IntersectionObserver(entries => {
//    entries.forEach(entry => {
//       if (entry.isIntersecting) {
//          navLinks.forEach(link => link.classList.remove("active"));
//          document.querySelector(`a[href="#${entry.target.id}"]`).classList.add("active");
//       }
//    })
// }, { threshold: 0.6 })

// sections.forEach(section => observer.observe(section));



// Product slider initialization
const product_slider = new Swiper('.product-slider', {
   direction: 'horizontal',
   loop: true,
   autoplay: true,
   
   keyboard: {
      enabled: true,
      onlyInViewport: true, // Ensures it only works when Swiper is in the viewport
      pageUpDown: true, // Enables Page Up and Page Down keys
   },
   
   breakpoints: {
      // when window width is >= 320px
      400: {
         slidesPerView: 1,
         spaceBetween: 10
      },
      // when window width is >= 480px
      600: {
         slidesPerView: 2,
         spaceBetween: 10
      },
      // when window width is >= 640px
      800: {
         slidesPerView: 3,
         spaceBetween: 20
      },
      // when window width is >= 880px
      1000: {
         slidesPerView: 4,
         spaceBetween: 20
      },
   },
   
   // navigation: {
   //    nextEl: '.swiper-button-next',
   // },
   
   scrollbar: {
      el: '.swiper-scrollbar',
      clickable: true,
   },
});

document.querySelector('.product-slider-button-next').onclick = () => product_slider.slideNext(); // Go to next slide

// Keyboard navigation and interaction with product slider
let debounce = false;

document.addEventListener("keydown", function(event) {
   // Ignore key events if an input, textarea, or select is focused
   if (document.activeElement.tagName === "INPUT" ||
      document.activeElement.tagName === "TEXTAREA" ||
      document.activeElement.tagName === "SELECT") {
      return;
   }
   
   if (debounce) return; // Prevent action if debounce is active
   
   debounce = true;
   setTimeout(() => debounce = false, 300); // Adjust delay time
   
   
   if (event.key === "ArrowRight") {
      product_slider.slideNext(); // Go to next slide
   } else if (event.key === "ArrowLeft") {
      product_slider.slidePrev(); // Go to previous slide
   } else if (event.key === "Home") {
      swiper.slideTo(0); // Go to the first slide
   } else if (event.key === "End") {
      swiper.slideTo(swiper.slides.length - 1); // Go to the last slide
   }
});