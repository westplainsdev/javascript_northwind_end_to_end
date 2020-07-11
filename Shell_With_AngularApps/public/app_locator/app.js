// app.js
var locatorApp = angular.module('locatorApp', ['ui.router', 'ui.utils', 'ui.bootstrap', 'ngSanitize', 'filters', 'uiGmapgoogle-maps', 'ngAnimate']);

locatorApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/display');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('display', {
            url: '/display',
            templateUrl: '../app_locator/location/display.html',
            controller: 'location.displayController'
        })

        .state('older', {
            url: '/older',
            templateUrl: '../app_locator/location/older.html',
            controller: 'location.olderController'
        })

        .state('simple', {
            url: '/simple',
            templateUrl: '../app_locator/location/simple.html',
            controller: 'location.simpleController'
        })

        .state('personalized', {
            url: '/personalized',
            templateUrl: '../app_locator/location/personalized.html',
            controller: 'location.personalizedController'
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url: '/about',
            templateUrl: '../app_locator/about/about.html',
            controller: function($scope) {
                $scope.message = 'Different variations of store locators.';
            }
        });

});