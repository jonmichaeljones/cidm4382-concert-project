(function() {

    angular
        .module('eventApp')
        .controller('detailsCtrl', detailsCtrl);

    detailsCtrl.$inject = ['$scope', 'SelectedData', 'TicketMaster'];

    function weatherCtrl($scope, SelectedData, TicketMaster) {
        // Nasty IE9 redirect hack (not recommended)
        /*
        if (window.location.pathname !== '/') {
          window.location.href = '/#' + window.location.pathname;
        }*/
        var vm = this;
        console.log(window.location);

        vm.content = "Details";

        vm.selectedcity = "";
        

        //check selected Departure
        if (SelectedData.selectedCity !== null) {
            vm.selectedCity = SelectedData.selectedCity;
        }
        

        vm.getEventDetails = function() {
            
            var lat = vm.selectedCity.cityLat;
            console.log(lat);
            var lon = vm.selectedcity.cityLong;
            console.log(lon);            

            TicketMaster.getEvents(lat, lon)
                .success(function(data) {
                    vm.eventDetails = data;
                    console.log(vm.eventDetails);
                })
                .error(function(e) {
                    console.log(e);
                });
        }
        
        
        //call services
        vm.getDepartureWeather();
        

    }

})();