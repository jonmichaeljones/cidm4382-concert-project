(function() {

    angular
        .module('eventApp')
        .service('GoogleMaps', googleMaps);

    googleMaps.$inject = ['$http'];

    function googleMaps ($http) {
            
            var getDirections = function(city){
            
            
            
            return $http.jsonp('https://maps.googleapis.com/maps/api/distancematrix/json?origins=Amarillo&destinations=' + city + '&key=AIzaSyC7gVJAChb0RlJ28kSskbZT6jCCN6KgvS0', {
                    jsonpCallbackParam: 'callback'
                }        
                    );
                }; 
        
        
        
        return {
            getDirections : getDirections
        }    
        
        
    }
})();


