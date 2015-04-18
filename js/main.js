var myApp = angular.module('myApp', [
    'ngRoute'
]);

myApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/home', {
                templateUrl: 'partials/home.html',
                controller: 'homeCtrl'
            }).
            when('/contact', {
                templateUrl: 'partials/contact.html',
                controller: 'contactCtrl'
            }).
            otherwise({
                redirectTo: '/home'
            });
    }]);