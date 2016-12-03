(function() {

  angular
    .module('eventApp')
    .service('LocationsData', locationsData);

  locationsData.$inject = ['$http'];
  function locationsData ($http) {
      var getLocations = function(){
          return $http.get('/api/locations');
      }

      return {
          getLocations : getLocations,
      };
  }

})();