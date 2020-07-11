customerApp.controller('customers.detailsController', function ($scope, $state, $stateParams, CustomerService, OrderService, PersistService) {

    $scope.ordersLoaded = false;


    CustomerService.GetCustomerById($stateParams.id).then(function (response) {
        $scope.removeActive = false;
        var customer = response.data[0];
        $scope.customer = customer;
        PersistService.SetCustomer(customer);
        return customer.CustomerID;
    }).then(function(customerId){
        OrderService.OrdersByCustomersID(customerId).success(function(response){
            if(response.length > 0){
                $scope.ordersLoaded = true;
                $scope.ordersCollection = response;
                $scope.removeActive = true;
            }
        });
    });

    $scope.selectAndGo = function(order){
        PersistService.SetOrderInfo(order);
        $state.go('invoice', {id: order.OrderID});
    }

    $scope.removeCustomer = function () {
        var id = $scope.customer.CustomerID;
        CustomerService.CustomersRemoveByID(id).success(function (response) {
            console.log(response);
            if (response.data === 'SUCCESS') {
                $state.go('customers');
            }
        });
    };

});