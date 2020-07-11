var sql = require("seriate");

var customersGetAll = function () {
    return sql.execute({
        query: sql.fromFile("./sql/CustomersGetAll")
    });
};

var customersAdd = function (inserted) {
    return sql.execute({
        query: sql.fromFile("./sql/CustomersAdd"),
        params: {
            CustomerID: {
                type: sql.NCHAR,
                val: inserted.CustomerID
            },
            CompanyName: {
                type: sql.NVARCHAR,
                val: inserted.CompanyName
            },
            ContactName: {
                type: sql.NVARCHAR,
                val: inserted.ContactName
            },
            ContactTitle: {
                type: sql.NVARCHAR,
                val: inserted.ContactTitle
            },
            Address: {
                type: sql.NVARCHAR,
                val: inserted.Address
            },
            City: {
                type: sql.NVARCHAR,
                val: inserted.City
            },
            Region: {
                type: sql.NVARCHAR,
                val: inserted.Region
            },
            PostalCode: {
                type: sql.NVARCHAR,
                val: inserted.PostalCode
            },
            Country: {
                type: sql.NVARCHAR,
                val: inserted.Country
            },
            Phone: {
                type: sql.NVARCHAR,
                val: inserted.Phone
            },
            Fax: {
                type: sql.NVARCHAR,
                val: inserted.Fax
            }
        }
    });
};

var customersGetByID = function (CustomerID) {
    return sql.execute({
        query: sql.fromFile("./sql/CustomersGetByID"),
        params: {
            CustomerID: {
                type: sql.NCHAR,
                val: CustomerID
            },
        }
    });
};


var customersRemoveByID = function (CustomerID) {
    return sql.execute({
        query: sql.fromFile("./sql/CustomersRemoveByID"),
        params: {
            CustomerID: {
                type: sql.NCHAR,
                val: CustomerID
            },
        }
    });
};


var customersModify = function (modified) {
    return sql.execute({
            query: sql.fromFile("./sql/CustomersModify"),
            params: {
                CustomerID: {
                    type: sql.NCHAR,
                    val: modified.CustomerID
                },
                CompanyName: {
                    type: sql.NVARCHAR,
                    val: modified.CompanyName
                },
                ContactName: {
                    type: sql.NVARCHAR,
                    val: modified.ContactName
                },
                ContactTitle: {
                    type: sql.NVARCHAR,
                    val: modified.ContactTitle
                },
                Address: {
                    type: sql.NVARCHAR,
                    val: modified.Address
                },
                City: {
                    type: sql.NVARCHAR,
                    val: modified.City
                },
                Region: {
                    type: sql.NVARCHAR,
                    val: modified.Region
                },
                PostalCode: {
                    type: sql.NVARCHAR,
                    val: modified.PostalCode
                },
                Country: {
                    type: sql.NVARCHAR,
                    val: modified.Country
                },
                Phone: {
                    type: sql.NVARCHAR,
                    val: modified.Phone
                },
                Fax: {
                    type: sql.NVARCHAR,
                    val: modified.Fax
                }
            }
        }
    );
};


module.exports = {
    CustomersGetAll: customersGetAll,
    CustomersAdd: customersAdd,
    CustomersGetByID: customersGetByID,
    CustomersRemoveByID:customersRemoveByID,
    CustomersModify: customersModify
};