'use strict';

angular.module('filters', [])

    .filter('shortRange', function () {
        return function (input) {
            var rounded = Math.round( input * 10 ) / 10;
           return rounded;
        };
    });