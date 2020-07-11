customerApp.factory('CustomerService', function ($http) {

    var getCustomerById = function (id) {
        return $http.post('http://localhost:3000/api/CustomersGetByID', {CustomerID: id});
    };

    var getAllCustomers = function () {
        return $http.get('http://localhost:3000/api/customersGetAll');
    };

    var customersAdd = function (customer) {
        return $http.post('http://localhost:3000/api/CustomersAdd', customer);
    };

    var customersModify = function (customer) {
        return $http.post('http://localhost:3000/api/CustomersModify', customer);
    };

    var customersRemoveByID = function (id) {
        return $http.post('http://localhost:3000/api/CustomersRemoveByID', {CustomerID: id})
    };

    return {
        GetCustomerById: getCustomerById,
        GetAllCustomers: getAllCustomers,
        CustomersAdd: customersAdd,
        CustomersModify: customersModify,
        CustomersRemoveByID: customersRemoveByID
    }
});