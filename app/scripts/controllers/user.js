'use strict';

/**
 * @ngdoc function
 * @name stacksonstacksApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the stacksonstacksApp
 */
angular.module('stacksonstacksApp')
  .controller('UserCtrl',['$scope', '$rootScope', '$firebaseSimpleLogin', '$location', 'fbutil','$routeParams', function ($scope, $rootScope, $firebaseSimpleLogin, $location, fbutil, $routeParams, $log) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  

    var auth = $firebaseSimpleLogin(fbutil.ref());
    auth.$getCurrentUser().then(function (user) {
        $rootScope.currentUser = user;
    });

}]);

    $scope.users = fbutil.syncArray('users');

    $scope.users.currentUser.collections = fbutil.syncArray('collections');
    $scope.addSomething = function (something) {
      var ref = fbutil.ref('users');
      ref.child($rootScope.currentUser.uid).child('collections').push(something);
    }
