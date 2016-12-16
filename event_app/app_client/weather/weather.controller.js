(function() {

    angular
        .module('eventApp')
        .controller('weatherCtrl', weatherCtrl);

    weatherCtrl.$inject = ['$scope', 'SelectedData', 'DarkskyWeather','LocationsData'];

    function weatherCtrl($scope, SelectedData, DarkskyWeather, LocationsData) {
        // Nasty IE9 redirect hack (not recommended)
        /*
        if (window.location.pathname !== '/') {
          window.location.href = '/#' + window.location.pathname;
        }*/
        var vm = this;
        vm.toggle = true;
        console.log(window.location);

        vm.content = "Weather";

        vm.selectedCity = "";
       
        

        
        if (SelectedData.selectedCity !== null) {
            vm.selectedCity = SelectedData.selectedCity;
        }
        
        
        //read weather api
        vm.getCityWeather = function() {
            
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
        vm.getCityWeather();
        
        vm.getLocationsData = function() {
          LocationsData.getLocations()
            .success(function(data) {
              vm.locations = data;
              console.log(vm.locations);
            })
            .error(function(e) {
              console.log(e);
            });
        }
        
        vm.toggleMenu = function() {
          if (vm.class === "toggled") {
            vm.class = "";
          }
          else {
            vm.class = "toggled";
          }
          console.log(vm.class + " is good");
        };
        
        vm.clearSelectedData = function(){
          
          vm.selectedCity = null;
        }
        
        //saved city
        $scope.$watch(
          function(){
            return vm.selectedCity;    
          }, 
          function (newValue, oldValue) {
            console.log(oldValue);
            console.log(newValue);
            if (newValue.city !== oldValue.city){
              SelectedData.selectedCity = newValue;
            } 
          }, 
          true
        );
           
    
        //call services
        vm.getLocationsData();
    
      
            
        }
    

})();