// Toggle mobile menu
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('show');
}

// Contact form validation
document.getElementById('contactForm')?.addEventListener('submit', function(e){
  e.preventDefault();
  alert('Thank you for contacting us! We will get back to you soon.');
  this.reset();
});
