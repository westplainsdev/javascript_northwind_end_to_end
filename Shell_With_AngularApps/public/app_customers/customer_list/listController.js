customerApp.controller('customers.listController', function($scope, $log, CustomerService){

    CustomerService.GetAllCustomers().then(function(response){
        var collection =  response.data;
        $scope.customerCollection = collection;
    });
});