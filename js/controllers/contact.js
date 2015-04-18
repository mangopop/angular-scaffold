angular.module('myApp').controller('contactCtrl', ['$scope', '$http',
    function ($scope, $http) {
        $http.get('http://hipsterjesus.com/api?paras=4&type=hipster-latin').success(function(data) {
            $scope.stuff = data;
        });

    }]);