// we could create a new module for controllers and load this in the main app if it's a large app
//var phonecatControllers = angular.module('phonecatControllers', []);

angular.module('myApp').controller('homeCtrl', ['$scope', function ($scope) {
    $scope.welcome = 'Welcome to your scaffolded AngularJs app with Foundation CSS framework, Karma and Jasmine';
}]);