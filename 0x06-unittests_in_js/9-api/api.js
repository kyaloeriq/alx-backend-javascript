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

app.get('/cart/:id([0-9]+)', (req, res) => {
    const cartId = req.params.id;
    res.status(200).json({ message: `Payment methods for cart ${cartId}` });
});

// Handle invalid :id (not a number)
app.get('/cart/:id', (req, res) => {
    res.status(404).json({ error: 'Cart ID must be a number' });
});

app.listen(port, () => {
    console.log(`API listening on port ${port}`);
});

// Export the app for testing
module.exports = app;
