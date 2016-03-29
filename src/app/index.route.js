(function() {
  'use strict';

  angular
    .module('app')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      /*.when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })*/
      .when('/search', {
        templateUrl: 'app/search/search.html',
        controller: 'SearchController',
        controllerAs: 'search'
      })
      .when('/weather/:id', {
        templateUrl: 'app/weather/weather.html',
        controller: 'WeatherController',
        controllerAs: 'weather'
      })
      .when('/forecast/:id', {
        templateUrl: 'app/forecast/forecast.html',
        controller: 'ForecastController',
        controllerAs: 'forecast'
      })
      .otherwise({
        redirectTo: '/search'
      });
  }

})();
