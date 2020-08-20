let mysql = require('mysql');
 
let con = mysql.createConnection({
 host: "localhost",
 user: "root",
 password: "abc123...",
 database:"music"
});
 
con.connect(function(err) {
 if (err) throw err;
 con.query("SELECT title FROM playlist ", function (err, result) {
 if (err) throw err;
 console.log(result);
 });
 });