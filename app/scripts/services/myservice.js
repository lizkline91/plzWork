'use strict';

/**
 * @ngdoc service
 * @name stacksonstacksApp.myService
 * @description
 * # myService
 * Service in the stacksonstacksApp.
 */
angular.module('stacksonstacksApp')
  .service('myService', function myService($http, $rootScope, $log) {
    // AngularJS will instantiate a singleton by calling "new" on this function

            var getReddit = function (x) {
            var urlBase = "http://www.reddit.com/r/" + x + ".json";
            return $http.get(urlBase);
        };

            return {
              getReddit: getReddit

          }
        });


//http://europeana.eu/api//v2/search.json?wskey=rCQ7ohVV2&query=Home&start=1&rows=24&profile=standard
