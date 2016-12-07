
(function () {

  angular
    .module('eventApp')
    .directive('directionsInfo', directionsInfo);

  function directionsInfo () {
    return {
      restrict: 'EA',
      scope: {
        events : '=info',
      },      
      templateUrl: '/common/directives/directionsInfo/directionsInfo.template.html'
    };
  }
})();