(function() {

    angular
        .module('eventApp')
        .controller('detailsCtrl', detailsCtrl)
    
        
    detailsCtrl.$inject = ['$scope', 'SelectedData', 'TicketMaster','LocationsData'];

    function detailsCtrl($scope, SelectedData, TicketMaster, LocationsData) {
        console.log('detailsCtrl');
        console.log(['detailsCtrl.SelectedData',SelectedData]);
        // Nasty IE9 redirect hack (not recommended)
        /*
        if (window.location.pathname !== '/') {
          window.location.href = '/#' + window.location.pathname;
        }*/
        var vm = this;
        vm.toggle = true;
        console.log(window.location);

        vm.content = "Details";

        vm.selectedcity = "";
        
        

        //check selected City
        if (SelectedData.selectedCity !== null) {
            vm.selectedCity = SelectedData.selectedCity;
        }
        
        //read api from ticketmaster
        vm.getEventDetails = function() {
            
            var city= vm.selectedCity.city;
            console.log(city);
                       

            TicketMaster.getEvents(city)
                .success(function(data) {
                    vm.eventDetails = data;
                    console.log(vm.eventDetails);
                })
                .error(function(e) {
                    console.log(e);
                });
        }
        
        
        //call services
        vm.getEventDetails();
        
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