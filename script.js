function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function sendEmail() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("Phone").value;
    const message = document.getElementById("message").value;

    const templateParams = {
        name: name,
        email: email,
        phone: phone,
        message: message,
        from_name: name,
        reply_to: email,
    };

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    emailjs.send("service_t3jk846", "template_cqybc2j", templateParams)
        .then((response) => {
            emailjs.send("service_t3jk846", "template_t025bli", templateParams).then((response) => {
                console.log("Email sent successfully! Response:", response.status, response.text);
                alert("Email sent successfully!");
            })
            .catch((error) => {
                console.error("Failed to send email. Error:", error);
                alert("Failed to send email. Please try again later. Error: " + error.message);
            });
        })
        .catch((error) => {
            console.error("Failed to send email. Error:", error);
            alert("Failed to send email. Please try again later. Error: " + error.message);
        });        
}
