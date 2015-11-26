(function (){
    "use strict";

    var FlickrController = function($scope, $http){

        $scope.searchText = "casanova";
        $scope.images = [];
        $scope.sortProperty = "title";
        $scope.filterquery = "";
        $scope.filterImages = function(i){
            if($scope.filterquery === ""){
                return true;
            }

            return i.title.toLowerCase().indexOf($scope.filterquery.toLowerCase()) >= 0;
        };
        $scope.searchImages = function(){
            $scope.images = null;
            var url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=ca53bc81589d3ad195743451a4d28869&tags="+ $scope.searchText +"&format=json&nojsoncallback=1";

            $http.get(url).then(onImagesDownloaded, onImagesDownloadError);
        };

        $scope.checkAndStyleTitle = function(i){
            if(!i.title || i.title === ""){
                return "flickrNoTitle";
            }
        }

        var onImagesDownloaded = function(response){
            $scope.images = [];
            angular.forEach(response.data.photos.photo, function(photo){
               var newFI = new FlickrImage(photo.id, photo.owner, photo.secret, photo.server, photo.farm, photo.title);
                $scope.images.push(newFI);
            });
        };

        var onImagesDownloadError = function(err){

        };

        /*var searchImages = function(){
            $http.get(url).then(onImagesDownloaded, onImagesDownloadError);
        };*/

    };

    angular.module("app").controller("FlickrController", ["$scope", "$http", FlickrController]);
})();