/* Add your JavaScript to this file */
document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.getElementById('newsletter-form');
    const messageDiv = document.querySelector('.message');
    const emailInput = document.getElementById('email');
    
    newsletterForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const email = emailInput.value.trim();
        
        // Simple email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (email === '') {
            displayMessage('Please enter a valid email address.', 'error');
        } else if (!emailRegex.test(email)) {
            displayMessage('Please enter a valid email address.', 'error');
        } else {
            displayMessage(`Thank you! Your email address <strong>${email}</strong> has been added to our mailing list!`, 'success');
            emailInput.value = ''; // Clear the input field
        }
    });
    
    function displayMessage(message, type) {
        // Clear previous classes
        messageDiv.className = 'message';
        
        // Add appropriate class based on message type
        if (type === 'success') {
            messageDiv.classList.add('success');
        } else if (type === 'error') {
            messageDiv.classList.add('error');
        }
        
        // Set the message content
        messageDiv.innerHTML = message;
    }
});