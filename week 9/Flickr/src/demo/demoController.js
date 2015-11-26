/**
 * Created by kevinderudder on 17/11/15.
 */
(function(){
    "use strict";
    var demoController = function($scope){
        $scope.person = new Person("Casanova", "Johan", "https://s3.amazonaws.com/uifaces/faces/twitter/sauro/128.jpg");
        $scope.sayHello = function(){
            alert("Hello");
        }
    };
    var app = angular.module("app");
    app.controller("demoController", ["$scope",demoController]);
})();
