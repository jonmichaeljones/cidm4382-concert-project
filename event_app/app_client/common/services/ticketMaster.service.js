(function() {

    angular
        .module('eventApp')
        .service('TicketMaster', ticketMaster);

    ticketMaster.$inject = ['$http'];

    function ticketMaster ($http) {
        var getEvents = function(city){
            
            
            
            return $http.get('http://app.ticketmaster.com/discovery/v2/events.json?apikey=Mv7NCYbJ8sByB1QdoDCulutzK64yBJA1&keyword=music&startDateTime=2016-12-16T09:56:00Z&endDateTime=2016-12-17T09:56:00Z&city='
                + city);
                };      
            return {
            
            getEvents : getEvents
     
                
        }     

        
    }
    


})();