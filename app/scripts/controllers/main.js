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



      $scope.search = function (searchString) {
          console.log(searchString);
        myService.doSearch(searchString);
        $location.path("#/");
      };

      // global that gets called when myService.doSearch(searchStr) is performed
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
        $scope.modal = false;
      };


    }]);
