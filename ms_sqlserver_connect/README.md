## MS SQL SERVER APPLICATION SERVER SETUP ##
An example application which connects to a sql server and serves up data via HTTP endpoints.

[Usage of seriate][1]


[NPM package Seriate][2]


[Microsoft Northwind demo database.][3]


Download the .zip source file. This will contain the sql script needed to create
and populate your database.

## The organization of this application is as follows: ##

The server.js file is the main entry point for the application. The server 
file is where we setup the configuration for the sql server connection and 
where each api file is registered. Additional configuration is also set in 
this file for accessing the request body and handling json objects from the
requests. Because of the nature of the application, CORS has been enabled 
on the server so that any endpoint will accept an outside request. 

The next layers of files are xxxApi.js files, where the xxx denotes the type 
of data from the database which will be accessed. These files typically use
the app variable from the server.js file to create .get and .post routes for
use with other applications outside of this application. 

A third layer is typically named after the business entity which will be 
manipulated via SQL from the application. These files define the queries and
the params which will be needed when the endpoint is asked for. 

The final layer is the actual .sql file which we have written our sql queries.
If the query needs to have anything sent to, we have parameterized the query value
with an @ sign and defined that value in the previous setup layer. 

The application has been designed to speak with a Microsoft SQL Express database 
base server using the mix mode type of login. The sql user has dbo.owner permissions
and has full control of the database. In a production environment this should not 
be the case. 

[1]: http://developer.leankit.com/painless-sql-server-with-nodejs-and-seriate/
[2]: https://www.npmjs.com/package/seriate
[3]: https://northwinddatabase.codeplex.com/releases/view/71634