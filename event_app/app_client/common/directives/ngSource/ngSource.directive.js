(function () {  
  angular
    .module('eventApp')
    .directive('ngSource', ['$filter', function($filter) {
        return function(val) {
        return $filter.trustAsResourceUrl(val);
    };
    }]);
})();

