(function() {

    angular
        .module('eventApp')
        .service('GoogleMaps', googleMaps);
        

    googleMaps.$inject = ['$http'];
    
    

    function googleMaps ($http) {
            
            var getDirections = function(city){
            
                var test = 'https://www.google.com/maps/embed/v1/directions?key=AIzaSyCF2tBQjD5fFY-WnmTaMIjguW7rbWnQqUc&origin=Amarillo&destination=' + city;
            /*
            
            return $http.get('https://maps.googleapis.com/maps/api/distancematrix/json?origins=Amarillo&destinations=' + city + '&key=AIzaSyC7gVJAChb0RlJ28kSskbZT6jCCN6KgvS0', {
                    jsonCallbackParam: 'callback'
                }        
                    );
                    
                    */
                }; 
                
                
        
        
        return {
            getDirections : getDirections
        }    
        
        
    }
})();


