(function () {  
  angular
    .module('airplaneApp')
    .directive('ngSource', ['$filter', function($filter) {
        return function(val) {
        return $filter.trustAsResourceUrl(val);
    };
    }]);
})();

