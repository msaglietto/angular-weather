(function() {
  'use strict';

  angular
    .module('app')
    .controller('SearchController', SearchController);

  /** @ngInject */
  function SearchController($scope, weatherSvc, $log) {
    $scope.cities = null;

    $scope.$on('search', lookForCities);

    function lookForCities(evt, data) {
      weatherSvc.find(data)
        .then(
          function(response) {
            $scope.cities = response.list;
          },
          function(err) {
            $log('error finding cities: ', err);
          }
        );
    }
  }
})();
