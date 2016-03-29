(function() {
  'use strict';

  angular
    .module('app')
    .run(['$log', '$route', runBlock]);

  /** @ngInject */
  function runBlock($log) {
    $log.debug('runBlock end');
  }

})();
