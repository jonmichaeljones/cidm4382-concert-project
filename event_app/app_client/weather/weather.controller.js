(function() {

    angular
        .module('eventApp')
        .controller('weatherCtrl', weatherCtrl);

    weatherCtrl.$inject = ['$scope', 'SelectedData', 'DarkskyWeather'];

    function weatherCtrl($scope, SelectedData, DarkskyWeather) {
        // Nasty IE9 redirect hack (not recommended)
        /*
        if (window.location.pathname !== '/') {
          window.location.href = '/#' + window.location.pathname;
        }*/
        var vm = this;
        console.log(window.location);

        vm.content = "Weather";

        vm.selectedCity = "";
        vm.selectedArrivalICAO = "";
        

        
        if (SelectedData.selectedCity !== null) {
            vm.selectedCity = SelectedData.selectedCity;
        }
        
        

        vm.getWeather = function() {
            
            var lat = vm.selectedCity.cityLat;
            console.log(lat);
            var lon = vm.selectedCity.cityLong;
            console.log(lon);            

            DarkskyWeather.getWeather2(lat, lon)
                .success(function(data) {
                    vm.cityWeather = data;
                    console.log(vm.cityWeather);
                })
                .error(function(e) {
                    console.log(e);
                });
        }
        
    
        
        //call services
        vm.getWeather();
        

    }

})();