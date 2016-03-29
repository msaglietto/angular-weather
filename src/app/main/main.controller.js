(function() {
  'use strict';

  angular
    .module('app')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, weatherSvc) {
    $scope.getWeatherImgUrl = weatherSvc.getWeatherImgUrl;
    $scope.getCountryFlagImgUrl = weatherSvc.getCountryFlagImgUrl;
    $scope.getTime = weatherSvc.getTime;
  }
})();
