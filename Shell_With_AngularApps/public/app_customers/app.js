// app.js
var customerApp = angular.module('customerApp', ['ui.router']);

customerApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/customers');

    $stateProvider

    // MASTER STATE VIEW ========================================
        .state('customers', {
            url: '/customers',
            templateUrl: '../app_customers/customer_list/list.html',
            controller: 'customers.listController'
        })

        // DETAILED STATE VIEW =================================
        .state('details', {
            url: '/details/:id',
            templateUrl: '../app_customers/customer_details/details.html',
            controller: 'customers.detailsController'
        })

        .state('invoice', {
            url: '/invoice/:id',
            templateUrl: '../app_customers/customer_invoice/invoice.html',
            controller: 'customers.invoiceController'
        })

        .state('form', {
            url: '/form/:id?type',
            templateUrl: '../app_customers/customer_form/form.html',
            controller: 'customers.formController'
        })

        .state('about', {
            url: '/about',
            templateUrl: '../app_customers/about/about.html',
            controller: function ($scope) {
                $scope.message = 'This example application shows customer and order information provided by a MicroService using a Northwind MSSQL server.';
            }
        });


});