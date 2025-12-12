import express from 'express'; 

const app = express();
const PORT = 3000;

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