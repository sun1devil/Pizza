// Set up MySQL connection.
var mysql = require('mysql');
var connection;
var JAWSDB_URL = "mysql://gr01rnq0m3wc2i7q:i0gg0zwzpzyfngck@j1r4n2ztuwm0bhh5.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/d39idmerrj6aglo5";



if ( process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "#Devils1",
        database: "pizza_db"
      });
}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
