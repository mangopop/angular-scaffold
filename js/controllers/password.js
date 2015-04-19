angular.module('myApp')
    .controller('passwordCtrl', function PasswordCtrl($scope) {
        $scope.password = '';
        $scope.strength = 'default';
        $scope.grade = function() {
            var size = $scope.password.length;
            if (size > 8) {
                $scope.strength = 'strong';
            } else if (size > 3) {
                $scope.strength = 'medium';
            } else {
                $scope.strength = 'weak';
            }
        };
    });
//test