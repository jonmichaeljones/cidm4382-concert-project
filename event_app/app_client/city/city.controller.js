(function() {

  angular
    .module('eventApp')
    .controller('cityCtrl', cityCtrl);

  cityCtrl.$inject = ['$scope', 'LocationsData', 'SelectedData'];

  function cityCtrl($scope, LocationsData, SelectedData) {
    console.log('cityCtrl');
    // Nasty IE9 redirect hack (not recommended)
    /*
    if (window.location.pathname !== '/') {
      window.location.href = '/#' + window.location.pathname;
    }*/
    console.log(['cityCtrl',window.location]);    
    
    
    var vm = this;
    vm.toggle = true;
    vm.content = "Cities";
    vm.selectedCity = "";
    
    //check selected Departure
    if(SelectedData.selectedCity !== null){
      vm.selectedCity = SelectedData.selectedCity;
    }
    
    //read locations from own api
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