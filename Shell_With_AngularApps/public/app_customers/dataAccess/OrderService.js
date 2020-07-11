customerApp.factory('OrderService', function ($http) {

    var ordersByCustomersID = function (id) {
        return $http.post('http://localhost:3000/api/OrdersByCustomersID', {CustomerID: id});
    };

    var orderDetailsByID = function (id){
        return $http.post('http://localhost:3000/api/OrderDetailsByID', {OrderID: id});
    }

    return {
        OrdersByCustomersID: ordersByCustomersID,
        OrderDetailsByID: orderDetailsByID
    }
});