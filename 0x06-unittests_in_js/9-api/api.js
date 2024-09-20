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

// Route with cart id validation (numeric only)
app.get('/cart/:id([0-9]+)', (req, res) => {
  const { id } = req.params;
  res.send(`Payment methods for cart ${id}`);
});

// 404 handler for invalid cart id
app.get('/cart/:id', (req, res) => {
  res.status(404).send('Invalid cart ID');
});

// Export the app for testing
module.exports = app;
