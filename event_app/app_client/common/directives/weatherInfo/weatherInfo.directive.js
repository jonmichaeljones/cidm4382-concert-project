
(function () {

  angular
    .module('eventApp')
    .directive('weatherInfo', weatherInfo);

  function weatherInfo () {
    return {
      restrict: 'EA',
      scope: {
        weather : '=info',
      },      
      templateUrl: '/common/directives/weatherInfo/weatherInfo.template.html'
    };
  }
})();