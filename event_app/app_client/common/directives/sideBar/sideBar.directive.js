(function () {

  angular
    .module('eventApp')
    .directive('sidebar', sideBar);

  function sideBar () {
    return {
      restrict: 'EA',
      templateUrl: '/common/directives/sideBar/sideBar.template.html'
    };
  }
})();