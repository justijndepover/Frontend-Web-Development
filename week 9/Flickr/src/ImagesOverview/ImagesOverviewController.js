/**
 * Created by kevinderudder on 17/11/15.
 */

(function () {
    "use strict";

    var FlickrController = function($scope, flickrService, $log){


        $scope.searchText = "casanova";
        $scope.images = [];
        $scope.searchImages = function(){
            $scope.images = null;
            flickrService.search($scope.searchText).then(onImagesDownloaded, onImagesDownloadError);
        };

        $scope.sortProperty = "title";
        $scope.filterQuery = "";
        $scope.checkAndStyleTitle = function(i){

            if(!i.title || i.title === ""){
                return "flickrNoTitle";
            }

        }


        $scope.filterImages = function(i){
            if($scope.filterQuery === ""){
                return true;
            }

            if(i.title.toLowerCase().indexOf($scope.filterQuery.toLocaleLowerCase()) >= 0){
                return true;
            }

            return false;
        };

        var onImagesDownloaded = function(response){
            /*$scope.images = [];
            angular.forEach(response.data.photos.photo, function(photo){
                var newFI = new FlickrImage(
                    photo.id,
                    photo.owner,
                    photo.secret,
                    photo.server,
                    photo.farm,
                    photo.title
                );

                $scope.images.push(newFI);
            });*/
            $scope.images = response;

            $log.log("data downloaded");
            $log.info("data downloaded");
            $log.error("error downloading data");
            $log.warn("data downloaded");
        };
        var onImagesDownloadError = function(err){};
    };

    angular.module("app")
           .controller("FlickrController", ["$scope", "flickrService", "$log", FlickrController]);
    /*
    angular.module("app")
        .controller("FlickrController", function($scope){});
    */

})();