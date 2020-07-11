var sql = require("seriate");

var ordersByCustomersID = function (CustomerID) {
    return sql.execute({
        query: sql.fromFile("./sql/OrdersByCustomerID"),
        params: {
            CustomerID: {
                type: sql.NCHAR,
                val: CustomerID
            },
        }
    });
};

var orderDetailsByID = function (OrderID) {
    return sql.execute({
        query: sql.fromFile("./sql/OrderDetails"),
        params: {
            OrderID: {
                type: sql.INT,
                val: OrderID
            },
        }
    });
};


module.exports = {
    OrdersByCustomersID: ordersByCustomersID,
    OrderDetailsByID: orderDetailsByID
};