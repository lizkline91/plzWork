(function () {
    "use strict";

    angular
        .module('europena')
        .controller('europenaController', ['$scope', 'europenaService', '$location', '$routeParams', function ($scope, europenaService, $location, $routeParams) {

          $scope.search = function (searchString) {
              console.log(searchString);
            europenaService.doSearch(searchString).success(function (response) {
              // nothing
            });

          };
        window.doIt = function doIt(data) {
            console.log("dummy callback function");
            $scope.result = data;
          }

        }]);
})();
