(function() {
  'use strict';

  angular
    .module('app')
    .directive('searchBox', searchBox);

  /** @ngInject */
  function searchBox() {
    return {
      templateUrl: 'app/components/search/search-form.html',
      controller: searchBoxCtrlFn
    };
  }

  function searchBoxCtrlFn($scope) {
    $scope.search = function(searchStr) {
      $scope.$emit('search', searchStr);
    };
  }
})();
