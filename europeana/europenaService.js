(function () {
    "use strict";

    angular
        .module('europena')
        .factory('europenaService', ['$http', '$rootScope', function ($http, $rootScope) {
            var wsKey = "rCQ7ohVV2";
            var doSearch = function (searchString) {

            return $http.jsonp("http://www.europeana.eu/api/v2/search.json?wskey=" + wsKey + "&query=" + searchString + "&callback=doIt");

            };

            return {
              doSearch: doSearch
            };

        }]);
})();
