let mysql = require('mysql2')
let con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"59!Birpu!"
});

con.connect(function(err){
if(err) throw err;
console.log("Conected!");

});