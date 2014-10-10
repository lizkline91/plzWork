'use strict';
/**
 * @ngdoc function
 * @name stacksonstacksApp.controller:ChatCtrl
 * @description
 * # ChatCtrl
 * A demo of using AngularFire to manage a synchronized list.
 */
angular.module('stacksonstacksApp')
  .controller('UserCtrl', function ($firebaseSimpleLogin, $rootScope, $scope, simpleLogin, fbutil, $timeout) {
    // synchronize a read-only, synchronized array of messages, limit to most recent 10

    var auth = $firebaseSimpleLogin(fbutil.ref());
    auth.$getCurrentUser().then(function (user) {
        $rootScope.currentUser = user;

    });


    $scope.standardItems = [
      { size: { x: 2, y: 1 }, position: [0, 0] },
      { size: { x: 2, y: 2 }, position: [0, 2] },
      { size: { x: 1, y: 1 }, position: [0, 4] },
      { size: { x: 1, y: 1 }, position: [0, 5] },
      { size: { x: 2, y: 1 }, position: [1, 0] },
      { size: { x: 1, y: 1 }, position: [1, 4] },
      { size: { x: 1, y: 2 }, position: [1, 5] },
      { size: { x: 1, y: 1 }, position: [2, 0] },
      { size: { x: 2, y: 1 }, position: [2, 1] },
      { size: { x: 1, y: 1 }, position: [2, 3] },
      { size: { x: 1, y: 1 }, position: [2, 4] }
    ];

     $scope.customItemMap = {
        sizeX: 'item.size.x',
        sizeY: 'item.size.y',
        row: 'item.position[0]',
        col: 'item.position[1]'
    };

    $scope.users= fbutil.syncArray('users');


  console.log($scope.users);

    function loadProfile(user) {
      if( $scope.profile ) {
        $scope.profile.$destroy();
      }
      fbutil.syncObject('users/'+ user.uid).$bindTo($scope, 'profile');
    }


  });

  // $scope.users.currentUser.collections = fbutil.syncArray('collections');
  //
  // $scope.addSomething = function (something) {
  //   var ref = fbutil.ref('users');
  //   ref.child($rootScope.currentUser.uid).child('collections').push(something);

  //
  // };
