const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "LoginSystem",
});

db.connect((err) => {
  if (err) throw err;
  console.log("connected");
});

app.get("/",(req,res) => {
  res.send({message: "Hiii"});
})

app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  db.query("INSERT INTO users (username, password) VALUES (?,?)", [username, password], (err, result) => {
    if (err) console.log(err);
  });
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  console.log(username+" "+password);
  db.query("SELECT * FROM users WHERE username = ? AND password = ?;",[username,password], (err, result) => {
    if (err) {
      res.send({ err: err });
    }
    else {
      if (result.length > 0) {
        res.send(result);
      } 
      else {
        res.send({ message: "Wrong username/password combination!" });
      }
    }
  });
});

app.listen(3001, () => {
  console.log("running server");
});
