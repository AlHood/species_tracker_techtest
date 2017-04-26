
var pg = require('pg');


class DbFunction {

// c
function create (object){
    pg.connect(connectionstring, function (err, client, done) {
        if (err) {
        }
             var query = client.query('INSERT INTO test (name) VALUES ($1) RETURNING *;', object.name);
            
            return query;
        
    });
}



// r


// u


// d







}

module.exports = DbFunction; 

// var pg = require('pg');
 
// // instantiate a new client 
// // the client will read connection information from 
// // the same environment variables used by postgres cli tools 
// var client = new pg.Client();
 
// // connect to our database 
// client.connect(function (err) {
//   if (err) throw err;
 
//   // execute a query on our database 
//   client.query('SELECT $1::text as name', ['brianc'], function (err, result) {
//     if (err) throw err;
 
//     // just print the result to the console 
//     console.log(result.rows[0]); // outputs: { name: 'brianc' } 
 
//     // disconnect the client 
//     client.end(function (err) {
//       if (err) throw err;
//     });
//   });
// });




// def save()
//   sql = "INSERT INTO transactions (merchant, tag_id, value, datestore) VALUES ('#{@merchant}', #{@tag_id}, #{@value}, '#{@datestore}') RETURNING *;"
//   transaction = SqlRunner.run( sql ).first
//   @id = transaction['id'].to_i
// end

// def self.all
//   sql = "SELECT * FROM transactions ORDER BY id;"
//   transactions = SqlRunner.run(sql)
//   return transactions.map { |transaction| Transaction.new(transaction)}
// end






