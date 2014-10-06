'use strict';

/**
 * @ngdoc function
 * @name stacksonstacksApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the stacksonstacksApp
 */
angular.module('stacksonstacksApp')
  .controller('MainCtrl',['$scope', '$rootScope', '$firebaseSimpleLogin','myService', '$location', 'fbutil','$routeParams', function ($scope, $rootScope, $firebaseSimpleLogin, myService, $location, fbutil, $routeParams, $log) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
      function myCallback( error, data ) {
        if( err ) {
        console.log( error, error.stack );
        } else {
        console.log( data );
        }
      }

      $scope.search = function (searchString) {
          console.log(searchString);
        myService.doSearch(searchString).success(function (response) {
          // nothing
          $route.reload();
        });

      };
      window.doIt = function doIt(data) {

          $scope.result = data;
        };

      var auth = $firebaseSimpleLogin(fbutil.ref());
      auth.$getCurrentUser().then(function (user) {
          $rootScope.currentUser = user;
      });


      $scope.addSomething = function (item) {
        console.log("hey");
        console.log($rootScope.currentUser);
        var ref = fbutil.ref('users');
        var newColItem = angular.copy(item);
        console.log($rootScope.currentUser.uid);
        ref.child($rootScope.currentUser.uid).child('collections').push(newColItem);
      };

    }]);
