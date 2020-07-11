var customers = require("./customers");

module.exports = {
    register: function (app) {
        app.get('/api/customersGetAll', function (req, res, next) {

            customers.CustomersGetAll()
                .then(function (response) {
                    res.send(response);
                }, function (err) {
                    console.log("Something bad happened:", err);
                    res.send('RETRIEVE_FAIL');
                });
        });

        app.post('/api/CustomersGetByID', function (req, res, next) {
            var customerID = req.body.CustomerID;

            customers.CustomersGetByID(customerID)
                .then(function (response) {
                    res.send(response);
                }, function (err) {
                    console.log("Something bad happened:", err);
                    res.send('RETRIEVE_BY_ID_FAIL')
                });
        });


        app.post('/api/CustomersAdd', function (req, res, next) {
            var customer = {
                CustomerID: req.body.CustomerID,
                CompanyName: req.body.CompanyName,
                ContactName: req.body.ContactName,
                ContactTitle: req.body.ContactTitle,
                Address: req.body.Address,
                City: req.body.City,
                Region: req.body.Region,
                PostalCode: req.body.PostalCode,
                Country: req.body.Country,
                Phone: req.body.Phone,
                Fax: req.body.Fax
            };
            customers.CustomersAdd(customer)
                .then(function () {
                    var response = {data: 'SUCCESS'};
                    res.send(response);
                }, function (err) {
                    console.log("Something bad happened:", err);
                    res.send('CREATE_FAIL');
                });
        });

        app.post('/api/CustomersModify', function (req, res, next) {
            var customer = {
                CustomerID: req.body.CustomerID,
                CompanyName: req.body.CompanyName,
                ContactName: req.body.ContactName,
                ContactTitle: req.body.ContactTitle,
                Address: req.body.Address,
                City: req.body.City,
                Region: req.body.Region,
                PostalCode: req.body.PostalCode,
                Country: req.body.Country,
                Phone: req.body.Phone,
                Fax: req.body.Fax
            };
            customers.CustomersModify(customer)
                .then(function () {
                   var response = {data: 'SUCCESS'};
                    res.send(response);
                }, function (err) {
                    console.log("Something bad happened:", err);
                    res.send('UPDATE_FAIL');
                });
        });

        app.post('/api/CustomersRemoveByID', function (req, res, next) {
            var customerID = req.body.CustomerID;
            customers.CustomersRemoveByID(customerID)
                .then(function () {
                    var response = {data: 'SUCCESS'};
                    res.send(response);
                }, function (err) {
                    console.log("Something bad happened:", err);
                    res.send('DELETE_FAIL');
                });
        });
    }
};