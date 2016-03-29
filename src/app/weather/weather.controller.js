(function() {
  'use strict';

  angular.module("app")
    .controller("WeatherController", WeatherController);

  /** @ngInject */
  function WeatherController($routeParams, weatherSvc, $log) {
    var vm = this;

    vm.current = null;

    if (angular.isDefined($routeParams.id)) {
      getCurrent($routeParams.id);
    }

    function getCurrent(id) {
      weatherSvc.getCurrent(id)
        .then(
          function(response) {
            vm.current = response;
          },
          function(err) {
            $log("Error loading current weather data: ", err);
          }
        );
    }

  }
})();
