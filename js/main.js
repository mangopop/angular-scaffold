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
            when('/password', {
                templateUrl: 'partials/password.html',
                controller: 'passwordCtrl'
            }).
            otherwise({
                redirectTo: '/home'
            });
    }]);

//myApp.controller('testCtrl',function testCtrl() {
//    var welcome = this;
//    welcome.greeting = 'hi';
//});
