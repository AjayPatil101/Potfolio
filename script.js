(function(){
    emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS user ID

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        // Collect form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        const serviceID = 'default_service';
        const templateID = 'template_cqybc2j';
        // Prepare the parameters for EmailJS
        const templateParams = {
            to_name: 'Ajay', // The recipient's name
            from_name: name, // The sender's name
            message: message, // The message from the sender
        };

        // Send the email using EmailJS
        emailjs.send(serviceID, templateID, templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Your message has been sent successfully!');
            }, function(error) {
                console.log('FAILED...', error);
                alert('There was an error sending your message. Please try again later.');
            });
    });
})();
