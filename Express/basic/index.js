const express = require("express");
const app = express();

let port = 3000;

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});

// always start server using node index.js

// lets understand

// using json format 

// app.use((req, res) => {
//   console.log("Request received");
//   res.send({
//     name: "Apple",
//     color: "Red",
//     weight: "200gm",
//   });
//   res.end();
// });

// using HTML format
app.use((req, res) => {
  console.log("Request received");
  
  let code = `
    <h1>Welcome to Express Server</h1>
    <p>This is a sample paragraph from Express server.</p>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  `;
  
  res.send(code);
  res.end();
});




