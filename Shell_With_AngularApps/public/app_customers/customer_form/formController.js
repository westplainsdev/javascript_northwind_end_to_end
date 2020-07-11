customerApp.controller('customers.formController', function ($scope, $state, $stateParams, $log, CustomerService) {

    var load = function () {
        $scope.editButton = false;
        var type = $stateParams.type;
        $scope.actionType = type;
        if (type === 'edit') {
            $scope.editButton = true;
        }

        var customerId = $stateParams.id;

        if (customerId) {
            CustomerService.GetCustomerById(customerId).success(function (response) {
                var customer = response[0];
                $scope.customer = customer;
            });
        }
    };

    var handleSave = function (formFields) {
        var customer = formFields;
        if ($scope.editButton) {
            CustomerService.CustomersModify(customer).success(function (response) {
                console.log(response);
                if (response.data === 'SUCCESS') {
                    $state.go('details', {id: customer.CustomerID});
                }
            });
        } else {
            CustomerService.CustomersAdd(customer).success(function (response) {
                console.log(response);
                if (response.data === 'SUCCESS') {
                    $state.go('customers');
                }
            });
        }
    };


    $scope.save = function () {
        handleSave($scope.customer);
    };

    load();


});