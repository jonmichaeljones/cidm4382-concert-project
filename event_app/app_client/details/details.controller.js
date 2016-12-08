(function() {

    angular
        .module('eventApp')
        .controller('detailsCtrl', detailsCtrl)
    
        
    detailsCtrl.$inject = ['$scope', 'SelectedData', 'TicketMaster'];

    function detailsCtrl($scope, SelectedData, TicketMaster) {
        console.log('detailsCtrl');
        console.log(['detailsCtrl.SelectedData',SelectedData]);
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
        
        
    }
    
})();