(function () {

  angular.module('eventApp', ['ngRoute', 'ngSanitize', 'ui.bootstrap']);

  function config ($routeProvider, $locationProvider) {
    
    console.log("TEST");
    
    $routeProvider
      .when('/', {
        templateUrl: '/city/city.view.html',
        controller: 'cityCtrl',
        controllerAs: 'vm'
      })
      .when('/directions/', {
        templateUrl: '/directions/directions.view.html',
        controller: 'directionsCtrl',
        controllerAs: 'vm'
      })
      .when('/details/', {
        templateUrl: '/details/details.view.html',
        controller: 'detailsCtrl',
        controllerAs: 'vm'
      })
      .when('/city/', {
        templateUrl: '/city/city.view.html',
        controller: 'cityCtrl',
        controllerAs: 'vm'
      })
      .when('/weather/', {
        templateUrl: '/weather/weather.view.html',
        controller: 'weatherCtrl',
        controllerAs: 'vm'
      })      
      .otherwise({redirectTo: '/'});

    // use the HTML5 History API
    $locationProvider.html5Mode(
      {
        enabled: true,
        requireBase: false,
        rewriteLinks: true
      }
    );
  }

  angular
    .module('eventApp')
    .config(['$routeProvider', '$locationProvider', config]);

})();