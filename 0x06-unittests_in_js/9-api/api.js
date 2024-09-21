const express = require('express');
const app = express();

// Route for valid cart IDs
app.get('/cart/:id(\\d+)', (req, res) => {
  const id = req.params.id;
  res.send(`Payment methods for cart ${id}`);
});

// Default error handler for invalid routes (404 Not Found)
app.use((req, res) => {
  res.status(404).send('<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><title>Error</title></head><body><pre>Cannot GET ' + req.url + '</pre></body></html>');
});

app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});
