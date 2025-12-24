const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

//express automatically require ejs module when we set view engine to ejs
// view = templates, so here view engine means template engine

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// we dont send in res.send when we are using ejs in express
// we use res.render to render ejs files
// and generally ejs files are stored in views folder
// so we need to create a folder named views in the root directory

app.get("/ig/:username", (req, res) => {
    const followers = ["adams","eve", "ram", "sita"]
    let {username} = req.params;
    res.render("Instagram",{ username, followers });
});

app.get("/", (req, res) => {
  res.render("home");
});

// app.get("/rollDice", (req, res) => {
//   let diceVal = Math.floor(Math.random() * 6) + 1;
//   res.render("rollDice", { num: diceVal });
// });

app.get("/rollDice", (req, res) => {
  let diceVal = Math.floor(Math.random() * 6) + 1;
  res.render("rollDice", { num: diceVal });
});

app.get("/hello", (req, res) => {
  res.send(`<h1>Hello from EJS Server!</h1>`); // we can also pass data to ejs file like this
});

// app.get('/', (req, res) => {
//     res.send('Hello from EJS Server!');
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
