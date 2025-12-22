const express = require("express");
const app = express();

let port = 3000;

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello from Express Server💖");
  res.end();
});

app.get("/about", (req, res) => {
  res.send("This is the 👏👏about page of our Express Server");
  res.end();
});

app.get("/contact", (req, res) => {
  res.send("This is the 👨‍💻👨‍💻contact page of our Express Server");
  res.end();
});

// * can be any path like /help /me /meow anything 
app.get("*", (req, res) => {
  res.send("404 Page Not Found 😥");
  res.end();
});




