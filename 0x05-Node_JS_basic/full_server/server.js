import express from 'express';
import router from './routes/index.js';

const app = express();

// Use the routes defined in the router
app.use('/', router);

// Listen on port 1245
const port = 1245;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Export the Express app for testing or reuse
export default app;
