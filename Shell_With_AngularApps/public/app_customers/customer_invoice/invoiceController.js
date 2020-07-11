customerApp.controller('customers.invoiceController', function ($scope, $state, $stateParams, OrderService, PersistService) {

    OrderService.OrderDetailsByID($stateParams.id).then(function(response){
        var collection =  response.data;
        var subtotal = 0;
        _.each(collection, function(item) {
            subtotal =  subtotal + item.ExtendedPrice;
        });

        $scope.display = {
            customer: PersistService.GetCustomer(),
            orderInfo: PersistService.GetOrderInfo(),
            orderItems: collection,
            subTotal: subtotal,
            total: subtotal
        }
    });


});