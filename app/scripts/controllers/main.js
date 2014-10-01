'use strict';

/**
 * @ngdoc function
 * @name stacksonstacksApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the stacksonstacksApp
 */
angular.module('stacksonstacksApp')
  .controller('MainCtrl',['$scope', 'myService', '$location', '$routeParams', function ($scope, myService, $location, $routeParams, $log) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
      function myCallback( error, data ) {
        if( err ) {
        console.log( error, error.stack )
        } else {
        console.log( data )
        }
      }

      $scope.search = function (searchString) {
          console.log(searchString);
        myService.doSearch(searchString).success(function (response) {
          // nothing
        });

      };
      window.doIt = function doIt(data) {
          console.log("dummy callback function");
          $scope.result = data;
        }

    }]);
