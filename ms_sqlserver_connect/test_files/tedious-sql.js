var Connection = require('tedious').Connection;
var Request = require('tedious').Request;

var config = {
    server: 'localhost',
    userName: 'chrisberrydbuser',
    password: 'chrisberry123!'

    , options: {
        debug: {
            packet: true,
            data: true,
            payload: true,
            token: false,
            log: true
        },
        database: 'Northwind',
        instanceName: 'SQLEXPRESS',
        encrypt: false // for Azure users
    }

};

var connection = new Connection(config);

connection.on('connect', function (err) {
        // If no error, then good to go...
        if (err) {
            console.log('Error ', err.message);
        } else {
            console.log('connected to ', config.server);
        }

        //executeStatement();
    }
);

connection.on('debug', function (text) {
        console.log('debug => ', text);
    }
);

//function executeStatement() {
//    var request = new Request("select 42, 'hello world'", function (err, rowCount) {
//        if (err) {
//            console.log(err);
//        } else {
//            console.log(rowCount + ' rows');
//        }
//
//        connection.close();
//    });
//
//    request.on('row', function (columns) {
//        columns.forEach(function (column) {
//            if (column.value === null) {
//                console.log('NULL');
//            } else {
//                console.log(column.value);
//            }
//        });
//    });
//
//    request.on('done', function (rowCount, more) {
//        console.log(rowCount + ' rows returned');
//    });
//
//    // In SQL Server 2000 you may need: connection.execSqlBatch(request);
//    connection.execSql(request);
//}
