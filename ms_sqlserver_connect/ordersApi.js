var orders = require("./orders");

module.exports = {
    register: function (app) {
        app.post('/api/OrdersByCustomersID', function (req, res, next) {
            var customerID = req.body.CustomerID;

            orders.OrdersByCustomersID(customerID)
                .then(function (response) {
                    res.send(response);
                }, function (err) {
                    console.log("Something bad happened:", err);
                    res.send('RETRIEVE_BY_ID_FAIL')
                });
        });

        app.post('/api/OrderDetailsByID', function (req, res, next) {
            var orderID = req.body.OrderID;

            orders.OrderDetailsByID(orderID)
                .then(function (response) {
                    res.send(response);
                }, function (err) {
                    console.log("Something bad happened:", err);
                    res.send('RETRIEVE_BY_ID_FAIL')
                });
        });
    }
};