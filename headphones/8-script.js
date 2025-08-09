// Get elements
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

// Toggle menu on click
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show');

  // Animate hamburger into X
  hamburger.classList.toggle('active');
});
