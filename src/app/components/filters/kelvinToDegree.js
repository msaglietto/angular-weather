(function() {
  'use strict';

  angular
    .module('app')
    .filter('kelvinToDegree', kelvinToDegree);

  /** @ngInject */
  function kelvinToDegree() {
    return function(input, decimals){
      return (+input - 273.15).toFixed(decimals | 0);
    };
  }
})();
