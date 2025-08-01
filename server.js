const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to  application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port :: ${PORT}.`);
});



// const db = require("./src/model/index");
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// let mysql = require('mysql2')
// let con = mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"59!Birpu!"
// });

// con.connect(function(err){
// if(err) throw err;
// console.log("Conected!");

// });