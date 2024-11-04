// Initialize EmailJS
(function() {
    emailjs.init("wo9uQW6RK_cwaLrqg"); // Replace with your EmailJS user ID
})();

// Send email using the form data
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    emailjs.sendForm('service_u5em3pa', 'template_sofm1yr', this)
        .then(function() {
            alert('Message sent successfully!');
        }, function(error) {
            alert('Failed to send message. Please try again.');
        });
});