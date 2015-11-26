/**
 * Created by justijndepover on 17/11/15.
 */

(function(){
    "use strict";
    var app = angular.module("app", []);

    app.directive("flickrimage", function(){
        return {
            restrict: 'E',
            templateUrl: 'directives/flickrimage.html'
        }
    })
})();