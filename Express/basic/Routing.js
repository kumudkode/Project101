const express = require("express");
const app = express();

let port = 3000;

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello from Express Server💖");
});

app.get("/about", (req, res) => {
  res.send("This is the 👏👏about page of our Express Server");
});

app.get("/contact", (req, res) => {
  res.send("This is the 👨‍💻👨‍💻contact page of our Express Server");
});

// Catch all other routes (404 handler)
app.use((req, res) => {
  res.status(404).send("404 Page Not Found 😥");
});
