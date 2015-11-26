/**
 * Created by kevinderudder on 17/11/15.
 */
(function () {
    "use strict";

    //onze app is afhankelijk van de routing module (./lib/angular/angular-route.js) -> noemt ngRoute
    var app = angular.module("app", ["ngRoute"]);

    app.config(function($routeProvider){
        $routeProvider
            .when("/search", {
                templateUrl: "ImagesOverview/search.html"
            })
            .when("/details/:id", {
                templateUrl: "ImageDetails/details.html"
            })
            .otherwise({
                redirectTo: "/search"
            });
    });

    app.directive("flickrimage", function(){
        return {
            restrict: 'E',
            templateUrl: 'directives/flickrimage.html'
        };
    });

})();