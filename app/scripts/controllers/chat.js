'use strict';
/**
 * @ngdoc function
 * @name stacksonstacksApp.controller:ChatCtrl
 * @description
 * # ChatCtrl
 * A demo of using AngularFire to manage a synchronized list.
 */
angular.module('stacksonstacksApp')
  .controller('ChatCtrl', function ($firebaseSimpleLogin, $rootScope, $scope, simpleLogin, fbutil, $timeout) {
    // synchronize a read-only, synchronized array of messages, limit to most recent 10

    var auth = $firebaseSimpleLogin(fbutil.ref());
    auth.$getCurrentUser().then(function (user) {
        $rootScope.currentUser = user;

    });


    $scope.users = fbutil.syncArray('users');



    function loadProfile(user) {
      if( $scope.profile ) {
        $scope.profile.$destroy();
      }
      fbutil.syncObject('users/'+user.uid).$bindTo($scope, 'profile');
    };


    $scope.addSomething = function (something) {
      var ref = fbutil.ref('collections');
      ref.child($rootScope.currentUser.uid).child('collections').push(something);
    };
  });
