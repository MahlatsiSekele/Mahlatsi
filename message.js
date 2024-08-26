document.getElementById('inquiry-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    // Create output message
    var outputMessage = `
        <h2>Inquiry Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p>Thank you for reaching out! We will get back to you soon.</p>
    `;

    // Display the output message
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = outputMessage;
    outputDiv.style.display = 'block';

    // Clear the form
    document.getElementById('inquiry-form').reset();
});
