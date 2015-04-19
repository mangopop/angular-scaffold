//example using a factory as service
angular.module('myApp').controller('contactCtrl', ['$scope', '$http','testService', function ($scope, $http,testService) {

    $scope.message = 'example using a factory as service, injected into the controller.'

    testService.getStuff()
        .success(function (data,status) {
            $scope.stuff = data;
            $scope.status = status;
            console.log('success');
        })
        .error(function (data,status) {
            $scope.stuff = data;
            $scope.status = status;
            console.log('failed');
        });

    //function ($scope, $http) {
    //    $http.get('http://hipsterjesus.com/api?paras=1&type=hipster-latin').success(function(data, status, headers, config) {
    //        $scope.stuff = data;
    //        $scope.status = status;
    //        console.log(data,status);
    //        //console.log($scope.stuff.params.type);
    //    }).error(function(data, status, headers, config){
    //        console.log(status);
    //    });

    }]);