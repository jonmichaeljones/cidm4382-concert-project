
(function () {

  angular
    .module('eventApp')
    .directive('eventInfo', eventInfo);

  function eventInfo () {
    return {
      restrict: 'EA',
      scope: {
        events : '=info',
      },      
      templateUrl: '/common/directives/eventInfo/eventInfo.template.html'
    };
  }
})();