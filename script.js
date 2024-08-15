// function validateEmail(email) {
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(String(email).toLowerCase());
// }

// // function sendEmail() {
// //     const name = document.getElementById("name").value;
// //     const email = document.getElementById("email").value;
// //     const phone = document.getElementById("Phone").value;
// //     const message = document.getElementById("message").value;
    
// //     if (!validateEmail(email)) {
// //         alert("Please enter a valid email address.");
// //         return;
// //     }

// //     Email.send({
// //         Host: "smtp.elasticemail.com",
// //         Port: 465, // Use 587 for TLS, or 465 for SSL
// //         Username: "ajayupatil101@gmail.com", // Your ElasticEmail username
// //         Password: "6C5BD0927698A55F757E0496256E1E1DF886", // Your ElasticEmail SMTP password
// //         To: 'ajayupatil101@gmail.com', // The recipient email address
// //         From: email, // The sender email address
// //         Subject: "New Contact Form Submission",
// //         Body: `Name: ${name}<br>Email: ${email}<br>Phone: ${phone}<br>Message: ${message}`
// //     }).then(
// //         response => {
// //             console.log("Email sent successfully:", response);
// //             alert("Email sent successfully!");
// //         }
// //     ).catch(
// //         error => {
// //             console.error("Error sending email:", error);
// //             alert("Failed to send email: " + error);
// //         }
// //     );
    
// // }

// function sendEmail() {
//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const phone = document.getElementById("Phone").value;
//     const message = document.getElementById("message").value;
    
//     if (!validateEmail(email)) {
//         alert("Please enter a valid email address.");
//         return;
//     }

//     // Email.send({
//     //     Host: "smtp.elasticemail.com",
//     //     Port: 587,//Use 587 for TLS, or 465 for SSL
//     //     Username: "ajayupatil101@gmail.com", // Your ElasticEmail username
//     //     Password: "6C5BD0927698A55F757E0496256E1E1DF886", // Your ElasticEmail SMTP password
//     //     To: "ditrupummoine-4672@yopmail.com",// The recipient email address
//     //     From: email, // The sender email address
//     //     Subject: "New Contact Form Submission",
//     //     Body: `Name: ${name}<br>Email: ${email}<br>Phone: ${phone}<br>Message: ${message}`,
//     //     Secure: true
//     // }).then(
//     //     response => {
//     //         console.log("Email sent successfully:", response);
//     //         alert("Email sent successfully!");
//     //     }
//     // ).catch(
//     //     error => {
//     //         console.error("Error sending email:", error);
//     //         alert("Failed to send email. Please try again later. Error: " + error.message);
//     //     }
//     // );
//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "patilajay2611@gmail.com",
//         Password : "AC0A0E0F24BCE7683733294B4C20D5009781",
//         To : 'patilajay2611@gmail.com',
//         From : "patilajay2611@gmail.com",
//         Subject : "This is the subject",
//         Body : "And this is the body"
//     }).then(
//       message => alert(message)
//     ).catch(
//         message => alert(message)
//     );
// }


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

    emailjs.send("service_t3jk846", "template_cqybc2j", templateParams)
        .then((response) => {
            console.log("Email sent successfully! Response:", response.status, response.text);
            alert("Email sent successfully!");
        })
        .catch((error) => {
            console.error("Failed to send email. Error:", error);
            alert("Failed to send email. Please try again later. Error: " + error.message);
        });
    emailjs.send("service_t3jk846", "template_t025bli", templateParams)
        .then((response) => {
            console.log("Email sent successfully! Response:", response.status, response.text);
            alert("Email sent successfully!");
        })
        .catch((error) => {
            console.error("Failed to send email. Error:", error);
            alert("Failed to send email. Please try again later. Error: " + error.message);
        });
}
