var myApp = angular.module('myApp', [
    'ngRoute',
    'ngResource'
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

myApp.factory('UserFactory', function($resource){
    return $resource('users.json', { get: { isArray: true } }
    );
});

myApp.controller('MainCtrl', function($scope, UserFactory) {
    $scope.text = 'Hello World!';
    UserFactory.query().$promise.then(function(users) {
        console.log(users);
        $scope.users = users;
    });;

});

