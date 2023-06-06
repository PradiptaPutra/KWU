// script.js

// Add smooth scrolling to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Handle form submission
  document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Perform form validation and submission here
    // You can use AJAX to send the form data to the server
    // and display a success message to the user
  });
  