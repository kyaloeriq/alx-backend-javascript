const express = require('express');
const app = express();

// Listen on port 7865
const port = 7865;
app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

// Define a GET route for the root ('/') endpoint
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// Export the app for testing
module.exports = app;
