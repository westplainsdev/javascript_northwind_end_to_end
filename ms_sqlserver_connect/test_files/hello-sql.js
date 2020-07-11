// http://developer.leankit.com/painless-sql-server-with-nodejs-and-seriate/
// https://www.npmjs.com/package/seriate

var sql = require("seriate");

// Change the config settings to match your
// SQL Server and database
var config = {
    "server": "127.0.0.1",
    "user": "chrisberrydbuser",
    "password": "chrisberry123!",
    "database": "northwind"
};

sql.setDefaultConfig( config );

var orderId = '11077';

sql.execute( {
    //query: "SELECT c.companyName, orders.* FROM orders INNER JOIN customers c on orders.customerid = c.customerid where orderid = @orderId",
    query: sql.fromFile('./sql/ordersById'),
    params: {
        orderId: {
            type: sql.NVARCHAR,
            val: orderId,
        }
    }
} ).then( function( results ) {
    console.log( results[0] );
}, function( err ) {
    console.log( "Something bad happened:", err );
} );