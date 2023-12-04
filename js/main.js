
// Import the necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const validator = require('validator');

// Create an Express application
const app = express();

// Use body-parser to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Define a route to handle form submissions
app.post('/submit', (req, res) => {
    // Access form data
    const email = req.body.email;

    // Validate the email address
    if (validator.isEmail(email)) {
        // If the email is valid, do something with it (like save it in a database)
        console.log(`Received a valid email: ${email}`);
        res.send('Form submission received');
    } else {
        // If the email is not valid, send an error message
        console.log(`Received an invalid email: ${email}`);
        res.status(400).send('Invalid email address');
    }
});

// Start the server
app.listen(5500, () => console.log('Server is listening on port 5500'));

