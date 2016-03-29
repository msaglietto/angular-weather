(function() {
  'use strict';

  describe('controllers', function() {
    var vm,
      scope;

    beforeEach(module('app'));
    beforeEach(inject(function(_$controller_, _$rootScope_) {
      scope = $rootScope.$new();
      vm = _$controller_('MainController');
    }));

    it('should expose some utility methods', function() {
      expect(vm.creationDate).to.be.equal(jasmine.any(Number));
    });
  });
})();
