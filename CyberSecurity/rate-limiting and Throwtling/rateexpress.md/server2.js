import express from 'express'; 
import { rateLimit } from 'express-rate-limit';

const app = express();
const PORT = 3000;

/** 
Challenge: 
* 1. Use the package docs to create a rate limiter using the "rateLimit" 
     function.

* 2. Allow 5 requests per 60 second window.

* 3. Set a response message of, "Too many requests, please try again later".

*/

const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 5, // limit each IP to 5 requests per windowMs
  message: "Too many requests, please try again later"
});
// Apply the rate limiting middleware to the /api/data endpoint
app.use('/api/data', limiter);
 
// Single endpoint with no protection
app.get('/api/data', (req, res) => {
  res.json({
    timestamp: new Date().toLocaleTimeString(),
    requestCount: 'unlimited'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});