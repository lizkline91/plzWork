(function () {
    "use strict";

    angular
        .module('europena', [
            "ngRoute"
        ])
        .config(function ($routeProvider) {
            $routeProvider
                .when('/europena', {
                    templateUrl: 'europeana/views/list.html',
                    controller: 'europenaController'
                })
                .when('/europena/new', {
                    templateUrl: 'europeana/views/create.html',
                    controller: 'europenaController'
                })
                .when('/europena/:postId', {
                    templateUrl: 'europeana/views/show.html',
                    controller: 'europenaController'
                })
                .when('/europena/:europenaId/edit', {
                    templateUrl: 'europeana/views/edit.html',
                    controller: 'europenaController'
                });
        });

})();
