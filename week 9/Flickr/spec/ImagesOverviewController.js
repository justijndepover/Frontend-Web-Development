/**
 * Created by kevinderudder on 17/11/15.
 */


describe("Images Overview Controller", function(){

    /*
    * MVC
    *
    * 1. Angular app simuleren
    *
    * */

    beforeEach(module('app'));

    var $controller;

    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
    }));

    describe("Images properties", function(){
        it("should contain an images property", function(){
            var $scope = {};
            var controller = $controller('ImagesOverviewController', {$scope: $scope});
            $scope.searchImages();
            expect($scope.images).toBeDefined();
            expect($scope.images.length).toBeGreaterThan(0);
        });
    });

});

