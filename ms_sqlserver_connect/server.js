var express = require('express');
var bodyParser = require('body-parser'); // This is required to read body data in POST calls
var cookieParser = require('cookie-parser'); // This is required to read cookies
var sql = require("seriate"); // mssql server data access
var cors = require('cors'); // this lib allows cross domain requests to happen.

var customerApi = require("./customerApi");
var ordersApi = require("./ordersApi");

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(__dirname + '/public'));
app.use(cors());  // setup server to use cors
app.options('*', cors());  // allow all pre-flight options


var serverConfig = {port: 3000};
// Change the config settings to match your SQL database
var sqlConfig = {
    "server": "127.0.0.1",
    "user": "chrisberrydbuser",
    "password": "chrisberry123!",
    "database": "northwind"
};

sql.setDefaultConfig(sqlConfig);

customerApi.register(app);
ordersApi.register(app);

app.listen(serverConfig.port);

console.log('server started on port: %d ', serverConfig.port);