const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
const PORT = 5000;

let dbconfig = require(__dirname + "/db-config.json");
let connection = mysql.createConnection(dbconfig);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/list", (req, res) => {
  connection.query("SELECT * from myshop_board", (err, rows) => {
    if (err) {
      throw err;
    }

    res.send(rows);
  });
});

app.listen(PORT, () => {
  console.log(`server running on PORT ${PORT}`);
});
