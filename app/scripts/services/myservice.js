'use strict';

/**
 * @ngdoc service
 * @name stacksonstacksApp.myService
 * @description
 * # myService
 * Service in the stacksonstacksApp.
 */

  (function () {
            "use strict";

            angular
                .module('stacksonstacksApp')
                .factory('myService', ['$http', '$rootScope', function ($http, $rootScope) {
                    var wsKey = "rCQ7ohVV2";
                    var doSearch = function (searchString) {

                    return $http.jsonp("http://www.europeana.eu/api/v2/search.json?wskey=" + wsKey + "&query=" + searchString + "&callback=doIt");

                    };

                    return {
                      doSearch: doSearch
                    };

                }]);
        })();


//http://europeana.eu/api//v2/search.json?wskey=rCQ7ohVV2&query=Home&start=1&rows=24&profile=standard
