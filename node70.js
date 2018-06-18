var mysql      = require('./node_modules/mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '661475chen',
  database : 'test'
});
 
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});