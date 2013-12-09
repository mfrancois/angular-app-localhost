'use strict';

// Declare app level module which depends on filters, and services
var project = angular.module('project', ['projectServices','ui.keypress','ngProgress'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/tpl/page/main.html',
                controller: 'MainCtrl'
            })
            .when('/tools', {
                templateUrl: 'app/tpl/page/tools.html',
                controller: 'MainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);
