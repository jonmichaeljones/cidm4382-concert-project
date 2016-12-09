(function() {

    angular
        .module('eventApp')
        .controller('directionsCtrl', directionsCtrl);

    directionsCtrl.$inject = ['$scope', 'SelectedData', '$sce', 'LocationsData'];

    function directionsCtrl($scope, SelectedData, $sce, LocationsData) {
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
        
        
        
        $scope.url = $sce.trustAsResourceUrl("https://www.google.com/maps/embed/v1/directions?key=AIzaSyCF2tBQjD5fFY-WnmTaMIjguW7rbWnQqUc&origin=Amarillo&destination=" + vm.selectedCity.city + "&zoom=6");
        
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
        
        //saved departure
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