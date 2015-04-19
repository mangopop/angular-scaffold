angular.module('myApp').factory('testService', ['$http', function ($http) { //this order is picky
    var url = 'http://hipsterjesus.com/api?paras=1&type=hipster-latin';
    //return {
    //    getHipster: function ($scope, $http) {
    //            $http.get('http://hipsterjesus.com/api?paras=1&type=hipster-latin').success(function (data, status, headers, config) {
    //            $scope.stuff = data;
    //            $scope.status = status;
    //            console.log(data, status);
    //            //console.log($scope.stuff.params.type);
    //        }).error(function (data, status, headers, config) {
    //            console.log(status);
    //        });
    //    }
    //}
    var testService = {};
    testService.getStuff = function () {
        return $http.get(url);
        };

    return testService;
}]);
