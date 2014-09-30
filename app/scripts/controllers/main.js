'use strict';

/**
 * @ngdoc function
 * @name stacksonstacksApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the stacksonstacksApp
 */
angular.module('stacksonstacksApp')
  .controller('MainCtrl', function ($scope, $log, myService) {
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

      europeana.search( 'vincent van gogh', myCallback )

        $scope.subRedditName = "historyporn";

        myService.getReddit($scope.subRedditName).then(function(posts) {
            $log.info(posts.data.data.children);
            $scope.posts = posts.data.data.children;

        });

        $scope.getTheReddit = function (x) {
            myService.getReddit(x).then(function(posts) {
                $log.info(posts.data.data.children);
                $scope.posts = posts.data.data.children;

            });
        };
  });
