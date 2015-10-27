/**
 * Created by justijndepover on 27/10/15.
 */


var parkingService = (function(){
    'use strict';

    //private

    //public api
    return{
        get: function(){
            //$.getJSON

            var xmlHttp = new XMLHttpRequest();
            xmlHttp.open("GET", config.url, false);
            xmlHttp.send(null);

            if(xmlHttp.status === 200){
                var data = JSON.parse(xmlHttp.responseText);
                var parkings = [];

                for(var i = 0, l = data.Parkings.parkings.length; i < l; i++){
                    var o = data.Parkings.parkings[i];
                    var newP = new Parking(
                        o.name,
                        o.description,
                        o.address,
                        o.availableCapacity,
                        o.totalCapacity
                    );

                    parkings.push(newP);
                }

                return parkings;
            }
        },
        getById: function(){

        }
    };
})();