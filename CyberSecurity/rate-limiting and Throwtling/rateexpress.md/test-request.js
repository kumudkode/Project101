import http from 'http';

function makeRequest(requestNumber) {
  return new Promise((resolve, reject) => {
    const req = http.get('http://localhost:3000/api/data', (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => {
       
        console.log(`Request ${requestNumber}: ${res.statusCode}`);
        console.log(`${data.substring(0, 100)}`);
        console.log(''); // Empty line for readability
   
        // Response completes - calls resolve()
        resolve({
          status: res.statusCode,
          data,
        });
      });
    });

    req.on('error', (err) => {
      console.log(`Request ${requestNumber}: Error - ${err.message}`);
      // Request fails - calls reject()
      reject(err);
    });
  });
}

async function demoRateLimit() {
  console.log('🚀 Starting rate limit demo...\n');

  // Make 15 requests quickly
  const promises = [];
  for (let i = 1; i <= 15; i++) {
    promises.push(makeRequest(i));
    // Small 50ms delay between requests
    await new Promise((resolve) => setTimeout(resolve, 50));
  }

  try {
    // wait for all requests to complete
    await Promise.all(promises);
  } catch (error) {
    console.log('Demo completed with some errors (expected for rate limiting)');
  }
}

demoRateLimit();
