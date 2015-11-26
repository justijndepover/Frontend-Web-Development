/**
 * Created by justijndepover on 24/11/15.
 */

(function(){
    "use strict";

    var flickrService = function($http){
        //private
        var search = function(tag){
            var url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=e587331c2d4dcbbcb513da68d2556ba3&tags=" + tag + "&format=json&nojsoncallback=1";
            //return $http... die return moet er staan anders return je niets
            return $http.get(url).then(function(response){
                var images = [];
                angular.forEach(response.data.photos.photo, function(photo){
                    var newFI = new FlickrImage(
                        photo.id,
                        photo.owner,
                        photo.secret,
                        photo.server,
                        photo.farm,
                        photo.title
                    );
                    images.push(newFI);
                });
                return images;
            });
        };

        var random = function(){};

        var byId = function(){};

        //public
        return{
            search: search,
            random: random,
            byId: byId
        };
    };

    //registreer de service bij angular
    //wordt pas uitgevoerd wanneer het nodig is
    angular.module("app").factory("flickrService", ["$http", flickrService]);
    //$http als string typen omdat strings niet gewijzigd worden als je minified
})();


//flickrService.search("casanova");
//flickrService.getRandom();
//flickrService.getById();