(function() {

    angular
        .module('eventApp')
        .factory('KeyStore', keyStore);

    keyStore.$inject = ['$http'];
    function keyStore($http) {

        var getKeys = function(){
            return $http.get('/keys.json');
        }

        return {
            getKeys: getKeys
        };
    }

})();