'use strict';

/**
 * @ngdoc function
 * @name stacksonstacksApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the stacksonstacksApp
 */
angular.module('stacksonstacksApp')
  .controller('UserCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var gridster;

  $(function(){

    gridster = $(".gridster > ul").gridster({
        widget_margins: [10, 10],
        widget_base_dimensions: [100, 100],
        min_cols: 3,
      max_cols:5
    }).data('gridster');

  });
  });
