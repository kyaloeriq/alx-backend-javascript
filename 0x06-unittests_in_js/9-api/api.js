// api.js

const express = require('express');
const app = express();
const port = 7865;

// Route GET /
app.get('/', (req, res) => {
    res.status(200).send('Welcome to the payment system');
});

// Route GET /cart/:id
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

module.exports = app;
