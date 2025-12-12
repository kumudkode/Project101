import express from 'express'; 
import { rateLimit } from 'express-rate-limit';

const app = express();
const PORT = 3000;

//Create a limiter
const limiter = rateLimit({
  limit: 5,
  windowMs: 60000,
  message: "Too many requests, please try again later",
})

/** 
Challenge: 
* 1. Use the package docs to apply the rate limiter to the endpoint.
* 2. Keep the timestamp in the JSON response but change "requestCount" to a 
		 "remainingRequests" property.
* 3. Make this new property's value the number of remaining requests allowed 
     before the rate limiter kicks in. Use the optional chaining operator to 
     safely access this property.
*/

// Single endpoint with no protection
app.get('/api/data', limiter, (req, res) => {
  res.json({
    timestamp: new Date().toLocaleTimeString(),
    remainingRequests: req.rateLimit?.remaining ?? 'unknown',
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});




