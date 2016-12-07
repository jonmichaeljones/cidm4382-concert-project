(function() {

    angular
        .module('eventApp')
        .controller('directionsCtrl', directionsCtrl);

    directionsCtrl.$inject = ['$scope', 'SelectedData','GoogleMaps'];

    function directionsCtrl($scope, SelectedData, GoogleMaps) {
        console.log('directionsCtrl');
        console.log(['directions.SelectedData',SelectedData]);
        // Nasty IE9 redirect hack (not recommended)
        /*
        if (window.location.pathname !== '/') {
          window.location.href = '/#' + window.location.pathname;
        }*/
        var vm = this;
        console.log(window.location);

        vm.content = "Directions";

        vm.selectedcity = "";
        

        //check selected Departure
        if (SelectedData.selectedCity !== null) {
            vm.selectedCity = SelectedData.selectedCity;
        }
        
        vm.getDirectionDetails = function() {
            
            var city = vm.selectedCity.city;
            console.log(city);
                       

            GoogleMaps.getDirections(city)
                .success(function(data) {
                    vm.directionDetails = data;
                    console.log(vm.directionDetails);
                })
                .error(function(e) {
                    console.log(e);
                });
        }
        
        
        //call services
        vm.getDirectionDetails();
        
        
        
        
        
    }
    
})();