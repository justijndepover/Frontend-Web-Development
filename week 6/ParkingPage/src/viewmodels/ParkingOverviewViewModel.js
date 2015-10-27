/**
 * Created by justijndepover on 27/10/15.
 */


var vm = {
    parkingSpots: null,
    showParkingSpots: function(elementSelector){

        if(!this.parkingSpots || typeof(this.parkingSpots) !== "object"){
            throw new NoParkingSpotsException("No parkingspots defined");
        }

        var element = document.querySelector(elementSelector);
        var bobTheHtmlBuilder = "";

        for(var i = 0, l = this.parkingSpots.length; i < l; i++){
            var p = this.parkingSpots[i];
            var perc = 0;
            var parkingClass = "parking";
            if(p.availableCapacity === ""){
                p.availableCapacity = 0;
            }

            if(p.availableCapacity>0){
                perc = ((p.availableCapacity / p.totalCapacity) * 100).toFixed(2);
            }

            if(perc === 0){
                parkingClass += " parking-full";
            }else if(perc < config.warningTreshold){
                parkingClass += " parking-warning";
            }

            bobTheHtmlBuilder += '<li class="'+ parkingClass +'">';
            bobTheHtmlBuilder += '<p class="parking-sign">P</p>';
            bobTheHtmlBuilder += '<p class="parking-description">'+ p.description + '</p>';
            bobTheHtmlBuilder += '<p class="parking-stats">'+ p.availableCapacity + '/' + p.totalCapacity + '</p>';
            bobTheHtmlBuilder += '</li>';
        }

        element.innerHTML = bobTheHtmlBuilder;

    }
};

//falsy thruthy
//falsy: null, undefined, "", false