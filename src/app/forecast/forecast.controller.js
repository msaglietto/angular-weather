(function() {
  'use strict';

  angular.module("app")
    .controller("ForecastController", ForecastController);

  /** @ngInject */
  function ForecastController($routeParams, weatherSvc, $log) {
    var vm = this;

    vm.current = null;

    if (angular.isDefined($routeParams.id)) {
      getForecast($routeParams.id);
    }

    function getForecast(id) {
      weatherSvc.getForecast(id)
        .then(
          function(response) {
            vm.current = response;
          },
          function(err) {
            $log("Error loading forecast data: ", err);
          }
        );
    }
  }
})();
