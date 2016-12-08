(function () {  
  angular
    .module('eventApp')
    .directive('dateNow', ['$filter', function($filter) {
        return {
            link: function( $scope, $element, $attrs) {
                $element.text($filter('date')(new Date(), $attrs.dateNow));
            }
        };
    }]);
    
  angular
    .module('eventApp')
    .filter('moment', ['$filter', function($filter) {
        console.log(['moment filter']);
        return function($time) {
            console.log(['function',$time]);
            var newTime = moment($time, "HH:mm:ss").format('h:mm A');
            return newTime;
        }
    }])
})();