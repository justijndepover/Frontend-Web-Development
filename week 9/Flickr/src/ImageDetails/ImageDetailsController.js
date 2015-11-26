/**
 * Created by justijndepover on 24/11/15.
 */

(function(){
    "use strict";
    //routeParams is wat je meegeeft in je route in app.js
    var imageDetailsController = function($scope, $routeParams){

        $scope.image = new FlickrImage($routeParams.id, "", "", "", "");

    };

    angular.module("app")
        .controller("imageDetailsController", ["$scope", "$routeParams", imageDetailsController]);
})();